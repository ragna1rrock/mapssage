import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Gnb from '@/components/Gnb';
import Home from '@/pages/Home';
import About from '@/pages/About.tsx';
import Login from '@/pages/Login.tsx';

const Routers: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Gnb />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Routers;
