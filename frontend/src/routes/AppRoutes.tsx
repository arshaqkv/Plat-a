import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/Loader";

const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
const AddRestaurantForm = lazy(() => import("../pages/AddRestaurant"));
const EditRestaurantForm = lazy(() => import("../pages/EditRestaurant"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/add-restaurant" element={<AddRestaurantForm />} />
        <Route path="/edit-restaurant/:id" element={<EditRestaurantForm />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
