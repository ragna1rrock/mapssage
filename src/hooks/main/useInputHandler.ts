import React, { useState } from "react";

export const useInputHandler = () => {
    const [message, setMessage] = useState("");

    // 입력값 변경 핸들러
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    return {
        message,
        handleChange,
    };
};
