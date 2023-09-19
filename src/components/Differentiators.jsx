import { useEffect } from "react";
import AOS from "aos";


const bigStepData = [
  {
    id: "01",
    header: "Diversification and Portfolio Management",
    paragraphs:
      "Diversify your real estate portfolio across different regions and markets, all while enjoying the familiarity of our user-friendly platform. From commercial hubs to serene residential spaces, explore properties that align with your investment goals.",
  },
  {
    id: "02",
    header: "Fractional Ownership",
    paragraphs:
      "Embrace a world where you can invest in high-value properties without breaking the bank. Our tokenization model divides properties into easily manageable fractions, allowing you to diversify your portfolio and maximize returns like never before.",
  },
  {
    id: "03",
    header: "Accessibility and Liquidity",
    paragraphs:
      "Unlike traditional real estate investments, our tokenized approach introduces liquidity to the market. Investors can buy and sell tokens  on our secure platform representing their ownership in real estate assets on our platform, providing an opportunity to quickly access funds when needed.",
  },
  {
    id: "04",
    header: "Transparency and Security",
    paragraphs:
      "Your peace of mind is our top priority. We prioritize transparency and security in all our operations. Through blockchain technology and smart contracts, we ensure that every transaction and ownership transfer is recorded on an immutable ledger, creating a transparent and tamper-proof system. Additionally, we implement robust security measures to protect our investors' personal and financial information against fraud.",
  },
  {
    id: "05",
    header: "Education and Support",
    paragraphs:
      "We believe in empowering our investors with knowledge and support. Our platform provides educational resources, market insights, and investment guides to help investors make informed decisions. Furthermore, our dedicated customer support team is available to address any questions or concerns you may have throughout your investment journey.",
  },
  {
    id: "06",
    header: "Professional Management",
    paragraphs:
      "We have a team of experienced real estate professionals and investment specialists who meticulously research and select the best investment opportunities for our platform. Our team actively manages the properties and continuously monitors market trends to optimize returns for our investors. You can rely on our expertise and industry knowledge to make informed investment decisions.",
  },
];

function Differentiators() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container-bigstep">
      <div className="bigstep-text-img">
        <div className="el-text" data-aos="fade-down">
          <p>What Are Our Differentiators</p>
          <h4>Take a Big Step Into The Future Of Investment</h4>
        </div>
        <img src="images/vrGirl 2.png" alt="VrGirl" data-aos="fade-right" />
      </div>
      <div className="line-horizontal-1"></div>
      <div className="line-horizontal-2"></div>
      <div className="line-vertical-1"></div>
      <div className="line-vertical-2"></div>
      <div className="line-vertical-3"></div>
      <div className="line-vertical-4"></div>

      <div className="grid-element">
        {bigStepData.map((bigStepObj) => (
          <div key={bigStepObj.id}>
            <span>{bigStepObj.id}</span>
            <h4>{bigStepObj.header}</h4>
            <p>{bigStepObj.paragraphs}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Differentiators;
