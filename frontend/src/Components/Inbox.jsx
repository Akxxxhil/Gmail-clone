import React, { useState } from 'react'
import { FaRegSquare } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaKeyboard } from "react-icons/fa6";
import { MdInbox } from "react-icons/md";
import { GoTag } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";
import Emails from "./Emails"
const mailType=[
    {
        icons:<MdInbox/>,
        Text:"Primary"
    },
    {
        icons:<GoTag/>,
        Text:"Promotions"
    },
    {
        icons:<FaUserFriends/>,
        Text:"Social"
    },
]

function Inbox() {
    const [selected,setSelected]=useState(0)
    return (
        <div className='flex-1 bg-white rounded-xl'>

            <div className='flex justify-between px-2 py-1'>
                <div className='flex gap-2 items-center'>

                    <div className='flex gap-1'>
                        <FaRegSquare />
                        <IoMdArrowDropdown />
                    </div>
                    <div className='flex gap-2'>
                        <GrPowerReset />
                        <HiOutlineDotsVertical />
                    </div>

                </div>

                <div className='flex gap-2 items-center'>
                    <p>1-50 of 2491</p>
                    <MdKeyboardArrowLeft />
                    <MdKeyboardArrowRight />
                    <FaKeyboard />
                    <IoMdArrowDropdown />

                </div>
            </div>

          <div className='h-90vh overflow-y-auto'>
          <div className='flex items-center'>
                {mailType.map((items,index)=>{
                    return <div key={index}>
                        <button onClick={()=>setSelected(index)}
            className={`${selected === index ? "text-blue-600 border-b-2 border-blue-600":"border-b-transparent" } flex items-center gap-4 p-4 w-52 hover:bg-gray-200 rounded-md`}>
                            <p>{items.icons}</p>
                            <p className='font-semibold text-[15px]'>{items.Text}</p>
                        </button>
                    </div>
                })}
            </div>
          </div>
          <div>
            <Emails/>
          </div>
        </div>
    )
}

export default Inbox
