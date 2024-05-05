import React from 'react'
import './css/Banner.css'
import { FaBell } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


const Banner = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className="row">
                    <div className='col-12 p-0 m-0'>
                        <div className="topHeader">
                            <div className='container-fluid'>
                                <div className="row">

                                    <div className='col-12 col-md-4'>
                                        <div className='form-group'>
                                        <input type="search" name="search" className="form-control" placeholder='Search..'/>
                                        </div>
                                    </div>

                                    <div className='col-12 col-md-8'>
                                        <div className='icons d-block float-right'>
                                        <FaBell id="topHeaderIcon" role="button"/>
                                        <IoMdMail id="topHeaderIcon" role="button"/>
                                        <img src="../img/user.avif" alt="user" role="button" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Banner
