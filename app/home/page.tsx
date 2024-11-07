// import { Link } from "@nextui-org/link";
// import { Snippet } from "@nextui-org/snippet";
// import { Code } from "@nextui-org/code";
// import { button as buttonStyles } from "@nextui-org/theme";

// import { siteConfig } from "@/config/site";
// import { title, subtitle } from "@/components/primitives";
// import { GithubIcon } from "@/components/icons";
"use client";
import Image from "next/image";
import { useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Home() {
  
  const [activeTab, setActiveTab] = useState("Home");
  const router = useRouter();

  // Handler function for onClick
  const handleTabClick = (tabKey: string) => {
    setActiveTab(tabKey);
  };

  function nav_login() {
    router.push('/login');
  }

  return (

    <div className="bg-[#D9E8D9] flex justify-between p-3">
      <div className="flex items-center ml-4">
        <Image
          src="/images/logo.png"
          alt="Sample Image"
          width={50}
          height={44}
        />
        <div className="text-black font-extrabold">{"FITRACK"}</div>
      </div>
      <Tabs className="flex space-x-6" variant={"underlined"} aria-label="Tabs variants">
        <Tab
          key="Home"
          title={
            <>
              <img
                src="/images/logo1.png"
                alt="Home"
                className="w-6 h-6 flex justify-center"
              />{" "}
              Home
            </>
          }
          onClick={() => handleTabClick("Home")}
          className={activeTab === "Home" ? "text-orange-600" : "text-black"}
        />
        <Tab
          key="Diet"
          title={
            <>
              <img
                src="/images/logo2.png"
                alt="Diet"
                className="w-5 h-5 flex justify-center"
              />{" "}
              Diet
            </>
          }
          onClick={() => handleTabClick("Diet")}
          className={activeTab === "Diet" ? "text-orange-500" : "text-black"}
        />
        <Tab
          key="Report"
          title={
            <>
              <img
                src="/images/logo3.png"
                alt="Report"
                className="w-5 h-5 flex justify-center"
              />{" "}
              Report
            </>
          }
          onClick={() => handleTabClick("Report")}
          className={
            activeTab === "Report" ? "text-orange-500" : "text-black"
          }
        />
      </Tabs>

      <Image
        src="/images/user_icon.png"
        className="mr-4"
        alt="User Icon"
        width={48}
        height={48}
        onClick={nav_login}
      />
    </div>
    // <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    //   <div className="inline-block max-w-xl text-center justify-center">
    //     <span className={title()}>Make&nbsp;</span>
    //     <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
    //     <br />
    //     <span className={title()}>
    //       websites regardless of your design experience.
    //     </span>
    //     <div className={subtitle({ class: "mt-4" })}>
    //       Beautiful, fast and modern React UI library.
    //     </div>
    //   </div>

    //   <div className="flex gap-3">
    //     <Link
    //       isExternal
    //       className={buttonStyles({
    //         color: "primary",
    //         radius: "full",
    //         variant: "shadow",
    //       })}
    //       href={siteConfig.links.docs}
    //     >
    //       Documentation
    //     </Link>
    //     <Link
    //       isExternal
    //       className={buttonStyles({ variant: "bordered", radius: "full" })}
    //       href={siteConfig.links.github}
    //     >
    //       <GithubIcon size={20} />
    //       GitHub
    //     </Link>
    //   </div>

    //   <div className="mt-8">
    //     <Snippet hideCopyButton hideSymbol variant="bordered">
    //       <span>
    //         Get started by editing <Code color="primary">app/page.tsx</Code>
    //       </span>
    //     </Snippet>
    //   </div>
    // </section>
    );
} 