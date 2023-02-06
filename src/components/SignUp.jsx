import { useState } from "react";
import { USER_ARRAY } from "../constants/localStorage";
import { useNavigate } from "react-router-dom";

const userArr = JSON.parse(localStorage.getItem(USER_ARRAY));

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (handleValidate(form)) {
      if (userArr)
        localStorage.setItem(USER_ARRAY, JSON.stringify([...userArr, form]));
      else localStorage.setItem(USER_ARRAY, JSON.stringify([form]));
      navigate("/login");
    }
  };

  const handleValidate = (currentForm) => {
    if (userArr?.some((user) => user.email === currentForm.email)) {
      setErrorMsg("Email already exist! Please choose another one");
      return false;
    } else if (currentForm.password.length <= 8) {
      setErrorMsg("Password can't be less than 8 characters!");
      return false;
    } else {
      setErrorMsg("");
      return true;
    }
  };

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
              Sign Up
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((prevState) => ({
                      ...prevState,
                      name: e.target.value.trim(),
                    }))
                  }
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((prevState) => ({
                      ...prevState,
                      email: e.target.value.trim(),
                    }))
                  }
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
                  value={form.password}
                  onChange={(e) =>
                    setForm((prevState) => ({
                      ...prevState,
                      password: e.target.value.trim(),
                    }))
                  }
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="phone"
                  autoComplete="phone"
                  required
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-4 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((prevState) => ({
                      ...prevState,
                      phone: e.target.value.trim(),
                    }))
                  }
                />
              </div>
            </div>
            {errorMsg !== "" && <p className="text-red-500">{errorMsg}</p>}
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center border border-transparent bg-black py-4 px-4 text-lg font-thin uppercase text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign up
              </button>
            </div>

            <div className="grid place-items-center">
              <div className="font-thin text-base italic">
                <span>Login?&nbsp;</span>
                <a
                  href="/login"
                  className="font-thin text-indigo-600 hover:text-indigo-500 "
                >
                  Click
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
