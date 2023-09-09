import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import ProductReview from "../components/ProductReview";
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className="w-full overflow-hidden data">
      <Navbar />
      <Slider />
      <Categories />
      <ProductReview cat={"phone"} title={"Điện thoại"} />
      <ProductReview cat={"laptop"} title={"Máy tính xách tay"} />
      <Footer />
    </div>
  )
}

export default Home;