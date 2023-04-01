import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Feed } from './components/Feed/Feed';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Layout />}>
                    <Route path={'country/:code'} element={<Feed />}></Route>
                    <Route path={'*'} element={<Feed />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
