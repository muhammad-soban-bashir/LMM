import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth";
import RouteGuard from "./components/routeGuard";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import InstructorCommonlayout from "./components/instructor-view/commonLayout";
import StudentCommonLayout from "./components/student-view/commonLayout";
import StudentHomePage from "./pages/student/Home";
import InstructorDashboardPage from "./pages/instructor";
import NotFoundPage from "./pages/not_found";

const App = () => {
  const { auth } = useContext(AuthContext);
  console.log(auth)
  return (
    <>
      <Routes>
        <Route
          path="auth"
          element={
            <RouteGuard
              element={<AuthPage />}
              user={auth?.user}
              authenticate={auth?.authenticate}
            />
          }
        />

        <Route
          path="/instructor"
          element={
            <RouteGuard
              element={<InstructorCommonlayout />}
              user={auth?.user}
              authenticate={auth?.authenticate}
            />
          }
        >
          <Route path="" element={<InstructorDashboardPage/>}/>
          <Route path="dashboard" element={<InstructorDashboardPage/>}/>

        </Route>

        <Route
          path="/"
          element={
            <RouteGuard
              element={<StudentCommonLayout />}
              user={auth?.user}
              authenticate={auth?.authenticate}
            />
          }
        >

          <Route path=""element={<StudentHomePage/>}/>
          <Route path="home"element={<StudentHomePage/>}/>

        </Route>

        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </>
  );
};

export default App;
