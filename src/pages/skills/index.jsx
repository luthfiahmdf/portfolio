import { AiOutlineHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { Navbar } from "../../components/organism/navbar";
import { ContentLayout } from "../../layouts";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Aos from "aos";

export const Skills = () => {
  const skill = [
    {
      name: "Html",
      icon: (
        <AiOutlineHtml5 className="hover:text-orange-600 duration-300 ease-in-out" />
      ),
    },
    {
      name: "Css",
      icon: (
        <BiLogoCss3 className="hover:text-blue-400 duration-300 ease-in-out" />
      ),
    },
    {
      name: "Javascript",
      icon: (
        <BiLogoJavascript className="hover:text-yellow-400 duration-300 ease-in-out" />
      ),
    },
    {
      name: "React",
      icon: (
        <BiLogoReact className="hover:text-[#64CCC5] duration-300 ease-in-out" />
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <BiLogoTypescript className="hover:text-[#3178C6] duration-300 ease-in-out" />
      ),
    },
    {
      name: "TailwindCSS",
      icon: <BiLogoTailwindCss className="hover:text-blue-400 ease-in-out" />,
    },
  ];
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Helmet>
        <title>Skills</title>
        <meta name="description" content="Skills Page" />
      </Helmet>
      <Navbar />
      <ContentLayout>
        <div className="text-xl md:text-2xl mb-[10vh] md:mb-0 gap-6 flex-wrap font-semibold items-center justify-center font-mono gap-y-5 flex  mt-[18vh] md:mt-[6vh] w-[80vw] md:w-[70%] lg:w-[50vw] dark:text-slate-200">
          {skill?.map((item, index) => (
            <div
              key={index}
              data-aos="fade-down"
              data-aos-once="true"
              className="flex flex-col  gap-x-5 items-center border-2 w-[70vw] md:w-[30%] lg:w-[40%] p-2 rounded-md  duration-300 ease-in-out"
            >
              <p
                data-aos="fade-down"
                className="text-[12rem] lg:text-[5rem] xl:text-[10rem] md:text-[7rem]"
              >
                {item.icon}
              </p>
              <p data-aos="fade-down">{item.name}</p>
            </div>
          ))}
        </div>
      </ContentLayout>
    </>
  );
};
