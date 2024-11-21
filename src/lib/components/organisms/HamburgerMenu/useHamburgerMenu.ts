import { useState } from "react"

const useHamburgerMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleNavbar = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  return {
    toggleNavbar,
    isOpenMenu
  }
}

export default useHamburgerMenu