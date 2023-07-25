import { GrHomeRounded } from "react-icons/gr";
import { TbSquareLetterP, TbBell, TbFilter } from "react-icons/tb";
import { FaRegHandshake } from "react-icons/fa";
import { HiOutlineChatAlt } from "react-icons/hi";
import { RiCustomerService2Line } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
// logo
import logo from "assets/site-logos/logo.png";
import classes from "./topNavs.module.css";

export const routes = [
  {
    name: "كازوميرا",
    route: "/",
    icon: <img src={logo} className={classes.logo_link} alt="كازوميرا" />,
  },
  {
    name: "المساهمات",
    route: "/contributions",
    icon: <FaRegHandshake size={30} />,
  },
  {
    name: "المشروعات",
    route: "/projects",
    icon: <TbSquareLetterP size={30} />,
  },
  {
    name: "الأخبار",
    route: "/news",
    icon: <GrHomeRounded size={30} />,
  },
];

export const services = [
  {
    name: "profile",
    icon: <BiUserCircle size={21} />,
  },

  {
    name: "service",
    icon: <RiCustomerService2Line size={21} />,
  },
  {
    name: "bell",
    icon: <TbBell size={21} />,
  },
  {
    name: "chat",
    icon: <HiOutlineChatAlt size={21} />,
  },
  {
    name: "filter",
    icon: <TbFilter size={21} />,
  },
];
