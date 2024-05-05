import React from 'react'
import './css/Sidebar.css'

import { NavLink } from 'react-router-dom'
import { AiFillDashboard } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaSignsPost } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { IoReload } from "react-icons/io5";
import { BsCCircleFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdHelp } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";

const Sidebar = () => {

    const ShowManu = () =>{
        if(document.getElementById('submenu').style.display === 'block'){
            document.getElementById('submenu').style.display = 'none';
            document.getElementById('drop').className = 'fas fa-angle-right';
        }else{
            document.getElementById('submenu').style.display = 'block';
            document.getElementById('drop').className = 'fas fa-angle-down';
        }
    }

    const ShowManu1 = () =>{
        if(document.getElementById('submenu1').style.display === 'block'){
            document.getElementById('submenu1').style.display = 'none';
            document.getElementById('drop').className = 'fas fa-angle-right';
        }else{
            document.getElementById('submenu1').style.display = 'block';
            document.getElementById('drop').className = 'fas fa-angle-down';
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 m-0 p-0">
                        <div className='sidebar'>
                            <div className='sidebar-top'>
                            <h4 className='text-center text-white pt-3' role='button'>E-Commerce</h4>
                            <hr/>
                            </div>
                            <div id='sidebar-bottom'>
                                <nav >
                                    <NavLink to={'/'} className={'nav'} id="active"> <AiFillDashboard id='icon'/> Dashboard</NavLink>
                                    <NavLink to={''} className={'nav'} onClick={ShowManu} > <FaProductHunt id='icon'/> Catagory <i id='drop' className='fas fa-angle-right'></i></NavLink>

                                    <div id='submenu'>
                                            <NavLink to={'/Pages/AddCatagory'} className={'nav'}><FaRegCircle /> Add Catagory</NavLink>
                                            <NavLink to={''} className={'nav'}><FaRegCircle /> View Catagory</NavLink>
                                        </div>
                                    <NavLink to={''} className={'nav'} onClick={ShowManu1} > <FaProductHunt id='icon'/> Products <i id='drop' className='fas fa-angle-right'></i></NavLink>
                                        <div id='submenu1'>
                                            <NavLink to={'/Pages/AddProduct'} className={'nav'}><FaRegCircle /> Add Product</NavLink>
                                            <NavLink to={''} className={'nav'}><FaRegCircle /> View Product</NavLink>
                                        </div>
                                    <NavLink to={''} className={'nav'} > <FaMap id='icon'/> Banners</NavLink>
                                    <NavLink to={''} className={'nav'} > <FaSignsPost id='icon'/> Popup</NavLink>
                                    <NavLink to={''} className={'nav'} > <FaCartArrowDown id='icon'/> Order List</NavLink>
                                    <NavLink to={''} className={'nav'} > <LuListTodo id='icon'/> Transactions</NavLink>
                                    <NavLink to={''} className={'nav'} > <IoReload id='icon'/> Refunds</NavLink>
                                    <NavLink to={''} className={'nav'} > <BsCCircleFill id='icon'/> Coupons</NavLink>
                                    <NavLink to={''} className={'nav'} > <FaUsers id='icon'/> Users</NavLink>
                                    <NavLink to={''} className={'nav'} > <RiContactsLine id='icon'/> Contact List</NavLink>
                                    <NavLink to={''} className={'nav'} > <IoSettingsSharp id='icon'/> Setting</NavLink>
                                    <NavLink to={''} className={'nav'} > <IoMdHelp id='icon'/> Help</NavLink>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar

