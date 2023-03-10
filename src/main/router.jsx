import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MainPagesComponent } from './pages/main-pages.component';

export const MainRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/:id' element={<MainPagesComponent />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}