import { Link } from "react-router-dom";
import { IRecipe } from "../utils";

export default function Thumbnail({recipe}: {recipe: IRecipe}) {
  return (
    <div className="flex flex-col text-center">
      <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
        <img
          className="inline-block shrink-0 rounded-md w-full"
          src="http://img.youtube.com/vi/3JZ_D3ELwOQ/2.jpg"
          alt={recipe.name}
        />
      </div>
      <div className="text-center">
        <Link
          to={`/recipes/${recipe.slug}`}
          className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out"
        >
          {recipe.name}
        </Link>
        {/* <span className="block font-medium text-muted">Marketing Manager</span> */}
      </div>
    </div>
  );
}
