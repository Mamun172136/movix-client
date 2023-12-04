import React from "react";
import PageTitle from "../../components/PageTitle";
import { Tabs } from "antd";
import TheatresList from "./TheatresList";

const Profile = () => {
  return (
    <div>
      <PageTitle title="profile"></PageTitle>
      <Tabs>
        <Tabs.TabPane tab="Bookings" key="1">
          Bookings
        </Tabs.TabPane>
        <Tabs.TabPane tab="Theater" key="2">
          <TheatresList></TheatresList>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Profile;
