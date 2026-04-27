import Container from "../common/Container";
import Flex from "../common/Flex";
import { FaPlay } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <div className="bg-[#eefff9]">
        <Container>
          <Flex className={"lg:justify-between flex-col lg:flex-row"}>
            <div className="mb-10 lg:mb-0">
              <h1 className="lg:text-[60px] text-3xl font-light lg:w-[526px] w-[280px] lg:leading-[71px] leading-10 text-[#1B1B1B]">
                Empower Your Team <b className="font-bold"> With CoreWave's</b>
              </h1>
              <p className="text-[#717171] lg:text-xl text-sm lg:leading-[30px] leading-5 lg:w-[511px] w-[280px] lg:mt-[37px] mt-5 lg:mb-[51px] mb-8">
                Boost Productivity and Wellness in Your Organization with
                CoreWave's Advanced Tools and Techniques
              </p>
              <Flex className="lg:gap-x-5 gap-x-3 lg:text-base text-sm">
                <button className="rounded-[5px] bg-[#06C279] lg:py-3.5 lg:px-6 px-3 py-2 text-white font-semibold cursor-pointer hover:bg-transparent hover:text-black border-3 border-[#06C279] duration-300">
                  Explore More
                </button>
                <button className="rounded-[5px] hover:bg-[#06C279] lg:py-2.5 px-3 py-2 lg:px-6 hover:text-white font-semibold cursor-pointer flex items-center lg:gap-x-3 gap-x-1.5 bg-transparent text-black border-3 border-[#06C279] duration-300">
                  <div className="bg-[#DAF6EB] lg:w-8 w-5 lg:h-8 h-5 rounded-full text-[#06C279] relative">
                    <FaPlay className="absolute left-[55%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] lg:text-base" />
                  </div>
                  Watch Video
                </button>
              </Flex>
            </div>
            <img src="/src/assets/banner.png" alt="www" className="lg:mr-20" />
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Banner;
