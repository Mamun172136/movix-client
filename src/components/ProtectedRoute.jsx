import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../apicalls/users";
import { message } from "antd";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  // const dispatch = useDispatch();

  const getCurrentUser = async () => {
    try {
      // dispatch(ShowLoading());
      const response = await GetCurrentUser();
      setUser(response.data);
      // dispatch(HideLoading());
      if (response.success) {
        //   dispatch(SetUser(response.data));
      } else {
        //   dispatch(SetUser(null));
        setUser(null);
        message.error(response.message);
        localStorage.removeItem("token");
        navigate("/login");
      }
    } catch (error) {
      // dispatch(HideLoading());
      // dispatch(SetUser(null));
      setUser(null);
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getCurrentUser();
    } else {
      navigate("/login");
    }
  }, []);
  return (
    user && (
      <div>
        {user.name}
        {children}
      </div>
    )
  );
};

export default ProtectedRoute;
