import { Tabs } from "antd";
import React from "react";

const Admin = () => {
  return (
    <div>
      <h2>admin</h2>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Movies" key="1">
          movies
        </Tabs.TabPane>

        <Tabs.TabPane tab="Theatres" key="2">
          theater
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Admin;
