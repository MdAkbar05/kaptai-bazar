import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  FaUserAlt,
  FaMailBulk,
  FaLocationArrow,
  FaShoppingCart,
} from "react-icons/fa";
import { getOrders } from "../../features/orderSlice";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { authUser } = useSelector((state) => state.authReducer);
  const [user, setUser] = useState(null);
  const { orders } = useSelector((state) => state.orderReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [authUser, location, navigate]);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const userOrders = orders?.filter(
    (order) => order.shippingDetails?.email === authUser.email
  );

  if (!user || !user.isUser) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold text-red-500">
        You have signed out. Please login first.
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-12 flex flex-wrap justify-between items-center gap-4 ">
      <div className=" mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-100 p-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Profile</h1>
          <p className="text-gray-500">Overview of your profile</p>
        </div>

        <div className="flex flex-col items-center p-6">
          <img
            src={user.img ? user.img : `/images/users/default.png`}
            alt={user.userName}
            className="w-32 h-32 rounded-full object-cover border-4 border-primary"
          />

          <div className="mt-4 text-center">
            <p className="uppercase text-2xl text-gray-700 font-semibold flex items-center justify-center gap-2">
              {user.userName}
            </p>
            <p className="text-gray-600 flex items-center justify-center gap-2 mt-1">
              <FaMailBulk className="text-primary" /> {user.email}
            </p>
            <p className="text-gray-600 flex items-center justify-center gap-2 mt-1">
              <FaLocationArrow className="text-primary" />{" "}
              {user.address || "N/A"}
            </p>
            <span className="mt-2 inline-block text-sm text-white bg-green-500 px-3 py-1 rounded">
              {user.admin ? "Admin" : "User"}
            </span>
          </div>

          {user.userType === "googleProvider" ? (
            <p className="mt-4 text-primary">
              You can't change anything in your profile.
            </p>
          ) : (
            <div className="flex gap-4 mt-4">
              <Link
                to="/update-profile"
                className="bg-primary hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              >
                Edit Profile
              </Link>
              <Link
                to="/change-pass"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Change Password
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Orders Section */}
      <div className="flex-1 mx-auto bg-white shadow-lg rounded-lg overflow-hidden ">
        <div className="bg-gray-100 p-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <FaShoppingCart className="text-primary" /> Your Orders
          </h2>
        </div>
        {userOrders && userOrders.length > 0 ? (
          <div className="p-4">
            {userOrders.map((order) => (
              <div key={order._id} className="border-b border-gray-200 py-4">
                <p className="text-gray-800 font-semibold">
                  Order ID: {order._id}
                </p>
                <p className="text-sm text-red-600">Status: {order.status}</p>
                <p className="text-sm text-gray-600">
                  Total Price: ${order.totalPrice}
                </p>

                <div className="mt-2">
                  {order.cartItems.map((item) => (
                    <div
                      key={item._id}
                      className="flex items-center gap-4 py-2"
                    >
                      <img
                        src={item.product?.image}
                        alt={item.name}
                        className="w-auto h-16 object-cover rounded"
                      />
                      <div>
                        <p className="font-semibold text-gray-700">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          Quantity: {item.quantity}
                        </p>
                        <p className="text-sm text-gray-600">
                          Price: ${item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-sm text-gray-600 mt-2">
                  <p>
                    Shipping to: {order.shippingDetails.address},{" "}
                    {order.shippingDetails.city}
                  </p>
                  <p>
                    {order.shippingDetails.country},{" "}
                    {order.shippingDetails.postalCode}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="p-4 text-center text-gray-500">No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
