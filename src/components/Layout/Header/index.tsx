import React, { useEffect, useState } from "react";
import Aos from "aos";
import Icon from "@/components/Icon";
import Link from "next/link";
import Product from "./Product";
import OutsideClickHandler from "react-outside-click-handler";
import { Button, Drawer, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { Discord, Telegram, Twitter, Youtube, List, ListingPolicy, Airdrop, Close, GreenRocket, NewsIcon } from "@/components/Icon/Header";
import "aos/dist/aos.css";

const Header = () => {
    const router = useRouter();
    const [state, setState] = useState(false);
    const [showProduct, setShowProduct] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleDrawer = (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState(open);
    };

    const productHandler = () => {
        setShowProduct(!showProduct);
    };
    
    const handleShowMenu = () => {
        if (showMobileMenu) setShowMobileMenu(false)
        else setShowMobileMenu(true);
    };
    useEffect(() => {
        setShowProduct(false);
        if(showMobileMenu) setShowMobileMenu(false)
    }, [router.route]);

    useEffect(() => {
        Aos.init({duration: 500});
    }, [showProduct]);
    return (
        <header className='container px-4 mx-auto xl:max-w-screen-xl top-0 py-2 md:py-2 md:px-0'>
            <div className='relative h-full'>
                <div className='md:flex justify-between items-center relative mt-3 hidden '>
                    <div className='flex items-center'>
                        <Link href="/">
                            <img className='w-28' src="/images/logo.svg" alt="logo" />
                        </Link>
                        <div className='h-12 w-[1px] mx-6 bg-slate-100'></div>
                        <ul className="flex gap-6">
                            <li className="inline-block">
                                <OutsideClickHandler onOutsideClick={() => setShowProduct(false)}>
                                    <button
                                        className={`font-semibold text-sm text-slate-800 flex items-center gap-1`}
                                        onClick={productHandler}
                                    >
                                        Products
                                        <Icon className={`${showProduct ? 'rotate-180' : 'rotate-0'} transition-all`} name="keyboard-arrow" />
                                    </button>
                                    <div
                                        data-aos="fade-up"
                                        className={showProduct ? 'left-0 top-16 absolute overflow-hidden z-20 rounded-xl w-full min-w-fit bg-white block shadow-lg overflow-x-auto' : 'hidden'}
                                    >
                                        <Product />
                                    </div>
                                </OutsideClickHandler>
                            </li>
                            <li className="h-5 flex items-center">
                                <Link href="/telegram-bot" className="font-semibold text-sm text-slate-800">Telegram Bot</Link>
                            </li>
                            <li className="h-5 flex items-center">
                                <Link href="/news" className="font-semibold text-sm text-slate-800">News & Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <Link href="/contact">
                        <Button className='!rounded-lg !bg-primary-400 !text-white !px-4 hover:!bg-primary-600'>
                            Contact Us
                        </Button>
                    </Link>
                </div>

                <div className="md:hidden">
                    <div className='flex justify-between items-center pt-4'>
                        <Link href="/" >
                            <img className="w-20" src="/images/logo.svg" alt="logo" />
                        </Link>
                        <IconButton>
                            <img src="/images/menu.png" alt="menu" onClick={toggleDrawer(true)} />
                        </IconButton>
                    </div>

                    <Drawer
                        anchor={'left'}
                        open={state}
                        onClose={toggleDrawer(false)}
                    >
                        <ul className="p-4">
                            <li className='flex justify-end'>
                                <img src="/images/close.png" alt="close" onClick={toggleDrawer(false)} />
                            </li>
                            <li className="mt-4">
                                <p className='text-primary-400 font-black text-3xl'>AIRDROP</p>
                                <ul className='mt-4'>
                                    {productList.map((item,index) => (
                                        <li key={index} className="rounded-lg transition-all duration-200 hover:bg-slate-100/70 p-4">
                                            <Link href={item.url} className="flex gap-2">
                                                <item.icon />
                                                <div className="-mt-1">
                                                    <p className='text-slate-900 font-bold'>{item.title}</p>
                                                    <p className='text-xs text-slate-500 mt-1'>{item.description}</p>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="mt-4">
                                <p className='text-primary-400 font-black text-3xl'>LATEST NEWS</p>
                                <ul>
                                    <li className="rounded-lg transition-all duration-200 hover:bg-slate-100/70 p-4">
                                        <Link href="/news" className="flex gap-2">
                                            <NewsIcon />
                                            <div className='-mt-1'>
                                                <p className='text-slate-900 font-bold'>Latest News</p>
                                                <p className='text-xs text-slate-500 mt-1'>
                                                    Check out our latest news about releases and others
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className='flex items-center justify-center'>
                                <ul className='flex gap-2 items-center'>
                                    <Link href="#">
                                        <Telegram size={24} />
                                    </Link>
                                    <Link href="#">
                                        <Discord size={24} />
                                    </Link>
                                    <Link href="#">
                                        <Twitter size={24} />
                                    </Link>
                                    <Link href="#">
                                        <Youtube size={24} />
                                    </Link>
                                </ul>
                            </li>

                            <li>
                                <div className="flex mx-auto mt-6 gap-4 border-[1px] border-primary-400 w-fit px-6 py-3 rounded-xl">
                                    <button className="text-primary-500">For Business</button>
                                    <button className="flex items-center gap-2 text-primary-500">
                                        <GreenRocket size={24} />
                                        Support
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </Drawer>
                </div>
            </div>
        </header>
    );
};

const productList = [
    {
        id: 1,
        icon: List,
        title: "Airdrop List",
        description: "List of latest and live airdrops",
        url: "/airdrop",
        isNew: false,
    },
    {
        id: 2,
        icon: Close,
        title: "Closed Airdrop",
        description: "List of all airdrops released so far",
        url: "/airdrop/closed",
        isNew: false,
    },
    {
        id: 3,
        icon: ListingPolicy,
        title: "Listing Policy",
        description: "Our policy when accepting airdrop projects",
        url: "/listing-policy",
        isNew: false,
    },
    {
        id: 4,
        icon: Airdrop,
        title: "Create Airdrop",
        description: "Start your own airdrop with the decentralized app",
        url: "#",
        isNew: true,
    },
];

export default Header;
