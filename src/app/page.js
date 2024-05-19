
import DrawerAppBar from "./components/headerMain";
import Footer from "./components/footer";
import style from "./mainPage.module.css"
import { CardHero } from "./components/mainCard";
import { CardSlider } from "./components/sliderCard";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="containerHome">
        <DrawerAppBar />
        <div className={style.mainSection}>
          <div className={style.mainHeading}>
            Want anything to be easy<br /> with <b>CreativeWorks</b>
            <div className={style.secondHeading}>
              Provide a network for all your needs with ease and fun using CreativeWorks <br />
              discover interesting features from us.
            </div>
          </div>
          <Image
            className={style.mainImage}
            src="/assets/Illustration1.png"
            alt="Creative Logo"
            width={20}
            height={20}
          />
        </div>
        <div className={style.centreTextMain}>
          <div className={style.centreText}>
            <b> Choose Your Plan</b>
          </div>
          <div className={style.centreText2}>
            Let's choose the package that is best for you and explore it happily and <br />cheerfully.
          </div>
        </div> 
        <div className={style.verticalCard}>
         <CardHero />
         </div>
         <div className={style.centreTextMain}>
          <div className={style.centreText}>
            <b> Trusted by Thousands of<br/> Happy Customer</b>
          </div>
          <div className={style.centreText2}>
          These are the stories of our customers who have joined us with great pleasure when using this crazy feature.          </div>
        </div> 
        <div>
          <CardSlider />
        </div>
        <Footer />
      </div>
    </>
  );
}
