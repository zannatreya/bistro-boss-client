import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Categoey from "../Category/Categoey";
import Chef from "../Chef/Chef";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
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
