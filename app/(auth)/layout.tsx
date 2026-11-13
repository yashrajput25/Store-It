import React from "react";
import Image from "next/image";
import Illustration from "../../public/assets/images/files.png";

type obj = {
  children: React.ReactNode;
};

const Layout = (props: obj) => {
  return (
    <div className="flex min-h-screen">
      <section
        className="bg-brand p-10 hidden w-1/2 
      items-center justify-center lg:flex xl:w-2/5"
      >
        <div className="flex flex-col max-h-[800px] max-w-[430px] justify-center space-y-12">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo"
            width={224}
            height={82}
            className="h-auto"
          />

          <div className="space-y-5 text-white">
            <h1 className="h1">Manage your files the best way</h1>
            <p className="body-1">
              This is the place where you can store all your documents
            </p>
          </div>

          <Image
            src={Illustration}
            alt="illustration"
            width={342}
            height={342}
            className="transition-all hover:rotate-12 hover:scale-105"
          />
        </div>
      </section>
    </div>
  );
};

export default Layout;
