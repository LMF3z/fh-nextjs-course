import { ReactNode } from 'react';
import { SideBar } from '@/lib/components/SideBar';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='bg-slate-100 overflow-y-hidden w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white'>
      <div className='flex'>
        <SideBar />
        <div className='w-full text-slate-900 max-h-screen overflow-y-auto'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
