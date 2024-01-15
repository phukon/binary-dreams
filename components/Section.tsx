const Section = () => {
  return (
    <section className="pt-6 pb-12">
      <div className="container px-4 mx-auto">
        <div className="pr-2 w-full">
          <div className="border border-white bg-white mt-2 ml-2 w-full h-full">
            <div className="border-2 border-black bg-white mr-2 -ml-2 mb-2 -mt-2">
              <div className="dotted-pattern-bg flex flex-col md:flex-row justify-between items-end">
                <div className="flex flex-col justify-between">
                  <h1 className="font-serif tracking-[-2.5px] text-6xl p-4 font-extrabold">
                  dreams from the future
                  </h1>
                  <p className="p-4 font-semibold">p-4 font-semibold</p>
                  <div className="p-4">
                    <a href="ewdew">
                      {" "}
                      <button className="bg-black text-white px-4 py-3 font-semibold underline decoration-neutral-400">hello obook </button>
                    </a>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <img
                    src="https://ripen.in/_astro/genz-voice.0IuZae0H_ZDWpcX.svg"
                    alt="ewdw"
                  />
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
