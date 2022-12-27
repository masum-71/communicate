import React from "react";

const Upload = () => {
  return (
    <div className="my-5 mx-10 shadow-2xl bg-white rounded-3xl p-5">
      <form>
        <textarea
          className="w-full mb-2 bg-[#E4E6E9] rounded-xl p-2 outline-none"
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Write your thoughts"
        ></textarea>
        <hr className="border-1" />
        <div className="mt-3 flex flex-col justify-center items-center">
          <label
            for="img"
            class="btn bg-blue-500 text-white border-0 hover:bg-blue-400"
          >
            Upload Photo
          </label>
          <input type="file" id="img" className="hidden" />
        </div>
        <div className="flex justify-end mt-5">
          <input
            type="submit"
            value="Submit"
            className="btn hover:bg-blue-400 bg-blue-300 text-black border-0"
          />
        </div>
      </form>
    </div>
  );
};

export default Upload;
