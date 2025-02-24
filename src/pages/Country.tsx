import { useParams } from "react-router-dom";
import { ICountry, IRecipe } from "../utils";
import { useEffect, useState } from "react";
import axios from "axios";
import Recipe from "../components/Recipe";

export default function Country() {
  const { id } = useParams();
  const [country, setCountry] = useState<ICountry | null>(null);
  const [recipies, setRecipes] = useState<IRecipe[] | null>([]);
  const baseUrl = process.env.BACKED_END_URL;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    axios
      .get(`${baseUrl}countries/${id}`)
      .then((response: { data: { country: ICountry; recipes: IRecipe[] } }) => {
        setCountry(response.data.country);
        setRecipes(response.data.recipes);
        setLoading(false);
      })
      .catch((error: unknown) => {
        console.error(error);
        setError(true);
      });
  }, [baseUrl, id]);

  return (
    <div>
      <section className="flex pt-20 pb-10 bg-[#F3F4F6] justify-center items-center">
        <div className="justify-center items-center w-3/4">
          {loading && <p>Loading...</p>}
          {error && <p>Error</p>}
          <div className="flex flex-wrap -mx-4 mt-5 justify-center">
            <div className="relative flex min-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-3">
              <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border text-8xl text-center pt-5">
                {country?.flag}
              </div>
              <div className="p-6">
                <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-center">
                  {country?.name}
                </h4>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 mt-5 justify-center gap-5">
            {recipies?.map((recipe: IRecipe) => (
              <div
                key={recipe._id}
                className="relative flex min-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-3"
              >
                <Recipe recipe={recipe} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
