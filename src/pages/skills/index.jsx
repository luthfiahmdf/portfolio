import { AiOutlineHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { Helmet } from "react-helmet";

export const Skills = () => {
  const skill = [
    {
      name: "Html",
      icon: (
        <AiOutlineHtml5 className="text-orange-600 duration-300 ease-in-out" />
      ),
    },
    {
      name: "Css",
      icon: <BiLogoCss3 className="text-blue-400 duration-300 ease-in-out" />,
    },
    {
      name: "Javascript",
      icon: (
        <BiLogoJavascript className="text-yellow-400 duration-300 ease-in-out" />
      ),
    },
    {
      name: "React",
      icon: <BiLogoReact className="text-[#64CCC5] duration-300 ease-in-out" />,
    },
    {
      name: "TypeScript",
      icon: (
        <BiLogoTypescript className="text-[#3178C6] duration-300 ease-in-out" />
      ),
    },
    {
      name: "TailwindCSS",
      icon: <BiLogoTailwindCss className="text-blue-400 ease-in-out" />,
    },
  ];
  return (
    <>
      <Helmet>
        <title>Skills</title>
        <meta name="description" content="Skills Page" />
      </Helmet>
      <div className="w-full flex min-h-screen justify-center items-center bg-zinc-900">
        <div className="text-xl md:text-2xl my-[15vh] md:mb-0 gap-6 flex-wrap font-semibold items-center justify-center font-mono gap-y-5 flex   md:mt-[6vh] w-[80vw] md:w-[70%] lg:w-[50vw] dark:text-slate-200">
          {skill?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col  gap-x-5 items-center border-2 w-[70vw] md:w-[30%] lg:w-[40%] p-2 rounded-md  duration-300 ease-in-out"
            >
              <p className="text-[12rem] lg:text-[5rem] xl:text-[10rem] md:text-[7rem]">
                {item.icon}
              </p>
              <p className="text-[1rem] text-slate-50">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
