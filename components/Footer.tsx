import Link from "next/link";

const Footer = () => {
  return (
    <div className="border-black border-t-2 w-full items-center flex flex-col">
      <section className=" hidden md:block pt-6 px-6 pb-2 text-center md:max-w-[900px] break-words  text-[#666]">
        <p>
          Hats off to Ishan for dropping these mind-bending visuals, straight
          out of the Midjourney magic on his Twitter¹. <br />I was captivated by
          the pictures and felt compelled to share this the beauty and wonder
          encapsulated in each image with a wider audience. Feel free to share
          your thoughts, you can reach me on my Twitter². <br />
          Context.:{" "}
          <Link style={{ color: "black" }} href="https://twitter.com/radshaan">
            [1]
          </Link>
          <Link
            style={{ color: "black" }}
            href="https://twitter.com/phukon"
          >
            [2]
          </Link>
        </p>
      </section>
      <section className=" text-sm md:hidden pt-6 px-6 pb-2 text-center md:max-w-[900px] break-words  text-[#666]">
        <p>
          binary<b>dreams</b><br/>Reach me at @phukon¹. Images generated by @radshaan². Source code available³. Context.:{" "}
          <Link style={{ color: "black" }} href="https://twitter.com/phukon">
            [1]
          </Link>
          <Link style={{ color: "black" }} href="https://twitter.com/radshaan">
            [2]
          </Link>
          <Link style={{ color: "black" }} href="/about">
            [3]
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Footer;
