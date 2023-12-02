import React from "react";
import PageTitle from "../../components/PageTitle";
import { Tabs } from "antd";

const Profile = () => {
  return (
    <div>
      <PageTitle title="profile"></PageTitle>
      <Tabs>
        <Tabs.TabPane tab="Bookings" key="1">
          Bookings
        </Tabs.TabPane>
        <Tabs.TabPane tab="Theater" key="2">
          Theater
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Profile;
