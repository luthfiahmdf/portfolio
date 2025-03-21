import { Helmet } from "react-helmet";

import { Fragment } from "react";
import { Button } from "../../components/atom/button";

export const Awards = () => {
  const awards = [
    {
      title: "MSIB Batch 3 Frontend Javascript",
      date: "31 December 2022",
      name: "Binar Academy",
      link: "https://drive.google.com/file/d/1b7duktN3z-dafVLeyTGnR1wzRLyAEWXy/view?usp=drive_link",
      description: `I've successfully completed the Frontend JavaScript Bootcamp
        at Binar Academy, hosted by Kampus Merdeka. It has broadened my
        horizons in web development and deepened my understanding of
        JavaScript, the foundation of modern web app development.`,
    },
    {
      title: "Getting Started Programming With Java",
      date: "23 October 2021",
      name: "Dicoding Academy",
      link: "https://drive.google.com/file/d/1RQYLtWLs6ujQUhCtTWznNdVH0iGIA8Fl/view?usp=drive_link",
      description: `I've completed the "Getting Started Programming With Java" course at Dicoding Academy on October 23, 2021. During this course, I gained a strong grasp of the fundamentals of Java programming, including language structure and essential programming concepts. This course laid a solid foundation for my software development journey.`,
    },
    {
      title: "React And React Native For Front End Developer ",
      date: "31 December 2023",
      name: "Hacktiv8",
      link: "https://drive.google.com/file/d/12iJia6shsp9xF-GiP_hLaQA5S6PoYVeD/view?usp=sharing",
      description:
        "I've successfully completed the React and React Native for Front End Developer course at Hacktiv8, as part of MSIB Batch 5. This course has broadened my horizons in both web and mobile development, and deepened my understanding of React and React Native. Recognized as the best student in the batch, I have gained invaluable knowledge and skills that are essential for modern web and mobile app development.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Experience</title>
        <meta name="description" content="Experience Page" />
      </Helmet>
      <div className="w-full flex min-h-screen justify-center items-center bg-zinc-900">
        <div className="flex w-[90%] my-[10vh] gap-y-6 md:w-[83%] xl:w-[60%] lg:w-[70%] gap-x-5 justify-center items-center flex-col ">
          {awards.map((item, idx) => (
            <Fragment key={idx}>
              <div className="flex flex-col font-mono gap-y-3 text-slate-50 2xl:gap-6">
                <p className="lg:text-xl text-sm font-bold xl:text-3xl font-mono">
                  {item?.title} <span className="text-base">{item?.name}</span>
                </p>
                <p className="text-xs lg:text-sm xl:text-xl">{item?.date}</p>
                <p className="text-slate-50 text-sm font-mono md:text-justify 2xl:text-2xl lg:text-base xl:text-xl">
                  {item?.description}
                </p>
                <a href={`${item?.link}`} target="_blank" rel="noreferrer">
                  <Button className="border-2 border-slate-50">
                    Certificate
                  </Button>
                </a>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
