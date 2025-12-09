import React, { useRef, useEffect } from 'react'
import MessageItem from "./MessageItem";

const ChatBody = ({ messages, onReply, typingUser }) => {
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="flex-1 overflow-y-auto px-4 py-2 custom-scroll relative">
            {messages.map(msg => (
                <MessageItem key={msg.id} message={msg} onReply={onReply} />
            ))}
            <div ref={bottomRef} />
        </div>
    )
}

export default ChatBody
