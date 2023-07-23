import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "hooks/useAuth";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import("pages/Home/Home"));
const Registration = lazy(() => import("pages/Registration/Registration"));
const Login = lazy(() => import("pages/Login/Login"));
const Contacts = lazy(() => import("pages/Contacts/Contacts"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  return (
    <div>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="register" element={<RestrictedRoute component={<Registration />} redirectTo="/contacts" />} />
            <Route path="login" element={<RestrictedRoute component={<Login />} redirectTo="/contacts" />} />
            <Route path="contacts" element={<PrivateRoute component={<Contacts />} redirectTo="/login" />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>)}
      < Toaster position="top-right" toastOptions={{ duration: 2000 }
      } />
    </div>
  );
};

    
  