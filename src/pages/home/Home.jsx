import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Banner from "../../components/Banner";
import Categories from "../../components/Categories";
import TopTrending from "../../components/TopTrending";
import FreeShipping from "../../components/FreeShipping";
import Newsletter from "../../components/Newsletter";

function Home() {
  return (
    <div className="app">
      <Navbar />
      <main className="relative mx-auto max-w-screen-2xl">
        <Banner />
        <Categories />
        <TopTrending />
        <FreeShipping />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
