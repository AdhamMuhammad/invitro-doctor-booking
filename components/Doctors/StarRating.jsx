import React from "react";

// Star SVG components for full, half, and empty stars
const FullStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const HalfStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    <path d="M12 2v15.27l5.18-4.95L22 9.24z" fill="white" />
  </svg>
);

const EmptyStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

function StarRating({ rating }) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FullStar key={`full-${i}`} className="text-yellow-500" />);
  }

  if (halfStar) {
    stars.push(<HalfStar key="half" className="text-yellow-500" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<EmptyStar key={`empty-${i}`} className="text-yellow-300" />);
  }

  return <div className="flex">{stars}</div>;
}

export default StarRating;
