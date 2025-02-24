import { useState, useEffect } from "react";
import axios from "axios";
import { ICountry } from "../utils";
import { Link } from "react-router-dom";
export default function Countries() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const baseUrl = process.env.BACKED_END_URL;

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    axios
      .get(`${baseUrl}countries`)
      .then((response) => {
        setCountries(response.data?.countries || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      });
  }, [baseUrl]);

  console.log(countries);

  return (
    <div>
      <section className="flex pt-20 pb-10 bg-[#F3F4F6] justify-center items-center">
        <div className="justify-center items-center w-3/4">
          <p className="text-4xl font-bold uppercase text-center">Countries</p>
          {loading && <p>Loading...</p>}
          {error && <p>Error</p>}
          <div className="flex flex-wrap -mx-4 mt-5 justify-center">
            <input
              placeholder="Search countries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <div className="flex w-full h-full items-center justify-around px-10 flex-wrap gap-5">
              {filteredCountries.map((country: ICountry) => (
                <Link
                  to={`${country.slug}`}
                  key={country._id}
                  className="relative flex min-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-3"
                >
                  <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border text-8xl text-center pt-5">
                    {country.flag}
                  </div>
                  <div className="p-6">
                    <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-center">
                      {country.name}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
