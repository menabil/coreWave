import Container from "../common/Container";
import Flex from "../common/Flex";
import Images from "../common/Images";
import pOne from "../../assets/projectOne.png";
import pTwo from "../../assets/projectTwo.png";
import pThr from "../../assets/projectThr.png";

const Project = () => {
  return (
    <div className="lg:mt-[91px] mt-15">
      <Container>
        <h3 className="lg:text-[45px] text-3xl lg:text-center text-[#1B1B1B] font-semibold  lg:leading-[54px] leading-10 capitalize mb-8">
          our latest project
        </h3>
        {/* Product */}
        <Flex className={"mb-8 flex-col lg:flex-row gap-y-5"}>
          <div className="">
            <Images imgSrc={pTwo} />
            <div className="text-center lg:mt-5 mt-2">
              <h5 className="text-[22px] text-[#1B1B1B] font-semibold">
                Portfolio Landing Page
              </h5>
              <p className="lg:text-base text-sm text-[#7B7B7B] mt-2 lg:w-[344px] w-[270px] leading-[22px] mx-auto">
                Web development is the art of creating engaging and visually
                appealing websites{" "}
              </p>
            </div>
          </div>
          <div className="">
            <Images imgSrc={pOne} />
            <div className="text-center lg:mt-5 mt-2">
              <h5 className="text-[22px] text-[#1B1B1B] font-semibold">
                Plant Landing Page
              </h5>
              <p className="lg:text-base text-sm text-[#7B7B7B] mt-2  lg:w-[344px] w-[270px] leading-[22px] mx-auto">
                Web development is the art of creating engaging and visually
                appealing websites{" "}
              </p>
            </div>
          </div>
          <div className="">
            <Images imgSrc={pThr} />
            <div className="text-center lg:mt-5 mt-2">
              <h5 className="text-[22px] text-[#1B1B1B] font-semibold">
                Real Estate Landing Page
              </h5>
              <p className="lg:text-base text-sm text-[#7B7B7B] mt-2  lg:w-[344px] w-[270px] leading-[22px] mx-auto">
                Web development is the art of creating engaging and visually
                appealing websites{" "}
              </p>
            </div>
          </div>
        </Flex>
        {/* Product */}
        <div className="w-[190px] mx-auto">
          <button className="rounded-[5px] bg-[#06C279] py-3.5 px-6 text-white font-semibold cursor-pointer hover:bg-transparent hover:text-black border-3 border-[#06C279] duration-300">
            View All Projects
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Project;
