import React from "react";
import axios from "axios";
import { backend_url } from "../Utils/backend_url_.js";

const CreateList = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form);
    try {
      await axios.post(`${backend_url}/api/v1/create`, data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <main className="d-flex justify-content-xl-center">
      <form
        style={{ width: "40%" }}
        className=" border p-5 mt-5"
        onSubmit={handleSubmit}
      >
        <div
          style={{
            fontFamily: "Marcellus",
            fontSize: "1.2rem",
            height: "6vh",
            lineHeight: "6vh",
            fontWeight: "800",
          }}
          className="w-100 text-center fs-4 bg-primary text-light"
        >
          Add new user
        </div>

        <div className="mb-3">
          <label for="exampleInputName1" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleInputName1"
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPhone" className="form-label">
            Phone
          </label>
          <input
            type="phone"
            name="phone"
            className="form-control"
            id="exampleInputPhone"
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputExp" className="form-label">
            Experience
          </label>
          <input
            type="text"
            name="exp"
            className="form-control"
            id="exampleInputExp"
          />
        </div>

        <button type="submit" className="w-100 btn btn-primary">
          Submit
        </button>
      </form>
    </main>
  );
};

export default CreateList;
