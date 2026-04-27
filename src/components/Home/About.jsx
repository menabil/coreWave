import Container from "../common/Container";
import Flex from "../common/Flex";

const About = () => {
  return (
    <div className="lg:py-25 py-15">
      <Container>
        <Flex className={"lg:justify-between flex-col lg:flex-row"}>
          <div className="mb-10 lg:mb-0">
            <h3 className="font-semibold lg:text-[45px] text-3xl lg:w-[445px] w-[280px] lg:leading-[54px] leading-10">
              Experience the power of Corewave
            </h3>
            <p className="text-[#7B7B7B] lg:text-base text-sm leading-[26px] lg:w-[550px] w-[280px] lg:pt-7.5 lg:pb-[45px] pt-4 pb-6">
              Are you ready to take your business to the next level? Look no
              further than Corewave. Our innovative technology and expert team
              can help you unlock your business's full potential. By harnessing
              the power of Corewave, you can streamline your operations, improve
              efficiency
            </p>
            <button className="rounded-[5px] bg-[#DAF6EB] lg:py-3.5 lg:px-6 px-3 py-2 text-[#06C279] font-semibold cursor-pointer hover:bg-transparent border-3 border-[#DAF6EB] duration-300 lg:text-base text-sm">
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
