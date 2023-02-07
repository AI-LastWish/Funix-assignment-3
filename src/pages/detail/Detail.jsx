import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Banner from "../../components/Banner";
import ProductDetails from "../../components/ProductDetails";

function Detail() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <main className="relative mx-auto max-w-screen-2xl">
        <Banner />
        <ProductDetails />
      </main>
      <Footer />
    </div>
  );
}

export default Detail;
