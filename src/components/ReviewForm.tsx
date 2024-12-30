import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useParams } from "react-router-dom";

export default function ReviewForm() {
  const params = useParams();
  const serviceId = params.id;
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.BACKED_END_URL;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    // biome-ignore lint/complexity/useLiteralKeys: <explanation>
    formJson["userId"] = String(currentUser!._id);
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    // biome-ignore lint/complexity/useLiteralKeys: <explanation>
    formJson["serviceId"] = String(serviceId!);

    try {
      setLoading(true);
      setError(false);
      const res = await fetch(`${baseUrl}reviews/store`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formJson),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      form.reset();
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

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
          We greatly value your feedback as it helps us better understand your
          needs and customize our service to suit you.
        </p>
      </div>
      {error && (
        <p className="text-red-600">Something went wrong, Try again later!</p>
      )}
      <form onSubmit={(e) => handleSubmit(e)} method="post">
        <div className="w-full flex gap-6 mb-10">
          <div className="border-solid border-2 hover:border-gray-600 rounded-full p-2 hover:scale-150">
            <label>
              <input
                type="radio"
                name="rating"
                id="1"
                value={1}
                className="hidden"
              />
              <div className="label-checked:text-5xl label-checked:opacity-100 opacity-40 text-3xl cursor-pointer border-solid border-2 border-gray-200 rounded-full p-2 h-8 w-8 items-center justify-center flex">
                😭
              </div>
            </label>
          </div>
          <div className="border-solid border-2 hover:border-gray-600 rounded-full p-2 hover:scale-150">
            <label>
              <input
                type="radio"
                name="rating"
                id="2"
                value={2}
                className="hidden"
              />
              <div className="label-checked:text-5xl label-checked:opacity-100 opacity-40 text-3xl cursor-pointer border-solid border-2 border-gray-200 rounded-full p-2 h-8 w-8 items-center justify-center flex">
                😔
              </div>
            </label>
          </div>
          <div className="border-solid border-2 hover:border-gray-600 rounded-full p-2 hover:scale-150">
            <label>
              <input
                type="radio"
                name="rating"
                id="3"
                value={3}
                className="hidden"
              />
              <div className="label-checked:text-5xl label-checked:opacity-100 opacity-40 text-3xl cursor-pointer border-solid border-2 border-gray-200 rounded-full p-2 h-8 w-8 items-center justify-center flex">
                😐
              </div>
            </label>
          </div>
          <div className="border-solid border-2 hover:border-gray-600 rounded-full p-2 hover:scale-150">
            <label>
              <input
                type="radio"
                name="rating"
                id="4"
                value={4}
                className="hidden"
              />
              <div className="label-checked:text-5xl label-checked:opacity-100 opacity-40 text-3xl cursor-pointer border-solid border-2 border-gray-200 rounded-full p-2 h-8 w-8 items-center justify-center flex">
                😊
              </div>
            </label>
          </div>
          <div className="border-solid border-2 hover:border-gray-600 rounded-full p-2 hover:scale-150">
            <label>
              <input
                type="radio"
                name="rating"
                id="5"
                value={5}
                className="hidden"
              />
              <div className="label-checked:text-5xl label-checked:opacity-100 opacity-40 text-3xl cursor-pointer border-solid border-2 border-gray-200 rounded-full p-2 h-8 w-8 items-center justify-center flex">
                😍
              </div>
            </label>
          </div>
        </div>
        <div>
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <textarea name="review" id="" className="w-full h-40 p-2"></textarea>
        </div>
        <div className="w-full flex justify-end ">
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button className="text-black px-4 py-2 rounded bg-[#ddc888] hover:bg-[#ad8a1f]">
            {loading ? "Saving..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
