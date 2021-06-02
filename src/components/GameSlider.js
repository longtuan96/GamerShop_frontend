import React from "react";
import Slider from "react-slick";
import SmallGameBox from "./SmallGameBox";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
const GameSlider = ({ games, title }) => {
  const NextArrow = (props) => {
    const { onClick } = props;
    return <ChevronRightIcon boxSize="50px" onClick={onClick} />;
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return <ChevronLeftIcon boxSize="50px" onClick={onClick} />;
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <div>
        <p style={{ fontSize: "40px", paddingLeft: "70px" }}>{title}</p>

        {games !== null || games !== undefined || games !== [] ? (
          <Slider
            {...settings}
            style={{ display: "flex", alignItems: "center" }}
          >
            {games.map((item) => (
              <div key={item._id}>
                <SmallGameBox game={item} isWithInfo={true} />
              </div>
            ))}
          </Slider>
        ) : (
          <h1> there is no games</h1>
        )}
      </div>
    </>
  );
};

export default GameSlider;
