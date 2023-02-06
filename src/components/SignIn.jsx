export default function SignIn() {

  return (
    <div
      className="grid h-screen place-items-center w-full bg-auto"
      style={{
        backgroundImage: `url("./images/banner1.jpg")`,
      }}
    >
      <div className="flex w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 border rounded-lg object-cover shadow-lg p-8 bg-white">
          <div>
            <h2 className="mt-6 text-center text-4xl font-thin tracking-tight text-gray-900 italic pb-12">
              Sign In
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center border border-transparent bg-black py-4 px-4 text-lg font-thin uppercase text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>

            <div className="grid place-items-center">
              <div className="font-thin text-base italic">
                <span>Create an account?&nbsp;</span>
                <a
                  href="/register"
                  className="font-thin text-indigo-600 hover:text-indigo-500 "
                >
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
