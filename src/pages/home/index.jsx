import { Navbar } from "../../components/organism/navbar";
import AOS from "aos";
import { BsGithub } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { Button } from "../../components/atom/button";
import { Helmet } from "react-helmet";
export const Home = () => {
  AOS.init();

  const githubLink = () => {
    window.open("https://github.com/luthfiahmdf", "_blank");
  };
  const instagramLink = () => {
    window.open("https://instagram.com/luuuthfi_", "_blank");
  };
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
          className="text-xl text-slate-50 2xl:w-[50%] md:w-[80%] w-[80%] font-mono  md:text-2xl  my-[10vh] font-semibold"
        >
          <p>Luthfi Ahmad Fauzi</p>
          <p className="font-mono">
            I&apos;m your friendly neighborhood frontend developer, and I have
            an unwavering passion for crafting digital masterpieces.Let&apos;s
            collaborate and turn your web dreams into reality. Feel free to
            reach out! 🚀
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
      </div>
    </>
  );
};
