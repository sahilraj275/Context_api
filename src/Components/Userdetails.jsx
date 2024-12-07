// import React, { useContext } from "react";
// import { UserContext } from "../Context/Context";
// import { useParams } from "react-router-dom";

// function Userdetails() {
//   const { users } = useContext(UserContext);
//   const { id } = useParams();

//   return (
//     <div className="p-2 bg-zinc-900 flex-col w-full h-full text-black flex text-2xl">
//       <h1 className="text-white mt-10 mb-5">User Details</h1>
//       <h1 className="text-white">{users[id].name}</h1>
//       <h1 className="text-white">{users[id].email}</h1>
//       <h1 className="text-white">{users[id].username}</h1>
//       <h1 className="text-white">{users[id].address.street}</h1>
//       <h1 className="text-white">{users[id].address.suite}</h1>
//       <h1 className="text-white">{users[id].address.zipcode}</h1>
//       <h1 className="text-white">{users[id].address.geo.lat}</h1>
//       <h1 className="text-white">{users[id].address.geo.lng}</h1>
//       <h1 className="text-white">{users[id].phone}</h1>
//       <h1 className="text-white">{users[id].website}</h1>
//       <h1 className="text-white">{users[id].company.name}</h1>
//       <h1 className="text-white">{users[id].company.catchPhrase}</h1>
//       <h1 className="text-white">{users[id].company.bs}</h1>
//     </div>
//   );
// }

// export default Userdetails;

// import React, { useContext } from "react";
// import { UserContext } from "../Context/Context";
// import { useParams, Link } from "react-router-dom";

// function Userdetails() {
//   const { users } = useContext(UserContext);
//   const { id } = useParams();
//   const user = users.find((u) => u.id === parseInt(id));

//   if (!user) {
//     return <div className="text-gray-800">User not found.</div>;
//   }

//   return (
//     <div className="bg-white p-6 rounded-lg shadow">
//       <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
//         User Details
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Personal Information */}
//         <div>
//           <h3 className="font-medium">Name:</h3>
//           <p className="text-gray-700">{user.name}</p>
//         </div>
//         <div>
//           <h3 className="font-medium">Username:</h3>
//           <p className="text-gray-700">{user.username}</p>
//         </div>
//         <div>
//           <h3 className="font-medium">Email:</h3>
//           <p className="text-gray-700">{user.email}</p>
//         </div>
//         <div>
//           <h3 className="font-medium">Phone:</h3>
//           <p className="text-gray-700">{user.phone}</p>
//         </div>
//         <div>
//           <h3 className="font-medium">Website:</h3>
//           <p className="text-gray-700">{user.website}</p>
//         </div>
//         {/* Company Information */}
//         <div>
//           <h3 className="font-medium">Company:</h3>
//           <p className="text-gray-700">{user.company.name}</p>
//           <p className="text-gray-600 italic">"{user.company.catchPhrase}"</p>
//           <p className="text-gray-600">{user.company.bs}</p>
//         </div>
//         {/* Address */}
//         <div className="md:col-span-2">
//           <h3 className="font-medium">Address:</h3>
//           <p className="text-gray-700">
//             {user.address.street}, {user.address.suite}, {user.address.city},{" "}
//             {user.address.zipcode}
//           </p>
//           <p className="text-gray-600">
//             Geo Coordinates: Lat {user.address.geo.lat}, Lng{" "}
//             {user.address.geo.lng}
//           </p>
//         </div>
//       </div>
//       {/* Back Link */}
//       <Link
//         to="/user"
//         className="mt-6 inline-block text-indigo-600 hover:text-indigo-800"
//       >
//         &larr; Back to User List
//       </Link>
//     </div>
//   );
// }

// export default Userdetails;

// src/Components/Userdetails.js

import React, { useContext } from "react";
import { UserContext } from "../Context/Context";
import { useParams, Link } from "react-router-dom";
import Spinner from "./Spinner"; // Optional: If you created a Spinner component

function Userdetails() {
  const { users, loading, error } = useContext(UserContext);
  const { id } = useParams();
  const userId = parseInt(id, 10); // Ensure id is a number

  if (loading) {
    return (
      <div className="text-center text-gray-800">
        {/* <Spinner /> */} {/* Uncomment if using Spinner */}
        <p className="text-xl">Loading user details...</p>
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

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return (
      <div className="text-center text-gray-800">
        <p className="text-xl">User not found.</p>
        <Link
          to="/user"
          className="mt-4 inline-block text-indigo-600 hover:text-indigo-800"
        >
          &larr; Back to User List
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
        User Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Personal Information */}
        <div>
          <h3 className="font-medium">Name:</h3>
          <p className="text-gray-700">{user.name}</p>
        </div>
        <div>
          <h3 className="font-medium">Username:</h3>
          <p className="text-gray-700">{user.username}</p>
        </div>
        <div>
          <h3 className="font-medium">Email:</h3>
          <p className="text-gray-700">{user.email}</p>
        </div>
        <div>
          <h3 className="font-medium">Phone:</h3>
          <p className="text-gray-700">{user.phone}</p>
        </div>
        <div>
          <h3 className="font-medium">Website:</h3>
          <p className="text-gray-700">{user.website}</p>
        </div>
        {/* Company Information */}
        <div>
          <h3 className="font-medium">Company:</h3>
          <p className="text-gray-700">{user.company.name}</p>
          <p className="text-gray-600 italic">"{user.company.catchPhrase}"</p>
          <p className="text-gray-600">{user.company.bs}</p>
        </div>
        {/* Address */}
        <div className="md:col-span-2">
          <h3 className="font-medium">Address:</h3>
          <p className="text-gray-700">
            {user.address.street}, {user.address.suite}, {user.address.city},{" "}
            {user.address.zipcode}
          </p>
          <p className="text-gray-600">
            Geo Coordinates: Lat {user.address.geo.lat}, Lng{" "}
            {user.address.geo.lng}
          </p>
        </div>
      </div>
      {/* Back Link */}
      <Link
        to="/user"
        className="mt-6 inline-block text-indigo-600 hover:text-indigo-800"
      >
        &larr; Back to User List
      </Link>
    </div>
  );
}

export default Userdetails;
