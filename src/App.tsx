import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import AuthRoute from "./components/AuthRoute";
import Forgot from "./components/Forgot";
import NotFound from "./components/NotFound";
import Profile from "./components/Main/ProfilePage/Profile";
import DashBoard from "./components/Main/DashboardPage/DashBoard";
import Device from "./components/Main/DevicePage/Device";
import Service from "./components/Main/ServicePage/Service";
import ProvideNumber from "./components/Main/ProvideNumberPage/ProvideNumber";
import Report from "./components/Main/ReportPage/Report";
import Setting1 from "./components/Main/Settingpage/Setting1";
import Setting2 from "./components/Main/Settingpage/Setting2";
import Setting3 from "./components/Main/Settingpage/Setting3";
import AddDevice from "./components/Main/DevicePage/AddDevice";
import ViewDevice from "./components/Main/DevicePage/ViewDevice";
import EditDevice from "./components/Main/DevicePage/EditDevice";
import AddService from "./components/Main/ServicePage/AddService";
import ViewService from "./components/Main/ServicePage/ViewService";
import EditService from "./components/Main/ServicePage/EditService";
import AddNumber from "./components/Main/ProvideNumberPage/AddNumber";
import ViewNumber from "./components/Main/ProvideNumberPage/ViewNumber";
import AddRole from "./components/Main/Settingpage/AddRole";
import EditRole from "./components/Main/Settingpage/EditRole";
import AddAccount from "./components/Main/Settingpage/AddAccount";
import EditAccount from "./components/Main/Settingpage/EditAccount";

export interface IApplicationProps { }

const App: React.FC<IApplicationProps> = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthRoute> <Profile /> </AuthRoute>} />
        <Route path="/dashboard" element={<AuthRoute> <DashBoard /> </AuthRoute>} />
        <Route path="/device" element={<AuthRoute> <Device /> </AuthRoute>} />
        <Route path="/service" element={<AuthRoute> <Service /> </AuthRoute>} />
        <Route path="/provide-number" element={<AuthRoute> <ProvideNumber /> </AuthRoute>} />
        <Route path="/report" element={<AuthRoute> <Report /> </AuthRoute>} />
        <Route path="/role-management" element={<AuthRoute> <Setting1 /> </AuthRoute>} />
        <Route path="/account-management" element={<AuthRoute> <Setting2 /> </AuthRoute>} />
        <Route path="/user-log" element={<AuthRoute> <Setting3 /> </AuthRoute>} />
        <Route path="/add-device" element={<AuthRoute> <AddDevice /> </AuthRoute>} />
        <Route path="/view-device" element={<AuthRoute> <ViewDevice /> </AuthRoute>} />
        <Route path="/edit-device" element={<AuthRoute> <EditDevice /> </AuthRoute>} />
        <Route path="/add-service" element={<AuthRoute> <AddService /> </AuthRoute>} />
        <Route path="/view-service" element={<AuthRoute> <ViewService /> </AuthRoute>} />
        <Route path="/edit-service" element={<AuthRoute> <EditService /> </AuthRoute>} />
        <Route path="/add-number" element={<AuthRoute> <AddNumber /> </AuthRoute>} />
        <Route path="/view-number" element={<AuthRoute> <ViewNumber /> </AuthRoute>} />
        <Route path="/add-role" element={<AuthRoute> <AddRole /> </AuthRoute>} />
        <Route path="/edit-role" element={<AuthRoute> <EditRole /> </AuthRoute>} />
        <Route path="/add-account" element={<AuthRoute> <AddAccount /> </AuthRoute>} />
        <Route path="/edit-account" element={<AuthRoute> <EditAccount /> </AuthRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
