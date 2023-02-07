import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Banner from "../../components/Banner";
import CheckoutLayout from "../../components/CheckoutLayout";

function Checkout() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <main className="relative mx-auto max-w-screen-2xl">
        <Banner />
        <CheckoutLayout />
      </main>
      <Footer />
    </div>
  );
}

export default Checkout;
