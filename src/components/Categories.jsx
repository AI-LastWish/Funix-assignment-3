const catogories1 = [
  {
    id: 1,
    image: "./images/product_1.png",
  },
  {
    id: 2,
    image: "./images/product_2.png",
  },
];

const catogories2 = [
  {
    id: 3,
    image: "./images/product_3.png",
  },
  {
    id: 4,
    image: "./images/product_4.png",
  },
  {
    id: 5,
    image: "./images/product_5.png",
  },
];

const Categories = () => {
  return (
    <>
      <h2 className="pb-8  tracking-tight text-gray-900 uppercase text-center italic">
        <p className="text-lg text-text_banner">carefully created collections</p>
        <p className="text-2xl font-bold pt-2">browse our categories</p>
      </h2>
      <div className="space-y-12">
        <ul
          role="list"
          className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-2 lg:gap-x-8"
        >
          {catogories1.map((catogory) => (
            <div
              key={catogory.id}
              className="group aspect-w-2 aspect-h-1 overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 hover:cursor-pointer"
            >
              <img
                src={catogory.image}
                alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                className="object-cover object-center group-hover:opacity-75"
              />
              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50"
              />
            </div>
          ))}
        </ul>
      </div>
      <div className="pt-8">
        <ul
          role="list"
          className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
        >
          {catogories2.map((catogory) => (
            <div
              key={catogory.id}
              className="group aspect-w-2 aspect-h-1 overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 hover:cursor-pointer"
            >
              <img
                src={catogory.image}
                alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                className="object-cover object-center group-hover:opacity-75"
              />
              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50"
              />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Categories;
