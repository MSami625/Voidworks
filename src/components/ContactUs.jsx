import React from "react";

const ContactUs = () => {
  return (
    <div id="contact" className="p-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Feel free to Contact Us</h1>
          <p className="py-6">
            For general inquiries or feedback, let us know how we can improve
            your experience with our services. If you're facing technical
            issues, please describe the problem, and our support team will guide
            you through a solution. For potential business partnerships, share
            your ideas or proposals, and we'll explore collaboration
            opportunities. We value your input and are committed to ensuring
            your satisfaction. Your message is important to us, and we
            appreciate the opportunity to assist you.
          </p>
        </div>
        <div className="card shrink-0 text-white w-full max-w-sm shadow-2xl bg-black">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="text-white label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Type your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white label-text">Your Query</span>
              </label>
              <input
                type="text"
                placeholder="Any feedback or query"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn ">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
