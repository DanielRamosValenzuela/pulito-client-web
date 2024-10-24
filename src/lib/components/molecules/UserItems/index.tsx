
import { userLinks } from '@/shared/constants/navigation/userLinks';
import Link from 'next/link';

const UserItems = () => {
  return (
      <ul className='flex gap-10'>
        {userLinks.map((item) => (
          <Link
            href={item.link}
            key={item.name}
            className='text-white hover:text-gray-300'
          >
            <li className='hover:border-b'>{item.name}</li>
          </Link>
        ))}
      </ul>
  );
};

export default UserItems;
