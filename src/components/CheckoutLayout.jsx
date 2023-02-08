import { useSelector } from "react-redux";


export default function CheckoutLayout() {
  const cart = useSelector((state) => state.cart.cart);

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
                    <div className="">
                      <section aria-labelledby="contact-info-heading">
                        <h2
                          id="contact-info-heading"
                          className="text-lg font-medium text-gray-900"
                        >
                          Billing Details
                        </h2>

                        <div className="mt-6">
                          <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Full name
                          </label>
                          <div className="mt-1">
                            <input
                              placeholder="Enter your full name here!"
                              type="text"
                              id="name"
                              name="name"
                              autoComplete="names"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>
                        <div className="mt-6">
                          <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email
                          </label>
                          <div className="mt-1">
                            <input
                              placeholder="Enter your email here!"
                              type="text"
                              id="email"
                              name="email"
                              autoComplete="email"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>
                        <div className="mt-6">
                          <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Phone number:
                          </label>
                          <div className="mt-1">
                            <input
                              placeholder="Enter your phone number here!"
                              type="text"
                              id="phone"
                              name="phone"
                              autoComplete="phone"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>
                        <div className="mt-6">
                          <label
                            htmlFor="address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Address:
                          </label>
                          <div className="mt-1">
                            <input
                              placeholder="Enter your address here!"
                              type="text"
                              id="address"
                              name="address"
                              autoComplete="address"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>
                      </section>
                      <div className="flex w-full items-center justify-between py-4 bg-gray-50">
                        <a
                          href="/"
                          className="border border-transparent bg-black py-2 px-2 text-base font-normal text-white hover:bg-opacity-75 flex items-center"
                        >
                          Place order
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
              Your Order
            </h2>

            <dl className="mt-6 space-y-4 italic">
              {cart.map((product) => (
                <>
                  <div className="flex items-center justify-between">
                    <dt className="text-base text-gray-600">{product?.name}</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      <p className=" text-sm text-text_banner font-normal">
                        {" "}
                        {new Intl.NumberFormat("de-DE").format(
                          product?.price * product?.quantity
                        )}{" "}
                        VND x {product?.quantity}
                      </p>
                    </dd>
                  </div>
                </>
              ))}
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base  text-gray-600">TOTAL</dt>
                <dd className="text-base font-medium text-gray-900">
                  <p className=" text-xl font-normal">
                    {" "}
                    {new Intl.NumberFormat("de-DE").format(getTotal())} VND
                  </p>
                </dd>
              </div>
            </dl>
          </section>
        </form>
      </div>
    </div>
  );
}
