"use client";

import { FormEvent, useState } from "react";

export default function NewsletterSignup(){
  const [error,setError]=useState("");
  function handleSubmit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    const data=new FormData(event.currentTarget);
    const email=String(data.get("email")||"").trim();
    const phone=String(data.get("phone")||"").trim();
    if(!email||!phone){setError("Completá tu email y WhatsApp para continuar.");return;}
    setError("");
    const message=`Hola, quiero registrarme al Newsletter Ciencia BV.\nEmail: ${email}\nWhatsApp: ${phone}\nAcepto recibir novedades científicas y eventos de Bienestar Vibracional.`;
    window.open(`https://wa.me/541140488837?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");
  }
  return <section id="newsletter" className="news-wrap news-newsletter" aria-labelledby="newsletter-title">
    <div className="news-newsletter-copy"><p className="news-kicker">Ciencia que sigue viva</p><h2 id="newsletter-title">Recibí el newsletter de Ciencia BV</h2><p>Nuevas investigaciones explicadas con criterio, aplicaciones para la práctica vibroacústica y próximos encuentros de Bienestar Vibracional.</p><div className="news-community-links"><a href="https://chat.whatsapp.com/IXhhp9EOiPy0PMXR5TvxJi" target="_blank" rel="noopener noreferrer">Comunidad de WhatsApp ↗</a><a href="https://www.instagram.com/channel/AbaNp8g4QhUxf2Q7/" target="_blank" rel="noopener noreferrer">Canal de Instagram ↗</a></div></div>
    <form className="news-signup-form" onSubmit={handleSubmit}><label>Email<input type="email" name="email" autoComplete="email" placeholder="tu@email.com" required/></label><label>WhatsApp<input type="tel" name="phone" autoComplete="tel" placeholder="+54 9 11…" required/></label><label className="news-consent"><input type="checkbox" required/> Acepto recibir novedades y eventos. Puedo cancelar cuando quiera.</label>{error?<p className="news-form-error" role="alert">{error}</p>:null}<button type="submit">Quiero recibir novedades <span aria-hidden="true">→</span></button><small>Al enviar, se abrirá WhatsApp para confirmar tu registro.</small></form>
  </section>;
}
