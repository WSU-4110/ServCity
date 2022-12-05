import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from "react-icons/bi";
import * as GiIcons from "react-icons/gi";



export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Alignment',
    path: '/alignment',
    icon: <BiIcons.BiWrench />,
    cName: 'nav-text'
  },
  {
    title: 'Brakes',
    path: '/brakes',
    icon: <GiIcons.GiTireTracks />,
    cName: 'nav-text'
  },
  {
    title: 'Fluid Flush',
    path: '/fluidflush',
    icon: <BiIcons.BiColorFill />,
    cName: 'nav-text'
  },
  {
    title: 'Oil Change',
    path: '/oilchange',
    icon: <GiIcons.GiOilDrum />,
    cName: 'nav-text'
  },
  {
    title: 'Tires',
    path: '/tires',
    icon: <GiIcons.GiCarWheel />,
    cName: 'nav-text'
  },
  {
    title: 'At Home',
    path: '/athome',
    icon: <GiIcons.GiToolbox />,
    cName: 'nav-text'
  },
];

