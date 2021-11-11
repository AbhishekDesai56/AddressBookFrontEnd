import React from "react";
import "./dashboard.scss";
import AddressBookList from "../../Components/AddressBookList";
const Dashboard = (props) => {
  return (
    <div class="main-content">
      <div class="header-content">
        <div class="person-detail-text">Person Details</div>
        <a href="/details" class="add-button">
          Add Person
        </a>
      </div>

      <AddressBookList />
    </div>
  );
};

export default Dashboard;
