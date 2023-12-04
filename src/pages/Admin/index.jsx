import { Tabs } from "antd";
import React from "react";
import MoviesList from "./MoviesList";
import TheatresList from "./TheatresList";

const Admin = () => {
  return (
    <div>
      <h2>admin</h2>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Movies" key="1">
          <MoviesList></MoviesList>
        </Tabs.TabPane>

        <Tabs.TabPane tab="Theatres" key="2">
          <TheatresList></TheatresList>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Admin;
