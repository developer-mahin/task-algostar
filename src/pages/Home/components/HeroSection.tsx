import Container from "../../../components/Shared/Container";
import "./style.css";

const HeroSection = () => {
  return (
    <div className="hero w-full lg:h-[90vh] h-[60vh] lg:bg-center bg-left bg-no-repeat bg-contain">
      <Container>
        <div className="grid lg:grid-cols-2 lg:h-[80vh] h-[50vh] items-center justify-center">
          <div className=""></div>
          <div className="">
            <p className="w-fit px-4 py-1 bg-[#00000090] text-white rounded">
              Shop Fashion
            </p>
            <h3 className="lg:text-[46px] font-semibold text-[28px] capitalize text-white py-2.5 lg:leading-[60px]">
              Style Meets Innovation: Shop Fashion and Electronics at Unbeatable
              Prices!
            </h3>
            <p className="text-xl my-2.5 text-white">
              Gift they will love-guaranteed!
            </p>
            <div className="mt-[50px] flex items-center gap-8">
              <button className="px-5 py-2 bg-white font-medium cursor-pointer rounded-lg">
                Buy Now
              </button>
              <div>
                <button className="px-6 py-2 border text-white border-white cursor-pointer rounded-lg">
                  More Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
