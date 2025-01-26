import { useState, useEffect } from "react";
import axios from "axios";
import { ICountry } from "../utils";
export default function Countries() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const baseUrl = process.env.BACKED_END_URL;

  useEffect(() => {
    axios
      .get(`${baseUrl}countries`)
      .then((response) => {
        setCountries(response.data?.countries || []);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [baseUrl]);

  console.log(countries);

  return (
    <div className="flex w-full h-full items-center justify-around px-10">
      <ul className="grid grid-cols-4 gap-4 w-4/5 h-full items-center justify-center">
        {countries.map((country: ICountry) => (
          <li key={country._id}>{country.flag}{country.name}</li>
        ))}
      </ul>
    </div>
  );
}
