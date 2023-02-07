import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Banner from "../../components/Banner";
import CategoriesLayout from "../../components/layout/CategoriesLayout";

function Shop() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <main className="relative mx-auto max-w-screen-2xl">
        <Banner />
        <CategoriesLayout />
      </main>
      <Footer />
    </div>
  );
}

export default Shop;
