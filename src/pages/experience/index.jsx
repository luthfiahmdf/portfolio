import foto from "../../assets/sertif.jpg";
import { Navbar } from "../../components/organism/navbar";
import { Helmet } from "react-helmet";
import Aos from "aos";

export const Experience = () => {
  Aos.init();
  return (
    <>
      <Helmet>
        <title>Experience</title>
        <meta name="description" content="Experience Page" />
      </Helmet>
      <Navbar />
      <div className="w-full flex min-h-screen justify-center items-center bg-zinc-900">
        <div className="flex w-[90%] my-[10vh] gap-y-6 md:w-[83%] xl:w-[60%] lg:w-[70%] gap-x-5 justify-center items-center flex-col md:flex-row">
          <img
            src={foto}
            loading="lazy"
            className="w-full rounded-md md:w-[60%] lg:w-[50%]"
            alt=""
            data-aos="fade-right"
          />
          <div
            className="flex flex-col font-mono text-slate-50 2xl:gap-6"
            data-aos="fade-left"
          >
            <p className="lg:text-xl text-sm font-bold xl:text-3xl font-mono">
              MSIB Batch 3 Frontend Javascript{" "}
              <span className="text-base">Binar Academy</span>
            </p>
            <p className="text-xs lg:text-sm xl:text-xl">
              1 August 2022 - 31 December 2022
            </p>
            <p className="text-slate-50 text-sm font-mono md:text-justify 2xl:text-2xl lg:text-base xl:text-xl">
              I&apos;ve successfully completed the Frontend JavaScript Bootcamp
              at Binar Academy, hosted by Kampus Merdeka. It has broadened my
              horizons in web development and deepened my understanding of
              JavaScript, the foundation of modern web app development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
