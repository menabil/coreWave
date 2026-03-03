import Container from "../common/Container";
import Flex from "../common/Flex";
import { FaPlay } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <div className="bg-[#eefff9]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="">
              <h1 className="text-[60px] font-light w-[526px] leading-[71px] text-[#1B1B1B]">
                Empower Your Team <b className="font-bold"> With CoreWave's</b>
              </h1>
              <p className="text-[#717171] text-xl leading-[30px] w-[511px] mt-[37px] mb-[51px]">
                Boost Productivity and Wellness in Your Organization with
                CoreWave's Advanced Tools and Techniques
              </p>
              <div className="flex gap-x-5">
                <button className="rounded-[5px] bg-[#06C279] py-3.5 px-6 text-white font-semibold cursor-pointer hover:bg-transparent hover:text-black border-3 border-[#06C279] duration-300">
                  Explore More
                </button>
                <button className="rounded-[5px] hover:bg-[#06C279] py-3.5 px-6 hover:text-white font-semibold cursor-pointer flex items-center gap-x-3 bg-transparent text-black border-3 border-[#06C279] duration-300">
                  <div className="bg-[#DAF6EB] w-8 h-8 rounded-full text-[#06C279] relative">
                    <FaPlay className="absolute left-[55%] top-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  Watch Video
                </button>
              </div>
            </div>
            <img src="/src/assets/banner.png" alt="www" className="mr-20" />
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Banner;
