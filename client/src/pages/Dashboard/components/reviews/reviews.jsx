import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  createMediaReview,
  fetchMediaReview,
  deleteMediaReview,
} from "../../../../features/mediaReviewSlice";

const Reviews = () => {
  const dispatch = useDispatch();
  const { mediaReviews, isLoading, error } = useSelector(
    (state) => state.mediaReviewReducer
  );

  const [showModal, setShowModal] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [reference, setReference] = useState("");
  const [hoveredReview, setHoveredReview] = useState(null);

  useEffect(() => {
    dispatch(fetchMediaReview());
  }, [dispatch]);

  const handleAddNewClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      image: imageUrl,
      reference,
    };
    dispatch(createMediaReview(data));
    error && toast.error(error);
    setShowModal(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteMediaReview(id));
  };

  return (
    <div className="sm:p-2 md:p-4 lg:p-6 w-full">
      <div className="flex justify-between item-center">
        <h2 className="text-3xl font-semibold mb-4">Media Reviews</h2>
        <button
          onClick={handleAddNewClick}
          className="group cursor-pointer outline-none hover:rotate-90 duration-300"
          title="Add New"
        >
          <svg
            className="stroke-teal-500 fill-none group-hover:fill-teal-800 group-active:stroke-teal-200 group-active:fill-teal-600 group-active:duration-0 duration-300"
            viewBox="0 0 24 24"
            height="50px"
            width="50px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeWidth="1.5"
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            />
            <path strokeWidth="1.5" d="M8 12H16" />
            <path strokeWidth="1.5" d="M12 16V8" />
          </svg>
        </button>
      </div>
      <hr className="border-gray-700 py-4 mt-2" />
      {isLoading && (
        <div className="text-center">
          <h3 className="text-xl text-gray-600">Loading reviews...</h3>
        </div>
      )}
      {!isLoading && mediaReviews?.length === 0 && (
        <div className="text-center">
          <h3 className="text-xl text-gray-600">No reviews found.</h3>
        </div>
      )}

      <div className="flex flex-wrap gap-6">
        {mediaReviews &&
          mediaReviews.map((review) => (
            <div
              key={review._id}
              className="relative border-b border-gray-200 p-4 mockupBG w-48 h-72 flexCenter rounded-lg"
              onMouseEnter={() => setHoveredReview(review._id)}
              onMouseLeave={() => setHoveredReview(null)}
            >
              <div className="flex items-center gap-4 overflow-hidden w-[100px] h-52 ">
                <img
                  src={review.image}
                  alt="review"
                  className="h-full w-full object-cover rounded-lg -translate-y-1 -translate-x-0.5"
                />
              </div>
              {hoveredReview === review._id && (
                <button
                  onClick={() => handleDelete(review._id)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full transition-opacity duration-300 opacity-100"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Add new Media Review</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Review image URL
                </label>
                <input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Reference
                </label>
                <input
                  type="text"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
