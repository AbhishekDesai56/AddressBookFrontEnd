import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddressBookService from "../Services/AddressBookService";

const AddressBookList = () => {
  const [addressList, setAddressList] = useState([]);

  useEffect(() => {
    getAllListOfAddressBook();
  }, []);

  const getAllListOfAddressBook = async () => {
    await AddressBookService.getAddressBookLists()
      .then((response) => {
        console.log(response.data.data[0].department);
        setAddressList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    AddressBookService.deleteAddressBookById(id)
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div class="table-main">
      <table id="table-display" class="table">
        <th>Fullname</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>
        <th>Zip Code</th>
        <th>Phone Number</th>
        <th></th>
        {addressList.map((address) => (
          <tr>
            <td>${address._name}</td>
            <td>${address._address}</td>
            <td>${address._city}</td>
            <td>${address._state}</td>
            <td>${address._zipCode}</td>
            <td>${address._phoneNumber}</td>
            <td>
              <EditIcon />
              <DeleteIcon color="secondary" />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default AddressBookList;
