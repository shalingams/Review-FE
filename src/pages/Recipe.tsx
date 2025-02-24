import { useEffect, useState } from "react";
import type { IReview, IRecipe } from "../utils";
import { useParams } from "react-router-dom";
import Review from "../components/Review";

export default function Recipe() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const params = useParams();
  const recipeId = params.id; 
  const [recipe, setRecipe] = useState<IRecipe | null>(null);
  const [reviews, setReviews] = useState<IReview[]>([]);

  const baseUrl = process.env.BACKED_END_URL

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetch(`${baseUrl}recipes/${recipeId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await data.json();

        // biome-ignore lint/complexity/useLiteralKeys: <explanation>
        setRecipe(json["recipes"]);
        // biome-ignore lint/complexity/useLiteralKeys: <explanation>
        setReviews(json['reviews']);
        return json;
      };
      fetchData();
      setLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }, [recipeId, baseUrl]);

  return (
    <div>
      <section className="flex pt-20 pb-10 justify-center items-center">
        <div className="justify-center items-center w-3/4">
          {loading && <p>Loading...</p>}
          {error && <p>Error</p>}
          {recipe && (
            <div className="py-16">
              <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="grid gap-12 lg:grid-cols-1">
                  <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50">
                    <img
                      src={recipe.image}
                      alt="art cover"
                      loading="lazy"
                      className="h-48 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
                    />
                    <div className="sm:w-7/12 pl-0 p-5">
                      <div className="space-y-2">
                        <div className="space-y-4 w-full">
                          <h4 className="text-2xl font-semibold text-cyan-900">
                            {recipe.name}
                          </h4>
                        </div>

                        <div className="flex items-center space-x-2">
                          {recipe.description && (
                            <p className="text-sm text-gray-800">
                              {recipe.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="flex justify-center items-center">
        <div className="justify-center items-center w-3/4">
          <hr />
          <div className="py-16">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="grid gap-12 lg:grid-cols-1">
                {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
                <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50"></div>
                {!loading && <Review reviews={reviews} />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
