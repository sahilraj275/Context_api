// import React from "react";

// function About() {
//   return <div className="p-2  text-white flex text-2xl">About</div>;
// }

// export default About;

import React from "react";

function About() {
  return (
    <div className="text-gray-800">
      <h2 className="text-3xl font-semibold mb-4 text-indigo-600">About Us</h2>
      <p className="text-lg">
        This application is built using React, leveraging the Context API for
        state management and React Router for seamless navigation. Tailwind CSS
        is utilized to create a responsive and aesthetically pleasing user
        interface.
      </p>
      <p className="text-lg mt-2">
        Our goal is to demonstrate best practices in modern web development,
        ensuring both functionality and design are top-notch.
      </p>
    </div>
  );
}

export default About;
