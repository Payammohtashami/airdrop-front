import React from "react";
import Icon from "../Icon";
import { IconButton } from "@mui/material";

type SwiperControllerPropsType = {
    sliderRef: any,
}
export const SwiperPrevNavigation: React.FC<SwiperControllerPropsType> = ({sliderRef}) => {
    const handlePrev = React.useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef?.current?.swiper.slidePrev();
    }, []);
    return (
        <IconButton onClick={handlePrev}>
            <Icon name="arrow-left" viewBox="0 0 23 16" size={24} />
        </IconButton>
    );
};

export const SwiperNextNavigation: React.FC<SwiperControllerPropsType> = ({sliderRef}) => {
    const handleNext = React.useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    return (
        <IconButton onClick={handleNext}>
            <Icon name="arrow-right" viewBox="0 0 23 16" size={24} />
        </IconButton>
    );
};