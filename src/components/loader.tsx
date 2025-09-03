import { Spinner } from './ui/shadcn-io/spinner';

const Loader = () => {
  return (
    <div className="h-full w-full flex justify-center items-center bg-gray-300">
      <div className="text-2xl">
        <span className="sr-only">Redirecting you to login page...</span>
        <Spinner variant="ring" size={100} />
      </div>
    </div>
  );
};

export default Loader;
