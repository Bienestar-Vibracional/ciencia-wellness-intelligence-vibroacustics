import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Ananda (El Palomar) | Caso WIBindex 1.0",
  description:
    "Medicion grupal Bio-Well/GDV pre y post una sesion de 45 minutos de Gong en Ananda, El Palomar, con cierre musical Solo Paz.",
};

export default function AnandaCasePage() {
  return (
    <main className="cases-page">
      <header className="cases-header cases-shell">
        <Link className="cases-brand" href="/">
          <Image src="/images/logo-bienestar-vibracional.png" width={1820} height={956} alt="Bienestar Vibracional" unoptimized />
          <span>Wellness Intelligence : Vibroac&uacute;stica Sonido + Vibraci&oacute;n<span>Casos de inteligencia som&aacute;tica aplicada</span></span>
        </Link>
        <nav className="cases-nav" aria-label="Navegaci&oacute;n de casos">
          <Link className="course-link" href="/">Inicio</Link>
          <Link className="course-link" href="/casos">CASOS</Link>
        </nav>
      </header>

      <section className="cases-main cases-shell">
        <div className="cases-title">
          <p className="case-meta">Ananda &middot; El Palomar &middot; 30 octubre 2026</p>
          <h1>Gong y &ldquo;Solo Paz&rdquo; &middot; WIBindex 1.0</h1>
          <p>Experiencia grupal de inteligencia som&aacute;tica con 45 minutos de Gong y la canci&oacute;n &ldquo;Solo Paz&rdquo; al finalizar. La comparativa pre y post re&uacute;ne estr&eacute;s fisiol&oacute;gico, energ&iacute;a neurofisiol&oacute;gica y autoreconocimiento som&aacute;tico de 17 participantes con mediciones completas.</p>
        </div>

        <Image className="case-detail-photo" src="/images/casos/ananda-el-palomar-gong-2026-10-30.jpeg" alt="Grupo de Ananda, El Palomar, reunido junto al Gong" width={1086} height={1448} priority unoptimized />

        <section className="case-metrics">
          <article className="case-metric"><h2>Participantes</h2><strong>17</strong></article>
          <article className="case-metric"><h2>Estr&eacute;s promedio</h2><strong>2.65 &rarr; 2.29</strong></article>
          <article className="case-metric"><h2>Energ&iacute;a promedio</h2><strong>52.40 &rarr; 55.71 J</strong></article>
          <article className="case-metric"><h2>Convergencia</h2><strong>76%</strong></article>
        </section>

        <section className="case-note"><p><strong>Contexto del caso:</strong> los registros Bio-Well figuran con el prefijo ANANDA. Para la lectura p&uacute;blica se muestra s&oacute;lo el primer nombre posterior a ese prefijo. Se incluyen &uacute;nicamente las 17 personas con ambas mediciones disponibles.</p></section>
        <section className="case-note"><p><strong>Lectura Wellness Intelligence:</strong> en esta muestra, el estr&eacute;s promedio baj&oacute; 13.5% y la energ&iacute;a promedio subi&oacute; 6.3%. Trece personas mostraron ambos cambios a la vez. Las frases de autoreconocimiento som&aacute;tico describen experiencias individuales y se presentan junto a las mediciones, sin equipararlas a un diagn&oacute;stico.</p></section>

        <section className="case-panel"><h2>Dashboard grupal editable</h2><p>Comparativa dual WIBindex 1.0 de estr&eacute;s, energ&iacute;a y frases pre y post. La frase POST se destaca con fondo claro.</p></section>
        <iframe className="dashboard-frame dashboard-frame-long" src="/dashboards/ananda-el-palomar-wibindex-1-0.html" title="Dashboard WIBindex 1.0 Ananda, El Palomar" />

        <section className="case-note"><p>Quienes deseen un an&aacute;lisis ampliado mediante la tecnolog&iacute;a GDV de Bio-Well pueden acceder a una consulta privada. M&aacute;s informaci&oacute;n: <a href="https://bienestarvibracional.com/vibracoaching-1-a-1" target="_blank" rel="noreferrer">bienestarvibracional.com/vibracoaching-1-a-1</a></p></section>
      </section>
      <footer className="cases-footer cases-shell">www.bienestarvibracional.com</footer>
    </main>
  );
}
