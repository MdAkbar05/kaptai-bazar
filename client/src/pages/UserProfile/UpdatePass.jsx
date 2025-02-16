import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { handleUpdatePass } from "../../features/authSlice";

const UpdatePass = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.authReducer);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setProfile(JSON.parse(localStorage.getItem("user")));
  }, [authUser]);

  const [formData, setFormData] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("email", formData.email);
    data.append("oldPassword", formData.oldPassword);
    data.append("newPassword", formData.newPassword);
    data.append("confirmPassword", formData.confirmPassword);

    try {
      dispatch(handleUpdatePass(data)).then((res) => {
        if (res.payload.status === 400) {
          setError(res.payload.data.message);
        } else if (res.payload.status === 404) {
          setError("User not found");
        } else {
          navigate("/profile-user");
        }
      });
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      // Handle error (e.g., show a message to the user)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          Change Your Password
        </h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Current Email:
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-red-500 focus:border-red-500"
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4 relative">
          <label
            htmlFor="oldPassword"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Old Password:
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="oldPassword"
            id="oldPassword"
            onChange={handleChange}
            className="peer mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            placeholder=" "
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 top-7 flex items-center cursor-pointer"
          >
            {showPassword ? (
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12c1.5-3.5 5.5-6 9-6s7.5 2.5 9 6c-1.5 3.5-5.5 6-9 6S4.5 15.5 3 12zM12 14a2 2 0 110-4 2 2 0 010 4z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.5 4.5L3 6l3 3L6 6l-2.5-2.5zM21 12c-1.5-3.5-5.5-6-9-6s-7.5 2.5-9 6zM12 15a2 2 0 110-4 2 2 0 010 4z"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="mb-4">
          <label
            htmlFor="newPassword"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            New Password:
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-red-500 focus:border-red-500"
            id="newPassword"
            name="newPassword"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4 ">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Confirm New Password:
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-red-500 focus:border-red-500"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleChange}
            required
          />
        </div>

        {/* Error message here */}
        <p className="text-red-500 mb-4">{error}</p>

        <button
          type="submit"
          className="w-full bg-red-500 text-white font-medium py-2.5 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default UpdatePass;
