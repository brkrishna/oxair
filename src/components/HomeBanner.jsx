import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
// import BannerImage1 from "/public/images/banner_img1.png";
// import BannerImage2 from "/public/images/banner_img2.png";
import BannerImage1 from "../assets/images/banner_img1.png";
import BannerImage2 from "../assets/images/banner_img2.png";
import ButtonComponent from './Buttons';

const HomePageBanner= () => {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
      <Image src={BannerImage1} alt="" className='w-100 h-auto' />
        <Carousel.Caption>
         <div className='row'>
            <div className='col-6'>
              <div className='banner-headings'>
                <h1 className='banner-heading'>Cost-effective, safe, convenient & very low maintenance</h1>
                <h5 className='banner-sub-heading'>Oxygen Generators for your business</h5>
              </div>
            </div>
            <div className='col-6'></div>
         </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={BannerImage2} alt="" className='w-100 h-auto' />
        <Carousel.Caption>
        <div className='row'>
            <div className='col-6'>
            <div className='banner-headings'>
                <h1 className='banner-heading'>Customized, Highest Purity, Cost Saving, Safe & Ease Of Maintenance</h1>
                <h5 className='banner-sub-heading'>Nitrogen Generators for a range of sectors</h5>
              </div>
            </div>
            <div className='col-6'></div>
         </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomePageBanner;