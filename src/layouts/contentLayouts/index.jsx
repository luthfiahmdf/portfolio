export const ContentLayout = ({ children }) => {
  return (
    <section
      className={`w-full  md:h-screen gap-x-8 flex flex-col md:flex-row justify-center items-center bg-zinc-900 `}
    >
      {children}
    </section>
  );
};
