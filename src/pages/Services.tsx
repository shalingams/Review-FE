import { useEffect, useState } from "react";
import type { TypeService } from "../utils";

export default function Services() {
  const [services, setServices] = useState<TypeService[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const baseUrl = process.env.BACKED_END_URL;

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetch(`${baseUrl}services`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await data.json();
        setServices(json);
        return json;
      };
      fetchData();
      setLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }, [baseUrl]);

  return (
    <div>
      <section className="flex pt-20 pb-10 bg-[#F3F4F6] justify-center items-center">
        <div className="justify-center items-center w-3/4">
          <p className="text-4xl font-bold">Services</p>
          {loading && <p>Loading...</p>}
          {error && <p>Error</p>}
          <div className="flex flex-wrap -mx-4 mt-5">
            {services.map((service) => (
              <div key={service._id} className="w-full md:w-1/2 xl:w-1/3 px-4">
                <div className="bg-white rounded-lg overflow-hidden mb-10">
                  <img src={service.picture} alt="profile" className="w-full" />
                  <div className="p-8 sm:p-9 md:p-7 xl:p-9">
                    <h3>
                      <a
                        href={`/services/${service._id}`}
                        className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] block hover:text-primary"
                      >
                        {service.title}
                      </a>
                    </h3>
                    <span className="text-body-color text-base">
                      Provided by: {service.providedBy}
                    </span>
                    <p className="text-base text-body-color leading-relaxed mb-7 mt-5 text-gray-500">
                      {service.description}
                    </p>
                    <p className="flex text-base text-body-color leading-relaxed text-black">
                      <img
                        className="w-5 h-5"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAtCAYAAADV2ImkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQTSURBVHgB1Zl5yE1pHMe/w0wzzIyZMfs008xQQihLiOgl4g9bspXwD2WJkCgKEVEU8o/8Yc/yBxIha4rIFtmyvF77vu+779fvOd7jOu/7nnPPPffwrU/33uc+z72/85zn+S3PAT4zfYF0VYW0JvXJj+Q62UfWkptBA8ojHf1LJpDxzobD5Bh5QlqR0eQfsoc8Q8qqiWJD6pbQpzZZRbaRP5GiKpGjZDiZDDOqJA0lz8lG8iVS0gwyl5Qjv5ATpFdAP13QeVKDrCfjvC/8m64ybP1URjKqQEaQhuSSa2tE1pAG5IJrG0L6kG7kDGxTziJ1yAvP4G/JTtiVn0My+o/cIC0z2mfCJqk3GUb6kvbOWEnLSGu5HzngrY1m5DbpSB4gGY0h3wW0a9Y1WStJY9IO5i3+8vXR7NeCz+AfYFeflLGS7uKjgPYXsGWwlLwi8wL6/EE26I1/971BsroDCxRB2g1zcSXFhRXkst7k012cJD1hGz1ocu6WME7e5Gc3/t0mC6NqpAPiaSvMUzRFNPUgt5BhcBE5XsoguZ8uiKevyEUyHeFdp5bQADKNvEYEybkvQvb6HxbV9pJCshx2m0uT7upu1/99vAi7JOJIgULLoYAsIA9hLmoX7HYHZYxyr/K9ioSa2fdrPmmDFbHkYzeRJb72Se51FCylXJ4x7ifSiUzM/EHPSxTANsMkhJfGam0NhK3PIJ1zxsgDVPS1a8aeOKOkvzPGzXevVTN/0Jvh32EpXRR1J4PJILLFfT4CS8avwG63coZDZfyOLmonQirbJaENoST7IIrXVz72Q1aBQ2O0dDRzmaG2IhJWNrPSlXRGcWTyR60KSFhRDZYjn0p2ICVFMViJyRyYI9+GlBTF4Ob4OPnO+zFBFIOVUC9Edirv/stLHz2//TWyvGj50GWlfK+08D4sJ9XrNViEUhZV6NrkT1XlKpw+hVUJKgjkk3UoogKhiLx0fTVG5xGzS/lfBY7T/oawbm01uYf4uhLQdhkRFNZg+du1+ATkN1jr6Vd8WvrIHr/Bbch25EcqSMNGxfv+D36D18Eyr7gq5373OeJLm26xv8FvsErsG4in78lmmKtSDXgV8VQpsyHXGVY9WOmjiShAAvJmWAlMLozXYbSqCyVB6xBfCjAfFJ9elKkO87U6NSxEevJXLppMFQgyuK/X6A+L/clIRHNtGq/ZfFxGP/V5hnClugLUA9f3LOyA8BRyJNViReSbMvopBEctwQKVi3X7Jkd9QimOwVoOTWBJUFkPTpQvtEBKT630kESniTJUfrZuiDE699UB9S03thryJOUbKj6nwAz9LcJYnafp2H8s2Q8LMpEVtWpuC/Micn21kd1G0sMWnYOogonsq6MarHxWwaE94kmHgnHTgM9DbwGwKMjZl7UESAAAAABJRU5ErkJggg=="
                        alt=""
                      />
                      <span className="ml-2">{service.category}</span>
                    </p>
                    <p className="flex text-base text-body-color leading-relaxed text-black">
                      <svg
                        className="w-5 h-5 MuiSvgIcon-root MuiSvgIcon-fontSizeXl2 css-wyppz3"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="LocalOfferOutlinedIcon"
                      >
                        {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
                        <path d="m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42M13 20.01 4 11V4h7v-.01l9 9z"></path>
                        {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
                        <circle cx="6.5" cy="6.5" r="1.5"></circle>
                      </svg>
                      <span className="ml-2">
                        Start at € {service.availability[0].time.startTime}
                      </span>
                    </p>
                    <div className="flex items-center justify-center">
                      <a
                        href={`/services/${service._id}`}
                        className="inline-block py-2 px-7 border border-[#ddc888] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white transition hover:bg-[#ddc888]"
                      >
                        View Details
                      </a>
                    </div>
                    <div className="flex items-center justify-center">
                      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                      <button className="flex gap-2 items-center p-2 justify-center w-full m-5 bg-[#ad8a1f] rounded-md hover:border-primary hover:bg-primary hover:text-black transition hover:bg-[#ddc888]">
                        <span className="flex">
                          <img src="/bookmark-white.png" alt="" />
                        </span>
                        <span className="flex">Book</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
