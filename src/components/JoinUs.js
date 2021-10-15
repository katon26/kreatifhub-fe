import React from "react";
import './style.css';
import profPic from '../assets/professional-acc.jpg';
import businessPic from '../assets/business-acc.png';

export default function JoinUs() {
  return(
    <div className="container content">
      <div className="container-fluid">

        <h1>Gabung dengan KreatifHub Sekarang</h1>

        <div className="container-fluid content-2">
          <div className="row">
            
            <div className="col-sm-12 col-lg-6">
                <h2>Freelancer and Creative Professionals</h2>
                
                <div className="row">
                    <div className="col-sm-4">
                        <img className="img" src={profPic} width="180" height="180" alt="professional-acc"  />
                    </div>

                    <div className="col-sm-8">
                        <ul id="custom-list">
                        <li>Buat Iklan Project dan Dapatkan Lamaran dari Talent</li>
                        <li>Mengikuti Acara KreatifAcademy</li>
                        <li>Pesan Jasa dari Marketplace</li>
                        <li>Jual Jasa di Marketplace</li>
                        <li>Kirim Lamaran Project</li>
                        <li>Upload Portofolio</li>
                        </ul>
                    </div>
                </div>

                <button className="btn btn-primary btn-lg">Daftar Sekarang</button>
            </div>

            <div className="col-sm-12 col-lg-6">
                <h2>Agensi dan Production House</h2>
                    
                    <div className="row">
                        <div className="col-sm-4">
                            <img className="img" src={businessPic} width="180" height="180" alt="business-acc"  />
                        </div>

                        <div className="col-sm-8">
                            <ul id="custom-list">
                                <li>Buat Iklan Project dan Dapatkan Lamaran dari Talent</li>
                                <li>Kirim Lamaran Project</li>
                                <li>Buat Profil Bisnis dan Tambahkan Anggota Tim</li>
                                <li>Upload Portofolio Bisnis</li>
                                <li>Akses & Kelola Banyak Akun Anggota Tim</li>
                            </ul>
                        </div>
                    </div>

                <button className="btn btn-primary btn-lg">Daftar Sekarang</button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}