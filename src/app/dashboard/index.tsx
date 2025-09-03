import { AppSidebar } from '@/components/app-sidebar';
import { DataTable } from '@/components/data-table';
import { SectionCards } from '@/components/section-cards';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

import data from '@/data/data.json';
import { ChartBarInteractive } from '@/components/chart-bar-interactive';
import { ChartBarStacked } from '@/components/chart-bar-stacked';
import { ChartLineLabel } from '@/components/chart-line-label';
import { Helmet } from 'react-helmet';

export default function DashboardPage() {
  return (
    <>
      <Helmet title="Dashboard | Mirae Assesment" />

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

          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <SectionCards />

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 px-4 lg:px-6">
                  <ChartBarInteractive />
                  <ChartBarStacked />
                  <ChartLineLabel />
                  <ChartLineLabel />
                </div>

                <DataTable data={data} />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
