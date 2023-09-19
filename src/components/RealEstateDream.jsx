<<<<<<< HEAD
const RealEstateDream = () => {
  return (

    // container of AssetToken combines the power of blockchain technology and the real estate market
    <div className="your-dream-house">

    {/* div containing two images,  two paragraphs, and h4 and ul  */}
      <div className="garden-location">
        <img src="images/beautiful-garden-around-house.png" alt="" />
        <img src="images/location-of-land.png" alt="" />
      </div>
      <div className="achieve">
=======
import { useEffect } from "react";
import AOS from "aos";


const RealEstateDream = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    // container of AssetToken combines the power of blockchain technology and the real estate market
    <div className="your-dream-house">
      {/* div containing two images,  two paragraphs, and h4 and ul  */}
      <div className="garden-location">
        <img
          src="images/beautiful-garden-around-house.png"
          alt="Beautiful Garden Around House"
          data-aos="fade-up-right"
        />
        <img
          src="images/location-of-land.png"
          alt="Location of Land"
          data-aos="fade-up-left"
        />
      </div>
      <div className="achieve" data-aos="flip-right">
>>>>>>> f4db1a7 (new-update)
        <p>We Help You Achieve Your</p>
        <p>Real Estate Dreams</p>
      </div>
      <div className="container-text">
        <h4>
          AssetToken combines the power of blockchain technology and the real
          estate market, offering you a seamless and transparent investment
          experience. we believe that everyone should have the opportunity to
          participate in real estate investments, regardless of their financial
          background or location. That is why we have created a platform that
          allows fractional ownership of premium properties, unlocking access to
          a wide range of investment opportunities.
        </h4>
        <ul>
          <li>
            <span>250+</span>Investors
          </li>
          <li>
            <span>25+</span>Blockchain Expert
          </li>
          <li>
            <span>5+</span>Years Of Experience
          </li>
        </ul>
      </div>
<<<<<<< HEAD
    {/* end of div containing two images,  two paragraphs, and h4 and ul  */}

=======
      {/* end of div containing two images,  two paragraphs, and h4 and ul  */}
>>>>>>> f4db1a7 (new-update)
    </div>
  );
};

export default RealEstateDream;
