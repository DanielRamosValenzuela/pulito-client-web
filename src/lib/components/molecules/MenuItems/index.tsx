import { navbarLinks } from "@/app/shared/constants/navigation/navbarLinks"
import Link from "next/link"

const MenuItems = () => {
  return (
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
  )
}

export default MenuItems