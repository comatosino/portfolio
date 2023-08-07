import NextLink from 'next/link';

import { Logo, Nav } from '@/components';
import { SpringBorder } from './SpringBorder';

export const Header: React.FC = () => {
  return (
    <>
      <header className='container flex items-center justify-between'>
        <NextLink href='/'>
          <Logo className='h-[10vh]' />
        </NextLink>
        <div className='flex items-center justify-center '>
          <Nav />
        </div>
      </header>
      <SpringBorder />
    </>
  );
};
