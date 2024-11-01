import React, { Suspense } from "react";

import UsersTeamSlider from "../components/slider/UsersTeamSlider";
import HeadingSection from "../components/HeadingSection";
import UserTable from "../components/UserTable";
import { projectsOverview, socialMedia } from "../constants";
import ProjectsOverView from "../components/ProjectsOverView";
import Link from "next/link";
const AboutPage = () => {
  return (
    <div className="mt-10 container">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-12 lg:col-span-6 overflow-x-scroll md:overflow-hidden">
          <div className="bg-neutral-300 shadow-xl rounded-xl p-3">
            <HeadingSection text="Our Team" />
            <Suspense fallback={<div>Loading team...</div>}>
              <UsersTeamSlider />
            </Suspense>
          </div>

          <div className="table mt-10 bg-gray rounded-xl shadow-xl p-3 w-full">
            <UserTable />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 h-full bg-black rounded-lg p-3">
          <HeadingSection text="Our Projects" color="white" />
          <div className="flex flex-col gap-4 justify-center  items-center h-fit mt-4">
            {projectsOverview.map((item) => (
              <ProjectsOverView key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 h-full bg-softGreen rounded-lg p-3">
          <HeadingSection text="Our Social Media" />

          <ul className="grid grid-cols-12 gap-4 mt-10">
            {socialMedia.map((item) => {
              return (
                <Link
                  className="col-span-6 w-full h-[150px] bg-neutral-100 rounded-xl flex items-center justify-center flex-col hover:bg-gray transition-all duration-200 hover:scale-105"
                  key={item.id}
                  href={`https://instagram.com`}>
                  {item.Icon && <item.Icon size={22} />}
                  <span className="text-lg md:text-xl font-medium">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
