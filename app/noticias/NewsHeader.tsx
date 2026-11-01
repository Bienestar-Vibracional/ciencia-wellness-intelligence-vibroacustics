import Image from "next/image";
import Link from "next/link";

export default function NewsHeader(){
  return <header className="news-wrap news-top">
    <Link className="news-brand" href="/" aria-label="Bienestar Vibracional · Inteligencia Somática aplicada">
      <Image src="/images/logo-bienestar-vibracional.png" alt="Bienestar Vibracional" width={1812} height={951} priority />
      <span>Inteligencia Somática aplicada</span>
    </Link>
    <nav className="news-nav" aria-label="Navegación del blog">
      <Link href="/">Marco científico</Link>
      <Link className="active" href="/noticias">Noticias</Link>
    </nav>
  </header>;
}
