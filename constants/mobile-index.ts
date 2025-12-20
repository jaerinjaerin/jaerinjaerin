export const MOBILE_DOCK_APPS = [
  { id: 'safari', name: 'Articles', icon: 'mobile-safari.png', canOpen: true },
  { id: 'finder', name: 'Projects', icon: 'mobile-finder.png', canOpen: true },
  { id: 'photos', name: 'Photos', icon: 'mobile-photos.png', canOpen: true },
  { id: 'contact', name: 'Contact', icon: 'mobile-contact.png', canOpen: true },
] as const;

export const INITIAL_Z_INDEX = 1000;
export const MOBILE_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  folder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};
