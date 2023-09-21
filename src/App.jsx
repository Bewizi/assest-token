import Header from "./components/Header";
import Main from "./components/Main";
import { Imageslider } from "./components/ImageSilder";
import RealEstateDream from "./components/RealEstateDream";
import Differentiators from "./components/Differentiators";
import Explore from "./components/Explore/Explore";
import Findyourpiece from "./components/FindYourpiece/FindYourPiece";
import Testimonal from "./components/Testimonal/Testimonal";

// import 'aos/dist/aos.css'


function App() {
  return (
    <>
      <Header />
      <Main />
      <Imageslider />
      <RealEstateDream />
      <Differentiators />
      <Explore />
      <Findyourpiece />
      <Testimonal />
    </>
  );
}

export default App;
