// import React from "react";
// import { Link, Routes, Route } from "react-router-dom";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import User from "./Components/User";
// import Userdetails from "./Components/Userdetails";

// function App() {
//   return (
//     <div className="w-full bg-zinc-900  h-full flex flex-col m-auto items-center justify-start">
//       <h1 className="text-2xl text-red-500  bg-red-300 w-full h-[50px] items-center flex justify-center font-semibold">
//         Practice Context Api
//       </h1>
//       <nav className="p-2 text-white flex text-2xl gap-10">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/user">User</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/user" element={<User />} />
//         <Route path="/user/:id" element={<Userdetails />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { Link, Routes, Route } from "react-router-dom";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import User from "./Components/User";
// import Userdetails from "./Components/Userdetails";

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       {/* Header */}
//       <header className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
//           <h1 className="text-3xl text-white font-bold">
//             Practice Context API
//           </h1>
//           {/* Navigation */}
//           <nav className="mt-4 md:mt-0">
//             <ul className="flex space-x-6">
//               <li>
//                 <Link
//                   to="/"
//                   className="text-white text-lg hover:text-gray-200 transition duration-300"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/about"
//                   className="text-white text-lg hover:text-gray-200 transition duration-300"
//                 >
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/user"
//                   className="text-white text-lg hover:text-gray-200 transition duration-300"
//                 >
//                   User
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow max-w-7xl mx-auto px-4 py-8">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/user" element={<User />} />
//           <Route path="/user/:id" element={<Userdetails />} />
//         </Routes>
//       </main>

//       {/* Footer */}
//       <footer className="w-full bg-indigo-600 text-white text-center py-4">
//         © 2024 Your Company. All rights reserved.
//       </footer>
//     </div>
//   );
// }

// export default App;

// src/App.js

import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import User from "./Components/User";
import Userdetails from "./Components/Userdetails";
import Context from "./Context/Context"; // Import the Context Provider

function App() {
  return (
    <Context>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Header */}
        <header className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
            <h1 className="text-3xl text-white font-bold">
              Practice Context API
            </h1>
            {/* Navigation */}
            <nav className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link
                    to="/"
                    className="text-white text-lg hover:text-gray-200 transition duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-white text-lg hover:text-gray-200 transition duration-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/user"
                    className="text-white text-lg hover:text-gray-200 transition duration-300"
                  >
                    User
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow max-w-7xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/user" element={<User />} />
            <Route path="/user/:id" element={<Userdetails />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="w-full bg-indigo-600 text-white text-center py-4">
          © 2024 Your Company. All rights reserved.
        </footer>
      </div>
    </Context>
  );
}

export default App;
