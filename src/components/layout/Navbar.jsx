import { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { faCartFlatbed, faUser } from "@fortawesome/free-solid-svg-icons";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../utils/hooks";
import { logout } from "../../redux/slices/userSlide";
import { useSelector } from "react-redux";

const navigation = {
  pages: [
    { name: "Company", href: "/" },
    { name: "Shop", href: "/shop" },
  ],
};

const actionDispatch = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const currentUser = useSelector((state) => state.user.user);
  const { logout } = actionDispatch(useAppDispatch());
  const navigate = useNavigate();

  useEffect(() => {
    console.log("currentUser", currentUser);
  }, []);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
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
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 py-6 px-4">
                  <a href="/cart" className="-m-2 flex items-center p-2">
                    <FontAwesomeIcon
                      className="-ml-1 h-5 w-5"
                      icon={faCartFlatbed}
                    />
                    <span className="ml-3 block text-sm font-medium">Cart</span>
                  </a>
                </div>
                <div className="border-t border-gray-200 py-6 px-4">
                  <a href="/login" className="-m-2 flex items-center p-2">
                    <FontAwesomeIcon className="-ml-1 h-5 w-5" icon={faUser} />
                    <span className="ml-3 block text-sm font-medium">
                      Login
                    </span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <nav aria-label="Top" className="mx-auto max-w-screen-2xl">
          <div className=" border-gray-200">
            <div className="flex h-16 items-center justify-between">
              {/* Flyout menus */}
              <Popover.Group className="hidden lg:!block lg:flex-1 lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 italic"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              {/* Logo */}
              <a href="/" className="flex">
                <span className="ml-3 block text-lg font-medium italic">
                  BOUTIQUE
                </span>
              </a>

              <div className="flex flex-1 items-center justify-end">
                <a
                  href="/cart"
                  className="hidden text-gray-700 hover:text-gray-800 lg:!flex lg:items-center"
                >
                  <FontAwesomeIcon
                    className="-ml-1 h-5 w-5"
                    icon={faCartFlatbed}
                  />
                  <span className="ml-3 block text-sm font-medium italic">
                    Cart
                  </span>
                </a>

                <button
                  className=" ml-6 hidden text-gray-700 hover:text-gray-800 lg:!flex lg:items-center"
                  onClick={
                    !currentUser?.name || currentUser?.name === ""
                      ? () => navigate("/login")
                      : () => logout()
                  }
                >
                  <FontAwesomeIcon className="-ml-1 h-5 w-5" icon={faUser} />
                  <span className="ml-3 block text-sm font-medium italic">
                    {!currentUser?.name || currentUser?.name === "" ? (
                      "Login"
                    ) : (
                      <div className="flex">
                        {currentUser.name}
                        <ChevronDownIcon
                          className=" h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        &nbsp;&nbsp;( Logout )
                      </div>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
