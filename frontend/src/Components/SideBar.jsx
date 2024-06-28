import React from 'react'
import { GoPencil } from "react-icons/go";
import { MdInbox } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { TbSend2 } from "react-icons/tb";
import { MdOutlineDrafts } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const SidebarItemsList = [
    {
        icons: <MdInbox />,
        text: "Inbox"
    },
    {
        icons: <FaRegStar />,
        text: "Starred"
    },
    {
        icons: <GoClock />,
        text: "Snoozed"
    },
    {
        icons: <TbSend2 />,
        text: "Sent"
    },
    {
        icons: <MdOutlineDrafts />,
        text: "Drafts"
    },
    {
        icons: <MdOutlineKeyboardArrowDown />,
        text: "More"
    },
]

function SideBar() {
    return (
        <div className='w-[15%]'>
            <div className='p-3'>
                <button className='bg-[#C2E7FF] p-4 rounded-xl hover:shadow-xl font-semibold text-[15px]'>
                    <div className='flex gap-3 items-center'>
                        <GoPencil />
                        Compose
                    </div>
                </button>
            </div>
            <div className='flex gap-3 flex-col'>
                {SidebarItemsList.map((items, index) => {
                    return <div key={index}>
                        <div className='flex pl-6 items-center gap-2 hover:bg-gray-200 rounded-r-lg'>
                            <p>{items.icons}</p>
                            <p>{items.text}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default SideBar
