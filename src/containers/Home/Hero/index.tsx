import React from 'react';
import Icon from '@/components/Icon';
import Link from 'next/link';
import styles from "./Hero.module.sass";

const Hero: React.FC = () => {
    return (
        <div>
            <div className='relative w-full mb-16 mt-8'>
                <div className='grid justify-center items-center gap-8 mb-10 grid-cols-2'>
                    <div className='col-span-2 lg:col-span-1'>
                        <h3 className={styles.title}>
                            <span>Be the first </span>
                            to hear about pre-sales and unexplored projects.
                        </h3>
                        <div className={styles.socialMediaContainer}>
                            {
                                socialMedia.map((item) => (
                                    <div key={item.id}>
                                        <Link href={item.url} className={styles.socialMedia} target="_blank">
                                            <Icon name={item.icon} size={24} />
                                            <span style={{color: `${item.color}`}}>JOIN {item.name}</span>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='col-span-2 lg:col-span-1' data-aos="fade-up">
                        <div className={styles.bannerWrapper}>
                            <img src="/images/landing/banner.png" />
                        </div>
                        <div className={styles.bannerIcons}>
                            <img src="/images/landing/twitter.png" alt="icons" className={styles.twitter}  data-aos="fade-up"/>
                            <img src="/images/landing/youtube.png" alt="icons" className={styles.youtube}  data-aos="fade-up"/>
                            <img src="/images/landing/discord.png" alt="icons" className={styles.discord}  data-aos="fade-up"/>
                        </div>
                    </div> 
                </div>

                {/* <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <h3>{dataCard[0].Suffix}<AnimatedNumber value={dataCard[0].count} formatValue={(n) => n.toFixed(1)} duration={3000} />{dataCard[0].Prefix}</h3>
                        <div className={styles.cardLine}><small className={styles.colorLine}></small></div>
                        <p>{dataCard[0].detail}</p>
                    </div>
                    <div className={styles.card}>
                        <h3>{dataCard[1].Suffix}<AnimatedNumber value={dataCard[1].count} formatValue={(n) => n.toFixed(1)} duration={3000} />{dataCard[1].Prefix}</h3>
                        <div className={styles.cardLine}><small className={styles.colorLine}></small></div>
                        <p>{dataCard[1].detail}</p>
                    </div>
                    <div className={styles.card}>
                        <h3>{dataCard[2].Suffix}<AnimatedNumber value={dataCard[2].count} formatValue={(n) => n.toFixed(1)} duration={3000} />{dataCard[2].Prefix}</h3>
                        <div className={styles.cardLine}><small className={styles.colorLine}></small></div>
                        <p>{dataCard[2].detail}</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

const socialMedia = [
    {   
        id: 1,
        name: "TELEGRAM",
        color: "#2F9FDB",
        icon: "telegram-5",
        url: "https://t.me/Airdropp_io"
    },
    {
        id: 2,
        name: "DISCORD",
        color: "#5865F2",
        icon: "discord-5",
        url: "https://discord.gg/hKMFJCyJuT"
    },
    {
        id: 3,
        name: "YOUTUBE",
        color: "#FF0000",
        icon: "youtube-5",
        url: "https://youtube.com/c/Airdropp_io"
    },
    {
        id: 4,
        name: "TWITTER",
        color: "#1DA1F2",
        icon: "twitter-5",
        url: "https://mobile.twitter.com/Airdropp_io"
    },
    
]

export default Hero;