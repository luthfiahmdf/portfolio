import { Navbar } from "../../components/organism/navbar";
import AOS from "aos";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
export const Interest = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Helmet>
        <title>Luthfiahmdf</title>
        <meta name="description" content="Home Page" />
      </Helmet>
      <Navbar />

      <div className="flex flex-col  gap-x-5 items-center justify-center w-full min-h-screen bg-zinc-900">
        <div
          data-aos="fade-down"
          className="text-xl text-slate-50 font-mono  md:text-2xl 2xl:w-[50%] md:w-[80%] w-[80%] my-[10vh] font-semibold"
        >
          <p className="font-mono">
            I&apos;m very interested in learning Next.js 13 with Prisma as the
            Object-Relational Mapping (ORM) and Nest.js as the backend,
            particularly in the context of using a monorepo. This combination
            offers a powerful development potential. Next.js 13 introduces a
            range of new features and improvements that enhance the web
            application development process, while Prisma provides a structured
            approach to database management. On the backend side, Nest.js is a
            strong choice for building a robust and well-organized server. The
            use of a monorepo is a smart move, enabling efficient code and
            resource sharing between the frontend and backend. I&apos;m
            extremely enthusiastic about delving into these technologies and how
            to integrate them into more complex and sophisticated projects.
          </p>
        </div>
      </div>
    </>
  );
};
