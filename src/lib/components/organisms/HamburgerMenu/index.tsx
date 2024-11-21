'use client';

import HamburgerIcon from '@/lib/icons/Regular/HamburgerIcon';
import CloseIcon from '@/lib/icons/Regular/CloseIcon';
import useHamburgerMenu from './useHamburgerMenu';
import Logo from '../../atoms/Logo';
import MenuItems from '../../molecules/MenuItems';
import UserItems from '../../molecules/UserItems';

const HamburgerMenu = () => {
  const { toggleNavbar, isOpenMenu } = useHamburgerMenu();

  return (
    <aside className='md:hidden w-full h-24 shadow-xl justify-between bg-navyBlue'>
      <section className='flex items-center justify-between p-5'>
      <Logo />
        <button
          className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset'
          onClick={toggleNavbar}
        >
          {isOpenMenu ? <CloseIcon /> : <HamburgerIcon />}
        </button>


      </section>
      {
        isOpenMenu && (
          <section className='flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-navyBlue gap-8'>
            <MenuItems />
            <UserItems />
          </section>
        )
      }
    </aside>
  );
};

export default HamburgerMenu;
