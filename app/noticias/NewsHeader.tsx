import Link from "next/link";

export default function NewsHeader(){
  return <header className="news-wrap news-top">
    <Link className="news-brand" href="/">Bienestar Vibracional<small>Ciencia & práctica somática</small></Link>
    <nav className="news-nav" aria-label="Navegación del blog">
      <Link href="/">Marco científico</Link>
      <Link className="active" href="/noticias">Noticias</Link>
    </nav>
  </header>;
}
