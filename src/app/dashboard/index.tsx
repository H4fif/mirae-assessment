import { SectionCards } from '@/components/section-cards';
import data from '@/data/data.json';
import { Helmet } from 'react-helmet';
import { useAuthStore } from '@/stores/auth.store';
import { useNavigate } from 'react-router';
import { lazy } from 'react';
import Layout from '../layout';

const DataTable = lazy(() => import('@/components/data-table'));
const ChartBarInteractive = lazy(
  () => import('@/components/chart-bar-interactive')
);
const ChartBarStacked = lazy(() => import('@/components/chart-bar-stacked'));
const ChartLineLabel = lazy(() => import('@/components/chart-line-label'));

export default function DashboardPage() {
  const navigate = useNavigate();
  const { auth } = useAuthStore();

  if (!auth?.accessToken) {
    navigate('/login');
  }

  return (
    <>
      <Helmet title="Dashboard | Mirae Assesment" />

      <Layout>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 px-4 lg:px-6">
                <ChartBarInteractive />
                <ChartBarStacked />
                <ChartLineLabel
                  title="Client Asset AUM"
                  description={
                    <div className="flex justify-end items-center">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="rounded-full size-4 inline-block bg-[#F4720F]"></span>
                          Client Asset AUM
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="rounded-full size-4 inline-block bg-[#7CB6D3]"></span>
                          Exchange (MM)
                        </div>
                      </div>
                    </div>
                  }
                />

                <ChartLineLabel
                  title="Trading Value"
                  description={
                    <div className="flex justify-end items-center">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full size-4 inline-block bg-[#F4720F]"></span>
                        Domestic (SMM)
                      </div>
                    </div>
                  }
                />
              </div>

              <DataTable data={data} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
