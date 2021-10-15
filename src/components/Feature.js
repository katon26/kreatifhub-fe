import React from "react";
import './style.css';
import feature1 from '../assets/ilustrasi-1.svg';
import feature2 from '../assets/ilustrasi-2.svg';
import feature3 from '../assets/ilustrasi-3.svg';

export default function Feature() {
  return (
  <div className="container feature">
    <div className="row">
      <div className="col-lg-4">
        <img src={feature1} width="140" height="140" alt="ilustrasi-1" />
        <h2>Publikasi Gratis</h2>
        <p>Setiap Minggu KreatifHub memilih jasa terbaik untuk dipublikasikan.</p>
      </div>

      <div className="col-lg-4">
        <img src={feature2} width="140" height="140" alt="ilustrasi-2" />
        <h2>Bebas Biaya Komisi</h2>
        <p>Dana 100% diteruskan ke penyedia jasa. jika sudah menyelesaikan pesanan.</p>
      </div>

      <div class="col-lg-4">
        <img src={feature3} width="140" height="140" alt="ilustrasi-3" />
        <h2>Klien Terpercaya</h2>
        <p>Terhindar dari ghostingan klien karna pesanan yang masuk dari klien terpercaya.</p>
      </div>
    </div>
  </div>
  )
}