import logo from "./Assets/bostonLogoNav.svg";
import logo1 from "./Assets/outline.svg";
import "./animate.css"

function Hero() {
  return (
    <div className="h-[103vh] bg-black">
      <div className="h-screen flex items-center justify-center  ">
      <img
            className="transform scale-50 pulse absolute "
            src={logo}
            alt="Image Description"
          />
          <img
            className="transform scale-50 pulse absolute "
            src={logo1}
            alt="Image Description"
            style={{ zIndex: 1 }}
          />
        







        <div class="z-10 absolute flex flex-col items-center justify-center">
          <h2 class="text-8xl font-extrabold text-white">Boston Innovations</h2>
          <p class="text-3xl font-italic text-white">The Future Reimagined</p>
        </div>

      </div>
    </div >

  );
}

export default Hero;
