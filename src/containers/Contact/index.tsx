import React from 'react';
import Link from 'next/link';
import styles from './Contact.module.sass';
import { Pin, Telegram } from '@/components/Icon/Header';

const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleWrapper}>
                <h2>Contact Us</h2>
                <p>
                    You can choose the following ways to reach us at any time of the day to find 
                    solutions to all your questions, problems and requests. The team will get back to 
                    you as soon as possible and solve your problem in a professional way.
                </p>
            </div>
            <div className={styles.mainSection}>
                <div className={styles.emailWrapper}>
                    <div className={styles.grayBlock}></div>
                    <div>
                        <h4>E-Mail</h4>
                        <p>
                            One of the ways to reach us is via e-mail. Please feel free to share your problems, 
                            requests, suggestions with us. Average response time is 5 hours. Click the link below 
                            and email us now.
                        </p>
                        <Link href="https://mail.google.com/mail/u/0/#sent" target="_blank" className={styles.emailBtn}>
                            <h2>Contact Us Over Mail</h2>
                            <Pin />
                        </Link>
                    </div>
                </div>
                <div className={styles.telegramWrapper}>
                    <div>
                        <h4>Telegram</h4>
                        <p>     
                            Telegram is the easiest way to contact us directly. Please contact us by telegram 
                            for your thoughts, complaints, requests and collaborations.Average response time is 
                            several hours.Click the link below and reach us via telegram.
                        </p>
                        <Link href="https://t.me/Airdropp_io1" className={styles.telegramBtn}>
                            <h2>Contact Us Over Telegram </h2>
                            <Telegram/>
                        </Link>
                    </div>
                    <div className={styles.blueBlock}></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;