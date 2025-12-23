import React from "react";

const LoginScreen = () => {
  const formData = {
    email: '',
    password: ''
  }

  const handleSubmit = () => {

  }

  return (
    <>
      <div className="p-4">
        <h1 className="font-bold text-2xl w-50">Signin to your PopX account</h1>
        <p className="w-60 mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="relative">
          <label
            htmlFor="email"
            className="absolute left-2 -translate-y-1/2 text-purple/20 text-sm bg-white pl-1 pr-2 text-purple-500 font-semibold"
          >
            Email Address
          </label>
          <input
            type="text"
            id="email"
            placeholder="Enter email Address"
            className="w-full rounded-sm border border-gray/20 px-4 py-2 outline-none focus:border-gray/40"
          ></input>
        </div>

        <div className="relative mt-6 ">
          <label
            htmlFor="password"
            className="absolute left-2 -translate-y-1/2 text-purple/20 text-sm bg-white pl-1 pr-2 text-purple-500 font-semibold"
          >
            Password
          </label>
          <input
            type="text"
            id="password"
            placeholder="Enter Password"
            className="w-full rounded-sm border border-gray/20 px-4 py-2 outline-none focus:border-gray/40"
          ></input>
        </div>

        <button className="w-full mt-5 bg-gray-300 p-2 rounded-sm text-white font-semibold" disabled>
          Login
        </button>
      </div>
    </>
  );
};

export default LoginScreen;
