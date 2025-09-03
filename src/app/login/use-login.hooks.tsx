import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { LoginSchema, type LoginSchemaType } from './login.schema';
import { useNavigate } from 'react-router';
import { useAuthStore } from '@/stores/auth.store';
import { useMemo, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { loginService } from '@/services/auth';
import type { ILoginSuccess } from '@/types/auth.response';
import { toast, type ExternalToast } from 'sonner';

const useLogin = () => {
  const navigate = useNavigate();
  const form = useForm({ resolver: zodResolver(LoginSchema) });
  const { setAuth } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);

  const toastOptions: ExternalToast = useMemo(
    () => ({
      closeButton: true,
    }),
    []
  );

  const togglePassword = () => setShowPassword((prevState) => !prevState);

  const { isPending: isLoggingIn, mutateAsync: login } = useMutation({
    mutationFn: (payload: LoginSchemaType) => {
      return loginService(payload);
    },
    onSuccess: (payload) => {
      const data = payload?.data as ILoginSuccess;

      localStorage.setItem('access-token', data?.accessToken);
      localStorage.setItem('refresh-token', data?.refreshToken);
      setAuth(data);

      toast.success('Login success!', toastOptions);
      navigate('/');
    },
    onError: (error) => {
      console.log({ error });

      toast.error('Login failed!', toastOptions);
    },
  });

  const onSubmit = (data: LoginSchemaType) => {
    login(data);
  };

  return {
    form,
    isLoggingIn,
    showPassword,
    togglePassword,
    onSubmit,
  };
};

export default useLogin;
