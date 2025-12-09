/* eslint-disable @typescript-eslint/no-explicit-any */
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '@/constants';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type WindowKey = keyof typeof WINDOW_CONFIG;

interface WindowState {
  windows: typeof WINDOW_CONFIG;
  nextZIndex: number;
  openWindow: (windowKey: WindowKey, data?: any) => void;
  closeWindow: (windowKey: WindowKey) => void;
  focusWindow: (windowKey: WindowKey) => void;
}

export const useWindowStore = create<WindowState>()(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey: WindowKey, data = null) =>
      set((state: WindowState) => {
        const win = state.windows[windowKey];
        if (!win) return;

        // 이미 열려있는 창이면 focus만 수행
        if (win.isOpen) {
          win.zIndex = state.nextZIndex++;
          if (data !== null) {
            win.data = data;
          }
          return;
        }

        // 새로 여는 창
        win.isOpen = true;
        win.zIndex = state.nextZIndex++;
        win.data = data ?? win.data;
      }),

    closeWindow: (windowKey: WindowKey) =>
      set((state: WindowState) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),

    focusWindow: (windowKey: WindowKey) =>
      set((state: WindowState) => {
        const win = state.windows[windowKey];
        win.zIndex = state.nextZIndex++;
      }),
  })) as never
);
