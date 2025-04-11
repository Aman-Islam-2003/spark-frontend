// import axios from "axios";
// import { toast } from "react-toastify";

// const backendUrl = import.meta.env.VITE_BACKEND_URL;
// console.log(backendUrl)

// export const login = async (email, password) => {
//   try {
//     const response = await axios.post(`${backendUrl}/login`, {
//       email,
//       password,
//     });
//     if (response.status === 200) {
//       localStorage.setItem("token", response.data.token);
//       toast.success("Login successful!");
//     } else {
//       toast.error(response.data.message);
//     }
//   } catch (error) {
//     console.log(error);
//     toast.error("Login failed. Please try again.");
//   }
// };
