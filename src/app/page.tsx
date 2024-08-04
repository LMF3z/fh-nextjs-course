import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/dashboard/main');

  return (
    <main className=''>
      <h1>Hola mundo</h1>
    </main>
  );
}
