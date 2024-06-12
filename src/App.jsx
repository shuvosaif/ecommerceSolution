import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import SignUp from "./pages/SignUp/components";
import Login from "./pages/Login";

const App = () => {
  return (
    <MainLayout>
      {/* <Home /> */}
      {/* <SignUp /> */}
      <Login />
    </MainLayout>
  );
};

export default App;
