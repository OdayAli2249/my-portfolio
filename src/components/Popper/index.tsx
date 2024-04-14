import { FC } from "react";
import { PropsPopper } from "./interfaces";

const Popper: FC<PropsPopper> = ({ label, content, icon }) => {

  return (
    <div className="flex flex-col items-start rounded-[64px] py-[6px]">
      <div className="flex justify-center items-center">
        <div
          aria-label={label}
          className="size-[36px] bg-blue-400 flex items-center justify-center rounded-[64px]"
        >
          <img src={icon} width={20} height={20} alt="" />
        </div>
        <div className="ml-2 font-bold text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl">
          {label}
        </div>
      </div>
      <div
        className={`top mt-5 border border-blue-400 px-[16px] py-[20px] rounded-[16px] text-center text-xs xs:text-xs sm:text-sm md:text-md lg:text-md text-gray-500`}>
        {content}
      </div>
    </div>
  );
};

export default Popper;
