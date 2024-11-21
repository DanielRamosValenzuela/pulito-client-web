import Link from 'next/link';

const Logo = () => {
  return (
    <div>
      <Link className='pl-10' href='/'>
        <span className='text-black text-xl hover:border-b'>PULITO</span>
      </Link>
    </div>
  );
};

export default Logo;
