import { createContext, useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useLocation } from "react-router-dom";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  async function loginUser(email, password) {
    try {
      const { data } = await axios.post(
        "https://law-society-backend.onrender.com/api/login/user",
        {
          email,
          password,
        }
      );

      sessionStorage.setItem("user", JSON.stringify(data));
      toast.success(data.message);
      setUser(data);
      setIsAuth(true);
    } catch (error) {
      console.error("Login Error:", error.response?.data);
      toast.error(error.response?.data?.message || "Login failed");
    }
  }

  useEffect(() => {
    const userInSession = sessionStorage.getItem("user");
    if (userInSession) {
      setUser(JSON.parse(userInSession));
      setIsAuth(true);
    } else {
      setUser({ token: null });
      setIsAuth(false);
    }
  }, []);

  // create new account
  async function newUser(fullname, email, password) {
    try {
      const res = await axios.post(
        "https://law-society-backend.onrender.com/api/create/user",
        {
          fullname,
          email,
          password,
        }
      );
      if (res.data) {
        toast.success("Account Created Successfully");
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  }

  // logout
  function logoutUser() {
    localStorage.removeItem("token");
    sessionStorage.removeItem("user");
    setIsAuth(false);
    setUser(null);
  }

  //contact
  async function contact(fullname, mob_number, email, subject, message) {
    try {
      const res = await axios.post(
        "https://law-society-backend.onrender.com/api/contact",
        {
          fullname,
          mob_number,
          email,
          subject,
          message,
        },
        {
          headers: { Authorization: `Bearer ${user.token}` }, // Use Bearer token format
        }
      );
      if (res.data) {
        toast.success("Submit Successfully");
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  }

  // all articles

  const [articles, setArticles] = useState([]);
  const getAllArticles = async () => {
    try {
      const res = await axios.get(
        "https://law-society-backend.onrender.com/api/all/articles"
      );
      setArticles(res.data);
      // console.log(res.data);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  // useEffect(() => {
  //   getAllArticles();
  // }, [location.pathname]);

  // all internship
  const [internship, setInternship] = useState([]);
  const getAllInternships = async () => {
    try {
      const res = await axios.get(
        "https://law-society-backend.onrender.com/api/all/internship"
      );
      setInternship(res.data);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    getAllInternships();
  });
  return (
    <UserContext.Provider
      value={{
        user,
        isAuth,
        loginUser,
        newUser,
        logoutUser,
        contact,
        articles,
        internship,
        getAllArticles,
      }}
    >
      {children}
      <Toaster />
    </UserContext.Provider>
  );
};

export const UserData = () => useContext(UserContext);
