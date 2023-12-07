import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './body.module.sass';
import { Copy, Live } from '@/components/Icon/Header';
import { Tooltip } from '@mui/material';
import { isoToDate } from '@/utils/functions';


const Body: React.FC<any> = ({data}) => {
    const [contract, setContract] = useState("");
    const [copyText, setCopyText] = useState("Click To Clipboard");
    const [badge, setBadge] = useState("live");
    const whitepaper = `${data?.whitepaper?.slice(0,10)} ... ${data?.whitepaper?.slice(-6,-1)}`
    const website = `${data?.website?.slice(0,10)} ... ${data?.website?.slice(-6,-1)}`

    const showId = (id: string) => {
        const result = id?.slice(0, 7) + "..." + id?.slice(-8, -1);
        return result;
    };

    const numberFromString = data?.referanceReward?.split(" ")[0];
    const reward = Number(numberFromString)?.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });

      
    const copy = () => {
        navigator.clipboard.writeText(contract);
        setCopyText("copied: " + showId(contract));
    };

    useEffect(() => {
        setContract(data?.contract);
      }, [data]);
    return (
        <div className={styles.wrapper}>
            <div className={styles.bodyWrapper}>
                <div
                    className={`
                        ${styles.badge}
                        ${badge === "closed" && styles.closed}
                        ${badge === "upcoming" && styles.upcoming}
                        ${badge === "live" && styles.live}
                    `}
                    >
                    {badge === "live" && <Live />}
                    <span>{badge}</span>
                </div>
                <img src={data?.image} />
            </div>
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <tr>
                        <td>Name</td>
                        <td>{data?.title}</td>
                    </tr>
                    <tr>
                        <td>Symbol</td>
                        <td>{data?.symbol}</td>
                    </tr>
                    <tr>
                        <td>Max Supply</td>
                        <td>{data?.maxSupply}</td>
                    </tr>
                    <tr>
                        <td>Blockcahin</td>
                        <td>{data?.chain}</td>
                    </tr>
                    <tr>
                        <td>Access Type</td>
                        <td>{data?.accessType}</td>
                    </tr>
                    <tr>
                        <td>Total Reward</td>
                        <td>{data?.rewardPool}</td>
                    </tr>
                    
                    <tr>
                        <td>Reference Winner</td>
                        <td>{data?.referanceWinner}</td>
                    </tr>
                    <tr>
                        <td>White Paper</td>
                        <td><Link href={data?.whitepaper ?? '#'} target="_blank">{whitepaper}</Link></td>
                    </tr>
                    <tr>
                        <td>WebSite</td>
                        <td><Link href={data?.website ?? '#'} target="_blank">{website}</Link></td>
                    </tr>
                    <tr>
                        <td>Contract</td>
                        <td>
                            <Tooltip title={copyText}>
                                <button onClick={copy} className='flex justify-end gap-2 items-center w-full'>
                                    {showId(contract)}<Copy />
                                </button>
                            </Tooltip>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={styles.descriptionWrapper}>
                <h3 className={styles.descriptionTitle}>Description</h3>
                <div>
                    <p>MetaXgaming will develop in house NFT Marketplace for MMO, P2E games including metacar arena war game, battleground, car racing game and will develop planet MetaX.</p>
                    <p>MetaXgaming will develop in house NFT Marketplace for MMO, P2E games including metacar arena war game, battleground, car racing game and will develop planet MetaX.</p>
                    <p>MetaXgaming will develop in house NFT Marketplace for MMO, P2E games including metacar arena war game, battleground, car racing game and will develop planet MetaX.</p>
                    <p>MetaXgaming will develop in house NFT Marketplace for MMO, P2E games including metacar arena war game, battleground, car racing game and will develop planet MetaX.</p>
                </div>
            </div>
            <div className={styles.rewardWrapper}>
                <span>TOTAL REWARD</span>
                <h4 className={styles.rewardCount}>$25000</h4>
                <table className={styles.rewardTable}>
                    <tr>
                        <td>Airdrop End Date</td>
                        <td>2022-05-01 / 23:30</td>
                    </tr>
                    <tr>
                        <td>Distribution Date</td>
                        <td>05-05-2022</td>
                    </tr>
                </table>
                <div className={styles.rewardBtn}>
                    <Link href={`${data?.externalLink?.link}`}>
                        Join Link on {data?.externalLink?.name}
                    </Link>
                </div>
            </div>
            
        </div>
    );
};

export default Body;