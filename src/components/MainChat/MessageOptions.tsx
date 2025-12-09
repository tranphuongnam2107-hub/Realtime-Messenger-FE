import React, { useState, useRef, useEffect } from 'react'
import { MoreVertical } from "lucide-react";

const MessageOptions = ({ isMine = false, position = "right", onReply, onDelete }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={ref}>
            <button
                className="p-1 rounded-full hover:bg-gray-200"
                onClick={() => setOpen(!open)}
            >
                <MoreVertical className="w-4 h-4 text-gray-500" />
            </button>

            {open && (
                <div
                    className={`absolute overflow-hidden top-full mt-1 w-40 bg-white border border-gray-100 rounded-lg shadow-lg z-50 
                    ${position === "right" ? "right-0" : "left-0"}`}
                >
                    <button
                        onClick={onReply}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                        Reply
                    </button>

                    {isMine && (
                        <button
                            onClick={onReply}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                            Restore
                        </button>
                    )}

                    <button
                        onClick={onDelete}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-500"
                    >
                        Delete in my side
                    </button>
                </div>
            )}
        </div>
    )
}

export default MessageOptions
