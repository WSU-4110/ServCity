import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";
import * as GrIcons from "react-icons/gr";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Alignment",
    path: "/Alignment",
    icon: <BiIcons.BiWrench />,
    cName: "nav-text",
  },
  {
    title: "Brakes",
    path: "/Brakes",
    icon: <GiIcons.GiTireTracks />,
    cName: "nav-text",
  },
  {
    title: "Fluid Flush",
    path: "/FluidFlush",
    icon: <BiIcons.BiColorFill />,
    cName: "nav-text",
  },
  {
    title: "Oil Change",
    path: "/OilChange",
    icon: <GiIcons.GiOilDrum />,
    cName: "nav-text",
  },
  {
    title: "Tires",
    path: "/Tires",
    icon: <GiIcons.GiCarWheel />,
    cName: "nav-text",
  },
  {
    title: "At Home",
    path: "/AtHome",
    icon: <GiIcons.GiToolbox />,
    cName: "nav-text",
  },
  {
    title: "Forum",
    path: "/Forum",
    icon: <MdIcons.MdForum />,
    cName: "nav-text",
  },
  {
    title: "Scheduling",
    path: "/Scheduling",
    icon: <BsIcons.BsFillCalendarWeekFill />,
    cName: "nav-text",
  },
];
