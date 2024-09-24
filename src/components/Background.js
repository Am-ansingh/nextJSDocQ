import React from "react";
import Image from 'next/image';

function Background(){
    return(
    <>
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/backgroundImage.png')" }}
    >
      <div>
            <a
              className="pointer-events-none inline-block h-44 w-96 -left-6 lg:pointer-events-auto"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            >
              <Image
                src="/Logo.png"
                alt="DocQ Logo"
                width={409}
                height={167}
                priority
              />
            </a>
          </div>
        </div>
        </>
    )
}

export default Background;