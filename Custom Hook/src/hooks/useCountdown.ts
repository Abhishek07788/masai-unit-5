import React, { useRef, useState } from 'react'

const useCountdown = (StartFrom:number) => {

    const [time, setTime] = useState(StartFrom)
    const timerId = useRef<any>(null)

    const start = () =>{
        if(!timerId.current){            
            timerId.current = setInterval(()=>{
                setTime((prevTime) =>{
                    if(prevTime <=0){
                        clearTimeout(timerId.current)
                        return 0;
                    }else{
                        return prevTime - 1
                    }
                });
            },1000);
        }
    }

    const pause = () =>{
        clearInterval(timerId.current);
        timerId.current = null;
    };

    const reset = () =>{
        clearInterval(timerId.current);
        setTime(StartFrom);
    }

return { time, start, pause, reset}
}
export default useCountdown