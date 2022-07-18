import React from 'react';
import { createRoot } from 'react-dom/client';
import DaftarBar from './components/daftarBar';
import './styles/style.css';
 
const root = createRoot(document.getElementById('root'));
root.render(<DaftarBar />);