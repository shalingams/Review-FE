import { useEffect, useState } from "react";
import type { IReview, TypeService } from "../utils";
import { useParams } from "react-router-dom";
import Review from "../components/Review";

export default function Service() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const params = useParams();
  const serviceId = params.id;
  const [selectedService, setSelectedService] = useState<TypeService | null>(
    null
  );
  const [reviews, setReviews] = useState<IReview[] | null>(
    null
  );

  const baseUrl = process.env.BACKED_END_URL

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetch(`${baseUrl}services/${serviceId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await data.json();

        // biome-ignore lint/complexity/useLiteralKeys: <explanation>
        setSelectedService(json['service']);
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
  }, [serviceId, baseUrl]);

  return (
    <div>
      <section className="flex pt-20 pb-10 justify-center items-center">
        <div className="justify-center items-center w-3/4">
          {loading && <p>Loading...</p>}
          {error && <p>Error</p>}
          {selectedService && (
            <div className="py-16">
              <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="grid gap-12 lg:grid-cols-1">
                  <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50">
                    <img
                      src={selectedService.picture}
                      alt="art cover"
                      loading="lazy"
                      className="h-48 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
                    />
                    <div className="sm:w-7/12 pl-0 p-5">
                      <div className="space-y-2">
                        <div className="space-y-4 w-full">
                          <h4 className="text-2xl font-semibold text-cyan-900">
                            {selectedService.title}
                          </h4>
                        </div>
                        <div className="grid grid-cols-2">
                        <div className="items-center space-x-2">
                            <h3 className="text-lg font-semibold text-gray-400">
                              Opens on
                            </h3>
                            <div className="flex items-center space-x-2">
                              {selectedService.availability[0]?.active && (
                                <div className="flex items-center space-x-2">
                                  <p
                                    className={
                                      // biome-ignore lint/style/useTemplate: <explanation>
                                      "text-sm " +
                                      (selectedService.availability[0]
                                        .dayOfWeek[1]
                                        ? "text-gray-800 font-bold"
                                        : "text-gray-400 line-through")
                                    }
                                  >
                                    Mon
                                  </p>

                                  <p
                                    className={
                                      // biome-ignore lint/style/useTemplate: <explanation>
                                      "text-sm " +
                                      (selectedService.availability[0]
                                        .dayOfWeek[2]
                                        ? "text-gray-800 font-bold"
                                        : "text-gray-400 line-through")
                                    }
                                  >
                                    Tue
                                  </p>

                                  <p
                                    className={
                                      // biome-ignore lint/style/useTemplate: <explanation>
                                      "text-sm " +
                                      (selectedService.availability[0]
                                        .dayOfWeek[3]
                                        ? "text-gray-800 font-bold"
                                        : "text-gray-400 line-through")
                                    }
                                  >
                                    Wed
                                  </p>

                                  <p
                                    className={
                                      // biome-ignore lint/style/useTemplate: <explanation>
                                      "text-sm " +
                                      (selectedService.availability[0]
                                        .dayOfWeek[4]
                                        ? "text-gray-800 font-bold"
                                        : "text-gray-400 line-through")
                                    }
                                  >
                                    Thu
                                  </p>

                                  <p
                                    className={
                                      // biome-ignore lint/style/useTemplate: <explanation>
                                      "text-sm " +
                                      (selectedService.availability[0]
                                        .dayOfWeek[5]
                                        ? "text-gray-800 font-bold"
                                        : "text-gray-400 line-through")
                                    }
                                  >
                                    Fri
                                  </p>

                                  <p
                                    className={
                                      // biome-ignore lint/style/useTemplate: <explanation>
                                      "text-sm " +
                                      (selectedService.availability[0]
                                        .dayOfWeek[6]
                                        ? "text-gray-800 font-bold"
                                        : "text-gray-400 line-through")
                                    }
                                  >
                                    Sat
                                  </p>

                                  <p
                                    className={
                                      // biome-ignore lint/style/useTemplate: <explanation>
                                      "text-sm " +
                                      (selectedService.availability[0]
                                        .dayOfWeek[0]
                                        ? "text-gray-800 font-bold"
                                        : "text-gray-400 line-through")
                                    }
                                  >
                                    Sun
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="items-center space-x-2">
                            <h3 className="text-lg font-semibold text-gray-400">
                              Offered by
                            </h3>
                            <p className="text-sm text-gray-800">
                              {selectedService.providedBy}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {selectedService.description && (
                            <p className="text-sm text-gray-800">
                              {selectedService.description}
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
