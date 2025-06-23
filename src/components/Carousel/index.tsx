import React, { useEffect, useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useScreenType } from '../../hooks/useScreenType';
import { CarouselProps } from './interfaces';
import { CarouselItem } from './components/CarouselItem';

export const Carousel: React.FC<CarouselProps> = ({ title, items }) => {
    const screenType = useScreenType();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [step, setStep] = useState(1);

    const goToNext = () => setCurrentIndex(currentIndex + step);
    const goToPrev = () => setCurrentIndex(currentIndex - step);
    const isAtStart = currentIndex === 0;
    const isAtEnd = currentIndex >= items.length - step;
    const progress = ((currentIndex + step) / items.length) * 100;

    useEffect(() => {
        const { isXs, isSm } = screenType
        if (isXs || isSm) {
            return setStep(1)
        }
        setStep(2)
    }, [screenType])

    return (
        <div className="flex flex-col w-full">
            <p className="text-sm xs:text-sm md:text-lg lg:text-xl font-medium self-start my-4 px-2 w-full xs:w-full md:w-[65%]">{title}</p>
            <div className="relative overflow-hidden flex-grow">
                <div className="flex transition-transform duration-500 box-border"
                    style={{ transform: `translateX(-${currentIndex * 100 / step}%)` }}>
                    {items.map((item, index) =>
                        <CarouselItem key={index} {...item} />)}
                </div>
            </div>
            {/* <div className="flex justify-end my-4">
                <FaArrowLeft width={28} height={28} onClick={!isAtStart ? goToPrev : undefined}
                    className={`mr-4 ${isAtStart ? 'opacity-30' : 'cursor-pointer '}`} />
                <FaArrowRight width={28} height={28} onClick={!isAtEnd ? goToNext : undefined}
                    className={isAtEnd ? 'opacity-30' : 'cursor-pointer'} />
            </div> */}
        </div>
    );
};
