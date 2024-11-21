import Link from 'next/link';
import { WELCOME_SECTION } from '@/shared/language/es';

const WelcomeSection = () => {
  return (
    <section className='w-2/5 bg-navyBlue-400 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
      <h2 className='text-3xl font-bold mb-2'>{WELCOME_SECTION.welcome}</h2>
      <hr className='border-2 w-10 border-white inline-block mb-2' />
      <p className='mb-10'>{WELCOME_SECTION.join_us}</p>
      <Link
        href='#'
        className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-navyBlue-400'
      >
        {WELCOME_SECTION.sign_in}
      </Link>
    </section>
  );
};

export default WelcomeSection;
