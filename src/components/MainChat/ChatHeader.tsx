import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Search, Phone } from "lucide-react";

const ChatHeader = ({ avatar, name, isGroup, onShowMembers }) => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="w-full flex justify-between items-center px-4 py-3 
                    bg-white/70 backdrop-blur-md border-b border-b-gray-200">

      <div className="flex items-center gap-3">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
        <div className='flex flex-col gap-0.5'>
          <span className="font-bold text-gray-800 text-lg">{name}</span>
          {isGroup && (
            <span
              className='text-sm text-gray-400 cursor-pointer hover:underline'
              onClick={onShowMembers}
            >
              3 Member
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-0.5 relative">
        <button className="p-4 rounded-full hover:bg-gray-100 transition cursor-pointer">
          <Phone className="w-5 h-5 text-gray-600" />
        </button>

        <div className="flex items-center gap-2">
          {isSearching && (
            <motion.input
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 150, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              type="text"
              placeholder="Search..."
              className="border-b border-b-[#24BAA1] rounded-sm px-2 py-1 text-sm outline-none"
            />
          )}

          <button
            onClick={() => setIsSearching(!isSearching)}
            className="p-4 rounded-full hover:bg-gray-100 transition cursor-pointer"
          >
            <Search className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader
