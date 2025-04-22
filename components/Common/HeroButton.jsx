const HeroButton = ({
  text = "",
  className = "",
  type = "button",
  onClick,
  isLink,
  linkUrl = "",
  target,
}) => {
  return (
    <div className="mx-auto w-full">
      {isLink ? (
        <a
          href={linkUrl}
          target={target}
          className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition ${className} text-center`}
        >
          {text}
        </a>
      ) : (
        <button
          onClick={onClick}
          type={type}
          className={`bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto font-semibold py-3 px-6 rounded-lg transition ${className}`}
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default HeroButton;
