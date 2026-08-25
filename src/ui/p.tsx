/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 24/08/2026 - 22:12:18
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/08/2026
    * - Author          : HP
    * - Modification    : 
**/
import React from "react";

type PProps = {
  text?: string;
  children?: React.ReactNode;
  className?: string;
}

function P({ text, children, className }: PProps) {
  return(
    <p className={`text-white text-xs mt-4 mb-4 ${className ?? ""}`}>
      {text}
      {children}
    </p>
  );
}

export default P;