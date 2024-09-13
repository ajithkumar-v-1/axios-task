
import { useUserContext,} from "./Context/usercontext";
import axios from "axios";
import "../Components/ListPage.css";
import { useState } from "react";

function ListPages() {
  const { data, handleDelete, handleUpdate } = useUserContext();
  const [editingUserId, setEditingUserId] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedPhone, setUpdatedPhone] = useState("");

  const handleEditClick = (user) => {
    setEditingUserId(user.id);
    setUpdatedName(user.name);
    setUpdatedEmail(user.email);
    setUpdatedPhone(user.phone);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editingUserId) {
      handleUpdate(editingUserId, {
        name: updatedName,
        email: updatedEmail,
        phone: updatedPhone,
      });
      setEditingUserId(null);
    }
  };

  return (
    <div>
      <center>
    <div className="table-list px-4">
      
      <table className="table">

        <thead>
          <tr className="table-row ">
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody className="tbody">
          {data.map((user, index) => (
            <tr key={index}>

              {/* s.no for users */}
              <td>{index + 1}</td>

              {/* data of user name */}
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    value={updatedName}
                    onChange={(e) => setUpdatedName(e.target.value)}
                  />
                ) : (
                  user.name
                )}
              </td>

              {/* data of user email */}
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="email"
                    value={updatedEmail}
                    onChange={(e) => setUpdatedEmail(e.target.value)}
                  />
                ) : (
                  user.email
                )}
              </td>

              
              {/* data of user phone number */}

              <td>
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    value={updatedPhone}
                    onChange={(e) => setUpdatedPhone(e.target.value)}
                  />
                ) : (
                  user.phone
                )}
              </td>

            
              
              {/* Buttons for the function to edit,delete and update. */}

              {/* button to update the user */}
              <td>
                {editingUserId === user.id ? (
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleEditSubmit}
                  >
                    Update
                  </button>
                ) : (
                  <>
                  {/* button to Edit the user */}
                    <button
                      type="button"
                      className="btn btn-primary mt-2 me-4"
                      onClick={() => handleEditClick(user)}
                    >
                    <i>Edit</i>
                    </button>

                    {/* button to delete the user */}
                    <button
                      type="button"
                      className="btn btn-danger mt-2 me-4"
                      onClick={() => handleDelete(user.id)}
                    >
                     <i>Delete</i>
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </center>
    </div>
  );
}

export default ListPages;