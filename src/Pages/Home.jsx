import React from "react";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Entertainment",
      imgSrc:
        "https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    { id: 2, title: "Educational & Business", imgSrc: "" },
    { id: 3, title: "Cultural & Arts", imgSrc: "" },
    { id: 4, title: "Sports & Fitness", imgSrc: "" },
    { id: 5, title: "Technology & Innovation", imgSrc: "" },
    { id: 6, title: "Travel & Adventure", imgSrc: "" },
  ];
  return (
    <div className="">
      {/* Hero Video */}
      <div className=" mx-auto m-2 md:m-4  relative rounded-lg shadow-2xl ring-1 ring-gray-900/10 h-screen max-w-screen-2xl">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 rounded-large h-full w-full object-cover"
          src="https://videos.pexels.com/video-files/4440816/4440816-hd_1920_1080_25fps.mp4"
          autoPlay
          loop
          muted
        ></video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-large h-full w-full object-cover"></div>
      </div>

      {/* Explore */}
      <div className="mx-28">
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Explore Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          {categories.map((category) => (
            <span key={category.id}>
              <img
                className="w-48 h-48 rounded-full object-cover"
                src={category.imgSrc}
                alt={category.title}
              />
              {category.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
