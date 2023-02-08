import { TrashIcon, GiftIcon } from "@heroicons/react/20/solid";
import CounterInput from "react-counter-input";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../utils/hooks";
import { updateCart, deleteCart } from "../redux/slices/cartSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const actionDispatch = (dispatch) => ({
  updateCart: (cart) => dispatch(updateCart(cart)),
  deleteCart: (cart) => dispatch(deleteCart(cart)),
});

export default function ShoppingCart() {
  const cart = useSelector((state) => state.cart.cart);
  const { updateCart, deleteCart } = actionDispatch(useAppDispatch());
  const navigate = useNavigate();

  const handleAddCart = (count, productId) => {
    const newCart = structuredClone(
      cart.find((x) => x?._id?.["$oid"] === productId)
    );
    newCart.quantity = count;
    updateCart(newCart);
  };

  const getTotal = () => {
    let sum = 0;
    cart.map((product) => (sum += product.price * product.quantity));
    return sum;
  };

  return (
    <div className="bg-white">
      <div className="">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <div className="px-4 sm:px-6 lg:px-8">
              <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                            >
                              Image
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Product
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Quantity
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Total
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Remove
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {cart.map((product) => (
                            <tr key={product?._id?.["$oid"]}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                <div className="group aspect-w-2 aspect-h-1 overflow-auto sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 hover:cursor-pointer">
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
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {product?.name}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <p className=" text-xl font-normal">
                                  {" "}
                                  {new Intl.NumberFormat("de-DE").format(
                                    product?.price
                                  )}{" "}
                                  VND
                                </p>
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <CounterInput
                                  min={1}
                                  count={product?.quantity}
                                  // max={10}
                                  onCountChange={(count) => {
                                    handleAddCart(
                                      count,
                                      product?._id?.["$oid"]
                                    );
                                  }}
                                />
                              </td>

                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <p className=" text-xl font-normal">
                                  {" "}
                                  {new Intl.NumberFormat("de-DE").format(
                                    product?.price * product?.quantity
                                  )}{" "}
                                  VND
                                </p>
                              </td>
                              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                <button
                                  onClick={() => deleteCart(product?._id?.["$oid"])}
                                  className="text-black hover:text-indigo-900"
                                >
                                  <TrashIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="flex w-full items-center justify-between p-4 bg-gray-50 italic">
                        <a
                          href="/shop"
                          className="rounded-md border border-transparent py-2 px-4 text-base font-normal text-gray-600 hover:bg-opacity-75 flex items-center"
                        >
                          <ArrowLeftIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                          Continue Shopping
                        </a>
                        <a
                          href="/checkout"
                          className="border border-black bg-white py-2 px-4 text-base font-normal text-gray-600 hover:bg-indigo-50 flex items-center"
                        >
                          {" "}
                          Process to checkout
                          <ArrowRightIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2
              id="summary-heading"
              className="text-lg font-medium text-gray-900 italic uppercase"
            >
              Cart Total
            </h2>

            <dl className="mt-6 space-y-4 italic uppercase">
              <div className="flex items-center justify-between">
                <dt className="text-base text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">
                  <p className=" text-xl font-normal">
                    {" "}
                    {new Intl.NumberFormat("de-DE").format(getTotal())} VND
                  </p>
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base  text-gray-600">Order total</dt>
                <dd className="text-base font-medium text-gray-900">
                  <p className=" text-xl font-normal">
                    {" "}
                    {new Intl.NumberFormat("de-DE").format(getTotal())} VND
                  </p>
                </dd>
              </div>
            </dl>

            <div className="mt-6">
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full border border-gray-300 px-5 py-3 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                placeholder="Enter your coupon"
              />
              <button
                type="button"
                className="flex items-center justify-center w-full rounded-md border border-transparent bg-black py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                <GiftIcon className="h-5 w-5" aria-hidden="true" />
                Apply coupon
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}
