import { useEffect, useState } from "react";

export const TodoDateTime = () => {
    const [dateTime, setDateTime] = useState("");

useEffect(() => {
        const interval = setInterval(() => {
          const now: any = new Date();
          const formatDate = now.toLocaleDateString();
          const formatTime = now.toLocaleTimeString();
          setDateTime(`${formatDate} -  ${formatTime}`);
        }, 1000);
        return () => clearInterval(interval);
      });
    
    return(
        <>
         <h1 className="text-[1.5rem] pb-4 pl-[0.4rem]">{dateTime}</h1>
        </>
    )
}