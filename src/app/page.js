
import DrawerAppBar from "./components/headerMain";
import Footer from "./components/footer";
import style from "./mainPage.module.css"
import { CardHero } from "./components/mainCard";
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
          <img
            className={style.mainImage}
            src="/assets/Illustration1.png"
            alt="Creative Logo"
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
         <CardHero />
        <Footer />
      </div>
    </>
  );
}
