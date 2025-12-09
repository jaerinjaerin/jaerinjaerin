import { LOCATIONS } from '@/constants';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

// 최상위 Location 타입 (work, about, resume)
type RootLocation = (typeof LOCATIONS)[keyof typeof LOCATIONS];
// 프로젝트 폴더 타입 (children 있는 폴더만)
type ProjectFolder = Extract<RootLocation['children'][number], { children: unknown[] }>;
// Location은 children이 있는 폴더만 될 수 있음
export type Location = RootLocation | ProjectFolder;
// children 내부의 파일/폴더 아이템 타입
export type LocationItem = RootLocation['children'][number] | ProjectFolder['children'][number];

const DEFAULT_LOCATION: Location = LOCATIONS.work;

interface LocationState {
  activeLocation: Location;
  setActiveLocation: (location: Location) => void;
  restoreActiveLocation: () => void;
}

const useLocationStore = create<LocationState>()(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location: Location) =>
      set((state: LocationState) => {
        state.activeLocation = location;
      }),

    restoreActiveLocation: () =>
      set((state: LocationState) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  })) as never
);

export default useLocationStore;
