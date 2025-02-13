import React, { useState } from "react";
import {Link} from 'react-router-dom'
import { deleteOnelist } from "../Actions/Action.js";
import axios from "axios";
import { backend_url } from "../Utils/backend_url_.js";
const Table = () => {
  const [list, setList] = useState();
  const [refresh, setRefresh] = useState(false);
  React.useEffect(() => {
    const getLists = async () => {
      try {
        const { data } = await axios.get(`${backend_url}/api/v1/all`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        setList(data);
      } catch (error) {}
    };
    getLists();
  }, [refresh]);

  const deleteData = (id) => {
    setRefresh(!refresh);
    deleteOnelist(id);
  };
  ///// pending
  // const editdata = async (id) => {
  //   // editOnelist(id);
  // };
  return (
    <div className="w-100 d-flex justify-content-center align-items-center">
      <div className="w-100 d-flex flex-column justify-content-center align-items-center">
        <section className="w-75 bg-primary text-center fs-4 text-light">
          USER DATA IN TABLE FORM
        </section>

        <table class="table border w-75">
          <thead>
            <tr>
              <th className="border text-center" scope="col">
                Number
              </th>
              <th className="border text-center" scope="col">
                Name
              </th>
              <th className="border text-center" scope="col">
                Email
              </th>
              <th className="border text-center" scope="col">
                Phone
              </th>
              <th className="border text-center" scope="col">
                Experience
              </th>
              <th className="border text-center" scope="col">
                Function
              </th>
            </tr>
          </thead>
          {list?.data?.map((dot, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td className="border text-center">{index + 1}</td>
                  <td className="border text-center text-capitalize">{dot?.name}</td>
                  <td className="border text-center">{dot?.email}</td>
                  <td className="border text-center">{dot?.phone}</td>
                  <td className="border text-center">{dot?.exp}</td>

                  <td className="border text-center">
                    <button
                      onClick={() => deleteData(dot?._id)}
                      type="button"
                      class="btn btn-danger btn-sm mx-4"
                    >
                      Delete
                    </button>
                    <Link
                    to={`/update/${dot?._id}`}
                      type="button"
                      class="btn btn-secondary btn-sm"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Table;
