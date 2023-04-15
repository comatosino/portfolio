import type { NextPage } from "next";
import Head from "next/head";

import { Page, Avatar, ResumeSpring, Badges } from "@/components";
import skills from "./skills.json";

const About: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Robert Adams | About</title>
      </Head>

      <Page.Heading>About</Page.Heading>
      <Page.Body>
        {/* left column */}
        <div className="md:w-1/3 flex flex-col items-center">
          <Avatar />
          <h2 className="text-xl font-bold lg:text-3xl">Robert Adams</h2>
          <p className="text-gray-600">Software Engineer</p>
          <ResumeSpring />
        </div>

        {/* right column */}
        <div className="md:w-2/3 space-y-5">
          <p>
            Following a successful start to a career specializing in the repair and modification of
            avionics equipment, the shifting nature of the industry led me to realize that I needed
            to make a change in order to find a more challenging, dynamic, and fulfilling
            opportunity.
          </p>

          <p>
            Immersing myself in programming has really solidified my appreciation for what I find
            rewarding: learning new things, problem solving, and helping build something tangible.
            I’m eager and excited to contribute my skills to a collaborative environment and I look
            forward to learning more!
          </p>

          <div className="space-y-2">
            <Badges title="Languages" badges={skills.languages} />
            <Badges title="Front End" badges={skills.frontend} />
            <Badges title="Back End" badges={skills.backend} />
            <Badges title="Dev Ops" badges={skills.devops} />
          </div>
        </div>
      </Page.Body>
    </Page>
  );
};

export default About;
