"use client";
import React, { JSX, useState } from "react";
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaEnvelope,
  FaFileAlt,
  FaLinkedinIn,
  FaBars,
  FaBrain,
  FaTimes,
  FaDatabase,
  FaCode,
  FaRobot,
  FaLanguage,
  FaChartLine,
  FaChartBar,
  FaChartPie,
  FaFileExcel,
  FaPlug,
  FaSearch,
  FaLink,
  FaProjectDiagram,
  FaUsers,
} from "react-icons/fa";
import { ReactTyped } from "react-typed";
import {
  JavaOriginal,
  COriginal,
  PythonOriginal,
  ReactOriginal,
  MysqlOriginal,
  Html5Original,
  Css3Original,
  FlaskOriginal,
  FastapiOriginal,
} from "devicons-react";
import Image from "next/image";
import profilePic from "../assets/Profile.png";
import scetLogo from "../assets/scet-logo.png";
import malariaDetectPro from "../assets/malaria-detect-pro.png";
import universalDatabaseMcp from "../assets/universal-database-mcp.png";
import { FaCertificate, FaGithub } from "react-icons/fa6";

interface TimelineCardProps {
  side: "left" | "right";
  role: string;
  company: string;
  date: string;
  points: string[];
}

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const TimelineCard: React.FC<TimelineCardProps> = ({
    side,
    role,
    company,
    date,
    points,
  }) => {
    const isLeft = side === "left";

    return (
      <div
        className={`
        relative mb-16 flex
        pl-12 sm:pl-16 md:pl-8
        ${isLeft ? "md:justify-start md:pr-10" : "md:justify-end md:pl-10"}
      `}
      >
        {/* Dot */}
        <div
          className="
    absolute top-6
    left-6 md:left-1/2
    -translate-x-1/2
    w-4 h-4 bg-white rounded-full z-10
  "
        ></div>

        {/* Card */}
        <div className="bg-[#2a2a2a] text-white w-full md:w-[45%] p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold">{role}</h3>
          <p className="text-cyan-400 font-semibold">{company}</p>
          <p className="text-orange-400 text-sm mb-4">{date}</p>

          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-200">
            {points.map((point: string, idx: number) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-black text-white ">
      {/* Sidebar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-gray-800 text-white rounded-full"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <aside
        className={`fixed md:left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-start space-y-3 w-16 transition-all duration-300 
      md:w-64 md:flex ${
        isOpen
          ? "translate-x-0 bg-[#ffcf8e] z-20 w-[50%] py-56" // Sidebar appears on top
          : "-translate-x-full md:translate-x-0 -left-11 z-10" // Hidden by default
      }`}
      >
        <NavItem
          href="#home"
          icon={<FaHome size={22} />}
          text="Home"
          download={false}
        />
        <NavItem
          href="#about"
          icon={<FaUser size={22} />}
          text="About"
          download={false}
        />
        <NavItem
          href="#education"
          icon={<FaGraduationCap size={22} />}
          text="Education"
          download={false}
        />
        <NavItem
          href="#skills"
          icon={<FaBrain size={22} />}
          text="Skills"
          download={false}
        />
        <NavItem
          href="#Projects"
          icon={<FaBriefcase size={22} />}
          text="Projects"
          download={false}
        />
        <NavItem
          href="#certification"
          icon={<FaCertificate size={22} />}
          text="Certifications"
          download={false}
        />
        <NavItem
          href="#contact"
          icon={<FaEnvelope size={22} />}
          text="Contact"
          download={false}
        />
        <NavItem
          href="/Resume.pdf"
          icon={<FaFileAlt size={24} />}
          text="Resume"
          download={true}
        />
      </aside>

      <main className="flex-1 font-merri flex flex-col justify-center items-center  md:px-0 overflow-x-hidden">
        <div className="w-full space-y-8">
          {/* Home Section with Background Image */}
          <section
            id="home"
            className="h-screen flex flex-col justify-center items-start text-left px-16 md:items-center md:text-center md:px-20 transition-all
        bg-[url('/Gradient1.png')] "
          >
            <h1 className="font-dancing  md:text-6xl text-4xl sm:text-5xl font-bold mt-40 md:mt-36">
              Jay Nasriwala
            </h1>
            <p className="font-merri text-lg sm:text-xl text-black mt-2">
              I&apos;m a{" "}
              <span className="text-white">
                <ReactTyped
                  strings={[
                    "Software Developer",
                    "AI/ML Enthusiast",
                    "Agentic AI Developer",
                    "Computer Vision Engineer",
                  ]}
                  typeSpeed={60}
                  backSpeed={50}
                  loop
                />
              </span>
            </p>

            {/* Social Links */}
            <div className="mt-4 flex flex-wrap justify-center gap-6">
              <SocialLink
                href="https://www.linkedin.com/in/jay-nasriwala-674607278/"
                icon={<FaLinkedinIn size={24} />}
              />
              <SocialLink
                href="https://github.com/jaynasriwala"
                icon={<FaGithub size={24} />}
              />
            </div>
          </section>

          {/* About Section */}
          <section
            id="about"
            className="p-10 md:p-30 flex flex-col justify-between"
          >
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold text-center mb-6">About Me</h1>
              <hr className="w-1/3 md:w-1/4 border-t-2 border-[#fd8439] mb-6 mx-auto rounded-lg transition-all duration-300 hover:border-[#fd8439]" />
              <p className="text-lg text-center mb-6">
                Research-oriented Computer Engineering student with a strong
                interest in utilizing cutting-edge technologies to create
                meaningful solutions to real-world problems. Looking for
                opportunities that enable lifelong learning, innovation, and
                play an integral role in team and organizational development.
                I work extensively with AI/ML — from deep learning and
                computer vision (photogrammetry, 3D reconstruction) to
                Agentic AI systems built with MCP, CrewAI, LangChain, and
                LangGraph — alongside full-stack development with React,
                Flask, and FastAPI. I&apos;m a passionate tech-enthusiast with
                a &apos;can-do&apos; attitude and a constant willingness to
                explore new languages, tools, and emerging technologies.
                Let&apos;s collaborate and turn ideas into reality!
              </p>
            </div>

            {/* Responsive Flex Layout for Image and Text */}
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4">
              {/* Profile Image */}
              <div className="relative flex justify-center mb-6 md:mb-0 md:mr-10">
                <div className="relative w-[400px] h-[400px] md:w-[450px] md:h-[450px] flex items-center justify-center">
                  {/* Outer Circle Borders - Always Centered */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="absolute w-[460px] h-[460px] md:w-[510px] md:h-[510px] rounded-full border border-[#fd8439] animate-pulse" />
                    <div className="absolute w-[430px] h-[430px] md:w-[480px] md:h-[480px] rounded-full border-2 border-[#fd8439] animate-pulse" />
                    <div className="absolute w-[400px] h-[400px] md:w-[450px] md:h-[450px] rounded-full border-2 border-[#fd8439] animate-pulse" />
                    <div className="absolute w-[370px] h-[370px] md:w-[420px] md:h-[420px] rounded-full border-4 border-[#fd8439] animate-pulse" />
                    <div className="absolute w-[340px] h-[340px] md:w-[390px] md:h-[390px] rounded-full border-4 border-[#fd8439] animate-pulse" />
                    <div className="absolute w-[310px] h-[310px] md:w-[360px] md:h-[360px] rounded-full border-4 border-[#fd8439] animate-pulse" />
                  </div>

                  {/* Profile Picture */}
                  <div className="relative z-10">
                    <Image
                      src={profilePic}
                      alt="Jay Nasriwala"
                      className="rounded-full object-cover object-[50%_0%] w-72 h-72 md:w-80 md:h-80"
                    />
                  </div>
                </div>
              </div>

              {/* Text Section */}
              <div className="text-center md:text-left mt-4 md:-mt-8 md:ml-10">
                <h2 className="text-2xl font-bold mb-4 text-[#fd8439]">
                  Software Developer & AI/ML Enthusiast
                </h2>
                <p>
                  <strong>Education:</strong> B.Tech in Computer Engineering
                </p>
                <p>
                  <strong>City:</strong> Surat, GJ
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:jaynasriwalaoffice@gmail.com"
                    className="text-blue-500"
                  >
                    jaynasriwalaoffice@gmail.com
                  </a>
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    Built a photogrammetry-based 3D reconstruction pipeline
                    with Structure-from-Motion and dense reconstruction.
                  </li>
                  <li>
                    Work with Agentic AI systems using MCP, CrewAI, LangChain
                    and LangGraph.
                  </li>
                  <li>
                    Develop web applications with React, Flask and FastAPI.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="experience" className="py-16 px-4">
            <h1 className="text-3xl font-bold text-center text-white mb-6">
              Experience
            </h1>
            <hr className="w-1/3 md:w-1/4 border-t-2 border-[#fd8439] mb-6 mx-auto rounded-lg transition-all duration-300 hover:border-[#fd8439]" />

            <div className="relative max-w-6xl mx-auto -mb-20">
              {/* Vertical line */}
              <div className="absolute top-0 left-6 md:left-1/2 md:-translate-x-1/2 w-1 h-full bg-[#fd8439]"></div>

              {/* Item 1 */}
              <TimelineCard
                side="left"
                role="Trainee Software Developer"
                company="STPL Global — R&D Department"
                date="Jan 2026 - Present"
                points={[
                  "Engineered a photogrammetry-based 3D reconstruction pipeline, integrating U2-Net segmentation to achieve ~95% masking accuracy for automated extraction from 100+ multi-view images per scan.",
                  "Created a Structure-from-Motion (SfM) pipeline with OpenCV for feature extraction, matching and sparse reconstruction generating 10,000+ points, scaling to 1,00,000+ via dense reconstruction with OpenMVG.",
                  "Optimized initial pose estimation by enhancing RANSAC based image pair selection using SQLite driven querying to identify top-10 image pairs with maximum inliers, improving reconstruction stability and achieving ~96% higher accuracy in model initialization.",
                  "Calibrated IDS industrial camera by tuning imaging parameters (gains, exposure, aperture) and performed geometric calibration using a checkerboard pattern to compute the camera intrinsic matrix.",
                ]}
              />

              {/* Item 2 */}
              <TimelineCard
                side="right"
                role="Software Developer Intern"
                company="STPL Global — R&D Department"
                date="Jan 2026 - May 2026"
                points={[
                  "Contributed to the SlysX project, developing a high-performance 3D geometry analysis and slicer engine using Python, Delphi, and DirectX 9.",
                  "Built support generation, thickness and overhang analysis, auto-orientation, and peel-force estimation features for the slicer engine.",
                  "Implemented Octree-based spatial partitioning, ray casting, and parallel processing to handle meshes up to 1M triangles.",
                ]}
              />

              {/* Item 3 */}
              <TimelineCard
                side="left"
                role="Data Analyst — Internship"
                company="Grownited Private Limited, Ahmedabad"
                date="June 2024 - July 2024"
                points={[
                  "Processed Herbalife Nutrition sales data (2022–2024) using Power BI and SQL, mapping sales trends, customer behavior, and product performance to obtain actionable insights for business growth and strategic planning.",
                  "Tools & Technologies Used: Power BI Desktop, Python (for data preprocessing), Pandas, Matplotlib, Seaborn, Probability & Statistics, Hypothesis Testing.",
                ]}
              />
            </div>
          </section>

          {/* Education Section */}
          <section
            id="education"
            className="bg-black py-16 px-4 flex flex-col items-center"
          >
            <h1 className="text-3xl font-bold text-center text-white mb-6">
              Education
            </h1>

            <hr className="w-1/3 md:w-1/4 border-t-2 border-[#fd8439] mb-10 mx-auto rounded-lg" />

            <div
              className="
                w-full max-w-3xl rounded-2xl overflow-hidden
                shadow-md
                border border-[#fd8439]/30
                transition-all duration-300
                hover:shadow-2xl
              hover:shadow-[#fd8439]/40
                hover:-translate-y-1
                "
            >
              {/* Top Header */}
              <div className="bg-[#fd8439] py-8 flex justify-center">
                <div className="bg-white p-4 rounded-xl">
                  <Image
                    src={scetLogo}
                    alt="Sarvajanik College of Engineering and Technology Logo"
                    className="md:w-40 w-28 h-auto object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="bg-[#2a2a2a] text-center px-6 py-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Sarvajanik College of Engineering and Technology
                </h2>

                <p className="text-cyan-400 text-lg font-semibold">
                  Bachelor of Technology
                </p>

                <p className="text-gray-300 italic mt-1">
                  (Computer Engineering)
                </p>

                <p className="text-orange-400 font-semibold mt-4">
                  2022 – 2026
                </p>

                <div className="mt-6">
                  <p className="text-cyan-400 font-semibold mb-2">CGPA</p>

                  <p className="text-gray-300 leading-relaxed">9.38</p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section
            id="skills"
            className="p-10 md:p-30 flex flex-col justify-between "
          >
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold text-center mb-6">Skills</h1>
              <hr className="w-1/3 md:w-1/4 border-t-2 border-[#fd8439] mb-6 mx-auto rounded-lg transition-all duration-300 hover:border-[#fd8439]" />
              <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-6  text-black">
                {/* Skill Items */}
                {[
                  { icon: <PythonOriginal size={40} />, label: "Python" },
                  { icon: <COriginal size={40} />, label: "C" },
                  { icon: <JavaOriginal size={40} />, label: "Java" },
                  { icon: <FaDatabase size={36} />, label: "SQL / PL-SQL" },
                  { icon: <MysqlOriginal size={40} />, label: "MySQL" },
                  { icon: <Html5Original size={40} />, label: "HTML5" },
                  { icon: <Css3Original size={40} />, label: "CSS3" },
                  { icon: <ReactOriginal size={40} />, label: "React" },
                  { icon: <FlaskOriginal size={40} />, label: "Flask" },
                  { icon: <FastapiOriginal size={40} />, label: "FastAPI" },
                  { icon: <FaCode size={36} />, label: "REST API" },
                  { icon: <FaBrain size={36} />, label: "Machine Learning" },
                  { icon: <FaRobot size={36} />, label: "Deep Learning" },
                  { icon: <FaLanguage size={36} />, label: "NLP" },
                  { icon: <FaChartLine size={36} />, label: "Statistics" },
                  { icon: <FaChartBar size={36} />, label: "Power BI" },
                  { icon: <FaChartPie size={36} />, label: "Tableau" },
                  { icon: <FaFileExcel size={36} />, label: "Excel" },
                  { icon: <FaPlug size={36} />, label: "MCP" },
                  { icon: <FaUsers size={36} />, label: "Agentic AI" },
                  { icon: <FaSearch size={36} />, label: "RAG" },
                  { icon: <FaLink size={36} />, label: "CrewAI" },
                  { icon: <FaLink size={36} />, label: "LangChain" },
                  { icon: <FaProjectDiagram size={36} />, label: "LangGraph" },
                ].map((skill, idx) => (
                  <div
                    key={idx}
                    className="pt-2 sm:p-4 bg-white rounded-lg shadow-md text-center hover:bg-[#fd8439] hover:text-white transition-all duration-300"
                  >
                    <div className="flex justify-center items-center">
                      {skill.icon}
                    </div>
                    <span className="md:text-lg text-sm font-medium block mt-3">
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="Projects"
            className="p-10 md:p-30 flex flex-col justify-between"
          >
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold text-center mb-6">Projects</h1>
              <hr className="w-1/3 md:w-1/4 border-t-2 border-[#fd8439] mb-6 mx-auto rounded-lg transition-all duration-300 hover:border-[#fd8439]" />
              <div className="flex flex-wrap gap-6 justify-center mt-4 ">
                {/* Project 1 */}
                <div
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-2/5 p-[16.19px] bg-[#2a2a2a] rounded-md flex flex-col justify-start items-center gap-[16.19px] group relative transition-all duration-300
  hover:-translate-y-2
  hover:shadow-2xl
  hover:shadow-[#fd8439]/40
  border border-[#fd8439]/30"
                >
                  <Image
                    className="md:w-[350px] md:h-[200.81px] w-[266px] h-[159.81px] rounded-[5.15px] shadow-[0px_2.94px_0px_0px_rgba(253,132,57,1.00)] border-2 object-cover"
                    src={malariaDetectPro}
                    alt="MalariaDetect Pro"
                  />
                  <div className="flex justify-between items-center w-full px-4">
                    <div className="text-white md:text-xl text-lg font-semibold leading-tight">
                      MalariaDetect Pro
                      <br />
                      <p className="text-sm text-cyan-400 mt-1">
                        Tech Stack : Python, Streamlit, ConvNeXt/EfficientNetV2-S,
                        PyTorch/TensorFlow, Computer Vision
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://github.com/jaynasriwala/Malaria-Detection.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-1 bottom-1 md:bottom-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="w-[87px] h-[24px] md:w-[102.78px] md:h-[33px] px-[13.17px] py-[6.59px] bg-[#fd8439] rounded-tl-sm rounded-tr-[19.76px] rounded-bl-[19.76px] rounded-br-[19.76px] shadow-[3.29px_3.29px_8.23px_0px_rgba(240,114,205,0.16)] border-2 border-black flex items-center justify-center">
                      <span className="text-white md:text-[13.17px] text-[11px] font-medium font-['Inter'] leading-tight">
                        Source Code
                      </span>
                    </div>
                  </a>
                </div>

                {/* Project 2 */}
                <div
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-2/5 p-[16.19px] bg-[#2a2a2a] rounded-md flex flex-col justify-start items-center gap-[16.19px] group relative transition-all duration-300
  hover:-translate-y-2
  hover:shadow-2xl
  hover:shadow-[#fd8439]/40
  border border-[#fd8439]/30"
                >
                  <Image
                    className="md:w-[350px] md:h-[200.81px] w-[266px] h-[159.81px] rounded-[5.15px] shadow-[0px_2.94px_0px_0px_rgba(253,132,57,1.00)] border-2 object-cover"
                    src={universalDatabaseMcp}
                    alt="Universal Database MCP"
                  />
                  <div className="flex justify-between items-center w-full px-4">
                    <div className="text-white md:text-xl text-lg font-semibold leading-tight">
                      Universal Database MCP
                      <br />
                      <p className="text-sm text-cyan-400 mt-1">
                        Tech Stack : Python, Model Context Protocol (MCP),
                        SQL, Database Connectors
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://github.com/jaynasriwala/Universal-Database-MCP.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-1 bottom-1 md:bottom-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="w-[87px] h-[24px] md:w-[102.78px] md:h-[33px] px-[13.17px] py-[6.59px] bg-[#fd8439] rounded-tl-sm rounded-tr-[19.76px] rounded-bl-[19.76px] rounded-br-[19.76px] shadow-[3.29px_3.29px_8.23px_0px_rgba(240,114,205,0.16)] border-2 border-black flex items-center justify-center">
                      <span className="text-white md:text-[13.17px] text-[11px] font-medium font-['Inter'] leading-tight">
                        Source Code
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section
            id="certification"
            className="p-6 md:p-10 flex flex-col justify-center items-center w-full relative"
          >
            <h1 className="text-3xl font-bold text-center mb-6">
              Research Papers & Certifications
            </h1>
            <hr className="w-1/3 md:w-1/4 border-t-2 border-[#fd8439] mb-6 mx-auto rounded-lg transition-all duration-300 hover:border-[#fd8439]" />
            {/* Borders */}

            {/* Certifications List */}
            <div className="md:mt-6 mt-4 flex flex-col gap-6 md:ml-12 ml-3 w-full max-w-[850px]">
              {[
                {
                  title: "Malaria Parasite Detection in Thin Blood Smear Images Using ConvNeXt with Explanations",
                  subtitle: "Research Paper — IEEE Xplore",
                  href: "http://ieeexplore.ieee.org/document/11258060",
                },
                {
                  title: "Segmenting Brain Tumor from MRI using an Efficient Encoder-Decoder-based DeepLabv3+ Architecture",
                  subtitle: "Research Paper — IEEE Xplore",
                  href: "https://ieeexplore.ieee.org/document/11407141",
                },
                {
                  title: "Fundamentals of Deep Learning",
                  subtitle: "NVIDIA",
                  href: "https://www.linkedin.com/in/jay-nasriwala-674607278/details/certifications/",
                },
                {
                  title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
                  subtitle: "Oracle",
                  href: "https://www.linkedin.com/in/jay-nasriwala-674607278/details/certifications/",
                },
                {
                  title: "Oracle Certified Associate, Java SE 8 Programmer",
                  subtitle: "Oracle",
                  href: "https://www.linkedin.com/in/jay-nasriwala-674607278/details/certifications/",
                },
                {
                  title: "Oracle Certified Professional, Java SE 8 Programmer",
                  subtitle: "Oracle — July 2024",
                  href: "https://www.linkedin.com/in/jay-nasriwala-674607278/details/certifications/",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="
  flex flex-wrap sm:flex-nowrap items-center gap-4
  bg-[#1f1f1f]
  rounded-xl p-4
  border border-[#fd8439]/30
  transition-all duration-300
  hover:-translate-y-1
  hover:shadow-xl hover:shadow-[#fd8439]/30
"
                >
                  <div
                    className="
    min-w-[42px] h-[42px] md:min-w-[60px] md:h-[60px]
    flex items-center justify-center
    bg-[#fd8439]
    rounded-full border-2 border-black
    text-black text-xl md:text-3xl font-bold shadow-md
  "
                  >
                    {idx + 1}
                  </div>

                  <div>
                    <div className="text-sm sm:text-xl font-semibold text-white">
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#fd8439] transition-colors duration-300"
                      >
                        {item.title} 🔗
                      </a>
                    </div>

                    <div className="text-xs sm:text-lg text-gray-400 mt-1">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="p-6 md:p-10 flex flex-col justify-center items-center"
          >
            <h1 className="text-3xl font-bold text-center mb-6">Contact Me</h1>
            <hr className="w-1/3 md:w-1/4 border-t-2 border-[#fd8439] mb-6 mx-auto rounded-lg transition-all duration-300 hover:border-[#fd8439]" />

            <div className="w-full max-w-[90%] sm:max-w-[600px] md:max-w-[750px] lg:max-w-[850px] bg-black rounded-md shadow-lg border-none border-[#fd8439] overflow-hidden p-6 sm:p-8 relative ">
              {/* Heading */}
              <div className="text-center text-white text-lg sm:text-xl md:text-4xl font-medium font-['Space Grotesk']">
                Ready to take your digital presence to the next level?
              </div>

              {/* Description */}
              <div className="mt-4 text-center text-white text-sm sm:text-lg md:text-lg font-normal font-['Space Grotesk'] px-2 sm:px-4">
                Reach out to me today and let&apos;s discuss how I can help you
                achieve your goals.
              </div>

              {/* CTA Button */}
              <div className="mt-6 sm:mt-8 flex justify-center">
                <a href="mailto:jaynasriwalaoffice@gmail.com">
                  <button className="px-5 sm:px-6 py-2 sm:py-3 bg-[#fd8439] rounded-full border-4 border-white text-black text-sm sm:text-lg font-bold font-['Space Grotesk'] cursor-pointer transition-all hover:bg-[white]">
                    Let&apos;s get in touch ✉️
                  </button>
                </a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="flex justify-between items-center p-4 bg-black flex-wrap md:flex-nowrap">
            {/* Left side: Copyright */}
            <div className="flex space-x-2 md:ml-10 mt-2 md:mt-0 ">
              <span className="text-white md:text-[18px] text-[16px] font-normal font-['Poppins'] tracking-wide">
                Copyright © 2025
              </span>
              <span className="text-[#fd6f00] md:text-[18px] text-[16px] font-bold font-['Poppins'] tracking-wide">
                Jay Nasriwala |
              </span>
            </div>

            {/* Right side: Profile links */}
            <div className="flex space-x-4 mt-2 md:mt-0">
              <SocialLink
                href="https://www.linkedin.com/in/jay-nasriwala-674607278/"
                icon={<FaLinkedinIn size={22} />}
              />
              <SocialLink
                href="https://github.com/jaynasriwala"
                icon={<FaGithub size={22} />}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;

// NavItem Component
interface NavItemProps {
  href: string;
  icon: JSX.Element;
  text: string;
  download: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  icon,
  text,
  download = false,
}) => (
  <a
    href={href}
    className="group flex items-center justify-start p-2 rounded-full transition-all transform hover:scale-95 hover:bg-[#fd8439] hover:opacity-80"
    download={download ? true : undefined}
  >
    <div className="bg-white p-2 rounded-full inline-flex items-center justify-center">
      <span className="text-[#fd8439]">{icon}</span>
    </div>
    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1">
      {text}
    </span>
  </a>
);

// SocialLink Component
interface SocialLinkProps {
  href: string;
  icon: JSX.Element;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-gray-800 transition-colors"
  >
    {icon}
  </a>
);
