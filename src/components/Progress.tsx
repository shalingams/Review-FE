import type { IReview } from "../utils";

export default function Progress({ reviews, totalReviews }: { reviews: IReview[] , totalReviews: number}) {
  const percentage = (reviews?.length / totalReviews) * 100 || 0;
  console.log("###############",percentage);
  return (
    <div>
      <div className="mb-2 flex">
        <span className={`mb-2 h-[15px] w-8 flex-1 ${percentage < 10 ? "bg-gray-200" : "bg-[#ddc888]"}`}> </span>
        <span className={`mb-2 h-[15px] w-8 flex-1 ${percentage < 20 ? "bg-gray-200" : "bg-[#ddc888]"}`}> </span>
        <span className={`mb-2 h-[15px] w-8 flex-1 ${percentage < 30 ? "bg-gray-200" : "bg-[#ddc888]"}`}> </span>
        <span className={`mb-2 h-[15px] w-8 flex-1 ${percentage < 40 ? "bg-gray-200" : "bg-[#ddc888]"}`}> </span>
        <span className={`mb-2 h-[15px] w-8 flex-1 ${percentage < 50 ? "bg-gray-200" : "bg-[#ddc888]"}`}> </span>
        <span className={`mb-2 h-[15px] w-8 flex-1 ${percentage < 60 ? "bg-gray-200" : "bg-[#ddc888]"}`}> </span>
        <span className={`mb-2 h-[15px] w-8 flex-1 ${percentage < 70 ? "bg-gray-200" : "bg-[#ddc888]"}`}> </span>
        <span className={`mb-2 h-[15px] w-8 flex-1 ${percentage < 80 ? "bg-gray-200" : "bg-[#ddc888]"}`}> </span>
        <span className={`mb-2 h-[15px] w-8 flex-1 ${percentage < 90 ? "bg-gray-200" : "bg-[#ddc888]"}`}> </span>
        <span className="text-sm mb-2 h-[15px] w-8 flex-1 ml-1">{reviews?.length || 0}</span>
      </div>
    </div>
  );
}
