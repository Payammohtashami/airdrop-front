import React from 'react';
import styles from './styles.module.sass';
import CountUp from 'react-countup';

const Statistics = () => {
    const statisticsData = [
        {
            id: 'stats-1',
            title: 'Published Projects',
            value: 255,
            valueSuffix: '',
            direction: 'left',
            color: '#84DCC6',
        },
        {
            id: 'stats-2',
            title: 'Total Active Users',
            value: 300,
            valueSuffix: 'K',
            direction: 'center',
            color: '#FF686B',
        },
        {
            id: 'stats-3',
            title: 'Total Airdrop Participation',
            value: 15.3,
            valueSuffix: 'M',
            direction: 'right',
            color: '#9381FF',
        },
    ];

    return (
        <div className={styles.cardContainer}>
            {statisticsData?.map((item) => (
                <div className={styles.card} key={item?.id}>
                    <h3>
                        <CountUp
                            decimals={1}
                            end={item.value} 
                            duration={2.75}
                        />
                        {item.valueSuffix}
                    </h3>
                    <div className={styles.cardLine}>
                        <small className={styles.colorLine}></small>
                    </div>
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    );
};

export default Statistics;