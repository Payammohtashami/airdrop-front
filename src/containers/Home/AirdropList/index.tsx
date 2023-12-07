import React from "react";
import Link from "next/link";
import AirdropCard from "@/components/AirdropCard";
import { Button } from "@mui/material";
import { AirdropType, AirdropsStates } from "@/mock/airdrop";
import routes from "@/constant/routes";

const AirdropList = () => {


    return (
        <div className='mb-24 mt-24'>
            <div className="mb-16">
                <h4 className="font-bold text-3xl">Airdrop List</h4>
            </div>
            <div className='grid grid-cols-12 gap-4'>
                {AirdropsStates?.slice(0,6)?.map((item: AirdropType) => (
                    <div key={item.id} className="col-span-12 md:col-span-4 xl:col-span-3">
                        <AirdropCard {...item} />
                    </div>
                ))}
            </div>
            <Link href={routes.airdrop.base} className="flex items-center justify-center mt-12">
                <Button sx={{border: '1px solid', borderRadius: 2.4, px: 2, fontSize: 16}}>
                    Show More
                </Button>
            </Link>
        </div>
    );
};

export default AirdropList;
