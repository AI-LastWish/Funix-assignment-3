import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Banner from "../../components/Banner";
import CategoriesLayout from "../../components/layout/CategoriesLayout";
import ProductDetails from "../../components/ProductDetails";

function Detail() {
  return (
    <div className="app">
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
