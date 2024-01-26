import Image from "next/image";
import { limitTo120Characters } from "@/lib/limitTo120Characters";
import slugify from "slugify";
import Link from "next/link";
import { Button } from "./ui/button";

type sectionProps = {
  head: string;
  desc: string;
  pic: string;
  value: string;
};

const Section = ({ head, desc, pic, value }: sectionProps) => {
  return (
    <section className="pt-6 max-w-[390px] pb-12 items-center md:max-w-[1200px]">
      <div className="container px-4 mx-auto">
        <div className="pr-2 ">
          <div className="border border-white bg-white mt-2 ml-2 w-full h-full">
            <div className="border-2 border-black bg-white mr-2 -ml-2 mb-2 -mt-2">
              <div
                style={{ boxShadow: "15px 15px 0px rgba(0, 0, 0, 1)" }}
                className="flex flex-col md:flex-row justify-between dotted-div"
              >
                <Image
                  src={pic}
                  height={450}
                  width={450}
                  style={{ objectFit: "cover" }}
                  alt="satDish"
                />

                <div className="flex flex-col justify-between  md:px-10">
                  <h1 className="min-h-[250px]  md:h-auto tracking-[-2.5px] text-6xl p-4 md:mt-10 break-words font-extrabold">
                    {head}
                  </h1>
                  <div className="flex flex-col">
                    {" "}
                    <p className="p-4 -mt-10 md:mt-10 --local-inter font-semibold break-all md:h-auto min-h-[100px]">
                      {limitTo120Characters(desc) + "... .."}
                    </p>
                    <div className="p-4 flex justify-evenly">
                      <Link href={`/read/${slugify(head, { lower: true, remove: /[*+~.(),'"?!:@]/g })}`}>
                        <button className="bg-black text-white px-4 py-3 font-semibold rounded underline decoration-neutral-400">
                          Open
                        </button>
                      </Link>
                      <Link  href={`/editor?bg=${value}`}>
                        <Button
                          variant="brutal"
                          size="default"
                          style={{ boxShadow: "6px 6px 0px rgba(0, 0, 0, 1)" }}
                          className=" text-black px-4 py-3 font-semibold rounded underline decoration-neutral-400"
                        >
                          Create
                        </Button>
                      </Link>
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
