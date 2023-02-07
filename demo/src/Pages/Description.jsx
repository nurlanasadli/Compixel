import React from "react";
import "./Description.css";
import addtocard from "../images/addtocard.png";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom"      

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import sl1 from "../images/Çox satılanlar/hyper.png";
import sl2 from "../images/Çox satılanlar/razer.png";
import sl3 from "../images/Çox satılanlar/steel.png";
import sl4 from "../images/Çox satılanlar/zowie.png";
function Description(props) {
  let { id } = useParams();
  let find = props.products.find((a) => a.id == id);
  return (
    <div className="container">
      <div className="descTop">
        <h3> <NavLink to="/">Ana səhifə</NavLink> / <NavLink to='/category/{category}'>{find.category}</NavLink> / {find.brand} {find.model}</h3>
      </div>
      <div className="wrapper">
        <div className="itemDescription">
          <div className="top flex">
          <div className="descBodyLeft">
              <h2>
                {find.brand} {find.model}
              </h2>
              <div className="descImgDiv">
                <img src={find.image} />
                <div className="imgDetails">
                  {find.image1 && <img src={find.image1} />}
                  {find.image2 && <img src={find.image2} />}
                  {find.image3 && <img src={find.image3} />}
                </div>
              </div>
            </div>
            <div className="descBodyRight">
              <table>
                <tbody>
                {find.brand && 
                <tr>
                  <td>Brend:</td>
                  <td>{find.brand}</td>
                </tr>
                }
                {find.model && 
                <tr>
                  <td>Model:</td>
                  <td>{find.model}</td>
                </tr>
                }
                {find.color && 
                <tr>
                  <td>Rəng:</td>
                  <td>{find.color}</td>
                </tr>
                }
                {find.description && 
                <tr>
                  <td>Təsvir:</td>
                  <td>{find.description}</td>
                </tr>
                }
                {find.os && 
                <tr>
                  <td>Əməliyyat sistemi:</td>
                  <td>{find.os}</td>
                </tr>
                }
                {find.speed && 
                <tr>
                  <td>Sürət:</td>
                  <td>{find.speed}</td>
                </tr>
                }
                {find.socket && 
                <tr>
                  <td>Uyğunluq:</td>
                  <td>{find.socket}</td>
                </tr>
                }
                {find.socketType && 
                <tr>
                  <td>Uyğunluq:</td>
                  <td>{find.socketType}</td>
                </tr>
                }
                
                <tr>
                  <td colSpan={2}> <a href="#information" >Xüsusiyyətlərə baxmaq</a> </td>
                </tr>
                </tbody>
              </table>
              
              <p className="price1">{find.price} azn</p>
              <div className="addCard1">
                <button className="addToCard">
                  Səbətə <img src={addtocard} />{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="descBody flex">
            
            
          </div>
          <div className="aboutItemContainer">
            <div className="aboutItemHeader">
              <h2>
                Təsvir <i className="fa-solid fa-share"></i> {find.brand}{" "}
                {find.model}
              </h2>
            </div>
            <hr />
            <div className="aboutText">
              <p>
                <strong>
                  {find.brand} {find.model}
                </strong>{" "}
                ən son istehsal edilən modellərdən biridir. Yüksək keyfiyyətli
                və uzun müddət stabil çalışmağı isə, istifadəçi üçün ideal
                seçimdir.{" "}
                <strong>
                  {find.brand} {find.model}
                </strong>{" "}
                modelini Bakıda dükanımızdan sizə münasib qiymətə sifariş edə
                bilərsiniz. Dükanımız istər online istərsə də real olaraq
                satdığı hər bir texnikaya yazılı rəsmi zəmanət təqdim edir. Daha
                ətraflı məlumat almaq üçün dülkanımızın menecerləri ilə əlaqə
                saxlayın.{" "}
                <strong>
                  {find.brand} {find.model}
                </strong>{" "}
                Bakıda ucuz satis qiymeti almaq və endirimlər üçün dükanımıza
                müraciət edin. Ucuz qiymətə kredite almaq istəyirsinizsə
                dükanımızla əlaqə saxlayln. Hissə-hissə almaq üçün yalnız
                şəxsiyyət vəsiqəsi lazımdır. Kredit qiymət üçün malın üzərində
                hissə-hissə ödəmə düyməsinə klik edin və 3,6,9,12 aylıq ödəniş
                üçün məbləği görə bilərsiniz. Cəmi 15 dəqiqəyə banka gedmədən
                daxili kreditlə ucuz qiymətə ala bilərsiniz.
              </p>
              <br />
              <p>
                Siz {find.brand} {find.model} modelini Bakıda yerləşən
                mağazamızdan götürə və ya ünvana çatdırılma sifariş edə
                bilərsiniz.
              </p>
              <br />
              <p>
                {find.brand} {find.model} noutbukunu kreditlə hissə-hissə ödəmə
                ilə dükanımızdan almaq imkanına maliksiniz.
              </p>
            </div>
            <div className="itemDesciptionsContainer" id="information">
              <div className="descHeader">
                <h2>Xüsusiyyətləri</h2>
              </div>
              <div className="itemDesciptions">
                <table>
                  <thead>
                    <tr>
                      <th>Ümumi məlumat</th>
                    </tr>
                  </thead>
                  <tbody>
                  {find.speakerType && (
                      <tr>
                        <td>Tip:</td>
                        <td>{find.speakerType}</td>
                      </tr>
                    )}
                    {find.sort && (
                      <tr>
                        <td>Tip:</td>
                        <td>{find.sort}</td>
                      </tr>
                    )}
                    {find.type && (
                      <tr>
                        <td>Tip:</td>
                        <td>{find.type}</td>
                      </tr>
                    )}
                    {find.brand && (
                      <tr>
                        <td>Brend:</td>
                        <td>{find.brand}</td>
                      </tr>
                    )}
                    {find.model && (
                      <tr>
                        <td>Model:</td>
                        <td>{find.model}</td>
                      </tr>
                    )}
                    {find.name && (
                      <tr>
                        <td>Tam adı:</td>
                        <td>{find.name}</td>
                      </tr>
                    )}
                    {find.color && (
                      <tr>
                        <td>Rəng:</td>
                        <td>{find.color}</td>
                      </tr>
                    )}
                    {find.destination && (
                      <tr>
                        <td>Təsvir:</td>
                        <td>{find.destination}</td>
                      </tr>
                    )}
                    {find.os && (
                      <tr>
                        <td>Əməliyyat sistemi:</td>
                        <td>{find.os}</td>
                      </tr>
                    )}
                  </tbody>
                </table>

                {find.technical && (
                  <table>
                    <thead>
                      <tr>
                        <th>Texniki göstəricilər</th>
                      </tr>
                    </thead>
                    <tbody>
                      {find.cpu && (
                        <tr>
                          <td>Prosessor:</td>
                          <td>{find.cpu}</td>
                        </tr>
                      )}
                      {find.work && (
                        <tr>
                          <td>İşləmə rejimi:</td>
                          <td>{find.work}</td>
                        </tr>
                      )}
                      {find.capacity && (
                        <tr>
                          <td>Yaddaş həcmi:</td>
                          <td>{find.capacity}</td>
                        </tr>
                      )}
                      {find.chip && (
                        <tr>
                          <td>Çipset:</td>
                          <td>{find.chip}</td>
                        </tr>
                      )}
                      {find.vram && (
                        <tr>
                          <td>Vram - yaddaş:</td>
                          <td>{find.vram}</td>
                        </tr>
                      )}
                      {find.speed && (
                        <tr>
                          <td>Sürət:</td>
                          <td>{find.speed}</td>
                        </tr>
                      )}
                      {find.ram && (
                        <tr>
                          <td>Operativ yaddaş (RAM):</td>
                          <td>{find.ram}</td>
                        </tr>
                      )}
                      {find.vga && (
                        <tr>
                          <td>Qrafik kartı:</td>
                          <td>{find.vga}</td>
                        </tr>
                      )}
                      {find.screen && (
                        <tr>
                          <td>Ekran:</td>
                          <td>{find.screen}</td>
                        </tr>
                      )}
                      {find.camera && (
                        <tr>
                          <td>Kamera:</td>
                          <td>{find.camera}</td>
                        </tr>
                      )}
                      {find.resolution && (
                        <tr>
                          <td>İcazə verilən genişlik:</td>
                          <td>{find.resolution}</td>
                        </tr>
                      )}
                      {find.processors && (
                        <tr>
                          <td>Dəstəklədiyi prosessor:</td>
                          <td>{find.processors}</td>
                        </tr>
                      )}
                      {find.ramSupport && (
                        <tr>
                          <td>Operativ yaddaş yuvası:</td>
                          <td>{find.ramSupport}</td>
                        </tr>
                      )}
                      {find.mhz && (
                        <tr>
                          <td>Operativ yaddaş tezliyi:</td>
                          <td>{find.mhz}</td>
                        </tr>
                      )}
                      {find.audioSupport && (
                        <tr>
                          <td>Audio dəstək:</td>
                          <td>{find.audioSupport}</td>
                        </tr>
                      )}
                      {find.socket && (
                        <tr>
                          <td>Yuva tipi:</td>
                          <td>{find.socket}</td>
                        </tr>
                      )}
                      {find.cpuspeed && (
                        <tr>
                          <td>Prosessor sürəti:</td>
                          <td>{find.cpuspeed}</td>
                        </tr>
                      )}
                      {find.cpuRam && (
                        <tr>
                          <td>Dəstəklədiyi ram tipi:</td>
                          <td>{find.cpuRam}</td>
                        </tr>
                      )}
                      {find.technology && (
                        <tr>
                          <td>Tip:</td>
                          <td>{find.technology}</td>
                        </tr>
                      )}
                      {find.bluetooth && (
                        <tr>
                          <td>Blutuz:</td>
                          <td>{find.bluetooth}</td>
                        </tr>
                      )}
                      {find.socketType && (
                        <tr>
                          <td>Uyğunluq:</td>
                          <td>{find.socketType}</td>
                        </tr>
                      )}
                      {find.fit && (
                        <tr>
                          <td>Uyğunluq:</td>
                          <td>{find.fit}</td>
                        </tr>
                      )}
                      {find.speakerPower && (
                        <tr>
                          <td>Güc:</td>
                          <td>{find.speakerPower}</td>
                        </tr>
                      )}
                      {find.speakerVolt && (
                        <tr>
                          <td>Qida:</td>
                          <td>{find.speakerVolt}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                )}

                {find.storage && (
                  <table>
                    <thead>
                      <tr>
                        <th>Yaddaş</th>
                      </tr>
                    </thead>
                    <tbody>
                      {find.ssd && (
                        <tr>
                          <td>SSD:</td>
                          <td>{find.ssd}</td>
                        </tr>
                      )}
                      {find.hdd && (
                        <tr>
                          <td>HDD:</td>
                          <td>{find.hdd}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                )}

                {find.connect && (
                  <table>
                    <thead>
                      <tr>
                        <th>Qoşulma</th>
                      </tr>
                    </thead>
                    <tbody>
                      {find.connect && (
                        <tr>
                          <td>Qoşulma:</td>
                          <td>{find.connect}</td>
                        </tr>
                      )}
                      {find.inputports && (
                        <tr>
                          <td>Giriş portları:</td>
                          <td>{find.inputports}</td>
                        </tr>
                      )}
                      {find.connectors && (
                        <tr>
                          <td>Giriş portları:</td>
                          <td>{find.connectors}</td>
                        </tr>
                      )}
                      {find.power && (
                        <tr>
                          <td>Güc:</td>
                          <td>{find.power}</td>
                        </tr>
                      )}
                      {find.coolerFit && (
                        <tr>
                          <td>Uyğunluq:</td>
                          <td>{find.coolerFit}</td>
                        </tr>
                      )}
                      {find.speakerVolt && (
                        <tr>
                          <td>Qida:</td>
                          <td>{find.speakerVolt}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                )}

                {find.connection && (
                  <table>
                    <thead>
                      <tr>
                        <th>Qoşulma</th>
                      </tr>
                    </thead>
                    <tbody>
                      {find.connection && (
                        <tr>
                          <td>Qoşulma:</td>
                          <td>{find.connection}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                )}

                {find.cpupower && (
                  <table>
                    <thead>
                      <tr>
                        <th>Qoşulma</th>
                      </tr>
                    </thead>
                    <tbody>
                      {find.cpupower && (
                        <tr>
                          <td>Qida:</td>
                          <td>{find.cpupower}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                )}

                {find.connectors && (
                  <table>
                    <thead>
                      <tr>
                        <th>Qoşulma</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Qoşulma və giriş portları:</td>
                        <td>{find.connectors}</td>
                      </tr>
                    </tbody>
                  </table>
                )}

                {find.network && (
                  <table>
                    <thead>
                      <tr>
                        <th>Şəbəkə</th>
                      </tr>
                    </thead>
                    <tbody>
                      {find.networkSupport && (
                        <tr>
                          <td>Şəbəkə:</td>
                          <td>{find.networkSupport}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                )}

                {find.addition && (
                  <table>
                    <thead>
                      <tr>
                        <th>Əlavə</th>
                      </tr>
                    </thead>
                    <tbody>
                      {find.inputKey && (
                        <tr>
                          <td>Daxiletmə qurğusu:</td>
                          <td>{find.inputKey}</td>
                        </tr>
                      )}
                      {find.size && (
                        <tr>
                          <td>Qabaridlər:</td>
                          <td>{find.size}</td>
                        </tr>
                      )}
                      {find.sizes && (
                        <tr>
                          <td>Qabaridlər:</td>
                          <td>{find.sizes}</td>
                        </tr>
                      )}
                      {find.weight && (
                        <tr>
                          <td>Çəki:</td>
                          <td>{find.weight}</td>
                        </tr>
                      )}
                      {find.description && (
                        <tr>
                          <td>Təyinat:</td>
                          <td>{find.description}</td>
                        </tr>
                      )}
                      {find.addinfo && (
                        <tr>
                          <td>Əlavə məlumat:</td>
                          <td>{find.addinfo}</td>
                        </tr>
                      )}

                      {find.warranty && (
                        <tr>
                          <td>Zəmanət müddəti:</td>
                          <td>{find.warranty}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="Advertising">
          <div className="Offers">
            <div className="offersHead">
              <p>Günün təklifi</p>
            </div>
            <div className="offer">
              <div className="offerImg">
                <img src="https://asset.msi.com/resize/image/global/product/product_6_20180612110658_5b1f38d2cf530.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png" />
              </div>
              <div className="offerName">
                <p>MSİ Optix MAG241C 144Hz 27-inch Gaming Monitor</p>
              </div>
              <div className="offerPrice">
                <p id="oldPrice">720 ₼</p>
                <p id="newPrice">664 ₼</p>
              </div>
            </div>
          </div>
          <div className="solds">
            <div className="offersHead">
              <p>Çox satılanlar</p>
            </div>
            <div className="soldsSlider">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                loop
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                style={{
                  width: "300px",
                  height: "1000px",
                }}
                direction={"vertical"}
              >
                <SwiperSlide>
                  <img
                    src={sl1}
                    style={{
                      width: "300px",
                      height: "400px",
                      objectFit: "contain",
                    }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={sl2}
                    style={{
                      width: "300px",
                      height: "400px",
                      objectFit: "contain",
                    }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={sl3}
                    style={{
                      width: "300px",
                      height: "400px",
                      objectFit: "contain",
                    }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={sl4}
                    style={{
                      width: "300px",
                      height: "400px",
                      objectFit: "contain",
                    }}
                  />
                </SwiperSlide>
                ...
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

let t = (s) => s;
export default connect(t)(Description);
