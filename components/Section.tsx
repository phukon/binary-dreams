import Image from "next/image";
import satDish from "/public/pics/satDish.jpg";

const Section = () => {
  return (
    <section className="pt-6 pb-12">
      <div className="container px-4 mx-auto">
        <div className="pr-2 md:max-w-[1100px]">
          <div className="border border-white bg-white mt-2 ml-2 w-full h-full">
            <div className="border-2 border-black bg-white mr-2 -ml-2 mb-2 -mt-2">
              <div className="flex flex-col md:flex-row justify-between dotted-div">
                <Image src={satDish} height={450} width={450} style={{objectFit: "cover"}} alt="satDish" />

                <div className="flex flex-col justify-between">
                  <h1 className="font-serif tracking-[-2.5px] text-6xl p-4 mt-10 font-extrabold">
                    dreams from the future
                  </h1>
                  <div className="flex flex-col">
                    {" "}
                    <p className="p-4 font-semibold">
                      Giant satellite dishes are emblems of human curiosity.
                      They are always out there, transmitting electromagnetic
                      radiation into the starry night skies. Always watching.
                      Always tracking. Always communicating
                    </p>
                    <div className="p-4">
                      <a href="ewdew">
                        <button className="bg-black text-white px-4 py-3 font-semibold underline decoration-neutral-400">
                          Open
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
