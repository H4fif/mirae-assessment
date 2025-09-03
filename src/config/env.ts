import type { ENV_TYPE } from '@/types/env';

const ENV: ENV_TYPE = {
  API_URL: import.meta.env.VITE_API_URL,
};

export default ENV;
