import React from "react";
import { Typewriter } from "react-simple-typewriter";

function HeroLanding() {
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-[url(/coffee.avif)]">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 ">
          <div
            style={{
              background: "rgba(255, 255, 255, .9)",
              padding: "2rem",
              borderRadius: "5px",
            }}
          >
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full border px-3 py-1 text-sm leading-6 text-muted-foreground">
                Come try us at our next location at ___{" "}
                <a
                  href="#location"
                  className="font-semibold text-secondary-foreground"
                >
                  <span aria-hidden="true" className="absolute inset-0" />
                  More info <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-secondary-foreground sm:text-6xl">
                Coffee that will{" "}
                <span className="text-blue-600">
                  <Typewriter
                    words={["blow your mind", "give you the tingles"]}
                    typeSpeed={100}
                    deleteSpeed={100}
                    loop={false}
                  ></Typewriter>
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Anim aurte id magna aliqua ad ad non deserunt sunt. Qui irure
                qui lorem cupidatat commodro. Elit sunt amet fugiat veniam
                occaecat fugiat aliqura.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#menu"
                  className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Check out our menu
                </a>
                <a
                  href="#about"
                  className="text-sm font-semibold leading-6 text-alternate"
                >
                  Learn about us <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroLanding;
