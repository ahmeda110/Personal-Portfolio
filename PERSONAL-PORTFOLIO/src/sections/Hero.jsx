import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/HeroModels/HeroExperience";

function Hero() {
  return (
    <section id="hero" className='relatice overflow-hidden'>
        <div className='absolute top-0 left-0 z-10'>
            <img src="/images/bg.png" alt="background" />
        </div>
        <div className='hero-layout'>
            {/* left side of hero */}
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                <div className='flex flex-col gap-7'>
                    <div className='hero-text'>
                        <h1 className=" hero-text-main font-black text-purple-300">Hi, I'm <span className="text-purple-600">Ahmed!</span></h1>
                        <h1 >Shaping
                            <span className="slide">
                                <span className="wrapper">
                                    {words.map((word) => (
                                        <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                            <img src={word.imgPath} alt={word.text} className="xl:size-10 md:size-8 size-5 md:p-2 p-1 rounded-full bg-white"/>
                                            <span className="">{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h1>Into Real Results</h1>
                    </div>
                    <p className="text-gray-400 md:text-xl relative z-10 pointer-events-none">
                        Passionate About Creating Impactful Change Through Software :)
                    </p>
                    <Button
                        className="md:w-80 md:h-16 w-60 h-12"
                        text="View My Resume"
                        onClick={() => {
                            const link = document.createElement("a");
                            link.href = "/AhmedA_Resume.pdf";
                            link.download = "Ahmed_Abbas_Resume.pdf";
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
                    />

                </div>
            </header>

            {/* right side of hero */}
            <figure>
                <div className="hero-3d-layout">
                    <HeroExperience />
                </div>
            </figure>
        </div>
    </section>
  )
}

export default Hero
