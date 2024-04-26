import heroImg1 from "./Assets/bostonInnovations.svg";
import "./animate.css"

function Hero() {
  return (
    <div className="h-[103vh] bg-black">
      <div className="h-screen flex items-center justify-center ">
        <img
          className="transform scale-50 pulse "
          src={heroImg1}
          alt="Image Description"
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
