import Container from "../common/Container";
import Flex from "../common/Flex";

const Service = () => {
  return (
    <div className="lg:py-[70px] py-10 bg-[#EEFFF9] lg:rounded-tl-[20%] lg:rounded-br-[20%]">
      <Container>
        <Flex
          className={"lg:justify-between flex-col-reverse lg:flex-row"}
        >
          <div className="flex flex-wrap lg:gap-10 gap-5 justify-center">
            <div className="lg:pt-12 lg:pb-[60px] lg:px-12 px-7 pt-7 pb-10 rounded-[10px] bg-white shadow-newMade">
              <img src="/src/assets/aOne.png" alt="" />
              <h6 className="text-xl font-semibold py-3.5">Web Development</h6>
              <p className="lg:text-base text-sm text-[#7B7B7B] leading-[26px] w-[217px] ">
                Web development is the art of creating engaging and visually
                appealing websites
              </p>
            </div>
            <div className="lg:pt-12 lg:pb-[60px] lg:px-12 px-7 pt-7 pb-10 rounded-[10px] bg-[#06C279]/50 shadow-newMade">
              <img src="/src/assets/aTwo.png" alt="" />
              <h6 className="text-xl font-semibold text-white py-3.5">
                Web Development
              </h6>
              <p className="lg:text-base text-sm text-white leading-[26px] w-[217px]">
                Web development is the art of creating engaging and visually
                appealing websites
              </p>
            </div>
            <div className="lg:pt-12 lg:pb-[60px] lg:px-12 px-7 pt-7 pb-10 rounded-[10px] bg-white shadow-newMade">
              <img src="/src/assets/aThr.png" alt="" />
              <h6 className="text-xl font-semibold py-3.5">Web Development</h6>
              <p className="lg:text-base text-sm text-[#7B7B7B] leading-[26px] w-[217px] ">
                Web development is the art of creating engaging and visually
                appealing websites
              </p>
            </div>
            <div className="lg:pt-12 lg:pb-[60px] lg:px-12 px-7 pt-7 pb-10 rounded-[10px] bg-white  shadow-newMade">
              <img src="/src/assets/aFor.png" alt="" />
              <h6 className="text-xl font-semibold py-3.5">Web Development</h6>
              <p className="lg:text-base text-sm text-[#7B7B7B] leading-[26px] w-[217px]">
                Web development is the art of creating engaging and visually
                appealing websites
              </p>
            </div>
          </div>
          <div className="mb-10">
            <h3 className="font-semibold lg:text-[45px] text-3xl lg:w-[437px] w-[280px] lg:leading-[54px] leading-10">
              We offer a variety of services such as
            </h3>
            <p className="text-[#7B7B7B] py-[30px] lg:text-base text-sm leading-[26px] lg:w-[543px] w-[280px] pt-4 pb-6">
              At our company, we pride ourselves on offering a variety of
              services to meet the diverse needs of our clients. Whether you're
              looking for marketing assistance, website design, or IT support,
              we've got you covered
            </p>
            <button className="rounded-[5px] bg-[#DAF6EB] lg:py-3.5 lg:px-6 px-3 py-2 text-[#06C279] font-semibold cursor-pointer hover:bg-transparent border-3 border-[#DAF6EB] duration-300 lg:text-base text-sm">
              All Services
            </button>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Service;
