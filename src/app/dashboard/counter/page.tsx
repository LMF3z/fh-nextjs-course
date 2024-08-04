import { ShoppingCounter } from '@/lib/components';

const CounterPage = () => {
  return (
    <main className='flex flex-col items-center justify-center w-full h-full'>
      <span>Productos en el carrito de compras</span>

      <ShoppingCounter />
    </main>
  );
};

export default CounterPage;
