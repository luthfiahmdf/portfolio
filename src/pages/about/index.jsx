import { BsGithub } from "react-icons/bs";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ContentLayout } from "../../layouts";
import { Navbar } from "../../components/organism/navbar";

export const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <ContentLayout hMobile={`md:h-screen`}>
        <div
          className="text-xl md:text-2xl  font-semibold font-mono gap-y-5 flex flex-col mt-[18vh] md:mt-[6vh] w-[80vw] md:w-[70%] lg:w-[50vw] dark:text-slate-200"
          data-aos="fade-down"
          data-aos-once="true"
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
          <p className="mt-4">
            Here are my projects on Github that i worked for in this past 6
            months of learning TailwindCSS and ReactJS
          </p>
        </div>
      </ContentLayout>
    </>
  );
};
