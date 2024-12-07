// import React, { useContext } from "react";
// import { UserContext } from "../Context/Context";
// import { Link } from "react-router-dom";

// function User() {
//   const { users } = useContext(UserContext);

//   return (
//     <div className="p-6 text-white  flex flex-col w-full h-screen ">
//       <h1 className="text-3xl  ">User List</h1>

//       {users.map((user, index) => {
//         return (
//           <ol key={index} className="flex mt-5">
//             <Link to={`/user/${user.id}`}>{user.name}</Link>
//           </ol>
//         );
//       })}
//     </div>
//   );
// }

// export default User;

// import React, { useContext } from "react";
// import { UserContext } from "../Context/Context";
// import { Link } from "react-router-dom";

// function User() {
//   const { users } = useContext(UserContext);

//   return (
//     <div className="text-gray-800">
//       <h2 className="text-3xl font-semibold mb-6 text-indigo-600">User List</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {users.map((user) => (
//           <Link
//             key={user.id}
//             to={`/user/${user.id}`}
//             className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
//           >
//             <h3 className="text-xl font-medium text-indigo-600">{user.name}</h3>
//             <p className="text-gray-600">{user.email}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default User;

// src/Components/User.js

import React, { useContext } from "react";
import { UserContext } from "../Context/Context";
import { Link } from "react-router-dom";
import Spinner from "./Spinner"; // Optional: If you created a Spinner component

function User() {
  const { users, loading, error } = useContext(UserContext);

  if (loading) {
    return (
      <div className="text-center text-gray-800">
        {/* <Spinner /> */} {/* Uncomment if using Spinner */}
        <p className="text-xl">Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p className="text-xl">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="text-gray-800">
      <h2 className="text-3xl font-semibold mb-6 text-indigo-600">User List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <Link
            key={user.id}
            to={`/user/${user.id}`}
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-medium text-indigo-600">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default User;
