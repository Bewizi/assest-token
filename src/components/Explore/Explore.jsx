import { useEffect } from "react";
import AOS from "aos";
import { FiArrowRight } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { LuArrowUpRight } from "react-icons/lu";
import "./Explore.css";
function Explore() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="explore-page">
      <div className="content-flex">
        <div className="text-header">
          <h4>Start Your Token Estate Journey Today!</h4>
        </div>
        <div className="content-p-btn">
          <p>
            Explore our series of catalogue of real estate investment
            opportunities and go in search of your real estate dream with us
          </p>
          <button className="btn-view">
            View All <FiArrowRight className="fi-arrow" />
          </button>
        </div>
      </div>

      <img
        src="images/Luxurious-Duplex-House.png"
        alt="Luxurious Duplex House"
        data-aos="fade-right"
      />

      {/* explore message element */}
      <div className="explore-msg-el" data-aos="fade-left">
        <h5>Residential Luxurious Duplex House</h5>
        <p>
          A perfect blend of modern luxury and cozy comfort. This two-unit
          property presents an exceptional opportunity for investors or extended
          families seeking a harmonious living arrangement
        </p>
        <address>
          <i>
            <IoLocationSharp />
          </i>
          Plot 32 Lekki epe expressway Lagos Nigeria
        </address>
        <div className="areas">
          <a>
            Construction Area<span>( 112 m )</span>
          </a>
          <div>
            <a>
              Living Area<span>1600 square feet ( 148 m )</span>
            </a>
          </div>
        </div>

        {/* key features list element */}
        <div className="key-features-el">
          <h5>Key Features</h5>
          <ul>
            <li>
              <p>Ideal for a family of 5 or 6</p>
            </li>
            <li>
              <p>
                Top-notch construction quality, modern design, and upscale
                finishes
              </p>
            </li>
            <li>
              <p>
                Easy access to major amenities such as shopping malls,
                restaurants, parks, schools, and public transportation.
              </p>
            </li>
            <li>
              <p>
                24/7 security surveillance, controlled access points, and a
                professional property management team.
              </p>
            </li>

            <li>
              <p>Guaranteed durability for one years</p>
            </li>
          </ul>
        </div>
        {/* key features list element */}

        <div className="learn-more">
          <p>Learn More</p>
          <button>
            <LuArrowUpRight className="lu-upright" />
          </button>
        </div>
      </div>
      {/* explore message element */}
    </div>
  );
}

export default Explore;
