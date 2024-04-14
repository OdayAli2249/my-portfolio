import { useLocation, useNavigate } from "react-router-dom";
import { tags } from "../../../utils/constants";
import { CarouselItemProps } from "../interfaces";

export const CarouselItem: React.FC<CarouselItemProps> = ({ title, subtitle, icon, items }) => {
    const location = useLocation();
    const navigator = useNavigate();
    const _items = items ? Array.from(tags.entries()).filter((entry) => items.includes(entry[0])) : undefined;

    return (
        <div className='flex-none w-full md:w-1/2 p-1'>
            <div className="py-2 p-2 xs:p-2 md:p-4 rounded-md bg-slate-100 h-full">
                <div className="flex flex-row items-start">
                    <img src={icon} className='w-[21px] h-[21px] xs:w-[21px] xs:h-[21px] md:w-[28px] md:h-[28px]' alt="" />
                    <div className="flex flex-col ml-4">
                        <h2 className="text-xs xs:text-xs sm:text-lg md:text-xl lg:text-2xl mb-4 font-medium">{title}</h2>
                        <p className="text-xs xs:text-xs md:text-sm lg:text-md text-gray-500">{subtitle}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {_items && _items.map((item) => (
                                <div key={item[0]} onClick={() => {
                                    const currentSearchParams = new URLSearchParams(location.search);
                                    currentSearchParams.set('tag', item[0].toString());
                                    navigator(`/my-portfolio/projects?${currentSearchParams.toString()}`);
                                }}
                                    className={`cursor-pointer p-1 rounded-lg bg-gray-200 flex items-center text-gray-700`}>
                                    <span>{item[1]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
