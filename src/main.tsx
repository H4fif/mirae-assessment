import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router/dom';
import router from './router/routes.ts';
import ReactQueryProvider from './providers/react-query.provider.tsx';
import { Toaster } from './components/ui/sonner.tsx';
import Loader from './components/loader.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <ReactQueryProvider>
        <RouterProvider router={router} />
        <Toaster />
      </ReactQueryProvider>
    </Suspense>
  </StrictMode>
);
