import Banner from "../Banner/Banner";
import Categoey from "../Category/Categoey";
import Chef from "../Chef/Chef";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categoey />
      <Chef />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
