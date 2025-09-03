import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { FC, PropsWithChildren } from 'react';

const ReactQueryProvider: FC<PropsWithChildren> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
