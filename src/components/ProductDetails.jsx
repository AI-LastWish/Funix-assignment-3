import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ColorRing } from "react-loader-spinner";
import axios from "axios";
import { TOP_TRENDING } from "../constants/url";
import CounterInput from "react-counter-input";
import Product from "./elements/Product";

const ProductDetails = () => {
  const { id } = useParams();

  const [related, setRelated] = useState(null);
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    const result = await axios.get(TOP_TRENDING);
    const res = result?.data;

    if (res) {
      const prod = res.find((x) => x?._id?.["$oid"] === id);
      const rel = res.filter((x) => x?.category === prod?.category);

      if (prod) setProduct(prod);
      if (rel) setRelated(rel);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <>
      {product === null || related === null ? (
        <div className="flex h-screen justify-center items-center">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        <div>
          <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:!block">
            <button
              type="button"
              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => {}}
            >
              <span className="sr-only">Close</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="space-y-4 sm:grid sm:grid-cols-2 sm:items-start sm:gap-6 sm:space-y-0 p-2 rounded-lg italic">
            <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
              <img
                className="rounded-lg object-cover shadow-lg"
                src={product?.img1}
                alt={product?.name}
              />
            </div>
            <div className="mb-4">
              <div className="space-y-4">
                <div className="space-y-1 text-2xl font-medium leading-6">
                  <h3>{product?.name}</h3>
                  <p className=" text-xl font-normal">
                    {" "}
                    {new Intl.NumberFormat("de-DE").format(product?.price)} VND
                  </p>
                </div>
                <div className="text-lg font-thin">
                  <p className="">{product?.long_desc}</p>
                </div>
                <div className="text-lg font-thin italic">
                  <p className="">
                    <span className=" font-bold">CATEGORY: </span>
                    {product?.category}
                  </p>
                </div>
                <div className="flex items-center">
                  <CounterInput
                    min={1}
                    count={1}
                    // max={10}
                    // onCountChange={(count) => console.log(count)}
                  />
                  <button
                    type="button"
                    className="inline-flex items-center border border-transparent bg-black px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="ml-3 block text-sm font-medium italic">
                      Add To cart
                    </span>
                  </button>
                </div>
                <div className="text-lg font-thin italic">
                  <span className=" font-bold">RELATED PRODUCTS: </span>
                  {/* Product grid */}
                  <Product products={related}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
