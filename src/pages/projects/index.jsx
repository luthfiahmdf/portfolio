import { Helmet } from "react-helmet";
import { Navbar } from "../../components/organism/navbar";
import { BsGithub } from "react-icons/bs";
import { BiGlobe } from "react-icons/bi";

export const Projects = () => {
  const projectsList = [
    {
      projectName: "E-Terbangin (Discontinue)",
      projectLink: "https://luthfiahmdf.vercel.app/",
      image: "/porto.png",
      github: "https://github.com/BinarFEBE6/front-end/tree/main/binar-befe6",
    },
    {
      projectName: "MovieKu",
      projectLink: "https://movie-ku-react-redux.vercel.app/",
      image: "/porto2.png",
      github: "https://github.com/luthfiahmdf/MovieKu-ReactRedux",
    },
    {
      projectName: "POS Kopi Lentera (Discontinue)",
      // projectLink: "https://luthfiahmdf.vercel.app/",
      github: "https://github.com/luthfiahmdf/POSLentera-FE",
      image: "/porto3.png",
    },
    {
      projectName: "Uninus SuperApps (Discontinue)",
      // projectLink: "https://luthfiahmdf.vercel.app/",
      github: "https://github.com/uninus-opensource/uninus-superapp",
      image: "/porto4.png",
    },
    {
      projectName: "Pathatu (On Going)",
      isDisable: true,
      // projectLink: "https://luthfiahmdf.vercel.app/",
      image: "/porto5.png",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Luthfiahmdf</title>
        <meta name="description" content="Home Page" />
      </Helmet>
      <Navbar />;
      <div className="pt-16 w-full flex flex-col min-h-screen justify-center gap-4 items-center bg-zinc-900 lg:px-44 p-5">
        <h1 className="text-2xl text-slate-50 font-mono place-self-start">
          Latest Project
        </h1>
        <div className="lg:grid lg:grid-cols-2 flex flex-col gap-4">
          {projectsList.map((project, index) => {
            return (
              <div
                // onClick={() => {navigate("/Detail/" + data[3].id); window.scroll(0, 0);}}
                className=" border-2 border-slate-50 p-3  group w-full inline-block cursor-pointer relative  overflow-hidden"
                key={index}
              >
                <img
                  src={project.image}
                  alt="Korea"
                  className="object-cover w-full lg:h-full h-60 rounded-lg"
                />
                <div className="absolute gap-3 inset-0 flex-col flex items-center justify-center translate-y-[100%] opacity-0 text-center duration-500 rounded-lg group-hover:translate-y-0 group-hover:opacity-100 group-hover:bg-zinc-700/75">
                  <h1 className="text-white text-2xl font-mono">
                    {project.projectName}
                  </h1>
                  <div className="flex-row">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-white text-5xl"
                    >
                      <BsGithub className="inline-block ml-2" />
                    </a>
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-white text-5xl"
                    >
                      <BiGlobe className="inline-block ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
