import Container from "../common/Container"
import Flex from "../common/Flex"
import Images from "../common/Images"
import pOne from "../../assets/projectOne.png"
import pTwo from "../../assets/projectTwo.png"
import pThr from "../../assets/projectThr.png"
import Button from "../common/Button"

const Project = () => {
    return (
        <div className="mt-[91px] mb-25">
            <Container>
                <h3 className="text-[45px] text-[#1B1B1B] font-semibold leading-[54px] capitalize text-center mb-8">our latest project</h3>
                {/* Product */}
                <Flex className={"mb-8"}>
                    <div className="">
                        <Images imgSrc={pTwo} />
                        <div className="text-center mt-5">
                            <h5 className="text-[22px] text-[#1B1B1B] font-semibold">Portfolio Landing Page</h5>
                            <p className="text-base text-[#7B7B7B] mt-2 w-[344px] leading-[22px] mx-auto">Web development is the art of creating engaging and visually appealing websites </p>
                        </div>
                    </div>
                    <div className="">
                        <Images imgSrc={pOne} />
                        <div className="text-center mt-5">
                            <h5 className="text-[22px] text-[#1B1B1B] font-semibold">Plant Landing Page</h5>
                            <p className="text-base text-[#7B7B7B] mt-2 w-[344px] leading-[22px] mx-auto">Web development is the art of creating engaging and visually appealing websites </p>
                        </div>
                    </div>
                    <div className="">
                        <Images imgSrc={pThr} />
                        <div className="text-center mt-5">
                            <h5 className="text-[22px] text-[#1B1B1B] font-semibold">Real Estate Landing Page</h5>
                            <p className="text-base text-[#7B7B7B] mt-2 w-[344px] leading-[22px] mx-auto">Web development is the art of creating engaging and visually appealing websites </p>
                        </div>
                    </div>
                </Flex>
                {/* Product */}
                <div className="w-[190px] mx-auto">
                    <button className="rounded-[5px] bg-[#06C279] py-3.5 px-6 text-white font-semibold cursor-pointer hover:bg-transparent hover:text-black border-3 border-[#06C279] duration-300">
                        View All Projects
                    </button></div>
            </Container>
        </div>
    )
}

export default Project