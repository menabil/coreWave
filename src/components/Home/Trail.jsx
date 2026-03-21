import Button from "../common/Button";
import Container from "../common/Container";
import Images from "../common/Images";
import tOne from "/src/assets/trail.png";

const Trail = () => {
  return (
    <div className="bg-[#06c179] py-[86px] relative">
      <Container>
        <h3 className="text-[45px] text-white font-semibold leading-[54px] mb-9.5">
          Don’t worries, start your free trial today!
        </h3>
        <Images imgSrc={tOne} className={"absolute -bottom-3 right-30"} />
        <Button btnText={"Get Free Trial"} className={"font-semibold bg-[#2F2F2F]! border-none"}/>
      </Container>
    </div>
  );
};

export default Trail;
