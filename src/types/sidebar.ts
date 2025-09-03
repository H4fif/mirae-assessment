export type SidebarStateType = 'expanded' | 'collapsed';

export type SidebarContextProps = {
  state: SidebarStateType;
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};
