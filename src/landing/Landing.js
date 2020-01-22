import React from 'react';
import './Landing.scss';
import Twenty from '../assets/whyChooseUs/24.webp';
import doctors from '../assets/whyChooseUs/doctors.webp';
import wallet from '../assets/whyChooseUs/wallet.webp';
import hotLine from '../assets/header/home_hotline.webp'
import logo from '../assets/header/logo.png';
import test from '../assets/testimonial/test.webp'
import testFace from '../assets/testimonial/Testimonial_Facebook.webp'
import doctor from '../assets/doctors/doctor.webp'

// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function Landing() {
 
  return (
    <div className="Landing">
      <header >
        <div className="flex-container">
        <div >
          <p className="hotLine">   <img src={hotLine} ></img></p>  
        </div>
        <div className="logo">
        <img  src={logo} alt="OtlobTabib Logo" ></img>
        </div >     
        </div>

    <div  className="header-background">
     <div className='header-descibtion'>
       <h2>    نخبة متميزة من <br></br>اطباء الامراض الباطنة</h2>
       <p>اطباء الامراض الباطنة هم الخطوة الاولي التي تسبق تشخيص اي طبيب اخر متخصص في اطلب طبيب نوفر لك افضل متخصصين الامراض الباطنة بكفاءة ودقة في الاداء لتطمئن ع صحتك وصحة اسرتك وانت في منزلك</p>
      </div>



   <div className="header-reservationForm">
      <form>
        <h3>احجز زيارتك المنزلية الان</h3>
        <input placeholder="الاسم بالكامل"     type='text'/>
        <input placeholder="رقم الهاتف"    type='text'/>
        <input placeholder="البريد الالكتروني"    type='text'/>
        <div>
        <textarea  placeholder="العنوان"   rows='4' />
        </div>
        <input className="submit-btn" type="submit" value="احجز الان"></input>   
      </form>
    </div>
   </div>
  </header>


                                        {/* whyChooseUs */}
      <section className='whyChooseUs'>
      <h2>ليه تختار أطلب طبيب؟</h2>
      <div className='flex-container'>
      <div className="whyChooseUs-reason">
        <img src={wallet}></img>
        <p> أفضل الأسعار علي مستوي الخدمات الطبية المنزلية فى مصر</p>
      </div>

      <div  className="whyChooseUs-reason">
        <img  src={doctors} ></img> 
        <p> فريق كامل من الأطباء و الممرضين المتخصصين فى مجالاتهم</p>
      </div>
      <div  className="whyChooseUs-reason">
        <img src={Twenty}></img>
        <p> خدمة 24 ساعة طوال الأسبوع مع فريق محترف لمتابعة الحالة</p>
      </div>  
      </div>
     </section>

                                        {/* Doctors */}

     <section className="doctors">
       <h2>نخبة من اطبائنا</h2>
       <div className='container'>
       <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  arrows={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.

  
>
  <div className='doctorItem'>
   <div className='flex-container'> 
     <div ><img src={doctor}></img> </div>
      <div >
        <p>د/عماد ابراهيم طه</p>
       <span>اخصائي علاج طبيعي</span>
     </div>
   </div>
  </div>   


  <div className='doctorItem'>
   <div className='flex-container'> 
     <div ><img src={doctor}></img> </div>
      <div >
        <p>د/عماد ابراهيم طه</p>
       <span>اخصائي علاج طبيعي</span>
     </div>
   </div>
  </div>   
  
  <div className='doctorItem'>
   <div className='flex-container'> 
     <div ><img src={doctor}></img> </div>
      <div >
        <p>د/عماد ابراهيم طه</p>
       <span>اخصائي علاج طبيعي</span>
     </div>
   </div>
  </div>   

</Carousel>
       </div>
  
     </section>

                                        {/*  testimonial  */}
     <section className="testimonial">
     <h2>ماذا يقول عنا العملاء</h2>
     <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} 
      >

  <div className='item'>
     <img className='faceBook' src={testFace}></img>
     <p>تطبيق جميل وفكرة اروع حمل التطبيق بسرعة حاجة جميلة لكل الناستطبيق ممتاز</p>
     <div className='flex-container'>
     <div><p>احمد ابراهيم</p></div>
     <div><img src={test}></img></div>
     </div>
  </div>
 
  <div className='item'>
     <img className='faceBook' src={testFace}></img>
     <p>تطبيق جميل وفكرة اروع حمل التطبيق بسرعة حاجة جميلة لكل الناستطبيق ممتاز</p>
     <div className='flex-container'>
     <div><p>احمد ابراهيم</p></div>
     <div><img src={test}></img></div>
     </div>
  </div>

  <div className='item'>
     <img className='faceBook' src={testFace}></img>
     <p>تطبيق جميل وفكرة اروع حمل التطبيق بسرعة حاجة جميلة لكل الناستطبيق ممتاز</p>
     <div className='flex-container'>
     <div><p>احمد ابراهيم</p></div>
     <div><img src={test}></img></div>
     </div>
  </div>
</Carousel>    
    
     </section>

                                       {/*  Footer */}
     <footer>
       <p>جميع الحقوق محفوظة لشركة كيك ستارت انتر اكتيف</p>

     </footer>
    </div>

  );

}

export default Landing;