import Logo from '@/lib/components/atoms/Logo';
import MenuItems from '@/lib/components/molecules/MenuItems';
import UserItems from '@/lib/components/molecules/UserItems';


const Navbar = () => {
  return (
    <nav className='hidden md:block w-full h-24 shadow-xl bg-navyBlue'>
      <section className='flex justify-between items-center h-full w-full px-12 2x1:px-16'>
        <Logo/>
        <MenuItems/>
        <UserItems/>
      </section>
    </nav>
  );
};

export default Navbar;
