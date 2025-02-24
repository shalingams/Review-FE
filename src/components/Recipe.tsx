import { IRecipe } from "../utils";
import Thumbnail from "./Thumbnail";

export default function Recipe({ recipe }: { recipe: IRecipe }) {
  return (
    <div>
      <section className="flex bg-[#F3F4F6] justify-center items-center">
        <div className="justify-center items-center w-3/4">
          <div className="justify-center5 mb-5 mt-5">
            <Thumbnail recipe={recipe} />
          </div>
        </div>
      </section>
    </div>
  );
}
