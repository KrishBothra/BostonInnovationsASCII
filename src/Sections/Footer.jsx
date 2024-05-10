import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row space-x-4 items-center">
            <h3 className="text-lg font-semibold text-black">
              © Boston Innovations
            </h3>
            {/* <a
              href="https://discord.gg/t8xg36dMAV"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Discord
            </a>
            <a
              href="mailto:info@bostoninnovations.com"
              className="text-blue-500 hover:text-blue-700"
            >
              Email
            </a> */}
          </div>
          <p className="mt-2 text-center">
            Made with ❤️ by Boston Innovations
          </p>
        </div>
      </div>
    </footer>
  );
}


