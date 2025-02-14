import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { deleteOnelist } from "../Actions/Action.js";
import axios from "axios";
import { backend_url } from "../Utils/backend_url_.js";
import { searchContext } from "../Context/SearchContext.js";

const Table = () => {
  const { input } = useContext(searchContext);
  const [list, setList] = useState();
  const [refresh, setRefresh] = useState(false);
  React.useEffect(() => {
    const getLists = async () => {
      try {
        const { data } = await axios.get(`${backend_url}/api/v1/all`, {
          params: { search: input },
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        setList(data);
      } catch (error) {}
    };

    const settime = setTimeout(() => {
      getLists();
    }, 500);
    return () => clearTimeout(settime);
  }, [refresh, input]);

  // delete listdata
  const deleteData = (id) => {
    deleteOnelist(id);
    setRefresh(!refresh);
  };

  return (
    <div className="w-100 d-flex justify-content-center align-items-center">
      <div className="w-100 d-flex flex-column justify-content-center align-items-center">
        <div
          style={{
            fontFamily: "Marcellus",
            fontSize: "1.3rem",
            height: "7vh",
            lineHeight: "7vh",
            fontWeight:"800"
          }}
          className="w-75 bg-primary text-center text-light"
        >
          USER DATA IN TABLE FORM
        </div>

        <table class="table border w-75">
          <thead>
            <tr>
              <th className="fontPop border text-center" scope="col">
                Number
              </th>
              <th className="fontPop border text-center" scope="col">
                Name
              </th>
              <th className="fontPop border text-center" scope="col">
                Email
              </th>
              <th className="fontPop border text-center" scope="col">
                Phone
              </th>
              <th className="fontPop border text-center" scope="col">
                Experience
              </th>
              <th className="fontPop border text-center" scope="col">
                Actions
              </th>
            </tr>
          </thead>
          {list?.data?.map((dot, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td className="fontPop border text-center">{index + 1}</td>
                  <td className="fontPop border text-center text-capitalize">
                    {dot?.name}
                  </td>
                  <td className="fontPop border text-center">{dot?.email}</td>
                  <td className="fontPop border text-center">{dot?.phone}</td>
                  <td className="fontPop border text-center">{dot?.exp}</td>

                  <td className="fontPop border text-center">
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
