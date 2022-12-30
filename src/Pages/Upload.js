import React from "react";

const Upload = () => {
  const imageHostKey = process.env.REACT_APP_IMAGEBB_KEY;

  const handleUpdateStatus = (event) => {
    event.preventDefault();

    const updatedStatus = event.target.status.value;

    const status = {
      status: updatedStatus,
    };

    const image = event.target.image;
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    console.log(image);

    fetch(`http://localhost:5000/status`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((result) => {});
  };

  return (
    <div className="my-5 mx-10 shadow-2xl bg-white rounded-3xl p-5">
      <form onSubmit={handleUpdateStatus}>
        <textarea
          className="w-full mb-2 bg-[#E4E6E9] rounded-xl p-2 outline-none"
          name="status"
          id=""
          cols="30"
          rows="5"
          placeholder="Write your thoughts"
        ></textarea>
        <hr className="border-1" />
        <div className="mt-3 flex flex-col justify-center items-center">
          <label
            htmlFor="img"
            className="btn bg-blue-500 text-white border-0 hover:bg-blue-400"
          >
            Upload
          </label>
          <input type="file" id="img" name="image" className="hidden" />
        </div>

        <div className="flex justify-end mt-5">
          <input
            type="submit"
            value="Submit"
            className=" btn hover:bg-blue-400 bg-blue-300 text-black border-0"
          />
        </div>
      </form>
    </div>
  );
};

export default Upload;
