"use client";
import Nav from "@/app/component/nav";
import Chat from "@/app/component/chat";
import Footer from "@/app/component/footer";
import Banner from "@/app/component/banner";
import { Fragment } from "react";

export default function Manager ({ settings }) {

    return (

        <Fragment>

            <Nav settings={settings}/>
            
            <Chat settings={settings}/>

            <div className="manager">

                <Banner title="الشيخ : فهد بن عليان بن سليمان الردادي"/>

                <main className="flex flex-start">

                    <div className="image">
                        <img src="/media/public/manager.png"/>
                    </div>

                </main>

                <main className="details">

                    <h1><span>من هو الشيخ فهد بن عليان</span></h1>
                    
                    <div className="box">

                        <h2><span>وظيفته</span></h2>

                        <p>
                            <span>
                                المدير العام لمجموعة شركات طيبة الخير للتنمية المحدودة عضو الهيئة السعودية للمقيمين المعتمدين
                            </span>
                        </p>

                    </div>

                    <div className="box">

                        <h2><span>نشأته</span></h2>

                        <p>
                            <span>
                                نشأته كانت بالمدينة المنورة مسقط رأسه حيث ولد هناك عام
                                1384هـ وحصل الشيخ فهد الردادى على بكالوريوس الهندسة
                                التقنية من الكلية التقنية بالرياض بتقدير عام ممتاز مع مرتبة
                                الشرف الأولى , وبدأ الشيخ فهد الردادى حياته العملية عام
                                1409 هـ بالعمل مدرسا ضمن أعضاء هيئة التدريس بالكلية
                                التقنية بجدة , وذلك لمدة حوالى 13 عام تقريبا حتى قام
                                بالتقاعد المبكر عن الوظيفة في عام 1423 هـ
                            </span>
                        </p>

                    </div>

                    <div className="box">

                        <h2><span>الخبرات العملية والنشاطات الإستثمارية</span></h2>

                        <p>
                            <span>
                                نشأ الشيخ فهد الردادى في بيئة عقارية بين رجال الاستثمار والتطوير العقاري
                                حيث مجال عمل والده , وهنا بدأت فكرة الشيخ فهد الطموحة في أن يتصدر مكانة
                                مرموقة بين رجال المال والأعمال واتجه كبداية الى العمل في مجال الاستثمار
                                والتطوير العقاري الى أن ذاع صيته في هذا المجال وبدأ يدير المحافظ الاستثمارية
                                ويشارك في المساهمات العقارية والمخططات , لما لديه من فكر ونظرة ثاقبة
                                في تحقيق أعلى عائد ربح للمساهمين الى أن أصبح احد رجال الإستثمار العقاري
                                المميزين بمدينة جدة والمدينة المنورة وضمن الموثوق بهم لإدارة المحافظ
                                العقارية الناجحة ومن أشهر المخططات التي قام الشيخ فهد بتطويرها وإدارتها ,
                                على سبيل المثال لا الحصر :
                            </span>
                        </p>

                        <ul>
                            <li>
                                <span>
                                    مساهمة مخطط الفلاح عام 1421هـ وقيمتها 100 مليون ريال شارك فيها الشيخ
                                    فهد بنسبة %10 وحققت بفضل الله تعالى أرباح %50
                                </span>
                            </li>
                            <li>
                                <span>
                                    مساهمة مخطط الخير ١ عام 1422هـ وقيمتها 30 مليون ريال شارك فيها الشيخ فهد
                                    بنسبة 10 % وحققت بفضل الله تعالى ربح 40%
                                </span>
                            </li>
                            <li>
                                <span>
                                    مساهمة مخطط الخير 3 عام 1429هـ برأس مال 3,5 مليون ريال وتم بيعها بمبلغ 35
                                    مليون ريال
                                </span>
                            </li>
                            <li>
                                <span>
                                    مساهمة 232 قطعة بمخطط الأمير تركى بالمدينة المنورة بقيمة 43 مليون ريال
                                    شارك الشيخ فهد الردادى بنسبة 60 % وحققت بفضل الله تعالى صافى ربح 107 %
                                </span>
                            </li>
                            <li>
                                <span>
                                    مساهمة وتطوير 300,000 م٢ بمخطط الأمير تركى بن ناصر بالمدينة المنورة شارك
                                    فيها الشيخ فهد الردادى بنسبة 16 % وحققت بفضل الله تعالى 298 ٪ كصافي ربح
                                </span>
                            </li>
                            <li>
                                <span>
                                    مساهمة مخطط الخير 2 عام 1423 هـ برأس مال 32 مليون ريال شارك فيها الشيخ
                                    فهد الردادى بنسبة 20 % وهى قائمة حتى الان وتقدر وفقا للأسعار الحالية للسوق
                                    بأكثر من 400 مليون ريال 
                                </span>
                            </li>
                        </ul>

                        <p>
                            <span>
                                وغيرها الكثير من المساهمات والمخططات والأصول العقارية التي تم استثمارها
                                وتطويرها عن طريق الشيخ فهد الردادى سواء التي حققت بفضل الله تعالى أفضل
                                واعلى الارباح أو التي مازالت قائمة وتزداد قيمتها يوميا , بالإضافة الى امتلاكه العديد
                                من قطع الأراضي وبعض العقارات بأحياء مختلفة داخل مدينة جدة والمدينة المنورة .
                                <br /><br />
                                لم يكتفى طموح الشيخ فهد الردادى عند ذلك بل أخذ يطور من ذاته حيث حصل على
                                العديد من الدورات التي تضيف اليه في مجال الاستثمار والتطوير العقاري واهمها
                                دورات التثمين والتقييم العقاري والتي جعلت منه ملاذا لكل الشخصيات العقارية
                                للاستفادة من خبراته في التقييم والتثمين العقاري .
                                <br /><br />
                                ودخل الشيخ فهد الردادى عالم رجال المال والاعمال من خلال الاستثمار في مجالات اخرى
                                بجانب الاستثمار والتطوير العقاري مثل امتلاك محطة محروقات بالمدينة المنورة, وكذلك
                                امتلاك, وكذلك امتلاك محطة توزيع غاز بالمدينة المنورة عام 1430 هـ
                                <br /><br />
                                ولم ينتهى طموح الشيخ فهد الردادى عند كونه أحد أنجح رجال الاستثمار والتطوير
                                العقاري بجدة والمدينة المنورة , فقد اتجه في عام 2008 الى تأسيس شركة طيبة الخير
                                للتنمية المحدودة من خلال رغبة طموحة وارداة قوية في ان تكون من الشركات العائلية
                                الرائدة بالمملكة , وتأسيسا على النجاحات التي حققها في مجال الاستثمار والتطوير
                                العقاري والتي جعلته أكثر طموحا بالاتجاه نحو تحقيق نجاحات في قطاعات اخرى من خلال
                                تلك الشركة , فبدأت الشركة نشاطها في قطاع المقاولات والانشاءات العامة والبنية
                                التحتية , ولم يبخل الشيخ فهد الردادى بأي جهد أو مال أو فكر في سبيل انجاح هذا
                                القطاع وذلك من خلال تزويده بكافة المعدات اللازمة له سواء الثقيلة أو غيرها والتي
                                بلغت حوالى 40 مليون ريال والاعتماد دائما على الكوادر في العمل لتكون الشركة دائما
                                متناسبة مع حجم المشروعات المستقبلية .
                                <br /><br />
                                وكعادته يبحث عن النجاح بمجالات أخرى فقد اتجه الشيخ فهد الردادى الى مجال
                                الاستثمار الصناعي من خلال تأسيس مصنع لإنتاج الانترلوك والبردورات والبلوك بمدينة
                                الملك عبد الله الاقتصادية ولم يدخر أدنى جهد أو مال في أن يجعله من المصانع الاكثر
                                تطورا في مجاله وذلك من خلال انشائه ليعمل أتوماتيكيا بالكامل عن طريق ماكينات HESS
                                الألمانية المعترف بها عالميا في انتاج وتشغيل مصانع الانترلوك والبلوك الإسمنتي
                                بالإضافة الى تزويده بالمختبر الخاص بالمواد والاستعانة بالكادر الخاص لإدارته من أصحاب
                                الخبرات الطويلة في ذات المجال , وقد قام الشيخ فهد بتمويل المصنع بالكامل حتى
                                تشغيله ووصلت قيمة تكاليفه حتى تشغيله 35 مليون ريال , ويعمل حاليا بكامل طاقته
                                الانتاجية .
                                <br /><br />
                                إضافة إلى ذلك وإلى طموحه الدائم بإضافة الأصول العقارية المميزة دائما قام مؤخرا
                                في عام 2021 م بإمتلاك أحد أكثر المراكز التجارية تميزا في قلب سوق الجوالات بشارع
                                فلسطين ( مركز الردادي ) المتميز بموقعه الفريد والذي يصل قيمته السوقية الحالية
                                لأكثر من 50 مليون ريال 
                            </span>
                        </p>

                    </div>

                    <div className="box">

                        <h2><span>فريق العمل</span></h2>

                        <p>
                            <span >
                                ويدير الشيخ فهد الردادي أصوله وممتلكاته من خلال فريق عمل متميز وذو خبرة متراكمة
                                <br />
                                في مجال الإستثمار العقاري مكون من :
                            </span>
                        </p>

                        <ul>
                            <li>
                                <span>
                                    مستشار قانوني
                                </span>
                            </li>
                            <li>
                                <span>
                                    مدير مالي مع فريق من المراجعين والمحاسبين
                                </span>
                            </li>
                            <li>
                                <span>
                                    مدير الإستثمارات 
                                </span>
                            </li>
                            <li>
                                <span>
                                    إستشاري تسويق ودراسات الجدوى
                                </span>
                            </li>
                            <li>
                                <span>
                                    مديري أملاك ذوي خبرة في إدارة الأصول العقارية
                                </span>
                            </li>
                        </ul>

                    </div>

                </main>

            </div>

            <Footer page="المدير العام" settings={settings}/>

        </Fragment>

    )

}
