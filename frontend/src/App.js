import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Journals from "./Pages/Journals";
import Articles from "./Pages/Articles";
import Blogs from "./Pages/Blogs";
import Careers from "./Pages/Careers";
import Contact from "./Pages/Contact";
import ArticleDetails from "./Pages/ArticleDetails";
import BlogDetails from "./Pages/BlogDetails";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import InternshipDetails from "./Pages/InternshipDetails";
import CategoryWiseInternship from "./Pages/CategoryWiseInternship";
import EditArticle from "./Pages/EditArticle";
import AddArticle from "./Pages/AddArticle";
import MyProfile from "./Pages/MyProfile";
import AddInternship from "./Pages/AddInternship";
import EditInternship from "./Pages/EditInternship";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/journals",
          element: <Journals />,
        },
        {
          path: "/articles",
          element: <Articles />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: "/internships",
          element: <Careers />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/articles/details/:id",
          element: <ArticleDetails />,
        },
        {
          path: "/blog/details",
          element: <BlogDetails />,
        },
        {
          path: "/internships/category/:category",
          element: <CategoryWiseInternship />,
        },
        {
          path: "/internship/details/:id",
          element: <InternshipDetails />,
        },
        {
          path: "/edit-article/:id",
          element: <EditArticle />,
        },
        {
          path: "/edit-internship/:id",
          element: <EditInternship />,
        },
        {
          path: "/add-article",
          element: <AddArticle />,
        },
        {
          path: "/add-internship",
          element: <AddInternship />,
        },
        {
          path: "/my-profile",
          element: <MyProfile />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
