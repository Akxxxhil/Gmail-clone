import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { TbChartGridDots } from "react-icons/tb";
import Avatar from 'react-avatar';
import { IoSearch } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Navabr() {
    const navigate=useNavigate("")
    return (
        <div>

            <div className=''>

                <div className='flex items-center justify-between px-4 my-2 gap-10'>

                    <div className='flex items-center justify-center gap-3  cursor-pointer'>
                        <div className='hover:bg-gray-200 rounded-full p-2'>
                            <RxHamburgerMenu />
                        </div>
                        <img onClick={()=>navigate("/")} className='w-8' src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="logo" />
                        <h1 onClick={()=>navigate("/")} className='text-2xl font-medium text-gray-600'>Gmail</h1>
                    </div>


                    <div className='w-[50%] mr-6 flex gap-2 bg-[#EAF1FB] rounded-full justify-around px-2 py-3 items-center'>
                    <IoSearch className='cursor-pointer hover:bg-gray-200 rounded-full' size={"24px"} />
                        <input className='w-full bg-[#EAF1FB]' type="text" placeholder='Search Mail' />
                        <TbChartGridDots className='cursor-pointer hover:bg-gray-200 rounded-full' />
                    </div>


                    <div className='flex gap-3 cursor-pointer'>
                        <div className='hover:bg-gray-200 rounded-full p-3'>
                            <AiOutlineQuestionCircle size={"24px"} />
                        </div>
                        <div className='hover:bg-gray-200 rounded-full p-3'>
                            <TbGridDots size={"24px"} />
                        </div>
                        <div className='hover:bg-gray-200 rounded-full p-3'>
                            <IoSettingsOutline size={"24px"} />
                        </div>
                        <div className='hover:bg-gray-200 rounded-full p-2'>
                            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-pE_Y-rtLosto3iU3U6NJIc6IkguglBUoA&s' size="30" round={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navabr
