import Home from "./pages/Home";
import HomeWithAccount from "./pages/HomeWithAccount";
import MainLayout from "./layouts/MainLayout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Account from "./pages/Account";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <MainLayout>
      {/* <Home /> */}
      {/* <SignUp /> */}
      {/* <Login /> */}
      {/* <HomeWithAccount/> */}
      {/* <Wishlist /> */}
      {/* <Cart /> */}
      {/* <Checkout /> */}
      {/* <Account /> */}
      {/* <About /> */}
      {/* <Contact /> */}
      {/* <Error404 /> */}
      <ProductDetails />
    </MainLayout>
  );
};

export default App;
