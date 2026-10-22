import Link from "next/link";

export default function NewsFooter(){
  return <footer className="news-footer">
    <div className="news-wrap news-footer-grid">
      <div><strong>Bienestar Vibracional</strong><p>Inteligencia Somática · Vibroacústica aplicada</p></div>
      <nav aria-label="Navegación al pie">
        <Link href="/">Marco científico</Link><Link href="/noticias">Noticias</Link>
        <a href="https://empresas.bienestarvibracional.com/" target="_blank" rel="noopener noreferrer">Propuestas empresariales ↗</a>
      </nav>
      <p>Contenido educativo. Se diferencia evidencia directa de inferencia y no se presentan hipótesis como efectos clínicos establecidos.</p>
    </div>
  </footer>;
}
