

import React from "react";

export default function CenteredContent({ children }) {

    return (
        <div className="flex justify-center items-center h-full w-full">
            {children}
        </div>
    );
}