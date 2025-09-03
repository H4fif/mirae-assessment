import type { SidebarContextProps } from '@/types/sidebar';
import { createContext, useContext } from 'react';

export const SidebarContext = createContext<SidebarContextProps | null>(null);

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.');
  }

  return context;
}
