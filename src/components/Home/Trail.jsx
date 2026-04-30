import Container from "../common/Container";
import Images from "../common/Images";
import tOne from "/src/assets/trail.png";

const Trail = () => {
  return (
    <div className="bg-[#06c179] lg:py-[86px] py-10 relative">
      <Container>
        <h3 className="lg:text-[45px] text-3xl text-white font-semibold lg:leading-[54px] leading-10 mb-9.5">
          Don’t worries, start your free trial today!
        </h3>
        <Images
          imgSrc={tOne}
          className={"absolute -bottom-3 right-30 hidden lg:block"}
        />
        <button
          className={
            "font-semibold bg-[#2F2F2F] lg:text-base text-sm border-none py-3.5 px-6 rounded-[5px] text-white cursor-pointer"
          }
        >
          Get Free Trial
        </button>
      </Container>
    </div>
  );
};

export default Trail;
