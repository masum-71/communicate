import React from "react";

const TopPosts = () => {
  const addimage = (event) => {
    event.preventDefault();

    const image = event.target.image.value;
    console.log(image);
  };
  return (
    <div className="md:flex mt-10 max-[640px]:text-center md:text-left justify-around items-center shadow-2xl bg-white my-5 mx-10 rounded-3xl">
      <h1>top posts</h1>

      <form onSubmit={addimage}>
        <input type="file" name="image" />
        <input className="btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default TopPosts;
