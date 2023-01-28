import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
import { getLastView } from "../helpers";

export const LoginPage = () => {

  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const lastPath = getLastView() || "/";

  const onLogin = () => {

    userLogin("Boris Sea");

    navigate(lastPath, {
      replace: true
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
