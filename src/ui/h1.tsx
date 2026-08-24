/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 24/08/2026 - 16:17:41
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/08/2026
    * - Author          : HP
    * - Modification    : 
**/
import React from "react";

type H1Props = {
  text?: string;
  children?: React.ReactNode;
}

function H1({ text, children }: H1Props) {
  return(
    <h1 className="text-4xl font-bold text-white">
     {text}
     {children}
    </h1>
  );
}

export default H1;