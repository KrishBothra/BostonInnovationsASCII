export default function Projects() {
  return (
    <>
      <h2 className="mt-10 mb-3 text-2xl text-center font-bold">
        Our Projects and Services
      </h2>
      <div className="mx-auto px-8 max-w-[50rem]  flex-col">
        {[
          { text: "Artificial Intelligence Development", linkId: "ai" },
          { text: "Medical Technology Development", linkId: "medtech" },
          { text: "Pharmaceutical Research", linkId: "pharma" },
          { text: "Biomedical Technology Consulting", linkId: "biotech" },
        ].map((item, index) => (
          <a
            href={`/projects#${item.linkId}`}
            target="_blank"
            className={
              `block w-fit ${index % 2 == 1 ? "ml-auto" : "mr-auto"} ` +
              " px-4 py-3 my-5 text-2xl rounded-lg  bg-gray-100 " +
              "hover:underline hover:bg-gray-200"
              
            }
          >
            {item.text}
            <ExternalLinkIcon className="ml-1" />
          </a>
        ))}
      </div>
    </>
  );
}



function ExternalLinkIcon({ className = "" }) {
  return (
    <>
      {/* <span>🡭</span> */}
      {/* <svg 
      className={`${className} inline h-6 align-bottom	`}
      
      xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M9.707 15.707L17.5 7.914l1.793 1.793A1 1 0 0 0 21 9V4l-.001-.048A.996.996 0 0 0 20 3h-5a1 1 0 0 0-.707 1.707L16.086 6.5l-7.793 7.793a1 1 0 1 0 1.414 1.414M4 3a1 1 0 0 0-1 1v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5a1 1 0 1 0-2 0v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5h6a1 1 0 1 0 0-2z" clip-rule="evenodd"
    /></svg> */}

      <svg
        className={`${className} inline h-7 align-text-bottom	`}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M204 64v104a12 12 0 0 1-24 0V93L72.49 200.49a12 12 0 0 1-17-17L163 76H88a12 12 0 0 1 0-24h104a12 12 0 0 1 12 12"
        />
      </svg>

      {/* <svg 
      className={`${className} inline h-6 align-bottom	`}
      xmlns='http://www.w3.org/2000/svg' 
      viewBox='0 0 24 24'
    >
      <path d='M0 0h24v24H0V0z' fill='none' /><path d='M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z' />
    </svg> */}
    </>
  );
}
