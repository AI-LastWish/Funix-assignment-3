import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Banner from "../../components/Banner";
import Categories from "../../components/Categories";

function Home() {
  return (
    <div className="app">
      <Navbar />
      <main className="relative mx-auto max-w-screen-2xl">
        <Banner />
        <Categories />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
