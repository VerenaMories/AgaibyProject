import React, { useEffect,useState } from "react";
import Fade from "react-reveal/Fade";

import axios from 'axios';
import swal from 'sweetalert';
export default function ContactAr() {
  const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
    const handleSubmit = (event) => {
		event.preventDefault();
		const data = {
		  name,
		  email,
		  message
		};
		sendData(data);
	  }
    const sendData = (data) => {
		axios.post('https://agaiby-t23y.onrender.com/contact/sendMessage', data)
		  .then(response => {
			console.log(response.data);
      swal({
        title: "أحسنت!",
        text: "تم إرسال بياناتك بنجاح!",
        icon: "نجاح",
        button: {
          text: "موافق",
          value: true,
        },
      }).then((value) => {
        if (value) {
          window.location.reload();
        }
      });
})
		  .catch(error => {
			console.log(error);			swal("أُووبس!", "حاول مرة اخرى!", "خطأ");

		  });
	  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div class="page-title">
        <div class="container">
          <Fade top duration={1000} delay={500}>
            {" "}
            <h1
              style={{
                color: "#C0AB89",
                fontFamily: "Millania",
                fontSize: "60px",
              }}
            >
             اتصل بنا
            </h1>
          </Fade>
          {/* <h1 style={{fontFamily:'Millania'}}>Contact</h1> */}
        </div>
      </div>

      <section class="contact-section">
        {/* <div class="contact-map" id="map"></div> */}
        <div class="container">
          <div class="row">
          <div
              className="col-md-6 p-3 col-xs-12 p-3"
              style={{ widgetSpacing: "20px" }}
            >
              <Fade right duration={1000} delay={500}>
                {" "}
                <div className="row">
                  <div
                    className="elementor-widget-wrap elementor-element-populated"
                    style={{
                      position: "relative",
                      width: "100%",
                      flexWrap: "wrap",
                      alignContent: "flex-start",
                      display: "flex",
                      padding: "10px",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      className="elementor-icon"
                      style={{
                        fontSize: "40px",
                        padding: "20px 26px",
                        backgroundColor: "#C0AB89",
                        color: "#fff",
                        borderRadius: "50%",
                      }}
                    >
                      <i class="fa-solid fa-phone"></i>
                    </div>
                  </div>
                  <h3  dir="rtl" lang="ar" style={{ textAlign: "center", fontFamily: "Maya" }}>
                  اتصال
                  </h3>
                  <p  dir="rtl" lang="ar" style={{ textAlign: "center", padding: "0", margin: "0" }}>
                    المصنع:  <a dir="rtl" lang="ar"  style={{textDecoration:'none',color:'#686e76'}} href="tel:+20244564541">541 564 244 20+</a> - <a   style={{textDecoration:'none',color:'#686e76'}} href="tel:+20244564540">540 564 244 20+</a>
                  </p>
                  <p style={{ textAlign: "center", margin: "0" }}>
                  +      فرع شبرا: <a   style={{textDecoration:'none',color:'#686e76'}} href="tel:+201207703244">3244 770 120 20</a>
                  </p>
                  <p style={{ textAlign: "center", margin: "0" }}>
                 +   فرع جسر السويس:<a   style={{textDecoration:'none',color:'#686e76'}} href="tel:+201274271266 ">1266 427 127 20+ </a> - <a   style={{textDecoration:'none',color:'#686e76'}} href="tel:+201275355444">5444 535 127 20</a> 
                  </p>

                  {/* <p style={{textAlign:'center'}}>example@gmail.com</p> */}
                </div>
              </Fade>
              <Fade right duration={1000} delay={500}>
                <div className="row">
                  <div
                    className="elementor-widget-wrap elementor-element-populated"
                    style={{
                      position: "relative",
                      width: "100%",
                      flexWrap: "wrap",
                      alignContent: "flex-start",
                      display: "flex",
                      padding: "10px",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      className="elementor-icon"
                      style={{
                        fontSize: "40px",
                        padding: "20px 26px",
                        backgroundColor: "#C0AB89",
                        color: "#fff",
                        borderRadius: "50%",
                      }}
                    >
                      <i class="fa-solid fa-location-dot"></i>
                    </div>
                  </div>
                  <h3 style={{ textAlign: "center", fontFamily: "Maya" }}>
                    العنوان
                  </h3>
                  <p style={{ textAlign: "center", margin: "0" }}>
                  المصنع: منطقة الشروق الصناعية - أبو زعبل - الخانكة - القليوبية
                  </p>
                  <p style={{ textAlign: "center", margin: "0" }}>
                  فرع شبرا: شارع 15 مايو ميدان مسجد ابو الهنا شبرا الخيمة - القليوبية
                  </p>
                  <p style={{ textAlign: "center", margin: "0" }}>
                  فرع جسر السويس: شارع محمد ابراهيم ، خلف شارع 18 ، القاهرة
                  </p>
                </div>
              </Fade>
              <Fade right duration={1000} delay={500}>
                <div className="row">
                  <div
                    className="elementor-widget-wrap elementor-element-populated"
                    style={{
                      position: "relative",
                      width: "100%",
                      flexWrap: "wrap",
                      alignContent: "flex-start",
                      display: "flex",
                      padding: "10px",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      className="elementor-icon"
                      style={{
                        fontSize: "40px",
                        padding: "20px 26px",
                        backgroundColor: "#C0AB89",
                        color: "#fff",
                        borderRadius: "50%",
                      }}
                    >
                      <i class="fa-regular fa-clock"></i>
                    </div>
                  </div>
                  <h3 style={{ textAlign: "center", fontFamily: "Maya" }}>
                    ساعات العمل
                  </h3>
                  <p style={{ textAlign: "center", margin: "0" }}>
                  مفتوح السبت - الخميس
                  </p>
                  <p style={{ textAlign: "center", margin: "0" }}>
                   ص 09.00 – 10.00 م
                  </p>
                </div>
              </Fade>
            </div>
            <div
              class="col-md-6  col-xs-12"
              style={{
                paddingTop: "3rem",
                paddingBottom: "2rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div class="contact-form" style={{ height: "100%" }}>
                <h3 style={{ fontFamily: "Maya" }}  dir="rtl" lang="ar">للتواصل</h3>
                <ul  dir="rtl" lang="ar">
                  <li dir="rtl" lang="ar" style={{paddingRight:'35px'}}>
                
                    المركز الرئيسي: منطقة الشروق الصناعية - أبو زعبل - الخانكة - القليوبية
                    <i class="fa fa-home"  style={{    color: '#1f252e',
    position: 'absolute',
    right:'0' ,
    top: '5px'}}></i>
                  </li>
                  <li  style={{paddingRight:'35px'}}>
                  <a  dir="rtl" lang="ar" style={{textDecoration:'none',color:'#fff'}} href="tel:+20244564541">541 564 244 20+</a> - <a dir="rtl" lang="ar"  style={{textDecoration:'none',color:'#fff'}} href="tel:+20244564540">540 564 244 20+</a> <i class="fa fa-phone" style={{    color: '#1f252e',
    position: 'absolute',
    right:'0' ,
    top: '5px'}}></i>
                  </li> 
                </ul>
                <h4 style={{ fontFamily: "Maya" }}  dir="rtl" lang="ar">ارسل بريد الكتروني</h4>
                <form class="form contact-validation-active" id="contact-form" method="post" onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="الاسم بالكامل"
                      dir="rtl" lang="ar" value={name} onChange={(e) => setName(e.target.value)}/>
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder="البريد الالكتروني"
                      dir="rtl" lang="ar" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <div>
                    <textarea
                      name="message"
                      class="form-control"
                      placeholder="رسالة"
                      dir="rtl" lang="ar"  value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                  </div>
                  <div class="submit">
                    <Fade left duration={1000} delay={500}>
                      <button type="submit" style={{ fontFamily: "Maya" }}>
                      إرسال
                      </button>
                    </Fade>
                    <span id="loader">
                      <img src="images/contact-ajax-loader.gif" alt="Loader" />
                    </span>
                  </div>
                  <div class="error-handling-messages">
                    <div id="success"  dir="rtl" lang="ar">شكرًا لك</div>
                    <div id="error"  dir="rtl" lang="ar">
                      {" "}
                      حدث خطأ أثناء إرسال البريد الإلكتروني. الرجاء معاودة المحاولة في وقت لاحق.{" "}
                    </div>
                  </div>
                </form>
              </div>
            </div>
         
          </div>
        </div>
      </section>
      <section>
        <div className="container p-3">
          <div className="row p-3">
          <div className="col">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3450.341494250402!2d31.393973315117314!3d30.141651181847052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDA4JzI5LjkiTiAzMcKwMjMnNDYuMiJF!5e0!3m2!1sen!2seg!4v1681817543047!5m2!1sen!2seg"
                    style={{ border: "0", width: "100%", height: "100%" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <h5
                  style={{
                    textAlign: "center",
                    marginTop: "20px",
                    color: "rgb(118, 99, 69)",
                    fontFamily: "Maya",
                    fontSize: "26px",
                    marginBottom: "1rem",
                  }}
                >
                فرع جسر السويس
                </h5>
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3450.9016555438807!2d31.268097915117007!3d30.12562748185287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDA3JzMyLjMiTiAzMcKwMTYnMTMuMCJF!5e0!3m2!1sen!2seg!4v1681817450116!5m2!1sen!2seg"
                    style={{ border: "0", width: "100%", height: "100%" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <h5
                  style={{
                    textAlign: "center",
                    marginTop: "20px",
                    color: "rgb(118, 99, 69)",
                    fontFamily: "Maya",
                    fontSize: "26px",
                    marginBottom: "1rem",
                  }}
                >
              فرع شبرا
                </h5>
              </div>
            </div>
            <div className="col">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3446.7918597514235!2d31.389328915119837!3d30.2430114818105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDE0JzM0LjgiTiAzMcKwMjMnMjkuNSJF!5e0!3m2!1sen!2seg!4v1681817776603!5m2!1sen!2seg"
                    style={{ border: "0", width: "100%", height: "100%" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <h5
                  style={{
                    textAlign: "center",
                    marginTop: "20px",
                    color: "rgb(118, 99, 69)",
                    fontFamily: "Maya",
                    fontSize: "26px",
                    marginBottom: "1rem",
                  }}
                >
                  المصنع
                </h5>
              </div>
            </div>
           
            
          </div>
        </div>
      </section>
    </>
  );
}
