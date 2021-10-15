import React from "react";
import './style.css';
import ytThumbnail from '../assets/Youtube-Thumbnail.png';
import banner from '../assets/Banner-1.svg';

export default function Content() {
  return(
    <div className="container content">
        <div className="container text-center video-content">
            <h1 className="mb-3">Ikuti Video singkat ini untuk daftarin jasa kamu di KreatifHub</h1>
            <img className="img-fluid yt-thumbnail" src={ytThumbnail} loading="lazy" alt="Youtube" />
        </div>

        <div className="container text-center banner-content">
            <h1 className="mb-3">Mudah tarik dana di KreatifHub</h1>
            <img className="img-fluid banner" src={banner} loading="lazy" alt="Banner" />
        </div>
    </div>
    );
}