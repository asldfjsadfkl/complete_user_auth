import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { backend_url } from "../Utils/backend_url_.js";

const UpdateList = () => {
  const { id } = useParams();
  const [user, setUser] = useState();
  const navigate = useNavigate()

  useEffect(() => {
    async function getlist() {
      try {
        const { data } = await axios.get(`${backend_url}/api/v1/${id}`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        console.log(data?.data);
        setUser(data?.data)
      } catch (error) {}
    }
    getlist();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form);
    try {
      await axios.patch(`${backend_url}/api/v1/${id}`, data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      navigate('/data')
    } catch (error) {
      console.error(error);
    }
  };





  return (
    <main className="d-flex justify-content-xl-center">
      <form
        style={{ width: "40%" }}
        className=" border p-5 mt-5"
        onSubmit={handleUpdate}
      >
        <section className="w-100 text-center fs-4 bg-primary text-light">
          Update new user
        </section>

        <div className="mb-3">
          <label for="exampleInputName1" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleInputName1"
            value={user?.name}
            onChange={((e)=>setUser(e.target.value))}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={user?.email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={((e)=>setUser(e.target.value))}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPhone" className="form-label">
            Phone
          </label>
          <input
            type="phone"
            name="phone"
            value={user?.phone}
            className="form-control"
            id="exampleInputPhone"
            onChange={((e)=>setUser(e.target.value))}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputExp" className="form-label">
            Experience
          </label>
          <input
            type="text"
            name="exp"
            value={user?.exp}
            className="form-control"
            id="exampleInputExp"
            onChange={((e)=>setUser(e.target.value))}
          />
        </div>

        <button type="submit" className="w-100 btn btn-primary">
          Save
        </button>
      </form>
    </main>
  );
};

export default UpdateList;
