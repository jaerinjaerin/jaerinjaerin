/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { INITIAL_Z_INDEX, MOBILE_CONFIG } from '@/constants/mobile-index';

export type MobileKey = keyof typeof MOBILE_CONFIG;

interface WindowHistoryItem {
  windowKey: MobileKey;
  data: any;
}

interface MobileState {
  mobileWindows: typeof MOBILE_CONFIG;
  nextZIndex: number;
  history: WindowHistoryItem[];
  openMobileWindow: (mobileWindowKey: MobileKey, data?: any) => void;
  closeMobileWindow: (mobileWindowKey: MobileKey) => void;
  goBack: () => void;
  closeAllWindows: () => void;
}

export const useMobileWindowStore = create<MobileState>()(
  immer((set) => ({
    mobileWindows: MOBILE_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,
    history: [],

    openMobileWindow: (mobileWindowKey: MobileKey, data = null) =>
      set((state: MobileState) => {
        const win = state.mobileWindows[mobileWindowKey];
        if (!win) return;

        // 히스토리에 추가
        state.history.push({ windowKey: mobileWindowKey, data });

        if (win.isOpen) {
          win.zIndex = state.nextZIndex++;
          win.data = data;
          return;
        }

        win.isOpen = true;
        win.zIndex = state.nextZIndex++;
        win.data = data;
      }),

    closeMobileWindow: (mobileWindowKey: MobileKey) =>
      set((state: MobileState) => {
        const win = state.mobileWindows[mobileWindowKey];
        if (!win) return;

        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
      }),

    goBack: () =>
      set((state: MobileState) => {
        if (state.history.length === 0) return;

        // 현재 윈도우 히스토리에서 제거
        const currentItem = state.history.pop();

        if (!currentItem) return;

        // 현재 윈도우 닫기
        const currentWin = state.mobileWindows[currentItem.windowKey];
        if (currentWin) {
          currentWin.isOpen = false;
          currentWin.zIndex = INITIAL_Z_INDEX;
        }

        // 이전 윈도우 가져오기
        const previousItem = state.history[state.history.length - 1];

        if (!previousItem) {
          // 히스토리가 비었으면 모든 윈도우 닫기
          Object.values(state.mobileWindows).forEach((win) => {
            win.isOpen = false;
            win.zIndex = INITIAL_Z_INDEX;
          });
          return;
        }

        // 이전 윈도우 활성화 (이미 열려있지만 zIndex 업데이트)
        const prevWin = state.mobileWindows[previousItem.windowKey];
        if (prevWin) {
          prevWin.isOpen = true;
          prevWin.zIndex = state.nextZIndex++;
          prevWin.data = previousItem.data;
        }
      }),

    closeAllWindows: () =>
      set((state: MobileState) => {
        state.history = [];
        Object.values(state.mobileWindows).forEach((win) => {
          win.isOpen = false;
          win.zIndex = INITIAL_Z_INDEX;
        });
      }),
  })) as never
);
