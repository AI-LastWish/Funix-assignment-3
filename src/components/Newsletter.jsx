export default function Newsletter() {
  return (
    <div className="bg-white">
      <div className="py-24 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-2xl tracking-tight text-gray-900 sm:text-3xl italic uppercase font-normal">
            let's be friend!
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            Anim aute id magna aliqua ad ad non deserunt sunt. 
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              autoComplete="email"
              required
              className="w-96 border border-gray-300 px-5 py-3 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:max-w-xs"
              placeholder="Enter your email address"
            />
            <div className="mt-3 shadow sm:mt-0 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center border border-transparent bg-black py-3 px-5 text-base font-medium text-white hover:bg-text_text_banner focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
