import React, { useEffect, useState } from "react";
import styles from "./Card.module.sass";
import Link from "next/link";
import useTimer from "@/hooks/useTimer";
import { Live } from "@/components/Icon/Header";

const Card: React.FC<any> = ({ data }) => {

  const [mode, setMode] = useState({});
  const [badge, setBadge] = useState("live");
  const { isActive, count, handleReset, handleStart, timer, } = useTimer();

  const startTimer = () => {
    let date = new Date();
    let isTimerStart = new Date(data?.startDate).getTime() - date.getTime();
    let isTimerEnd = new Date(data?.endDate).getTime() - date.getTime();
    if (isTimerStart > 0) {
      handleStart(isTimerStart / 1000);
      setMode({ start: true });
    } else if (isTimerEnd > 0) {
      handleStart(isTimerEnd / 1000);
      setMode({ end: true });
    }
     else {
      setMode({});
    }
  };
  
  // ------------------------------------------ Effects
  useEffect(() => {
    handleStart(0);
  }, [data]);

  useEffect(() => {
    const date = new Date(data?.startDate);
    const now = new Date();
  }, [data?.startDate, data?.endDate, isActive]);

  useEffect(() => {
    startTimer();
  }, [data]);
  
    useEffect(() => {
      if (count <= 0) {
        handleReset();
        setMode({});
      }
    }, [count]);
    
  useEffect(() => {
    const isData = Object.values(mode).filter((a) => a)[0];
    if (!isActive && !isData) startTimer();
  }, [isActive]);

  useEffect(() => {
    const now = new Date();
    if (
      new Date(data?.startDate).getTime() <= now.getTime() &&
      new Date(data?.endDate).getTime() >= now.getTime()
    ){
      setBadge("live");
    }else if(new Date(data?.startDate).getTime() > now.getTime()) {
      setBadge("live");
    }else if(new Date(data?.endDate).getTime() < now.getTime()) {
      setBadge("closed");
    }
  }, [data?.startDate, data?.endDate, isActive]);

  
    return (
        <div className={styles.wrapper}>
            <div>
                <Link href={`/sub/${data?.slug}`} className={styles.banner}>
                <div
                    className={`${styles.badge}
                    ${badge === "live" && styles.live}`}
                    >
                    <span>{badge === "live" && <Live />}{badge}</span>
                </div>
                <img src={data?.image} />
                </Link>
                <div className={styles.logoWrapper}>
                <Link href={`/sub/${data?.slug}`} className={styles.avatarWrapper}>
                    <img src={data?.logo} />
                </Link>
                <div className={styles.dateWrapper}>
                    <span>{timer?.day}</span>
                    <span>{timer?.hours}</span>
                    <span>{timer?.minutes}</span>
                    <span>{timer?.seconds}</span>
                </div>
                </div>
            </div>
            <div className={styles.dataWrapper}>
                <div>
                <Link href={`/sub/${data?.slug}`}>
                    <h6>{data?.title}</h6>
                </Link>
                <div className={styles.reward}>
                    <span>
                    <img src="/images/landing/rewards.png" />
                    <label>Reward Pool</label>
                    </span>
                    <span>{data.rewardPool}</span>
                </div>
                <div className={styles.reward}>
                    <span>
                    <img src="/images/landing/win.png" />
                    <label>Random Winner</label>
                    </span>
                    <span>
                    {data.winner}
                    </span>
                </div>
                </div>
                <div className={styles.chainLogo}>
                {/* <img src={networks[chain]?.nativeCurrency?.icon} /> */}
                </div>
            </div>
            <div className={styles.btn}>
                <Link href={`${data?.externalLink?.link}`} target="_blank" className={styles.buttonTel}>
                Join Link on {data?.externalLink?.name}
                </Link>
            </div>
        </div>
    );
};

export default Card;
