// pages/index.tsx
import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { Metadata } from "next";
import { homeData } from "@/app/lib/homeData";

export const metadata: Metadata = {
  title: "Home",
};

const Home: React.FC = () => {
  const {
    name,
    biography,
    socialMedia,
    whatIDo,
    highlightedWords,
  } = homeData;

  return (
    <main>
      <section id="hero">
        <h1 className="text-2xl text-center">Hi I&apos;m {name},</h1>
      </section>

      <section id="about">
        <div className="grid grid-cols-3 gap-4">
          {/* Image */}
          <div className="w-fit rounded-full"></div>

          {/* Bio */}
          <div>
            <p className="font-semibold">{biography.title}</p>
            <p>{biography.content}</p>
          </div>

          {/* Social Media */}
          <div>
            <p>{socialMedia.title}</p>
            <div className="flex gap-4">
              <Link href={socialMedia.links.discord} className="text-2xl">
                <FaDiscord />
              </Link>

              <Link href={socialMedia.links.instagram} className="text-2xl">
                <FaInstagram />
              </Link>

              <Link href={socialMedia.links.linkedin} className="text-2xl">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="wid">
        <div>
          <p className="font-semibold">{whatIDo.title}</p>
          <p>
            Build and maintain websites,{" "}
            <span className={`text-${highlightedWords.frontendDev.color}`}>
              {highlightedWords.frontendDev.text}
            </span>{" "}
            also have a mentorship called{" "}
            <span className={`text-${highlightedWords.mofon.color}`}>
              {highlightedWords.mofon.text}
            </span>
            . My motto is Beauty and function in equal measure are priority.
          </p>
          <div>
            {/* Add more content if needed */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
