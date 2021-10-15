import React from "react";
import './style.css';
import Photography from '../assets/kategori-fotografi-desktop.png'
import Videography from '../assets/kategori-videografi-desktop.png'
import Animasi from '../assets/kategori-beauty-desktop.png'
import Design from '../assets/kategori-desain-desktop.png'
import Writting from '../assets/kategori-musik-dan-audio-desktop.png'

export default function SlideContent() {
  return (
    <div className="container content">
      <div className="container text-center slide-content">
        <h1 className="mb-3" >
          Jasa Freelance Paling dimintai UMKM
        </h1>

        <div className="row">
            <div className="col-md-2 offset-md-1">
                <div className="card">
                    <img className="rounded-3" src={Photography} alt="photography"/>
                    <h4>Fotografi</h4>
                </div>
            </div>

            <div className="col-md-2">
                <div className="card">
                    <img className="rounded-3" src={Videography} alt="videography"/>
                    <h4>Videografi</h4>
                </div>
            </div>

            <div className="col-md-2">
                <div className="card">
                    <img className="rounded-3" src={Design} alt="design"/>
                    <h4>Desain</h4>
                </div>
            </div>

            <div className="col-md-2">
                <div className="card">
                    <img className="rounded-3" src={Writting} alt="writting"/>
                    <h4>Writting</h4>
                </div>
            </div>

            <div className="col-md-2">
                <div className="card">
                    <img className="rounded-3" src={Animasi} alt="animat"/>
                    <h4>Animasi</h4>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}