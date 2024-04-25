import heroImg1 from "./Assets/bostoninnovations.svg";
import "./animate.css"

function Hero() {
  return (
    <div className="h-[100vh] bg-blue-200 ">
      <div className="">
        <img
          class="invisible md:visible md:mt-[3%] z-0 w-full pulse"
          src={heroImg1}
          alt="Image Description"
        />
        
      </div>
    </div>
  );
}

export default Hero;
