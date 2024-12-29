import Progress from "./Progress";
import ReviewForm from "./ReviewForm";

export default function Review() {
  return (
    <div className="flex w-3/4 h-full items-center justify-center">
      <div className="flex flex-cols-2">
        <div className="">
          <div className="grid p-10">
            <div className="w-full grid grid-rows-5 gap-1 mb-10">
              <div className="text-xl cursor-pointer items-center justify-left flex gap-2">
                <div className="mb-2 flex gap-2">😭</div>
                <Progress />
              </div>

              <div className="text-xl cursor-pointer items-center justify-left flex gap-2">
              <div className="mb-2 flex gap-2">😔</div>
              <Progress />
              </div>

              <div className="text-xl cursor-pointer items-center justify-left flex gap-2">
              <div className="mb-2 flex gap-2">🙂</div>
                <Progress />
              </div>

              <div className="text-xl cursor-pointer items-center justify-left flex gap-2">
              <div className="mb-2 flex gap-2">😊</div>
                <Progress />
              </div>

              <div className="text-xl cursor-pointer items-center justify-left flex gap-2">
              <div className="mb-2 flex gap-2">😍</div>
                <Progress />
              </div>
            </div>
          </div>
        </div>
        <ReviewForm />
      </div>
    </div>
  );
}
