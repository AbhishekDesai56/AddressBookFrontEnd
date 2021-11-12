import React from "react";
import "./dashboard.scss";
import AddressBookList from "../../Components/AddressBookList";
const Dashboard = (props) => {
  return (
    <div className="main-content">
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

export default Dashboard;
