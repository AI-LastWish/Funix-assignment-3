import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Banner from "../../components/Banner";
import ShoppingCart from "../../components/ShoppingCart";

function Cart() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <main className="relative mx-auto max-w-screen-2xl">
        <Banner />
        <ShoppingCart />
      </main>
      <Footer />
    </div>
  );
}

export default Cart;
