import React, { useEffect } from 'react';

import AOS from 'aos';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";

import main1 from '../img/windamain.jpg';
import main2 from '../img/rianmain.jpg';

import photo1 from '../img/1.jpg';
import photo2 from '../img/2.JPG';
import photo3 from '../img/3.JPG';
import photo4 from '../img/4.JPG';
import photo5 from '../img/5.JPG';

import '../style/styles.scss';

export const MainPagesComponent = () => {
    const { id } = useParams();
    useEffect(() => {
        AOS.init();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div id="app">
            <section id="hero">
                <div className="hero">
                    <div className="sub-hero" data-aos="zoom-out-down" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-offset="0">
                        <div className="upper">
                            <div className="sub-title">The Wedding</div>
                            <div className="bride">Winda & Rian</div>
                            <div className="text">Akan segera melangsungkan pernikahan suci</div>
                            <div className="date">Sabtu, 25 Februari 2023</div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-12">
                                <a
                                    className="btn btn-danger"
                                    href="#invitation"
                                >
                                    Buka Undangan
                                </a>
                            </div>
                        </div>
                        <div className="middle">
                            <div className="mb-1">Kepada :</div>
                            <div className="mb-1 text">{id}</div>
                            <div>Di Tempat</div>
                        </div>
                    </div>
                </div>
            </section >

            <section id="invitation">
                <div className="invitation">
                    <div className="sub-invitation" data-aos="zoom-out" data-aos-duration="1000">
                        <div className="upper">
                            <div className="title1">Assalamu’alaikum Warahmatullaahi Wabarakaatuh</div>
                            <div className="title2">Dengan memohon ridho dan rahmat Allah SWT. Kami bermaksud menyelenggarakan resepsi pernikahan kami,</div>
                            <div className="bride">Winda Agustina</div>
                            <div className="title3">Putri dari Bapak Dindin dan Ibu Empong Sukaedah</div>
                            <div className="title4">dengan</div>
                            <div className="bride">Rian Kurniawan</div>
                            <div className="title3">Putra dari Bapak Ocang dan Ibu Tati Sumiati</div>
                        </div>
                        <div className="middle">
                            <img
                                src={main1}
                                alt="men"
                                className="image-bride"
                            />
                            <img
                                src="https://adirara.webnikah.com/template/nikah-bunga/assets/img/aksen.png"
                                alt="flower"
                                className="image-flower"
                            />
                            <img
                                src={main2}
                                alt="girl"
                                className="image-bride"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="event">
                <div className="event">
                    <div className="sub-event">
                        <div className="upper" data-aos="zoom-in" data-aos-duration="1000">
                            <div className="title1">OUR SPECIAL EVENT</div>
                            <div className="title2">Wedding Events</div>
                        </div>
                        <div className="middle">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <div className="event-card" data-aos="fade-left" data-aos-duration="1000">
                                            <div className="event-card-title">
                                                Akad
                                            </div>
                                            <div className="event-card-main">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div>
                                                            <img
                                                                src="https://cdn-icons-png.flaticon.com/512/709/709511.png"
                                                                alt="clock"
                                                                className="image-icon"
                                                            />
                                                        </div>
                                                        <div className="text">08.00 WIB</div>
                                                        <div className="text">Selesai</div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div>
                                                            <img
                                                                src="https://cdn-icons-png.flaticon.com/512/3239/3239948.png"
                                                                alt="calendar"
                                                                className="image-icon"
                                                            />
                                                        </div>
                                                        <div className="text">Jumat</div>
                                                        <div className="text">24 Februari 2023</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="event-card" data-aos="fade-right" data-aos-duration="1000">
                                            <div className="event-card-title">
                                                Resepsi
                                            </div>
                                            <div className="event-card-main">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div>
                                                            <img
                                                                src="https://cdn-icons-png.flaticon.com/512/709/709511.png"
                                                                alt="clock"
                                                                className="image-icon"
                                                            />
                                                        </div>
                                                        <div className="text">11.00 WIB</div>
                                                        <div className="text">Selesai</div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div>
                                                            <img
                                                                src="https://cdn-icons-png.flaticon.com/512/3239/3239948.png"
                                                                alt="calendar"
                                                                className="image-icon"
                                                            />
                                                        </div>
                                                        <div className="text">Sabtu</div>
                                                        <div className="text">25 Februari 2023</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="event-card" data-aos="fade-left" data-aos-duration="1000">
                                            <div className="event-card-title">
                                                Location
                                            </div>
                                            <div className="event-card-main">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="text2">
                                                            Cijerah GG. Manunggal II C Rt.02 Rw.09, Kec. Bandung Kulon, Kota Bandung.
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3960.7778888633843!2d107.567084!3d-6.917136999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTUnMDEuNyJTIDEwN8KwMzQnMDEuNSJF!5e0!3m2!1sen!2sid!4v1675438897042!5m2!1sen!2sid"
                                                            height="300"
                                                            allowfullscreen=""
                                                            loading="lazy"
                                                            referrerpolicy="no-referrer-when-downgrade"
                                                        >
                                                        </iframe>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="mt-2">
                                                            <a
                                                                className="btn btn-text button"
                                                                href="https://goo.gl/maps/huWS8ByhreCceLqj6"
                                                                target="_blank"
                                                            >
                                                                Buka Di Google Maps
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="rules">
                <div className="rules">
                    <div className="sub-rules">
                        <div className="upper" data-aos="zoom-in" data-aos-duration="1000">
                            <div className="title2">Rules</div>
                            <div className="title1">Dikarenakan sedang dalam masa pandemi, tanpa mengurangi rasa hormat, diharapkan seluruh tamu dapat mengikuti protokol kesehatan yang dianjurkan oleh pemerintah.</div>
                        </div>
                        <div className="middle">
                            <div className="pl-5 pr-5">
                                <div className="row text-center justify-content-center">
                                    <div className="col-12 col-lg-6">
                                        <Slider {...settings}>
                                            <div className="cards">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="hero-image">
                                                            <img
                                                                src="https://cdn-icons-png.flaticon.com/512/709/709511.png"
                                                                alt="clock"
                                                                className="image-icon"
                                                            />
                                                        </div>
                                                        <div className="mb-2 mt-2">#1</div>
                                                        <div className="text">Mohon dapat hadir sesuai dengan waktu yang telah ditentukan.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cards">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="hero-image">
                                                            <img
                                                                src="https://cdn-icons-png.flaticon.com/512/3011/3011229.png"
                                                                alt="mask"
                                                                className="image-icon"
                                                            />
                                                        </div>
                                                        <div className="mb-2 mt-2">#2</div>
                                                        <div className="text"> Wajib menggunakan masker dan menaati protokol kesehatan lainnya yang berlaku selama acara. </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="galery">
                <div className="galery">
                    <div className="sub-galery">
                        <div className="upper" data-aos="zoom-in" data-aos-duration="1000">
                            <div className="title2">Galeri Photo</div>
                            <div className="title1">Photo-photo kebahagian kami yang kami kenang selalu.</div>
                        </div>
                        <div className="middle">
                            <div className="row row-cols-lg-5 pl-5 pr-5">
                                <div className="col-6 col-lg-3 pb-3" data-aos="fade-right" data-aos-duration="2000">
                                    <img
                                        src={photo1}
                                        alt="photo1"
                                        width="100"
                                        className='img-fluid w-100 h-100'
                                    />
                                </div>
                                <div className="col-6 col-lg-3 pb-3" data-aos="fade-left" data-aos-duration="2000">
                                    <img
                                        src={photo2}
                                        alt="photo1"
                                        width="100"
                                        className='img-fluid w-100'
                                    />
                                </div>
                                <div className="col-6 col-lg-3 pb-3" data-aos="fade-right" data-aos-duration="2000">
                                    <img
                                        src={photo3}
                                        alt="photo1"
                                        width="100"
                                        className='img-fluid w-100'
                                    />
                                </div>
                                <div className="col-6 col-lg-3 pb-3" data-aos="fade-left" data-aos-duration="2000">
                                    <img
                                        src={photo4}
                                        alt="photo1"
                                        width="100"
                                        className='img-fluid w-100'
                                    />
                                </div>
                                <div className="col-12 d-lg-none d-md-none" data-aos="zoom-in" data-aos-duration="2000">
                                    <img
                                        src={photo5}
                                        alt="photo1"
                                        width="100"
                                        className='img-fluid w-100'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="footer">
                <div className="footer">
                    <div className="sub-footer">
                        <div className="upper">
                            <div className="sub-title">Thank You</div>
                            <div className="bride">Winda & Rian</div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}