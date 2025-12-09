import React, { useState } from "react";
import "./inputLogin.css";

const LoginInput = ({ label = "text", type = "text" }) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState("");

    return (
        <div className="input-login relative w-full mb-6">
            <input
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(value !== "")}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#24BAA1] focus:outline-none focus:ring-0 focus:border-[#24BAA1] peer"
                placeholder=""
            />
            <label htmlFor="floating_outlined" className="absolute text-sm bg-white !px-2 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-gray-900 peer-focus:px-2 peer-focus:text-[#24BAA1] peer-focus:dark:text-[#24BAA1] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{label}</label>
        </div>

    );
};

export default LoginInput;
