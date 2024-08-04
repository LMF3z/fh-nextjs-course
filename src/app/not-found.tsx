import NextLink from 'next/link';
import { SideBar } from '@/lib/components';

const NotFoundPage = () => {
  return (
    <main className='bg-slate-100 overflow-y-hidden w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white'>
      <div className='flex'>
        <SideBar />
        <div className='w-full  text-slate-900 max-h-screen overflow-y-auto'>
          <div className='h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]'>
            <h1 className='text-9xl font-extrabold text-white tracking-widest'>
              404
            </h1>
            <div className='bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute'>
              Page Not Found
            </div>
            <button className='mt-5'>
              <div className='relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring'>
                <span className='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0'></span>

                <span className='relative block px-8 py-3 bg-[#1A2238] border border-current'>
                  <NextLink href='/'>Go Home</NextLink>
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
