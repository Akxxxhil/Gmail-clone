import React from 'react'
import SideBar from './SideBar'
import { CiFaceSmile } from "react-icons/ci";
import Avatar from 'react-avatar';
import { IoMdArrowBack, IoMdArrowDropdown } from "react-icons/io";
import { RiInboxArchiveLine } from "react-icons/ri";
import { RiSpam2Line } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdDriveFileMoveOutline, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { TfiNewWindow } from "react-icons/tfi";
import { MdOutlinePrint } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaKeyboard } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { TiStarOutline } from 'react-icons/ti';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { LuReply } from "react-icons/lu";

function MailDeatils() {
    const navigate = useNavigate("")
    return (
        <div className='flex'>
            <div className='w-[15%]'>
                <SideBar />
            </div>
            <div className='flex-1 bg-white rounded-xl h-screen'>
                <div className='flex items-center justify-between px-3'>

                    <div className='flex items-center gap-2'>
                        <div onClick={() => navigate("/")} className='hover:bg-gray-200 rounded-full p-2'>
                            <IoMdArrowBack size={"18px"} />
                        </div>
                        <div className='hover:bg-gray-200 rounded-full p-2'>
                            <RiInboxArchiveLine size={"18px"} />
                        </div>
                        <div className='hover:bg-gray-200 rounded-full p-2'>
                            <RiSpam2Line size={"18px"} />
                        </div>
                        <div className='hover:bg-gray-200 rounded-full p-2'>
                            <RiDeleteBin6Line size={"18px"} />
                        </div>
                        <div className='hover:bg-gray-200 rounded-full p-2'>
                            <IoMailUnreadOutline size={"18px"} />
                        </div>
                        <div className='hover:bg-gray-200 rounded-full p-2'>
                            <MdDriveFileMoveOutline size={"18px"} />
                        </div>
                        <div className='hover:bg-gray-200 rounded-full p-2'>
                            <BiDotsVerticalRounded size={"18px"} />
                        </div>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <p>1 of 2,493</p>
                        <MdKeyboardArrowLeft />
                        <MdKeyboardArrowRight />
                        <FaKeyboard />
                        <IoMdArrowDropdown />
                    </div>

                </div>

                <div className='flex items-center justify-between px-4 m-4'>
                    <div className='flex items-center gap-3 m-3'>
                        <h1 className='text-xl font-medium px-4'>New "To-Do App" Practice Project Added | Full Stack web development Cohort 2.0</h1>
                        {/* <span className='bg-gray-400 rounded-md px-1 text-white'>Inbox <span>x</span></span> */}
                    </div>
                    <div className='flex justify-center cursor-pointer items-center gap-3'>
                        <p className='text-gray-600'><MdOutlinePrint size={"18px"} /></p>
                        <p className='text-gray-600'><TfiNewWindow size={"18px"} /></p>
                    </div>
                </div>

                <div>
                    <div className='flex items-center justify-between px-3'>
                        <div className='flex items-center gap-2'>
                            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-pE_Y-rtLosto3iU3U6NJIc6IkguglBUoA&s' size="40" round={true} />
                            <div>
                                <div className='flex items-center gap-1'>
                                    <h1 className='font-semibold text-base'>100x</h1>
                                    <p className='text-sm'>noreply@100x.com</p>
                                </div>
                                <span className='flex items-center text-xs'>to me <span><IoMdArrowDropdown /></span></span>
                            </div>
                        </div>
                        <div className='flex items-center gap-3' >
                            <p className='text-sm'>Dec 27, 2023,</p>
                            <p className='text-sm'>10:06 AM</p>
                            <p><TiStarOutline size={"20px"} /> </p>
                            <p><CiFaceSmile /></p>
                            <p><LuReply /></p>
                            <p><HiOutlineDotsVertical /></p>
                        </div>
                    </div>
                </div>

                <div className='overflow-y-auto'>
                    <div className='flex flex-col px-14 py-3 space-y-3.5 text-sm font-normal'>
                        <p>Dear Students,</p>

                        <p>I hope this message finds you well. I'm pleased to inform you that a new practice project, the "To-Do App," has been recently added to our course dashboard.</p>

                        <p>This project serves as a valuable hands-on exercise to reinforce your learning. It's important to note that no formal submissions are required for this project. We'll be providing a comprehensive solution to aid your understanding.</p>

                        <p> Project Link - To Do App</p>

                        <p> Feel free to explore and engage with this project at your convenience. It's designed to enhance your skills and practical application of the course material.</p>

                        <p>Thank you for your commitment to learning.</p>

                        <p>Best regards,</p>
                        <span>100x</span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MailDeatils
