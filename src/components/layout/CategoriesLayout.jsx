import { Fragment, useState, useEffect } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { TOP_TRENDING } from "../../constants/url";
import axios from "axios";
import Pagination from "../elements/Pagination";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  { id: 1, name: "APPLE", href: "#", category: "" },
  { id: 2, name: "All", href: "#", category: "" },
  { id: 3, name: "IPHONE & MAC", href: "#", category: "iphonemac" },
  { id: 4, name: "iPhone", href: "#", category: "iphone" },
  { id: 5, name: "iPad", href: "#", category: "ipad" },
  { id: 6, name: "Macbook", href: "#", category: "macbook" },
  { id: 7, name: "WIRELESS", href: "#", category: "wireless" },
  { id: 8, name: "Airpod", href: "#", category: "airpod" },
  { id: 9, name: "Watch", href: "#", category: "watch" },
  { id: 10, name: "OTHERS", href: "#", category: "others" },
  { id: 11, name: "Mouse", href: "#", category: "mouse" },
  { id: 12, name: "Keyboard", href: "#", category: "keyboard" },
  { id: 13, name: "Others", href: "#", category: "others" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function isUpperCase(input) {
  return input === String(input).toUpperCase();
}

export default function CategoriesLayout() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [allProducts, setAll] = useState([]);
  const [products, setProducts] = useState([]);

  const filterProducts = (category) => {
    switch (category) {
      case "":
        setProducts(allProducts);
        break;
      case "iphonemac":
        setProducts(
          allProducts.filter(
            (product) =>
              product.category.toLowerCase() === "iphone" ||
              product.category.toLowerCase() === "ipad"
          )
        );
        break;
      case "iphone":
        setProducts(
          allProducts.filter(
            (product) => product.category.toLowerCase() === "iphone"
          )
        );
        break;
      case "ipad":
        setProducts(
          allProducts.filter(
            (product) => product.category.toLowerCase() === "ipad"
          )
        );
        break;
      case "macbook":
        setProducts(
          allProducts.filter(
            (product) => product.category.toLowerCase() === "macbook"
          )
        );
        break;
      case "wireless":
        setProducts(
          allProducts.filter(
            (product) =>
              product.category.toLowerCase() === "airpod" ||
              product.category.toLowerCase() === "watch"
          )
        );
        break;
      case "airpod":
        setProducts(
          allProducts.filter(
            (product) => product.category.toLowerCase() === "airpod"
          )
        );
        break;
      case "watch":
        setProducts(
          allProducts.filter(
            (product) => product.category.toLowerCase() === "watch"
          )
        );
        break;
      default:
        setProducts([]);
        break;
    }
  };

  const getProducts = async () => {
    const result = await axios.get(TOP_TRENDING);
    const res = result?.data;

    if (res) {
      setProducts(res);
      setAll(res);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 uppercase italic">
              categories
            </h1>

            <div className="flex items-center justify-between w-full ml-24">
              <div className="relative mt-1 flex items-center">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Enter Search Here"
                  className="block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={(e) => {
                    filterProducts(e.target.value.trim());
                  }}
                />
              </div>
              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Default Sorting
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <a
                                href={option.href}
                                className={classNames(
                                  option.current
                                    ? "font-medium text-gray-900"
                                    : "text-gray-500",
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:!block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 pb-6 text-sm font-medium text-gray-900 italic"
                >
                  {subCategories.map((category) => (
                    <li key={category.id}>
                      {isUpperCase(category.name) ? (
                        category.id === 1 ? (
                          <p className="bg-black text-white p-4">
                            {category.name}
                          </p>
                        ) : (
                          <p className="bg-category p-4">{category.name}</p>
                        )
                      ) : (
                        <div
                          className="pl-4 font-thin hover:cursor-pointer"
                          href={category.href}
                          onClick={() => {
                            filterProducts(category.category);
                          }}
                        >
                          {category.name}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {/* Replace with your content */}
                <div className="pt-16">
                  <div className="space-y-12">
                    <ul
                      role="list"
                      className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
                    >
                      {products.map((product) => (
                        <li
                          key={product?._id?.["$oid"]}
                          className="cursor-pointer"
                        >
                          <p>{product?._id[0]?.["$oid"]}</p>
                          <div className="space-y-4">
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
                  <Pagination totalProducts={products.length} />
                </div>
                {/* /End replace */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
