import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { Helmet } from 'react-helmet';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import useLogin from './use-login.hooks';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/shadcn-io/spinner';

const LoginPage = () => {
  const { form, isLoggingIn, showPassword, onSubmit, togglePassword } =
    useLogin();

  return (
    <>
      <Helmet title="Login | Mirae Assesment" />

      <div className="h-screen w-screen grid place-items-center p-6">
        <Card className="w-full md:w-1/2 2xl: xl:w-1/3">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>

            <CardDescription>
              Enter your username below to login to your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off">
                <div className="flex flex-col gap-6">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>

                        <FormControl>
                          <Input
                            placeholder="your_username_here"
                            {...field}
                            disabled={isLoggingIn}
                          />
                        </FormControl>

                        <FormDescription>Test username: emilys</FormDescription>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>

                        <div className="relative">
                          <FormControl>
                            <Input
                              type={showPassword ? 'text' : 'password'}
                              {...field}
                              disabled={isLoggingIn}
                            />
                          </FormControl>

                          <style>
                            {`
                              .hide-password-toggle::-ms-reveal,
                              .hide-password-toggle::-ms-clear {
                                visibility: hidden;
                                pointer-events: none;
                                display: none;
                              }
                            `}
                          </style>

                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full hover:bg-transparent cursor-pointer"
                            onClick={togglePassword}
                          >
                            {showPassword ? (
                              <EyeIcon className="h-4 w-4" aria-hidden="true" />
                            ) : (
                              <EyeOffIcon
                                className="h-4 w-4"
                                aria-hidden="true"
                              />
                            )}

                            <span className="sr-only">
                              {showPassword ? 'Hide password' : 'Show password'}
                            </span>
                          </Button>
                        </div>

                        <FormDescription>Test Pass: emilyspass</FormDescription>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex flex-col gap-3">
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isLoggingIn}
                    >
                      {isLoggingIn ? <Spinner /> : 'Login'}
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default LoginPage;
