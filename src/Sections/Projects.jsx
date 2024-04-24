import React from "react";
import Footer from "./Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const InfoCard = ({ title, description, imageUrl }) => {
  return (
    <div className="w-96 h-90  rounded-lg overflow-hidden shadow-lg mx-6  flex flex-col">
      <div className="p-4 flex-1 flex flex-col ">
        <div>
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base mb-4">{description}</p>
        </div>
        <div className="">
          <img
            className="w-full h-full object-cover rounded"
            src={imageUrl}
            alt="Card image"
          />
        </div>
      </div>
    </div>
  );
};

function Projects() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    adaptiveHeight: false,
    centerMode: true,
    className: "",
    centerPadding: "550px"
  };
  return (
    <div className="mt-32 items-center">
      <div className="text-center">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
          Current Projects
        </h1>

      </div>

      <div className="flex flex-col items-center justify-center mt-32 mb-32">
        <div className="">
          <div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg w-full max-w-[76rem] flex-row">
            <div class="relative w-6/12 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
              <img
                src="https://www.genengnews.com/wp-content/uploads/2019/01/GettyImages-1040300740.jpg"
                alt="card-image"
                class="object-cover w-full h-full"
              />
            </div>
            <div class="p-6">
              <h6 class="block mb-4 font-sans text-lg antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                Pharmaceutical Research
              </h6>
              <h4 class="block mb-4 font-sans text-4xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Caluclating and documenting variations from CRISPR genetic
              </h4>
              <p class="block mb-8 font-sans text-lg antialiased font-normal leading-relaxed text-gray-700">
                Using data collected from the Human Genome Project
                and custom computer systems, we are engaged in large scale
                data analysis online of genetic variation from CRISPR-Cas9 modifications
                such as: DNA deletion and DNA insertion.

              </p>
            </div>
          </div>
        </div>




      </div>

      <div className=" ">
        <Slider {...settings}>

          <InfoCard
            title="Medical Technology Development"
            description="After hearing about the lack of medical supplies in Ukraine, we
            worked with engineers from MIT and various local hackathons,
            to design a cheap and effective 3D-printed medical tourniquet
            design to manufacture and distribute to those most affected by the war."

            // write a goal of the project
            imageUrl="data:image/jpeg;base64,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"
          />
          <InfoCard
            title="Artificial Intelligence Systems"
            description="Using custom machine learning and artificial intelligence models
            we are invested in creating a custom machine learning system
            to replace large-scale bureaucratic tasks at healthcare institutions.
            The goal of the project is to create Al systems for Healthcare data management
            company's subscriber base."
            imageUrl="https://assets.entrepreneur.com/content/3x2/2000/20180504160331-shutterstock-529299211.jpeg"
          />
          <InfoCard
            title="Biomedical Technology Consulting"
            description="Boston Innovations offers various consulting projects on an at request basis.
            We have worked with multiple companies for technological consulting
            in both medical, software, as well as artificial intelligence"
            imageUrl="https://www.exponent.com/sites/default/files/styles/hero_purple/public/media/images/GettyImages-1388388697.jpg?itok=p09OAcjC"
          />

        </Slider>

      </div>


      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
