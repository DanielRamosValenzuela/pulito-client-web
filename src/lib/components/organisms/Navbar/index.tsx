import Link from 'next/link';
import { navbarLinks } from '@/app/shared/constants/navigation/navbarLinks';
import { userLinks } from '@/app/shared/constants/navigation/userLinks';

const Navbar = () => {
  return (
    <nav className='hidden md:block fixed w-full h-24 shadow-xl bg-navyBlue'>
      <section className='flex justify-between items-center h-full w-full px-12 2x1:px-16'>
        <div>
          <Link className='pl-10' href='/'>
            <span className='text-white text-xl hover:border-b'>PULITO</span>
          </Link>
        </div>
        <div>
          <ul className='flex gap-10'>
            {navbarLinks.map((item) => (
              <Link
                href={item.link}
                key={item.name}
                className='text-white hover:text-gray-300'
              >
                <li className='hover:border-b'>
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <ul className='flex gap-10'>
            {userLinks.map((item) => (
              <Link
                href={item.link}
                key={item.name}
                className='text-white hover:text-gray-300'
              >
                <li className='hover:border-b'>
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
