import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { UserContext } from "./contexts/user.context";

import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';
import './categories.style.scss';
import Authentication from "./routes/authentication/authentication.component";
import SignUp from "./components/sign-up-form/sign-up-form.component";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

function App() {
  
  const { currentUser } = useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<SignUp />} />
        <Route
          path="auth"
          element={
            currentUser ? <Navigate to="/auth" replace /> : <Authentication />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;

