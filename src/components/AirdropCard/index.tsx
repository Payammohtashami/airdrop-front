import React, { useEffect, useState } from "react";
import Link from "next/link";
import useTimer from "@/hooks/useTimer";
import { Live } from "@/components/Icon/Header";
import { Avatar, Button } from "@mui/material";

const Card: React.FC<any> = ({ data }) => {
    const { handleStart, timer, handleResume } = useTimer();
    
    useEffect(() => {
        handleStart(data?.startAt);
        handleResume()
    }, []);
  
    return (
        <div style={{boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.06)'}} className="bg-white overflow-hidden rounded-2xl">
            <div className="relative">
                <Link href={`/sub/${data?.slug}`} className='h-64 relative bg-no-repeat'>
                    <div className='absolute bg-green-500 flex rounded-full top-2 right-2 px-2.5 py-0.5 items-center'>
                        <Live />
                        <span className="text-white font-bold">{data?.status}</span>
                    </div>
                    <img src={data?.image} className="object-cover object-center h-full w-full" />
                </Link>
                <div className='p-4 flex w-full justify-between items-center absolute -bottom-11'>
                    <Link href={`/sub/${data?.slug}`}>
                        <Avatar src={data?.logo} sx={{height: 64, width: 64, bgcolor: '#1C002E'}} className="border-2 border-primary-400">
                            {' '}
                        </Avatar>
                    </Link>
                    <div className='flex items-center gap-2'>
                        <span className="bg-white w-8 h-8 text-center rounded shadow font-bold flex items-center justify-center">{timer?.day}</span>
                        <span className="bg-white w-8 h-8 text-center rounded shadow font-bold flex items-center justify-center">{timer?.hours}</span>
                        <span className="bg-white w-8 h-8 text-center rounded shadow font-bold flex items-center justify-center">{timer?.minutes}</span>
                        <span className="bg-white w-8 h-8 text-center rounded shadow font-bold flex items-center justify-center">{timer?.seconds}</span>
                    </div>
                </div>
            </div>
            <div className='p-4 mt-6'>
                <div>
                    <div className="flex justify-between items-center">
                        <Link href={`/sub/${data?.slug}`}>
                            <h6 className="text-slate-900 font-bold text-xl">{data?.title}</h6>
                        </Link>
                        <Avatar sx={{width: 28, height: 28}}>{" "}</Avatar>
                    </div>
                    <div className="mt-4 flex flex-col gap-4">
                        <div>
                            <div className="flex items-center gap-2">
                                <img src="/images/landing/rewards.png" className="w-4 h-fit" />
                                <label className="text-slate-400 text-sm font-medium">Reward Pool</label>
                            </div>
                            <span className="text-xl text-slate-800">{data.rewardPool}</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <img src="/images/landing/win.png" className="w-4 h-fit" />
                                <label className="text-slate-400 text-sm font-medium">Random Winner</label>
                            </div>
                            <span className="text-xl text-slate-800">{data.winner}</span>
                        </div>
                    </div>
                </div>
                <Link href={data?.url}>
                    <Button sx={{border: '1px solid'}} className="!rounded-xl !py-3 !text-sm !font-medium !border-primary-500 !w-full !text-primary-500 !mt-4 hover:!bg-primary-500 hover:!text-white">
                        Join Link on {data?.title}
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Card;
