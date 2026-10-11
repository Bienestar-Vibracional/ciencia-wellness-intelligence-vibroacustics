import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "KRM | Caso WIBindex 1.0",
  description:
    "Caso grupal KRM con medicion Bio-Well/GDV pre y post respiraciones conscientes y Savasana con Gong, dashboard WIBindex 1.0 e inteligencia somatica aplicada.",
};

export default function KrmRespiracionesGongCasePage() {
  return (
    <main className="cases-page">
      <header className="cases-header cases-shell">
        <Link className="cases-brand" href="/">
          <Image
            src="/images/logo-bienestar-vibracional.png"
            width={1820}
            height={956}
            alt="Bienestar Vibracional"
            unoptimized
          />
          <span>
            Wellness Intelligence : Vibroac&uacute;stica Sonido + Vibraci&oacute;n
            <span>Casos de inteligencia som&aacute;tica aplicada</span>
          </span>
        </Link>
        <nav className="cases-nav" aria-label="Navegaci&oacute;n de casos">
          <Link className="course-link" href="/">
            Inicio
          </Link>
          <Link className="course-link" href="/casos">
            CASOS
          </Link>
        </nav>
      </header>

      <section className="cases-main cases-shell">
        <div className="cases-title">
          <p className="case-meta">
            Grupo: KRM &middot; Fecha: 10 octubre 2026
          </p>
          <h1>Respiraciones conscientes + Savasana con Gong &middot; WIBindex 1.0</h1>
          <p>
            Caso grupal con 8 participantes y mediciones Bio-Well/GDV pre y post
            pr&aacute;ctica som&aacute;tica: 30 minutos de respiraciones conscientes y
            Savasana con Gong. La lectura integra estr&eacute;s fisiol&oacute;gico,
            energ&iacute;a neurofisiol&oacute;gica y autoreconocimiento som&aacute;tico como
            registro complementario de la experiencia.
          </p>
        </div>

        <Image
          className="case-detail-photo"
          src="/images/casos/krm-respiraciones-gong-2026-10-10.jpeg"
          alt="Caso grupal KRM con respiraciones conscientes y Gong"
          width={720}
          height={437}
          priority
          unoptimized
        />

        <section className="case-metrics">
          <article className="case-metric">
            <h2>Participantes</h2>
            <strong>8</strong>
          </article>
          <article className="case-metric">
            <h2>Estr&eacute;s promedio</h2>
            <strong>2.56 &rarr; 2.32</strong>
          </article>
          <article className="case-metric">
            <h2>Energ&iacute;a promedio</h2>
            <strong>53.56 &rarr; 54.21</strong>
          </article>
          <article className="case-metric">
            <h2>Convergencia</h2>
            <strong>38%</strong>
          </article>
        </section>

        <section className="case-note">
          <p>
            <strong>Contexto del caso:</strong> KRM se documenta como una
            experiencia grupal de inteligencia som&aacute;tica aplicada con
            respiraci&oacute;n consciente, Savasana y Gong. En Bio-Well, los
            registros figuran bajo el prefijo A5; para la lectura p&uacute;blica se
            utiliza s&oacute;lo el primer nombre posterior a ese prefijo, facilitando
            la identificaci&oacute;n personal sin exponer el nombre completo.
          </p>
        </section>

        <section className="case-note">
          <p>
            <strong>Lectura Wellness Intelligence:</strong> la muestra mostr&oacute;
            una reducci&oacute;n promedio del estr&eacute;s fisiol&oacute;gico de 9.4% y una
            leve elevaci&oacute;n promedio de la energ&iacute;a neurofisiol&oacute;gica. En el
            autoreconocimiento som&aacute;tico aparecen frases asociadas a mayor
            liviandad, relajaci&oacute;n, plenitud y expansi&oacute;n.
          </p>
        </section>

        <section className="case-panel">
          <h2>Dashboard grupal editable</h2>
          <p>
            Panel dual WIBindex 1.0 construido exclusivamente con estr&eacute;s,
            energ&iacute;a y autoreconocimiento som&aacute;tico de cada participante.
          </p>
        </section>

        <iframe
          className="dashboard-frame"
          src="/dashboards/krm-respiraciones-gong-wibindex-1-0.html"
          title="Dashboard WIBindex 1.0 KRM"
        />

        <section className="case-note">
          <p>
            Quienes deseen un an&aacute;lisis ampliado de todo su organismo a trav&eacute;s de
            la tecnolog&iacute;a GDV de Bio-Well pueden acceder a una consulta privada.
            M&aacute;s informaci&oacute;n:{" "}
            <a
              href="https://bienestarvibracional.com/vibracoaching-1-a-1"
              target="_blank"
              rel="noreferrer"
            >
              bienestarvibracional.com/vibracoaching-1-a-1
            </a>
          </p>
        </section>
      </section>

      <footer className="cases-footer cases-shell">
        www.bienestarvibracional.com
      </footer>
    </main>
  );
}
