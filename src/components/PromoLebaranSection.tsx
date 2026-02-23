"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Car, MapPin, Clock, Users, Shield, Star, Gift, Zap, ChevronRight, Key } from "lucide-react";

export default function PromoLebaranSection() {
  const targetDate = new Date("2026-03-16T00:00:00").getTime();

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    {
      icon: Car,
      title: "Armada Terawat",
      description: "Mobil terbaru & selalu dicek sebelum dikirim"
    },
    {
      icon: Shield,
      title: "Asuransi Terintegrasi",
      description: "Perjalanan Anda lebih aman & terjamin"
    },
    {
      icon: MapPin,
      title: "Jemput Zona Surabaya",
      description: "Gratis jemput area Surabaya & sekitarnya"
    },
    {
      icon: Key,
      title: "Sopir Profesional",
      description: "Berpengalaman & Professional di jalan Surabaya"
    }
  ];

  const whyBookNow = [
    "Unit terbatas setiap musim liburan",
    "Harga promo khusus periode lebaran",
    "Proses booking cepat & mudah",
    "Customer service 24/7 siap membantu"
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-amber-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full shadow-lg mb-6">
            <Gift className="w-5 h-5" />
            <span className="font-bold">PROMO LEBARAN 2026</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-4 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Mudik Nyaman
            </span>
            <br />
            Bersama Keluarga
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Siapkan perjalananmudik Anda dengan armada terbaik dari <span className="font-bold text-amber-600">Vicky Rental Surabaya</span>. 
            Promo khusus lebaran, unit terbatas!
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6285373293935?text=Halo,%20saya%20ingin%20booking%20rental%20mobil%20Surabaya%20untuk%20Lebaran%202026.%20Ada%20promo%20apa%20saja?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Booking Sekarang via WhatsApp
            </a>
            <Link
              to="/armada"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold px-8 py-4 rounded-xl shadow-lg border-2 border-slate-200 transition-all hover:border-amber-400"
            >
              Lihat Armada
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Countdown Section */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <p className="text-slate-600 font-medium">Hitung Mundur Menuju Halal Bihalal</p>
              <p className="text-amber-600 font-bold">16 Maret 2026</p>
            </div>
            
            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-2xl mx-auto">
              {[
                { label: 'Hari', value: countdown.days },
                { label: 'Jam', value: countdown.hours },
                { label: 'Menit', value: countdown.minutes },
                { label: 'Detik', value: countdown.seconds }
              ].map((item, index) => (
                <div key={item.label} className="text-center">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-2xl p-4 md:p-6 shadow-lg">
                    <div className="text-3xl md:text-5xl font-black">
                      {String(item.value).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="mt-2 text-xs md:text-sm font-semibold text-slate-600 uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Urgency Text */}
            <p className="text-center mt-6 text-red-500 font-semibold">
              Jangan sampai kehabisan! Unit terbatas!
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">{benefit.title}</h3>
              <p className="text-slate-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Why Book Now & Testimonial */}
        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Why Book Now */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 shadow-xl border border-green-200">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-green-800">
              <Star className="w-6 h-6 text-amber-500" />
              Mengapa Booking Sekarang?
            </h3>
            <ul className="space-y-4">
              {whyBookNow.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="text-green-900">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Info Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-amber-500" />
              Layanan Area Surabaya
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-xl">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Car className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">Gratis Antar Jemput</p>
                  <p className="text-sm text-slate-600">Kota Surabaya & sekitarnya</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">Layanan 24 Jam</p>
                  <p className="text-sm text-slate-600">Siap membantu kapan saja</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">Sopir Profesional</p>
                  <p className="text-sm text-slate-600">Berpengalaman & terpercaya</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <Link 
                to="/kenapa-kami" 
                className="text-amber-600 font-semibold hover:text-amber-700 flex items-center gap-1"
              >
                Pelajari mengapa kami berbeda <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-slate-600 mb-4">Masih bingung pilih armada?</p>
          <a
            href="https://wa.me/6285373293935?text=Halo,%20saya%20butuh%20bantuan%20untuk%20pilih%20armada%20rental%20mobil%20Surabaya%20untuk%20Lebaran."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Konsultasi Gratis via WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
