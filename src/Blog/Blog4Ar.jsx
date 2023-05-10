import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import firstBlog from "../images/firstBlog.png";

export default function Blog4Ar() {
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
                fontSize: "80px",
              }}
            >
              مدونه
            </h1>
          </Fade>

          {/* <h1>Blog</h1> */}
        </div>
      </div>
      <section>
        <div className="container p-5">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-md-8">
              <h1   dir="rtl" lang="ar" style={{ color: "#C0AB89", fontFamily: "Maya" }}>
              التطورات في تقنيات نسج النسيج
              </h1>
            </div>
            <div className="col-md-8">
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"  >
               أدى التركيز على الإنتاجية والجودة إلى تطوير تقنية النسيج بشكل كبير ونتيجة لذلك تم تخفيض ساعات العمل المطلوبة لنسج النسيج من النول من حوالي 20 إلى 0.25 خلال السنوات ال 125 الماضية ، وفي السنوات الخمسين الماضية كان هناك انخفاض بنسبة 95٪ ساعات العمل لكل وحدة قياسية منتجة.
              </p>
              <h5   dir="rtl" lang="ar">تقنيات النسيج - آنذاك والآن</h5>
              {/* <div className="imgCont"  style={{display:'flex', justifyContent:'center'}}>
                      <img src={firstBlog} alt="" /> </div>  */}
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"  >
             النسيج هو عملية تشكيل النسيج مع تشابك مجموعتين أو أكثر من الخيوط باستخدام آلة مستقرة تسمى النول. لا يزال من غير المؤكد متى تم إدخال عملية النسيج إلى المجتمع البشري. باستثناء عدد قليل من الأنشطة في أماكن أخرى ، حدثت التطورات الرئيسية في النسيج في إنجلترا. في إنجلترا ، جاء التحول الرئيسي من الزراعة إلى صناعة الصوف في القرن 14 . خلال كل هذه السنوات وبضع مئات من السنين بعد القرن 14 ، تم إنتاج القماش على أنوال يدوية لم تكن مجهزة بمكوك ذبابة.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"    >
             في عام 1733 ، اخترع جون كاي مكوك الذباب الذي مكن من إدخال اللحمة بسرعة أكبر. اخترع إدموند كارت رايت ، رجل الدين الإنجليزي ، ما يسمى نول الطاقة الذي يمكن تشغيله من نقطة واحدة بواسطة رجلين قويين. لحسن الحظ ، كانت الطاقة البخارية متاحة بحلول عام 1765. سرعان ما تم تشغيل أنوال الطاقة بالبخار وتم استبدال معظم الأجزاء الخشبية بالحديد. ثم تم إيقاف هذه الأنوال كل بضع دقائق من أجل استبدال اللحمة الفارغة أو الشرطي في المكوك وهذا حد من عدد الأنوال ، ويمكن أن يعمل الحائك إلى حوالي أربعة. جيمس نورثروب ، رجل إنجليزي اخترع نظام نقل اللحمة التلقائي الذي حل محل بيرن اللحمة في المكوك دون إبطاء أو إيقاف النول في عام 1889.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar" >
              حدثت تطورات مماثلة في أماكن أخرى أيضا ، حيث قام روتي ، وهو صانع رئيسي للنول في سويسرا ، بتصنيع بكرة أوتوماتيكية تغير نول نورثروب في عام 1898. بعد الحرب العالمية الثانية ، كان المزيد من الإنتاجية والكفاءة ضروريا للتغلب على تكاليف العمالة المتزايدة في الدول الغربية. قيود أنوال المكوك على الرغم من السرعة والكفاءة العالية نسبيا في النول مع الانتقاء التقليدي ، ستظل إنتاجية هذه الآلات محدودة طالما أن إنشاءاتها الأساسية تتضمن استخدام الدفع المكوكي. من المعروف أن الطاقة المطلوبة للقطف تتناسب مع مكعب سرعة النول. إذا زادت سرعة النول من 200 إلى 300 معول في الدقيقة ، فإن متطلبات الطاقة ستزداد بمعامل (3/2) 3 أي 3.4 مرة تقريبا.

              </p>
              <h5   dir="rtl" lang="ar">هل كان نقل تكنولوجيا نول المكوك ضروريا؟</h5>

              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"  >
             أدى التركيز على الإنتاجية والجودة إلى تطوير تقنية النسيج بشكل كبير ونتيجة لذلك تم تخفيض ساعات العمل المطلوبة لنسج النسيج من النول من حوالي 20 إلى 0.25 خلال السنوات ال 125 الماضية ، وفي السنوات الخمسين الماضية كان هناك انخفاض بنسبة 95٪ ساعات العمل لكل وحدة قياسية منتجة. تجري غالبية التطورات على الأنوال بدون مكوك في الاتجاهات التالية:
              </p>
              <ul className="dot-list"   dir="rtl" lang="ar">
                <li>لزيادة إنتاجية النول.</li>
                <li>
                لجعل الأنوال أكثر مرونة لأنواع مختلفة من القماش.
                </li>
                <li>تقليل وقت التوقف عن العمل لتغيير النمط ، إلخ.</li>
                <li>
                تطبيق آليات التحكم الإلكترونية لزيادة الأتمتة
                </li>
                <li>
                تطوير الملحقات مثل دوبي ، الجاكار ، إلخ.

                </li>
              </ul>

              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"  >
             بالإضافة إلى ذلك ، فإن الأنوال الأحدث بسيطة في التصميم ، والحركات أكثر موثوقية ، وتستهلك طاقة أقل ولها تكلفة صيانة أقل.
              </p>
              <h5   dir="rtl" lang="ar">عيوب أنوال المكوك</h5>
              <ul className="dot-list"   dir="rtl" lang="ar">
                <li>
                فرض ضغط أكبر على آلية الانتقاء ، مما يجعلها عرضة للفشل المتكرر.
                </li>
                <li>كمية أكبر من الضوضاء والاهتزاز.</li>
                <li>
                بسبب الطاقة الفائقة في المكوك ، يتم فرض ضغط أكبر مرة أخرى على آلية الفحص.
                </li>
                <li>
                سيكون التحكم في حركة المكوك أكثر صعوبة وسيكون هناك احتمال أكبر لطرده من النول.

                </li>
              </ul>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar" >
              شجعت المشاكل الديناميكية الناتجة عن آلية الانتقاء والفحص والعملية المتأصلة في لف البيرن لأنوال المكوك صانعي النول على تطوير وسائل بديلة لإدخال اللحمة لا يتم فيها إسقاط المكوك الثقيل للأمام والخلف عبر عرض النول. من المعتاد الإشارة إلى هذه الأنوال على أنها أنوال بدون مكوك.
              </p>
              <p
                style={{
                  marginBottom: "17px",
                  lineHeight: "1.7",
                  fontSize: "17px",
                  color: "#666",
                }}
                dir="rtl" lang="ar"  >
              يمكن تصنيف الأنواع المختلفة بدون مكوك التي تم تطويرها على مدى حوالي 50 عاما إلى مجموعات مختلفة.
              </p>
              <ul className="dot-list"   dir="rtl" lang="ar">
                <li>تلوح في الأفق قذيفة</li>
                <li>رابير يلوح في الأفق</li>
                <li>السائل النفاث يلوح في الأفق</li>
                <li>أنوال متعددة المراحل
