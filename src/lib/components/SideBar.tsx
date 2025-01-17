import Image from 'next/image';
import {
  IoCalculator,
  IoFootball,
  IoHomeOutline,
  IoLogoReact,
} from 'react-icons/io5';
import { SidebarMenuItem } from './SidebarMenuItem';

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoHomeOutline size={40} />,
    title: 'Dashboard',
    subtitle: 'Visualizacion',
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={40} />,
    title: 'Counter',
    subtitle: 'Contador client side',
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoFootball size={40} />,
    title: 'Pokemons',
    subtitle: 'Generacion estatica',
  },
];

export const SideBar = () => {
  return (
    <div
      id='menu'
      style={{ width: '400px' }}
      className='bg-gray-900 z-10 text-slate-300 w-64 left-0 h-screen'
    >
      <div id='logo' className='my-4 px-6'>
        <h1 className='flex items-center gap-2 text-lg md:text-2xl font-bold text-white'>
          <IoLogoReact />
          <span>Dash</span>
          <span className='text-blue-500'>8</span>.
        </h1>
        <p className='text-slate-500 text-sm'>
          Manage your actions and activities
        </p>
      </div>
      <div id='profile' className='px-6 py-10'>
        <p className='text-slate-500'>Welcome back,</p>
        <a href='#' className='inline-flex space-x-2 items-center'>
          <span>
            <Image
              src='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80'
              width={500}
              height={500}
              alt='Picture of the author'
              className='rounded-full w-8 h-8'
            />
          </span>
          <span className='text-sm md:text-base font-bold'>Lmf3z</span>
        </a>
      </div>

      <div id='nav' className='w-full px-6'>
        {menuItems.map((route) => (
          <SidebarMenuItem key={route.path} {...route} />
        ))}
      </div>
    </div>
  );
};
