import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import ProfileManagement from "./components/ProfileManagement";
import UserManagement from "./components/UserManagement";
import AdminDashboard from "./components/AdminDashboard";
import Reports from "./components/Reports";
import ViewUser from "./components/ViewUser";
import VendorManagement from "./components/VendorManagement";
import ViewVendor from "./components/ViewVendor";
import InstituteManagement from "./components/institute-management";
import StudentManagement from "./components/Student-management";
import CourseManagement from "./components/course-management";
import ScholarshipManagement from "./components/Scholarship-management";
import ApplicationManagement from "./components/Applications-management";
import BlogManagement from "./components/Blog-management";
import CareerManagement from "./components/Career-management";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [{ path: "/", element: <Login /> }],
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        { path: "", element: <AdminDashboard /> },
        { path: "profile-management", element: <ProfileManagement /> },
        { path: "user-management", element: <UserManagement /> },
        { path: "institute-management", element: <InstituteManagement /> },
        { path: "student-management", element: <StudentManagement /> },
        { path: "course-management", element: <CourseManagement /> },

        { path: "view-user", element: <ViewUser /> },
        { path: "vendor-management", element: <VendorManagement /> },
        { path: "view-vendor", element: <ViewVendor /> },
        { path: "reports", element: <Reports /> },
        { path: "Scholarship-management", element: <ScholarshipManagement /> },
        { path: "Applications-management", element: <ApplicationManagement /> },
        { path: "Blog-management", element: <BlogManagement /> },
        { path: "Career-management", element: <CareerManagement /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
