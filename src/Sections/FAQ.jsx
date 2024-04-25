import React from "react";

function FAQ() {
  return (
    <div>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 class="text-2xl font-bold md:text-3xl md:leading-tight text-black">
            Frequently Asked Questions
          </h2>
        </div>

        <div class="max-w-5xl mx-auto">
          <div class="grid sm:grid-cols-2 gap-6 md:gap-12">
            <div>
              <h3 class="text-lg font-semibold text-black">
                Can I invest money or partner my lab?
              </h3>
              <p class="mt-2 text-black">
                Of course, please send all related inquiries to:
                outreach@bostoninnovations.org
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-black">
                Interested in joining the team full time?
              </h3>
              <p class="mt-2 text-black">
                Although we rarely offer full time positions, please send your resume along with your practical skillset to:
                humanresources@bostoninnovations.org
              </p>
            </div>




          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center">
        <h3 class="text-lg font-semibold text-black">Any extra questions?</h3>
        <p class="mt-2 text-center">Please reach out to: info@bostoninnovations.org</p>
      </div>

    </div>
  );
}

export default FAQ;