</li>
              </ul>
              <h5 dir="rtl" lang="ar">مزايا تكنولوجيا النسيج بدون مكوك</h5>
              <ul className="dot-list"   dir="rtl" lang="ar">
                <li>
                أصبح النسيج بدون مكوك أكثر شيوعا بسبب المزايا التالية مقارنة بالأنوال التقليدية.
                </li>
                <li>
                إنتاجية عالية للعمالة والماكينة بسبب السرعة العالية والعرض الأوسع للأنوال.
                </li>
                <li>
                انخفاض تكلفة العمالة بسبب زيادة تخصيص الأنوال والإنتاجية.
                </li>
                <li>قطعة قماش خالية من العيوب الطول أطول.</li>
                <li>بيئة أفضل بسبب انخفاض مستوى الضوضاء.</li>
                <li>يتم التخلص من عملية لف بيرن.</li>
                <li>فقدان قيمة أقل من الأقمشة.</li>
                <li>انخفاض استهلاك المتاجر وقطع الغيار.</li>
                <li>متطلبات مساحة أقل لكل متر من القماش.</li>
                <li>
                المزيد من الألوان في اتجاه اللحمة (حتى 12) بطريقة الانتقاء والانتقاء.
                </li>
                <li>
                يمكن نسج الأقمشة ذات العرض الأوسع والأقمشة متعددة العروض ، ودرجة عالية من المرونة لتناسب مجموعة واسعة من الألياف والتهم.
                </li>
                <li>قابلة للتكيف بسهولة مع اتجاهات السوق.</li>
                <li>يمكن أن تستوعب الشفاه الأكبر 3 أضعاف الغزل.</li>
                <li>
                بسبب تغيرات شعاع أقل انخفاض وقت التوقف عن العمل وهدر أقل.
                </li>
                <li>اعتماد أقل على مهارة العمل.</li>
                <li>
                قدرات تصميم أعلى بسبب المعالجات الدقيقة وأدوات التحكم الإلكترونية.
                </li>
                <li>سهولة الصيانة وعبء عمل أقل للموظفين.</li>
                <li>حوادث أقل.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
