import Flex from "../common/Flex";
import Container from "../common/Container";

const Top = () => {
  return (
    <div className="lg:py-[70px] py-10 bg-[#EEFFF9] lg:rounded-tl-[20%] lg:rounded-br-[20%] mt-15 lg:mt-25">
      <Container>
        <Flex className={"lg:justify-between flex-col lg:flex-row"}>
          <div className="mb-10">
            <h3 className="font-semibold lg:text-[45px] text-3xl lg:w-[437px] w-[280px] lg:leading-[54px] leading-10">
              Take your business to new heights with our top services.
            </h3>
            <p className="text-[#7B7B7B] py-[30px] lg:text-base text-sm leading-[26px] lg:w-[543px] w-[280px] pt-4 pb-6">
              At our company, we pride ourselves on offering a variety of
              services to meet the diverse needs of our clients. Whether you're
              looking for marketing assistance, website design, or IT support,
              we've got you covered
            </p>
            <button className="rounded-[5px] bg-[#06C279] lg:py-3.5 lg:px-6 px-3 py-2 text-white font-semibold cursor-pointer hover:bg-[#DAF6EB] duration-300 lg:text-base text-sm hover:text-[#06C279]">
              Get In Touch Now
            </button>
          </div>
          <Flex className="flex-wrap lg:gap-10 gap-5 justify-center">
            <div className="py-10 px-[72px] rounded-[15px] bg-[#7AE0B9] shadow-newMade text-white text-center font-semibold">
              <img src="/src/assets/topOne.png" alt="" className="mx-auto" />
              <p className="lg:text-xl text-base leading-[30px] pt-4 pb-1">
                Project Done
              </p>
              <h6 className="text-[30px]">1200+</h6>
            </div>
            <div className="py-10 px-[72px] rounded-[15px] bg-white shadow-newMade text-center font-semibold">
              <img src="/src/assets/topTwo.png" alt="" className="mx-auto" />
              <p className="lg:text-xl text-base leading-[30px] pt-4 pb-1">
                Running Work
              </p>
              <h6 className="text-[30px]">120+</h6>
            </div>
            <div className="py-10 px-[72px] rounded-[15px] bg-white shadow-newMade text-center font-semibold">
              <img src="/src/assets/topThr.png" alt="" className="mx-auto" />
              <p className="lg:text-xl text-base leading-[30px] pt-4 pb-1">
                Happy Clients
              </p>
              <h6 className="text-[30px]">500+</h6>
            </div>
            <div className="py-10 px-[72px] rounded-[15px] bg-white shadow-newMade text-center font-semibold">
              <img src="/src/assets/topFor.png" alt="" className="mx-auto" />
              <p className="lg:text-xl text-base leading-[30px] pt-4 pb-1">
                Achievement
              </p>
              <h6 className="text-[30px]">150+</h6>
            </div>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Top;
