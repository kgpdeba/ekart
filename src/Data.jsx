import { BsReceiptCutoff } from "react-icons/bs";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import { FaProductHunt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FcTodoList } from "react-icons/fc";
import { IoReload } from "react-icons/io5";

const data = [
    {
        title : "Catagories",
        total : 7,
        background : "#F7A01B",
        image : <BsReceiptCutoff />,
    },
    {
        title : "Sub-Catagories",
        total : 19,
        background : "#CC3509",
        image : <BsReverseListColumnsReverse />,
    },
    {
        title : "Products",
        total : 47,
        background : "#8033FF",
        image : <FaProductHunt />,
        link:'Pages/AddProduct'
    },
    {
        title : "Users",
        total : 7,
        background : "#0FCE51",
        image : <FaUsers />,
    },
    {
        title : "Orders",
        total : 190,
        background : "#34C7E1",
        image : <FaCartArrowDown />,
    },
    {
        title : "Transactions",
        total : 660,
        background : "#F180E0",
        image : <FcTodoList />,
    },
    {
        title : "Refunds",
        total : 80,
        background : "#4353B7",
        image : <IoReload />,
    }
]

export default data