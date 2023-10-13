import { useEffect } from "react";
import { Navbar } from "../../components/organism/navbar";
import { ContentLayout } from "../../layouts";
import AOS from "aos";
import "aos/dist/aos.css";

export const Awards = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <ContentLayout hMobile={`md:h-screen`}>
        <div className="flex flex-col text-xl md:text-2xl mt-[18vh] md:mt-[22vh] font-semibold font-mono px-6 gap-[10vh] mb-[4vh] dark:text-slate-200">
          <h1 className="text-3xl" data-aos="fade-down" data-aos-once="true">
            Test
          </h1>
        </div>
      </ContentLayout>
    </>
  );
};
