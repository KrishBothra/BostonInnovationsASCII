import React from "react";
import logo from "./Assets/bostonInnovations.png";
import stock1 from "./Assets/stock1.jpg";
import emailjs from '@emailjs/browser';

function Contact() {

 
  function sendEmail(event1) {
    event1.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (!file) {
        console.error('No file selected.');
        return;
    }
    console.log()
    const Firstname = event1.target.elements['first-name'].value
    const Lastname = event1.target.elements['last-name'].value
    const Linkedin = event1.target.elements['company'].value
    const emailE = event1.target.elements['email'].value
    const numberE = event1.target.elements['phone-number'].value
    const messageE = event1.target.elements['message'].value


    const reader = new FileReader();
    reader.onload = function(event) {
        const fileUrl = event.target.result;
        console.log('File URL:', fileUrl);

        const chunkSize = 50000; // Chunk size in characters
        const chunks = [];
        for (let i = 0; i < fileUrl.length; i += chunkSize) {
            chunks.push(fileUrl.slice(i, i + chunkSize));
        }
        console.log(Firstname)

        // Split the fileUrl into chunks and send them as needed
        chunks.forEach((chunk, index) => {
          console.log(event1.target.elements['first-name'].value)
            const templateParams = {
                first_name: Firstname,
                last_name: Lastname,
                user_company: Linkedin,
                user_email: emailE,
                user_number: numberE,
                message: messageE,
                pdf_url: chunk
            };

            // Send email using emailjs with chunk as pdf_url
            emailjs.send('service_uhaz7kl', 'template_91mauzt', templateParams, 'qO-2cdDv92CnS36bk')
                .then((result) => {
                    console.log('Email sent successfully:', result.text);
                }, (error) => {
                    console.error('Email sending failed:', error.text);
                });
        });
    };
    reader.readAsDataURL(file);

    event1.target.reset();
}

  return (
    <div class="bg-gray-200">
      <img
        class="object-cover w-screen h-96 ring-gray-300"
        src={stock1}
        alt=""
      ></img>

      <div class="mx-auto max-w-2xl text-center mt-16">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        2024 Internship Application Form
        </h2>
        
      </div>

      

      <form onSubmit={sendEmail} method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              for="first-name"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name *
            </label>
            <div class="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>
          </div>
          <div>
            <label
              for="last-name"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name *
            </label>
            <div class="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="company"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >
              Please provide your LinkedIn profile below:
            </label>
            <div class="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autocomplete="organization"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="email"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email *
            </label>
            <div class="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="phone-number"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div class="relative mt-2.5">
              <div class="absolute inset-y-0 left-0 flex items-center">
                <label for="country" class="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  class="appearance-none  h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <svg
                  class="pointer-events-none absolute right-1 top-0 h-full w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autocomplete="tel"
                class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >
              We are eager to learn more about your motivation for pursuing this internship with Boston Innovations. Please share your reasons for your interest in this role and elaborate on the specific skills that you will contribute to our corporate endeavors.
            </label>
            <div class="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows="4"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >
              Resume
            </label>
            <div class="mt-2.5">
              <input type="file" id="fileInput" accept=".pdf"/>

            </div>
          </div>
          
        </div>
        <div class="mt-10">
          <button
            type="submit"
            class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {/* bg-indigo-600 */}
            Submit
          </button>
        </div>
      </form>

      <div className="flex flex-row mt-16">
        <div className="bg-gray-500 flex-1 h-[40rem]">
          <div class="relative w-full h-[40rem] ">
            <iframe
              class="absolute top-0 left-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d377398.748137344!2d-71.0574629!3d42.3547231!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x89e37083b4b154a5%3A0x69181c5d89fadcf2!2s251%20Devonshire%20St%20Boston%2C%20MA%2002110!3m2!1d42.3547231!2d-71.05746289999999!5e0!3m2!1sen!2sus!4v1714071895426!5m2!1sen!2sus, 10.606619&z=15&output=embed"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
        <div className="bg-cyan-800 flex-1 text-center ">
          <div className="w-[200px] h-[200px] bg-white mx-auto mt-16 rounded-full justify-center flex">
            <img
              class="w-[160px] h-[160px] mx-auto my-auto"
              src={logo}
              alt=""
            ></img>
          </div>
          <p className="text-white text-lg mt-6 mb-2">Come visit us at</p>
          <a
            href="https://www.google.com/maps/place/Schaumburg,+IL/@42.032327,-88.2470823,12z/data=!3m1!4b1!4m6!3m5!1s0x880faf88436224e5:0x43bd31cd678f7351!8m2!3d42.0333607!4d-88.0834059!16zL20vMHM1bWQ?entry=ttu"
            className="text-white text-lg text-white hover:text-[#72b08e]"
            target="_blank"
          >
            251 Devonshire St, Boston, MA 
          </a>
          <p className="text-white text-lg mt-16">Contact us at</p>
          <p className="text-white text-lg mt-2">
            info@bostoninnovations.org
          </p>

          <div className=" flex flex-row justify-center mt-4">
            <a
              href=""
              class="mx-3 text-white hover:text-[#72b08e] group-hover:text-[#72b08e]"
            >
              <svg
                class="h-9 w-9"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <rect x="4" y="4" width="16" height="16" rx="4" />{" "}
                <circle cx="12" cy="12" r="3" />{" "}
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
              </svg>
            </a>
            <a
              href=""
              class="mx-3 text-white hover:text-[#72b08e]  dark:hover:text-[#72b08e] group-hover:text-white"
            >
              <svg
                class="h-9 w-9 "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
                <rect x="2" y="9" width="4" height="12" />{" "}
                <circle cx="4" cy="4" r="2" />
              </svg>{" "}
            </a>
            <a
              href=""
              class="mx-3 text-white hover:text-[#72b08e] dark:hover:text-[#72b08e] group-hover:text-white"
            >
              <svg
                class="w-9 h-9 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
              </svg>
            </a>
          </div>

          <p className="text-white font-[300] text-base mt-16">
            © 2024 Boston Innovations
          </p>
        </div>
      </div>
    </div>
  );
}


export default Contact;
