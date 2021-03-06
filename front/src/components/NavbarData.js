import React from "react";
import * as AiIcons from "react-icons/ai";

export const NavbarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <AiIcons.AiFillFolderAdd />,
    cName: "nav-text",
  },
  {
    title: "Data",
    path: "/data",
    icon: <AiIcons.AiFillFund />,
    cName: "nav-text",
  },
  {
    title: "Login",
    path: "/login",
    icon: <AiIcons.AiFillRightCircle />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <AiIcons.AiFillLeftCircle />,
    cName: "nav-text",
  },
];
