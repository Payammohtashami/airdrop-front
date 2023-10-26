import React from 'react';
import Link from 'next/link';
import styles from "./Footer.module.sass";
import { Rocket } from "@/components/Icon/Header";

const Footer: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className='container px-4 mx-auto xl:max-w-screen-xl top-0 py-2 md:py-2 md:px-0'>
                <div className={styles.container}>
                    <div className={styles.photoWrapper}>
                        <img src='/images/telegramBot/telegram.png' />
                    </div>
                    <div  className={styles.detailWrapper}>
                        <div>
                            <span>You can contact us </span><span>for purchase</span>
                        </div>
                        <div className={styles.btnWrapper}>
                            <Link href="#">
                                Buy Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;