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
                Can I cancel at anytime?
              </h3>
              <p class="mt-2 text-black">
                Yes, you can cancel anytime no questions are asked while you
                cancel but we would highly appreciate if you will give us some
                feedback.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-black">
                My team has credits. How do we use them?
              </h3>
              <p class="mt-2 text-black">
                Once your team signs up for a subscription plan. This is where
                we sit down, grab a cup of coffee and dial in the details.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-black">
                How does Preline's pricing work?
              </h3>
              <p class="mt-2 text-black">
                Our subscriptions are tiered. Understanding the task at hand and
                ironing out the wrinkles is key.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-black">
                How secure is Preline?
              </h3>
              <p class="mt-2 text-black">
                Protecting the data you trust to Preline is our first priority.
                This part is really crucial in keeping the project in line to
                completion.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gblack">
                Do you offer discounts?
              </h3>
              <p class="mt-2 text-black">
                We've built in discounts at each tier for teams. The time has
                come to bring those ideas and plans to life.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-black">
                What is your refund policy?
              </h3>
              <p class="mt-2 text-black">
                We offer refunds. We aim high at being focused on building
                relationships with our clients and community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;