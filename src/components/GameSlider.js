import React from "react";
import Slider from "react-slick";
import SmallGameBox from "./SmallGameBox";

const GameSlider = ({ games, title }) => {
  const settings = {
    dots: false,

    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <>
      <div>
        <h1>{title}</h1>
        {games !== null || games !== undefined || games !== [] ? (
          <Slider {...settings}>
            {games.map((item) => (
              <div>
                <SmallGameBox game={item} />
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
