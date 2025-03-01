import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png"
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

interface Props {
  selectedPage: SelectedPage,
  setSelectedPage: (value: SelectedPage) => void
  isTopOfPage: boolean
}

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {

  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false)

  const [pages] = useState<string[]>(["Home", "Benefits", "Our Classes", "Contact Us"])

  const flexBetween = "flex items-center justify-between"
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)")

  const navbarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow'

  return (
    <nav className="">

      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>

        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/*Left*/}
            <img alt="logo" src={Logo} />

            {/*Right*/}
            {
              isAboveMediumScreen ?
                <div className={`${flexBetween} w-full `}>

                  {/*inner-left*/}
                  <div className={`${flexBetween} gap-8 text-sm`}>
                    {
                      pages.length > 0 &&
                      pages.map((pagex) => {
                        return <Link page={pagex} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                      })

                    }
                  </div>
                  {/*inner-right*/}
                  <div className={`${flexBetween} gap-8 text-sm`}>
                    <p>Sign In </p>
                    <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                  </div>
                </div> : <button className="rounded-full bg-secondary-500 p-2" onClick={() => setIsMenuToggle(!isMenuToggle)}>
                  <Bars3Icon className="h-6 w-6 text-white" />
                </button>
            }

          </div>
        </div>
      </div>
      {/*Mobile Menu*/}

      {
        !isAboveMediumScreen && isMenuToggle &&

        <div className="fixed right-0 align-bottom z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/*Close Icon*/}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggle(!isMenuToggle)}>
              <XMarkIcon className="h-6 w-6 cursor-pointer text-gray-100" />

            </button>
          </div>

          {/*Menu Items*/}

          <div className={`ml-[33%] flex flex-col gap-10 text-xl`}>
            {
              pages.length > 0 &&
              pages.map((pagex) => {
                return <Link page={pagex} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              })

            }
          </div>
        </div>
      }
    </nav>
  );
};

export default Navbar;
