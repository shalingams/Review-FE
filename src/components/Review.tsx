import { useSelector } from "react-redux";
import Progress from "./Progress";
import ReviewForm from "./ReviewForm";
import type { RootState } from "../redux/store";
import type { IReview } from "../utils";

export default function Review({reviews}: {reviews: IReview[]}) {
  const {currentUser} = useSelector((state: RootState) => state.user);
  const totalReviews = reviews?.length || 0;

  const rating = reviews?.reduce((acc, review) => acc + review.rating, 0) / totalReviews || 0;

  const oneReview = reviews?.filter((review) => review.rating === 1);
  const twoReview = reviews?.filter((review) => review.rating === 2);
  const threeReview = reviews?.filter((review) => review.rating === 3);
  const fourReview = reviews?.filter((review) => review.rating === 4);
  const fiveReview = reviews?.filter((review) => review.rating === 5);

  return (
    <div className="flex w-full h-full items-center justify-left">
      <div className="flex flex-cols-2">
        <div className="">
          <div className="grid p-10 grid-cols-2 gap-2">
            <div className="w-full grid grid-rows-5">
              <div className="text-xl cursor-pointer items-center justify-left flex gap-2">
                <div className="mb-2 flex gap-2">😍</div>
                <Progress reviews={fiveReview} totalReviews={totalReviews} />
              </div>
              <div className="text-xl cursor-pointer items-center justify-left flex gap-2">
                <div className="mb-2 flex gap-2">😊</div>
                <Progress reviews={twoReview} totalReviews={totalReviews} />
              </div>
              <div className="text-xl cursor-pointer items-center justify-left flex gap-2">
                <div className="mb-2 flex gap-2">🙂</div>
                <Progress reviews={threeReview} totalReviews={totalReviews} />
              </div>
              <div className="text-xl cursor-pointer items-center justify-left flex gap-2">
                <div className="mb-2 flex gap-2">😔</div>
                <Progress reviews={fourReview} totalReviews={totalReviews} />
              </div>
              <div className="text-xl cursor-pointer items-center justify-left flex gap-2">
                <div className="mb-2 flex gap-2">😭</div>
                <Progress reviews={oneReview} totalReviews={totalReviews} />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-8xl">{rating}</p>
              <p className="text-lg mt-2 flex gap-1">
                <span className={rating === 1 ? "opacity-100" : "opacity-40"}>😭</span>
                <span className={rating === 2 ? "opacity-100" : "opacity-40"}>😔</span>
                <span className={rating === 3 ? "opacity-100" : "opacity-40"}>🙂</span>
                <span className={rating === 4 ? "opacity-100" : "opacity-40"}>😊</span>
                <span className={rating === 5 ? "opacity-100" : "opacity-40"}>😍</span>
              </p>
              <p>{totalReviews} review{totalReviews > 1 && "s"}</p>
            </div>
          </div>
        </div>
        {currentUser && (
          <ReviewForm />
        )}
      </div>
    </div>
  );
}
