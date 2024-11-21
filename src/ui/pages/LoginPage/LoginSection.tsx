import Link from 'next/link';
import { LOGIN_SECTION } from '@/shared/language/es';
import InputWithIcon from '@/lib/components/atoms/InputWithIcon';
import { MdLockOutline } from 'react-icons/md';
import { FaRegEnvelope } from 'react-icons/fa';
import { AppleIcon, FacebookIcon, GoogleIcon } from '@/lib/icons/SocialMediaI';
import Logo from '@/lib/components/atoms/Logo';
import CheckBox from '@/lib/components/atoms/Checkbox';

const LoginSection = () => {
  return (
    <section className='w-full md:w-3/5 p-5'>
    <div className='text-left'>
      <Logo />
    </div>
    <div className='py-10'>
      <h2 className='text-3xl font-bold text-navyBlue-400 mb-2'>
        {LOGIN_SECTION.create_account}
      </h2>
      <hr className='border-2 w-10 border-navyBlue-400 inline-block mb-2' />
      <div className='flex flex-col items-center md:flex-row justify-center my-2 gap-5'>
        <Link href=''>
          <GoogleIcon />
        </Link>
        <Link href=''>
          <FacebookIcon />
        </Link>
        <Link href=''>
          <AppleIcon />
        </Link>
      </div>
      <p className='text-gray-400 my-2'>{LOGIN_SECTION.use_email}</p>
      <div className='flex flex-col items-center gap-3'>
        <InputWithIcon
          icon={<FaRegEnvelope />}
          type='email'
          name='email'
          containerClassName='w-64'
          placeholder={LOGIN_SECTION.email_placeholder}
        />
        <InputWithIcon
          icon={<MdLockOutline />}
          type='password'
          name='password'
          containerClassName='w-64'
          placeholder={LOGIN_SECTION.password_placeholder}
        />
        <div className='flex justify-between items-center w-64 mb-5'>
          <CheckBox text='Recuérdame' name='remember' />
          <Link href='#' className='text-xs'>
            {LOGIN_SECTION.forgot_password}
          </Link>
        </div>
      </div>
      <Link
        href='#'
        className='border-2 border-navyBlue-400 text-navyBlue-400 rounded-full px-12 py-2 inline-block font-semibold hover:bg-navyBlue-400 hover:text-white'
      >
        {LOGIN_SECTION.sing_in}
      </Link>
    </div>
  </section>
  );
};

export default LoginSection;
