import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import terminalPortfolio from "public/projects/terminal-portfolio.webp";
import haruFashion from "public/projects/4ghora-Blog.webp";
import haruApi from "public/projects/tryhackme.png";
import astroPaper from "public/projects/HackTheBox.jpeg";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/4ghora"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>  
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Terminal Portfolio",
    type: "Frontend",
    image: (
      <Image
        src={terminalPortfolio}
        sizes="100vw"
        fill
        alt="Terminal Portfolio"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "My portfolio website in terminal version developed with React and TypeScript. In this project, styled-components library is used for styling and multiple themes supported.",
    tags: ["React", "TypeScript", "Styled-Components"],
    liveUrl: "https://terminal-4ghora-pro.vercel.app/",
    codeUrl: "https://github.com/4ghora/terminal.4ghora.pro",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "4ghora Blog",
    type: "Frontend",
    image: (
      <Image
        src={haruFashion}
        sizes="100vw"
        fill
        alt="4ghora Blog App"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "4ghora Blog is created mainly to store information i know i will forget. I am passionate about Information Technology and Security and sharing knowledge with the community.",
    tags: ["Jekyll", "Notes", "Walkthroughs", "Writeups"],
    liveUrl: "https://medium.com/@4ghora",
    codeUrl: "https://github.com/4ghora/4ghora.github.io",
    bgColor: "bg-[#A6CECE]",
  },
  {
    title: "TryHackMe Profile",
    type: "Backend",
    image: (
      <Image
        src={haruApi}
        sizes="100vw"
        fill
        alt="Haru API"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "TryHackMe is an online platform that teaches cyber security through short, gamified real-world labs. TryHackMe gives students their own personal hackable machine",
    tags: ["Web", "Challanges", "Owasp", "Academy"],
    liveUrl: "https://tryhackme.com/p/GoodGuyMickey",
    codeUrl: "https://github.com/4ghora/4ghora.github.io",
    bgColor: "bg-[#C5E4E7]",
  },
  {
    title: "HackTheBox",
    type: "Frontend",
    image: (
      <Image
        src={astroPaper}
        sizes="100vw"
        fill
        alt="AstroPaper"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Hack The Box is a leading gamified cybersecurity upskilling, certification, and talent assessment software platform enabling individuals, businesses, government institutions",
    tags: ["Machines", "Challanges", "Ctfs", "Networks"],
    liveUrl: "https://app.hackthebox.com/profile/228431/",
    codeUrl: "https://github.com/4ghora/4ghora.github.io",
    bgColor: "bg-[#9FD0E3]",
  },
];

export default ProjectSection;
