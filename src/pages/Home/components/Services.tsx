import { FC } from "react";
import { ServicesProps } from "../interfaces";
import Popper from "../../../components/Popper";

export const Services: FC<ServicesProps> = ({
    title,
    headerText,
    subtitle,
    srcImage,
    popperLevelTop,
    popperLevelCenter,
    popperLevelBottom,
}) => {
    return (
        <div className="max-w-7xl mx-auto w-full flex flex-col items-start px-2 xs:px-2 sm:px-4 md:px-8 lg:px-24">
            <h1 className="text-md xs:text-md md:text-lg lg:text-2xl font-bold text-blue-500 !leading-relaxed py-8 xs:py-8 sm:py-12 md:py-16 lg:py-16" >
                {title}
            </h1>
            <div className="flex flex-col size-full items-center mb-16">
                <div className="text-center max-w-2xl mx-4 md:mx-0 mb-8">
                    <div className="md:font-bolder md:text-xxxl text-sm font-[700] text-black">
                        {headerText}
                    </div>
                    <div className="text-xs xs:text-xs md:text-sm lg:text-md text-gray-500">
                        {subtitle}
                    </div>
                </div>

                <div className="w-full grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 gap-2">
                    {popperLevelTop.map((item) => (
                        <>
                            <Popper
                                label={item.label}
                                content={item.content}
                                key={item.label}
                                icon = {item.icon}
                            />
                        </>
                    ))}
                </div>
                <div className="w-full flex justify-center">
                    {popperLevelCenter.map((item) => (
                        <>
                            <Popper
                                label={item.label}
                                content={item.content}
                                key={item.label}
                                icon = {item.icon}
                            />
                        </>
                    ))}
                </div>
                <div className="w-full grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 gap-2">
                    {popperLevelBottom.map((item) => (
                        <>
                            <Popper
                                label={item.label}
                                content={item.content}
                                key={item.label}
                                icon = {item.icon}
                            />
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};
