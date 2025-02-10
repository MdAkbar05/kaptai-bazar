import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchMediaReview } from "../../features/mediaReviewSlice";

const MediaFeedback = () => {
  const dispatch = useDispatch();
  const { mediaReviews, isLoading } = useSelector(
    (state) => state.mediaReviewReducer
  );

  useEffect(() => {
    dispatch(fetchMediaReview());
  }, [dispatch]);

  return (
    <div className="bg-white h-full relative py-6 space-y-8 my-8">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">
        Popular Item
      </h2>
      {/* Horizontal Line */}
      <hr className=" w-24 mx-auto border-primary border-2 mb-12" />

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
            >
              <div className="flex items-center gap-4 overflow-hidden w-[100px] h-52 ">
                <img
                  src={review.image}
                  alt="review"
                  className="h-full w-full object-cover rounded-lg -translate-y-1 -translate-x-0.5"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MediaFeedback;
