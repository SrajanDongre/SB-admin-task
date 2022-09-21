import { BsFillCalendarFill } from "react-icons/bs";
import { MdOutlineFactCheck } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { ImBubbles2 } from "react-icons/im";

export let props = [
    {
      title: "EARNINGS(MONTHLY)",
      amount: "$40,000",
      icon: <BsFillCalendarFill size={35} className="calendar-icon" />,
    },
    {
      title: "EARNINGS(ANNUAL)",
      amount: "$215,000",
      icon: <FaDollarSign size={35} className="calendar-icon" />,
    },
    
    {
      title: "TASKS",
      amount: "50%",
      icon: <MdOutlineFactCheck size={35} className="calendar-icon" />,
    },
    {
      title: "PENDING REQUESTS",
      amount: "18",
      icon: <ImBubbles2 size={35} className="calendar-icon" />,
    },
  ];