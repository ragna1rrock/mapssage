import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

import Gnb from '@/components/Gnb';
import Main from '@/pages/Main.tsx';
import Login from '@/pages/Login.tsx';
const Routers: React.FC = () => (
    <BrowserRouter>
        <Global styles={css`
            ${emotionNormalize}
            :root {
                --vh: 100%;
            }
            * {
                box-sizing: border-box;
            }
        `} />
        <Routes>
            <Route element={<Gnb />}>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Routers;
