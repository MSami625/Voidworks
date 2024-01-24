import React from "react";
import pr1 from "../assets/pr1.png";
import pr2 from "../assets/pr2.png";
import pr3 from "../assets/download.png";

const Services = () => {
  return (
    <div id="service" className=" flex justify-center items-center p-10 flex-col gap-24">
      <h1 className="text-center text-4xl bg-white p-2 min-w-60 w-1/3 m-auto font-bold tracking-widest rounded-2xl text-black">
        Projects
      </h1>

      <div className="flex gap-10 flex-wrap justify-center align-center ">
        <div className="card card-compact w-96 border-2 border-black bg-transparent bg-opacity-5 rounded-2xl shadow-inner backdrop-blur-3xl shadow-white backdrop-brightness-125 backdrop-opacity-20">
          <figure>
            <img
              className="hover:scale-125 cursor-pointer"
              src={pr1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Computer Accessories Store</h2>
            <p>
              A meticulously crafted e-commerce platform offering a curated
              selection of premium computer accessories for an elevated tech
              experience.
            </p>
            <div className="card-actions justify-end">
              <a target="_blank" href="https://eha-client-two.vercel.app/">
                <button className="btn btn-primary">Preview</button>
              </a>
            </div>
          </div>
        </div>

        <div className="card card-compact w-96 border-2 border-black bg-transparent bg-opacity-5 rounded-2xl shadow-inner backdrop-blur-3xl shadow-white backdrop-brightness-125 backdrop-opacity-20">
          <figure>
            <img
              className="hover:scale-125 cursor-pointer"
              src={pr2}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Timber Market Dealing Website</h2>
            <p>Website for Furniture dealing</p>
            <div className="card-actions justify-end">
              <a target="_blank" href="https://www.kirtinagarwood.in/">
                <button className="btn btn-primary">Preview</button>
              </a>
            </div>
          </div>
        </div>

        <div className="card card-compact w-96 border-2 border-black bg-transparent bg-opacity-5 rounded-2xl shadow-inner backdrop-blur-3xl shadow-white backdrop-brightness-125 backdrop-opacity-20">
          <figure>
            <img
              className="hover:scale-125 cursor-pointer"
              src={pr3}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Example</h2>
            <p>A ecommerce Website for groceries</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Preview</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
