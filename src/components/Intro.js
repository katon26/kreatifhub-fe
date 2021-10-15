import React from "react";
import pic from '../assets/Ilustrasi Kayla Seller.svg';
import './style.css';

export default function Intro() {
  return (
    <div className="container py-5 mt-5">
    <div className="p-5 mb-3 bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-lg-7 intro">
            <h1>Memudahkan akses memesan jasa freelancer industri Kreatif</h1>
            <p>KreatifHub memiliki misi untuk menghubungkan talent kreatif dengan pencari talent di industri kreatif Indonesia.</p>
            <p>Daftarkan jasa kamu sekarang!</p>
    
            <ul className="nav ml-auto btn-intro">
              <button className="btn btn-primary btn-lg mt-3 me-3">Penyedia Jasa Individu</button>
                <button className="btn btn-primary btn-lg mt-3">Agensi</button>
            </ul>
          </div>

          <div className="col-sm-12 col-lg-5">
            <img className="img-intro" src={pic} alt="Ilustrasi-Kayla" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}