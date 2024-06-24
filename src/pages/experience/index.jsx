import { Navbar } from "../../components/organism/navbar";
import { Helmet } from "react-helmet";
import Aos from "aos";
import { useEffect } from "react";

export const Experience = () => {
  const exp = [
    {
      title: "MSIB Batch 3 Frontend Javascript",
      date: "31 December 2022",
      name: "Binar Academy",
      description: `This is my experience attending the "MSIB Batch 3 Frontend Javascript" course at Binar Academy on December 31, 2022. During this course, I deepened my knowledge in frontend development using JavaScript. I learned various cutting-edge concepts and techniques in web development that have proven to be invaluable in my career.`,
    },
    {
      title: "Getting Started Programming With Java",
      date: "23 October 2021",
      name: "Dicoding Academy",
      description: `My experience in taking the "Getting Started Programming With Java" course at Dicoding Academy on October 23, 2021 was incredibly valuable. During this course, I learned the fundamentals of programming with Java, including the language's structure and basic programming concepts. This marked my initial step in learning the Java programming language and has helped me build a strong foundation in software development.`,
    },
    {
      title: "React And React Native For Front End Developer ",
      date: "31 December 2023",
      name: "Hacktiv8",
      description: `This is my experience attending the "React and React Native for Front End Developer" course at Hacktiv8 on December 31, 2023. During this course, I deepened my knowledge in frontend development using React and React Native. I learned various cutting-edge concepts and techniques in web and mobile development that have proven to be invaluable in my career.`,
    },
  ];
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Helmet>
        <title>Experience</title>
        <meta name="description" content="Experience Page" />
      </Helmet>
      <Navbar />
      <div className="w-full flex min-h-screen justify-center items-center bg-zinc-900">
        <div className="flex w-[90%] my-[10vh] gap-y-6 md:w-[83%] xl:w-[60%] lg:w-[70%] gap-x-5 justify-center items-center flex-col ">
          {/* <img
            src={foto}
            loading="lazy"
            className="w-full rounded-md md:w-[60%] lg:w-[50%]"
            alt=""
            data-aos="fade-right"
          /> */}
          {exp.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col font-mono text-slate-50 2xl:gap-6 border-2 border-slate-50 p-3"
              data-aos="fade-left"
            >
              <p className="lg:text-xl text-sm font-bold xl:text-3xl font-mono">
                {item?.title}
                <span className="text-base"> at {item?.name}</span>
              </p>
              <p className="text-xs lg:text-sm xl:text-xl">{item?.date}</p>
              <p className="text-slate-50 text-sm font-mono md:text-justify 2xl:text-2xl lg:text-base xl:text-xl">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
