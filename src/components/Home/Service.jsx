import Container from "../common/Container";
import Flex from "../common/Flex";

const Service = () => {
  return (
    <div className="py-[70px] bg-[#EEFFF9] rounded-tl-[20%] rounded-br-[20%]">
      <Container>
        <Flex className={"justify-between"}>
          <div className="flex flex-wrap gap-10">
            <div className="pt-[48px] pb-[60px] px-[48px] rounded-[10px] bg-white shadow-newMade mt-[130px]">
              <img src="/src/assets/aOne.png" alt="" />
              <h6 className="text-xl font-semibold py-3.5">Web Development</h6>
              <p className="text-base text-[#7B7B7B] leading-[26px] w-[217px] ">
                Web development is the art of creating engaging and visually
                appealing websites
              </p>
            </div>
            <div className="pt-[48px] pb-[60px] px-[48px] rounded-[10px] bg-[#06C279]/50  shadow-newMade mb-[130px]">
              <img src="/src/assets/aTwo.png" alt="" />
              <h6 className="text-xl font-semibold text-white py-3.5">
                Web Development
              </h6>
              <p className="text-base text-white leading-[26px] w-[217px]">
                Web development is the art of creating engaging and visually
                appealing websites
              </p>
            </div>
            <div className="pt-[48px] pb-[60px] px-[48px] rounded-[10px] bg-white shadow-newMade mb-[130px]">
              <img src="/src/assets/aThr.png" alt="" />
              <h6 className="text-xl font-semibold py-3.5">Web Development</h6>
              <p className="text-base text-[#7B7B7B] leading-[26px] w-[217px] ">
                Web development is the art of creating engaging and visually
                appealing websites
              </p>
            </div>
            <div className="pt-[48px] pb-[60px] px-[48px] rounded-[10px] bg-white  shadow-newMade mb-[260px] -mt-[130px]">
              <img src="/src/assets/aFor.png" alt="" />
              <h6 className="text-xl font-semibold py-3.5">Web Development</h6>
              <p className="text-base text-[#7B7B7B] leading-[26px] w-[217px]">
                Web development is the art of creating engaging and visually
                appealing websites
              </p>
            </div>
          </div>
          <div className="">
            <h3 className="text-[45px] font-semibold leading-[54px] w-[437px]">
              We offer a variety of services such as
            </h3>
            <p className="text-[#7B7B7B] leading-[26px] text-base w-[543px] py-[30px]">
              At our company, we pride ourselves on offering a variety of
              services to meet the diverse needs of our clients. Whether you're
              looking for marketing assistance, website design, or IT support,
              we've got you covered
            </p>
            <button className="rounded-[5px] bg-[#DAF6EB] py-3.5 px-6 text-[#06C279] font-semibold cursor-pointer hover:bg-transparent border-3 border-[#DAF6EB] duration-300">
              All Services
            </button>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Service;
