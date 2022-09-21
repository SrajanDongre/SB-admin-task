import {BiFile} from "react-icons/bi";
import {AiOutlineDollar} from "react-icons/ai";
import {FiAlertTriangle} from "react-icons/fi";

export const alertContent=[
    {
    icon: <BiFile />,
    date: "December 12, 2019",
    text: "A new monthly report is ready to download!",
    background:"icon-circle bg-primary text-white"
},
{
    icon: <AiOutlineDollar />,
    date: "December 7, 2019",
    text: "$290.29 has been deposited into your account!",
    background:"icon-circle bg-success text-white"
},
{
    icon: <FiAlertTriangle />,
    date: "December 2, 2019",
    text: "Spending Alert: We've noticed unusually high spending for your account.",
    background:"icon-circle bg-warning text-white"
}
]