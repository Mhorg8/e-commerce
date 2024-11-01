import Image from "next/image";
import React from "react";
import { ProjectsOverview } from "../types";

const ProjectsOverView = ({ item }: { item: ProjectsOverview }) => {
  return (
    <div
      key={item.id}
      className="relative rounded-lg bg-neutral-200 w-full h-[170px] cursor-pointer">
      <Image
        src={item.img}
        alt={item.name}
        fill
        priority
        className="object-contain rounded-lg"
        sizes="fill"
      />
      <p className="bg-neutral-200 p-1 rounded-lg text-sm md:text-xl text-neutral-800 font-bold absolute left-1/2 -translate-x-1/2 bottom-2">
        {item.name}
      </p>
    </div>
  );
};

export default ProjectsOverView;
