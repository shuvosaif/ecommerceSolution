import Home from "./pages/Home";
import HomeWithAccount from "./pages/HomeWithAccount";
import MainLayout from "./layouts/MainLayout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <MainLayout>
      {/* <Home /> */}
      {/* <SignUp /> */}
      {/* <Login /> */}
      {/* <HomeWithAccount/> */}
      {/* <Wishlist /> */}
      <Cart />
    </MainLayout>
  );
};

export default App;
