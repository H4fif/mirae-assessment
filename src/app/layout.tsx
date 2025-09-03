import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

import { useAuthStore } from '@/stores/auth.store';
import { useNavigate } from 'react-router';
import { Suspense, useEffect, type FC, type PropsWithChildren } from 'react';
import Loader from '@/components/loader';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const { auth } = useAuthStore();

  useEffect(() => {
    if (!auth?.accessToken) {
      navigate('/login');
    }
  }, [auth?.accessToken, navigate]);

  if (!auth?.accessToken) {
    return <Loader />;
  }

  return (
    <>
      <SidebarProvider
        style={
          {
            '--sidebar-width': 'calc(var(--spacing) * 72)',
            '--header-height': 'calc(var(--spacing) * 12)',
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" />

        <SidebarInset>
          <SiteHeader />

          <Suspense fallback={<Loader />}>{children}</Suspense>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default Layout;
