import Container from "../common/Container";
import Flex from "../common/Flex";

const About = () => {
  return (
    <div className="py-25">
      <Container>
        <Flex className={"justify-between"}>
          <div className="">
            <h3 className="font-semibold text-[45px] w-[445px] leading-[54px]">
              Experience the power of Corewave
            </h3>
            <p className="text-[#7B7B7B] text-base leading-[26px] w-[550px] pt-7.5 pb-[45px]">
              Are you ready to take your business to the next level? Look no
              further than Corewave. Our innovative technology and expert team
              can help you unlock your business's full potential. By harnessing
              the power of Corewave, you can streamline your operations, improve
              efficiency
            </p>
            <button className="rounded-[5px] bg-[#DAF6EB] py-3.5 px-6 text-[#06C279] font-semibold cursor-pointer hover:bg-transparent border-3 border-[#DAF6EB] duration-300">
              Learn More
            </button>
          </div>
          <img src="/src/assets/about.png" alt="" />
        </Flex>
      </Container>
    </div>
  );
};

export default About;
