import BannerSection1 from "../components/banners/banner1";
import BannerSection2 from "../components/banners/banner2";
import BannerSection3 from "../components/banners/banner3";
import BannerSection4 from "../components/banners/banner4";
import Footer from "../components/footer/footer";

const HomePage = () => {
    return ( 
        <div>
            <BannerSection1 />
            <BannerSection2 />
            <BannerSection3 />
            <BannerSection4 />
            <Footer />
        </div>
     );
}
 
export default HomePage;