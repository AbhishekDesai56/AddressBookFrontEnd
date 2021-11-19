import React from "react";
import "./dashboard.scss";
import AddressBookList from "../../Components/AddressBook List/AddressBookList";
import NavBar from "../../Components/NavBar/NavBar";
const Dashboard = (props) => {
  return (
    <div className="main-content-container">
      <div className="header-content">
        <div className="person-detail-text">Person Details</div>
        <a href="/details" className="add-button">
          Add Person
        </a>
      </div>

      <AddressBookList />
    </div>
  );
};

export default NavBar(Dashboard);
