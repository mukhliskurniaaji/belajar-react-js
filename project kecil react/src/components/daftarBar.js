import React from "react";
import ListBar from "./listsBar";
import { getData } from "../utils/data";

function DaftarBar() {
    const ContentsFromData = getData(); // Pakai () krn yg dikirim function
    
    return(
        <div className="contact-app">
            <hi>DAFTAR KONTAK</hi>
            <ListBar ContentsFromData={ContentsFromData} />
        </div>
    )
}

export default DaftarBar;