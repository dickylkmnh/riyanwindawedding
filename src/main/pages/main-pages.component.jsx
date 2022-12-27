import AOS from 'aos';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../style/styles.scss';

export const MainPagesComponent = () => {
    const { id } = useParams();
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <section>
                <div className="hero">
                    <div className="sub-hero" data-aos="zoom-out-down" data-aos-easing="ease-in-back" data-aos-duration="1000" data-aos-offset="0">
                        <div className="upper">
                            <div className="sub-title">The Wedding</div>
                            <div className="bride">Winda & Riyan</div>
                            <div className="text">Akan segera melangsungkan pernikahan suci</div>
                            <div className="date">Kamis, 02 Februari 2023</div>
                        </div>
                        <div className="middle">
                            <div className="mb-1">Kepada :</div>
                            <div className="mb-1 text">{id}</div>
                            <div>Di Tempat</div>
                        </div>
                    </div>
                </div>
            </section >

            <section>
                <div data-aos="fade-up">
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                    <p>ss</p>
                </div>
            </section>
        </div >
    )
}