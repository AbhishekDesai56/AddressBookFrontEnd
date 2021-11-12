import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddressBookService from "../Services/AddressBookService";
import "./AddressBookList.scss";
const AddressBookList = () => {
  const [addressList, setAddressList] = useState([]);

  useEffect(() => {
    getAllListOfAddressBook();
  }, []);

  const getAllListOfAddressBook = async () => {
    await AddressBookService.getAllAddressBookData()
      .then((response) => {
        console.log(response.data.data);
        setAddressList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    AddressBookService.deleteAddressBookId(id)
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="table-main">
      <table id="table-display" className="table">
        <th>Fullname</th>
        <th>Address</th>
        <th>Phone Number</th>
        <th>City</th>
        <th>Pin Code</th>
        <th>Address</th>
        <th></th>
        {addressList.map((address) => (
          <tr>
            <td>{address.firstName}</td>
            <td>{address.lastName}</td>
            <td>{address.phoneNumber}</td>
            <td>{address.city}</td>
            <td>{address.pinCode}</td>
            <td className="addressDetails">{address.address}</td>
            <td>
              <a href={`/details/${address._id}`}>
                <EditIcon />
              </a>
              <button
                id="deleteButton"
                onClick={() => {
                  handleDelete(address._id);
                }}
              >
                <DeleteIcon color="secondary" />
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default AddressBookList;
