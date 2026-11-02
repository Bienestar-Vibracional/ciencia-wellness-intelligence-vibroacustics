import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Multiespacio IKIGAI | Caso WIBindex 1.0",
  description:
    "Yoga y Gong: Vibrando el Corazon. Medicion grupal Bio-Well/GDV y WIBindex 1.0 pre y post en Multiespacio IKIGAI.",
};

export default function IkigaiCasePage() {
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
          <p className="case-meta">Multiespacio IKIGAI &middot; 1 noviembre 2026</p>
          <h1>Yoga + Gong: Vibrando el Coraz&oacute;n &middot; WIBindex 1.0</h1>
          <p>Experiencia grupal de inteligencia som&aacute;tica con Yoga y Gong. La comparativa pre y post re&uacute;ne estr&eacute;s fisiol&oacute;gico, energ&iacute;a neurofisiol&oacute;gica, WIBindex 1.0 y autoreconocimiento som&aacute;tico de ocho participantes con mediciones completas.</p>
        </div>

        <Image className="case-detail-photo" src="/images/casos/ikigai-yoga-gong-2026-11-01.jpeg" alt="Grupo de Multiespacio IKIGAI reunido tras la experiencia de Yoga y Gong" width={1200} height={1600} priority unoptimized />

        <section className="case-metrics">
          <article className="case-metric"><h2>Participantes</h2><strong>8</strong></article>
          <article className="case-metric"><h2>Estr&eacute;s promedio</h2><strong>2.87 &rarr; 2.60</strong></article>
          <article className="case-metric"><h2>Energ&iacute;a promedio</h2><strong>53.81 &rarr; 55.90 J</strong></article>
          <article className="case-metric"><h2>WIBindex 1.0</h2><strong>84.52 &rarr; 85.98</strong></article>
        </section>

        <section className="case-note"><p><strong>Contexto del caso:</strong> los registros Bio-Well figuran con el prefijo IKIGAI. Para la lectura p&uacute;blica se muestra el primer nombre; cuando se repite, se agrega la inicial registrada para distinguir las tomas. Se incluyen &uacute;nicamente las ocho personas con ambas mediciones disponibles.</p></section>
        <section className="case-note"><p><strong>Lectura Wellness Intelligence:</strong> el estr&eacute;s promedio baj&oacute; 9.6%, la energ&iacute;a promedio subi&oacute; 3.9% y el WIBindex 1.0 promedio avanz&oacute; 1.46 puntos. Cinco personas registraron menos estr&eacute;s, seis m&aacute;s energ&iacute;a y tres ambos cambios a la vez. Las frases de autoreconocimiento som&aacute;tico describen experiencias individuales; estas observaciones no constituyen un diagn&oacute;stico ni prueban causalidad.</p></section>

        <section className="case-panel"><h2>Dashboard grupal editable</h2><p>Comparativa WIBindex 1.0 de estr&eacute;s, energ&iacute;a y frases pre y post. La frase POST se destaca con fondo claro.</p></section>
        <iframe className="dashboard-frame dashboard-frame-ikigai" src="/dashboards/ikigai-yoga-gong-2026-11-01-wibindex-1-0.html" title="Dashboard WIBindex 1.0 Multiespacio IKIGAI" />

        <section className="case-note"><p>Quienes deseen un an&aacute;lisis ampliado mediante la tecnolog&iacute;a GDV de Bio-Well pueden acceder a una consulta privada. M&aacute;s informaci&oacute;n: <a href="https://bienestarvibracional.com/vibracoaching-1-a-1" target="_blank" rel="noreferrer">bienestarvibracional.com/vibracoaching-1-a-1</a></p></section>
      </section>
      <footer className="cases-footer cases-shell">www.bienestarvibracional.com</footer>
    </main>
  );
}
