"use client"
import { Card } from '@tremor/react';
import style from "./sliderCard.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
export function CardSlider() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <>
        <div className={style.sliderContainerMain}>
         
                {[1, 2, 3, 4,].map(index => (
                    <Card key={index} className="mx-auto max-w-xs">
                        <div className={style.sliderContainer}>
                            <Image src="/assets/picpage.png" alt="Profile" width={30} height={8}/>
                            <p className="text-slate-100">Viezh Robert</p>
                            <span>Warsaw, Poland</span>
                            <div>
                                <p className="text-slate-200">4.5</p>
                                <Image src="/assets/Vector.png" alt="Star Rating" width={10} height={8}/>
                            </div>
                        </div>
                        <div>
                            “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. CreativeWorks always the best.”
                        </div>
                    </Card>
                ))}
           
        </div>
        </>
    );
}