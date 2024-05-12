import React from "react";

import DashboardBudget from "../pages/dashboard-budget/dashboard-budget";
import DaashboardCategory from "../pages/dashboard-category/dashboard-category";
import DashboardProfile from "../pages/dashboard-profile/dashboard-profile";
import Home from "../pages/home/home"
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeStatus, selectStatus } from "../store/app-slicer";

function App() {
  const appStatus = useSelector(selectStatus);
  const dispatch = useDispatch();
  console.log(appStatus);

  React.useEffect(() => {
    dispatch(changeStatus('LOADED'));
  }, [])

  return (
    <div className="app">
      <Routes>
        <Route index element={<Home />} />
        <Route path="dashboard">
          <Route index element={<DashboardBudget />} />
          <Route path="budget" element={<DashboardBudget />} />
          <Route path="category" element={<DaashboardCategory />} />
          <Route path="profile" element={<DashboardProfile />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
