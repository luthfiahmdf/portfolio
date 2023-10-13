import { useEffect } from "react";
import { Navbar } from "../../components/organism/navbar";
import { ContentLayout } from "../../layouts";
import foto from "../../assets/luthfi.webp";
import AOS from "aos";
import { BsGithub } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { Button } from "../../components/atom/button";
export const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const githubLink = () => {
    window.open("https://github.com/luthfiahmdf", "_blank");
  };
  const instagramLink = () => {
    window.open("https://instagram.com/luuuthfi_", "_blank");
  };
  return (
    <>
      <Navbar />
      <ContentLayout hMobile={`md:h-screen`}>
        <div
          className="text-xl md:text-2xl  font-semibold font-mono gap-y-5 flex flex-col mt-[18vh] md:mt-[6vh] w-[80vw] md:w-[70%] lg:w-[50vw] dark:text-slate-200"
          data-aos="fade-down"
          data-aos-once="true"
        >
          <p>Luthfi Ahmad Fauzi</p>
          <p className="font-mono">
            I&apos;m your friendly neighborhood frontend developer, and I have
            an unwavering passion for crafting digital masterpieces. My days
            (and often nights) are dedicated to painting the vast canvas of the
            Internet with projects and lines of code, transforming mere zeroes
            and ones into immersive online experiences that captivate and
            delight. Whether you&apos;re seeking to enhance the user experience,
            bring your vision to life, or simply have a coding conundrum to
            untangle, you can count on me to be your digital ally. Let&apos;s
            collaborate and turn your web dreams into reality. Feel free to
            reach out! 🚀👨‍💻
          </p>
          <div className="contact flex flex-row">
            <Button click={githubLink}>
              <BsGithub className="text-4xl" />
            </Button>

            <Button click={instagramLink}>
              <AiOutlineInstagram className="text-4xl" />
            </Button>
          </div>
        </div>
      </ContentLayout>
    </>
  );
};
