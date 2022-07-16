import React from 'react';
import { createRoot } from 'react-dom/client';
import LogoKW from './kw.png';

const element = (
    <div>
        <h1>Biodata Perusahaan</h1>
        <ul>
            <li>Nama : Koding Works</li>
            <li>Bidang : IT</li>
            <li>Alamat : Semarang, Jawa Tengah</li>
            <img src={LogoKW} alt=''/>
        </ul>
    </div>
);

const root = createRoot(document.getElementById('root'));
root.render(element);