export default function ReviewForm() {
  return (
    <div className="grid p-10 bg-slate-200 rounded-2xl">
      <div className="w-full">
        <p className="flex items-center text-2xl font-bold">
          <span className="rounded-full bg-gray-800 p-2">
            <svg
              className="w-6 h-6 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"
              />
            </svg>
          </span>
          <span className="ml-2 text-black">Feedback</span>
        </p>
      </div>
      <div className="w-full text-black p-2">
        <p>
          Your input is valuable in helping us better understand your needs and
          tailor our service accordingly.
        </p>
      </div>
      <div className="w-full flex gap-6 mb-10">
        <div className="border-solid border-2 hover:border-gray-600 rounded-full p-2 hover:scale-150">
          <div className="text-3xl cursor-pointer border-solid border-2 border-gray-200 rounded-full p-2 h-8 w-8 items-center justify-center flex">
            😭
          </div>
        </div>
        <div className="border-solid border-2 hover:border-gray-600 rounded-full p-2 hover:scale-150">
          <div className="text-3xl cursor-pointer border-solid border-2 border-gray-200 rounded-full p-2 h-8 w-8 items-center justify-center flex">
            😔
          </div>
        </div>
        <div className="border-solid border-2 hover:border-gray-600 rounded-full p-2 hover:scale-150">
          <div className="text-3xl cursor-pointer border-solid border-2 border-gray-200 rounded-full p-2 h-8 w-8 items-center justify-center flex">
            🙂
          </div>
        </div>
        <div className="border-solid border-2 hover:border-gray-600 rounded-full p-2 hover:scale-150">
          <div className="text-3xl cursor-pointer border-solid border-2 border-gray-200 rounded-full p-2 h-8 w-8 items-center justify-center flex">
            😊
          </div>
        </div>
        <div className="border-solid border-2 hover:border-gray-600 rounded-full p-2 hover:scale-150">
          <div className="text-3xl cursor-pointer border-solid border-2 border-gray-200 rounded-full p-2 h-8 w-8 items-center justify-center flex">
            😍
          </div>
        </div>
      </div>
      <div>
        <textarea name="review" id="" className="w-full h-40 p-2"></textarea>
      </div>
      <div className="w-full flex justify-end ">
        <button className="text-black px-4 py-2 rounded bg-[#ddc888] hover:bg-[#ad8a1f]">
          Submit
        </button>
      </div>
    </div>
  );
}
