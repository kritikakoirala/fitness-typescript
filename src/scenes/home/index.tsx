import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";


interface Props {
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {


  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)")
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10  md:pb-0">

      {/*Main header/image*/}

      <motion.div
        className="md:flex mx-auto w-5/6 items-center justify-center "
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/*Main header*/}
        <div className="z-10 pt-40 md:pt-56 md:basis-3/5">
          {/*headings*/}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext ">
                <img src={HomePageText} alt="Home Page Text" />
              </div>
            </div>

            <p className="mt-8 text-sm md:text-start">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          {/*actions*/}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }} >
            <ActionButton setSelectedPage={setSelectedPage}>Join Now </ActionButton>

            <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p> Learn Now</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/*image  */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img alt="Home Page Graphic" src={HomePageGraphic} />
        </div>
      </motion.div>

      {/*sponsors*/}

      {
        isAboveMediumScreen &&
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6 text-center">
            <div className="flex w-3/5 items-center justify-between gap-8">

              <img alt="Red Bull SPonsor" src={SponsorRedBull} />
              <img alt="SponsorFortune" src={SponsorFortune} />
              <img alt="SponsorForbes" src={SponsorForbes} />

            </div>
          </div>
        </div>
      }
    </section >
  );
};

export default Home;
