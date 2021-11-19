import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddressBookService from "../Services/AddressBookService";
import Tooltip from "@material-ui/core/Tooltip";
import AlertDialog from "./AlertDialog";

const AddressBookList = () => {
  const [addressList, setAddressList] = useState([]);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  useEffect(() => {
    getAllListOfAddressBook();
  }, []);

  const getAllListOfAddressBook = async () => {
    await AddressBookService.getAllAddressBookData()
      .then((response) => {
        setAddressList(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const callSetConfirmDialog = () => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
  };

  const handleDelete = (id) => {
    callSetConfirmDialog();
    AddressBookService.deleteAddressBookId(id)
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
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
            <Tooltip title={address.address}>
              <td className="addressDetails">{address.address}</td>
            </Tooltip>
            <td>
              <a className="icons" href={`/details/${address._id}`}>
                <EditIcon />
              </a>
              <span
                className="icons"
                onClick={() => {
                  setConfirmDialog({
                    isOpen: true,
                    title: "Are you sure to delete this record?",
                    subTitle: "You can't undo this operation",
                    onConfirm: () => {
                      handleDelete(address._id);
                    },
                  });
                }}
              >
                <DeleteIcon className="delete-icon" />
              </span>
            </td>
          </tr>
        ))}
      </table>
      {addressList.length === 0 ? <h3>No Record Found</h3> : ""}
      <AlertDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </div>
  );
};

export default AddressBookList;
