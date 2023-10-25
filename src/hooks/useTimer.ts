import React, { useState, useEffect, useRef } from "react"

const formatTime = (timer: any) => {
    timer = timer || 0
    let AllMinutes: any = `${Math.floor(timer / 60)}`;
    let day: any = `${Math.floor(AllMinutes / 1440)}`;
    let hours: any = `0${Math.floor((AllMinutes - (day * 1440))/60)}`.slice(-2);
    let minutes: any = `0${AllMinutes % 60}`.slice(-2);
    let seconds: any = `0${(timer % 60)}`.slice(-2);
    
    return { seconds: seconds || '00', minutes: minutes || '00', hours: hours || '00' , day: day || "00",AllMinutes }
}

const useTimer = () => {
    const [timer, setTimer] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const countRef: any = useRef(null)

    const handleStart = (time: any) => {
        let newTime = Math.floor(time) || 0;
        if (isActive) return;
        setIsActive(true);
        setIsPaused(false);
        setTimer(newTime--)
        countRef.current = setInterval(() => {
            setTimer(newTime--)
        }, 1000)
    }

    const handlePause = () => {
        clearInterval(countRef.current)
        setIsPaused(true)
        setIsActive(false);
    }

    const handleResume = () => {
        setIsActive(true);
        setIsPaused(false);
        countRef.current = setInterval(() => {
            setTimer((timer) => timer - 1)
        }, 1000)
    }

    const handleReset = () => {
        clearInterval(countRef.current)
        setIsActive(false)
        setIsPaused(false)
        setTimer(0)
    }

    return { timer: formatTime(timer), count: timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset }
}



export default useTimer;