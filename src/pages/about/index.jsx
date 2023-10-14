import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import { Navbar } from "../../components/organism/navbar";

export const About = () => {
  AOS.init();

  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="About Page" />
      </Helmet>
      <Navbar />
      <div className="flex flex-col  gap-x-5 items-center justify-center w-full min-h-screen bg-zinc-900 ">
        <div
          data-aos="fade-down"
          className="text-xl text-slate-50 my-[10vh] font-mono md:text-2xl 2xl:w-[50%] md:w-[80%] w-[80%] font-semibold"
        >
          <p>
            Hi! My name is Luthfi Ahmad Fauzi. Currently, I am a student at
            Universitas Islam Nusantara
          </p>
          <p>
            I&apos;m very intrested in web development, and have 1 year
            experience in HTML, CSS and Javascript. Recently, i also jump into
            TailwindCSS and ReactJS and still learning about those two in about
            6 months
          </p>
        </div>
      </div>
    </>
  );
};
