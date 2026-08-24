/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 19/08/2026 - 16:40:03
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/08/2026
    * - Author          : HP
    * - Modification    : 
**/
import React from "react";

type ButtonProps = {
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
}

function Button({onClick, className, children }: ButtonProps) {
    return (
        <button onClick={onClick} className={`bg-[#64ffda] text-black rounded-sm hover:opacity-80 active:opacity-80 ${className ?? ""}`}>
            {children}
        </button>
    )
}

export default Button;