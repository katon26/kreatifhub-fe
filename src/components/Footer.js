import React from "react";
import './style.css';
import logo from '../assets/Logo-KH.svg';
import paymentPic from '../assets/payment-methods.png';
import { AiFillInstagram, AiFillYoutube, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';

export default function Footer() {
    return(
      <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <img className="img-fluid img-logo p-3 rounded-3" src={logo} alt="logo" />
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6">
                    <h2>MEMBERSHIP</h2>
                    <ul>
                        <li>Daftar</li>
                        <li>Profil Saya</li>
                        <li>Pengaturan Akun</li>
                        <li>Pasang Iklan</li>
                        <li>Tingkatkan Membership</li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6">
                    <h2>KREATIFHUB</h2>
                    <ul>
                        <li>Tentang Kami</li>
                        <li>Cari Project</li>
                        <li>Daftar Talent</li>
                        <li>Paket Bisnis</li>
                        <li>Syarat dan Ketentuan</li>
                        <li>Kebijakan Privasi</li>
                        <li>Kontak Kami</li>
                        <li>Bantuan (FAQ)</li>
                    </ul>
                </div>

                <div  className="col-lg-3 col-md-4">
                    <h2>METODE PEMBAYARAN</h2>
                    <img className="img-fluid" src={paymentPic} alt="pembayaran" />
                </div>
            </div>
        </div>
            
        <div id="footer-2" className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <span className="copyright">&copy; 2021 KreatifHub. All Rights Reserved. </span>
                    </div>

                    <div className="col-md-4 right-side">
                        <span><AiFillInstagram /></span> &nbsp;
                        <span><AiFillYoutube /></span> &nbsp;
                        <span><AiFillFacebook /></span> &nbsp;
                        <span><AiFillLinkedin /></span> &nbsp;
                        <span><FaTiktok /></span> &nbsp;
                    </div>
                </div>
            </div>
        </div>
      </footer>
    );
}