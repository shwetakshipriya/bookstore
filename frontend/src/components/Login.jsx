import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post("https://bookstore-api-q9l8.onrender.com/user/login", userInfo);
      if (res.data) {
        toast.success("Logged in Successfully");
        document.getElementById("my_modal_3").close();
        setTimeout(() => {
          window.location.reload();
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        }, 1000);
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box p-6">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="space-y-4">
          <div className="flex justify-end">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
          </div>
          <h3 className="font-bold text-lg text-center">Login</h3>
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none text-gray-700"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md outline-none text-gray-700"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="flex justify-between items-center">
            <button className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200">
              Login
            </button>
            <p>
              Not registered?{" "}
              <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Login;
