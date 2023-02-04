import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TOP_TRENDING } from "../constants/url";
import { useAppDispatch } from "../utils/hooks";
import { setShowPopup } from "../redux/slices/popupSlice";
import { ColorRing } from "react-loader-spinner";
import ProductPopup from "./ProductPopup";

const actionDispatch = (dispatch) => ({
  setShowPopup: (showPopup) => dispatch(setShowPopup(showPopup)),
});

const TopTrending = () => {
  const showPopup = useSelector((state) => state.showPopup.showPopup);
  const { setShowPopup } = actionDispatch(useAppDispatch());

  const handleShowModal = (show) => {
    setShowPopup(show);
  };

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const result = await axios.get(TOP_TRENDING);
    const res = result?.data;
    if (res) setProducts(res);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {products.length === 0 ? (
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
        <div className="pt-16">
          <h2 className="pb-8  tracking-tight text-gray-900 uppercase italic">
            <p className="text-lg text-text_banner">made the hard way</p>
            <p className="text-2xl font-bold pt-2">top trending products</p>
          </h2>
          <div className="space-y-12">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8"
            >
              {products.map((product) => (
                <li key={product?._id?.["$oid"]} className="cursor-pointer">
                  <p>{product?._id[0]?.["$oid"]}</p>
                  <div className="space-y-4">
                    <div
                      onClick={() => handleShowModal(true)}
                      className="group aspect-w-2 aspect-h-1 overflow-auto sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 hover:cursor-pointer"
                    >
                      <img
                        className="object-cover object-center group-hover:opacity-75"
                        src={product?.img1}
                        alt={product?.name}
                      />
                      <div
                        aria-hidden="true"
                        className="bg-gradient-to-b from-transparent to-black opacity-50"
                      />
                    </div>

                    <div className="space-y-2 text-center">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>{product?.name}</h3>
                      </div>
                      <div className="space-y-1 text-lg font-normal leading-6 italic text-text_banner">
                        <h3>
                          {new Intl.NumberFormat("de-DE").format(
                            product?.price
                          )}{" "}
                          VND
                        </h3>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {showPopup ? (
            <ProductPopup open={showPopup} setOpen={handleShowModal} />
          ) : null}
        </div>
      )}
    </>
  );
};

export default TopTrending;
