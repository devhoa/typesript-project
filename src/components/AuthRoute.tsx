import React, { useEffect, useState, ReactNode } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

export interface IAuthRouteProps {
  children: ReactNode;
}

const AuthRoute: React.FC<IAuthRouteProps> = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        console.log("unauthorized");
        navigate("/login");
      }
    });

    return () => AuthCheck();
  }, [auth]);

  if (loading) return <p>loading ...</p>;

  return <>{children}</>;
};

export default AuthRoute;
