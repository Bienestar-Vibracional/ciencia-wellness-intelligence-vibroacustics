import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Casos | Ciencia de Wellness Intelligence",
  description:
    "Biblioteca de casos grupales con dashboards WIBindex 1.0, medicion Bio-Well/GDV y autoreconocimiento somatico.",
};

export default function CasesPage() {
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
            <span>Biblioteca de casos grupales</span>
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
          <p className="overline">Casos documentados</p>
          <h1>Sesiones grupales con lectura pre y post.</h1>
          <p>
            Biblioteca viva de pr&aacute;cticas som&aacute;ticas medidas con tecnolog&iacute;a GDV
            Bio-Well, autoreconocimiento som&aacute;tico y dashboard WIBindex 1.0.
          </p>
        </div>

        <div className="case-grid">
          <article className="case-card">
            <Image
              src="/images/casos/krm-respiraciones-gong-2026-10-10.jpeg"
              alt="Caso grupal KRM con respiraciones conscientes y Gong"
              width={720}
              height={437}
              unoptimized
            />
            <div className="case-card-body">
              <p className="case-meta">10 octubre 2026</p>
              <h2>KRM</h2>
              <div className="case-chips">
                <span className="case-chip">Respiraci&oacute;n + Gong</span>
                <span className="case-chip">8 participantes</span>
                <span className="case-chip">WIBindex 1.0</span>
              </div>
              <p>
                Comparativa grupal de estr&eacute;s fisiol&oacute;gico y energ&iacute;a
                neurofisiol&oacute;gica antes y despu&eacute;s de respiraciones conscientes
                y Savasana con Gong.
              </p>
              <Link
                className="preview-cta"
                href="/casos/krm-respiraciones-gong-2026-10-10"
              >
                Ver caso <span>&rarr;</span>
              </Link>
            </div>
          </article>

          <article className="case-card">
            <Image
              src="/images/casos/gf-body-fit-studio-yoga-gong-2026-10-03.jpeg"
              alt="Caso grupal GF BODY FIT STUDIO con Yoga y Gong"
              width={960}
              height={1280}
              unoptimized
            />
            <div className="case-card-body">
              <p className="case-meta">3 octubre 2026</p>
              <h2>GF BODY FIT STUDIO</h2>
              <div className="case-chips">
                <span className="case-chip">Yoga + Gong</span>
                <span className="case-chip">5 participantes</span>
                <span className="case-chip">WIBindex 1.0</span>
              </div>
              <p>
                Comparativa grupal de estr&eacute;s fisiol&oacute;gico y energ&iacute;a
                neurofisiol&oacute;gica antes y despu&eacute;s de una pr&aacute;ctica
                som&aacute;tica de Yoga y Gong.
              </p>
              <Link
                className="preview-cta"
                href="/casos/gf-body-fit-studio-2026-10-03"
              >
                Ver caso <span>&rarr;</span>
              </Link>
            </div>
          </article>

          <article className="case-card">
            <Image
              src="/images/casos/emuna-meditagong-2026-09-04.jpeg"
              alt="Caso grupal EMUNA MeditaGong con Gong"
              width={1600}
              height={1200}
              unoptimized
            />
            <div className="case-card-body">
              <p className="case-meta">4 septiembre 2026</p>
              <h2>EMUNA - MeditaGong</h2>
              <div className="case-chips">
                <span className="case-chip">MeditaGong</span>
                <span className="case-chip">9 participantes</span>
                <span className="case-chip">WIBindex 1.0</span>
              </div>
              <p>
                Comparativa grupal de estr&eacute;s fisiol&oacute;gico y energ&iacute;a
                neurofisiol&oacute;gica antes y despu&eacute;s de una pr&aacute;ctica som&aacute;tica
                MeditaGong.
              </p>
              <Link
                className="preview-cta"
                href="/casos/emuna-meditagong-2026-09-04"
              >
                Ver caso <span>&rarr;</span>
              </Link>
            </div>
          </article>

          <article className="case-card">
            <Image
              src="/images/casos/evento-valna-gong-2026-08-29.jpg"
              alt="Experiencia Gong del Evento Valna"
              width={960}
              height={1280}
              unoptimized
            />
            <div className="case-card-body">
              <p className="case-meta">29 agosto 2026</p>
              <h2>Evento Valna</h2>
              <div className="case-chips">
                <span className="case-chip">Experiencia Gong</span>
                <span className="case-chip">10 participantes</span>
                <span className="case-chip">WIBindex 1.0</span>
              </div>
              <p>
                Comparativa especial de estr&eacute;s fisiol&oacute;gico y energ&iacute;a
                neurofisiol&oacute;gica entre la medici&oacute;n posterior a energ&iacute;a escalar
                y la medici&oacute;n posterior al Gong.
              </p>
              <Link
                className="preview-cta"
                href="/casos/evento-valna-2026-08-29"
              >
                Ver caso <span>&rarr;</span>
              </Link>
            </div>
          </article>

          <article className="case-card">
            <Image
              src="/images/casos/espacio-caracola-gong-2026-08-01.jpeg"
              alt="Documentacion visual de Espacio Caracola"
              width={1600}
              height={1200}
              unoptimized
            />
            <div className="case-card-body">
              <p className="case-meta">1 agosto 2026</p>
              <h2>Espacio Caracola</h2>
              <div className="case-chips">
                <span className="case-chip">Experiencia Gong</span>
                <span className="case-chip">13 participantes</span>
                <span className="case-chip">WIBindex 1.0</span>
              </div>
              <p>
                Comparativa grupal de estr&eacute;s fisiol&oacute;gico y energ&iacute;a
                neurofisiol&oacute;gica antes y despu&eacute;s de una pr&aacute;ctica som&aacute;tica de 50
                minutos.
              </p>
              <Link
                className="preview-cta"
                href="/casos/espacio-caracola-2026-08-01"
              >
                Ver caso <span>&rarr;</span>
              </Link>
            </div>
          </article>

          <article className="case-card">
            <Image
              src="/images/casos/sesion-privada-emuna-bella-vista-2026-07-17.jpg"
              alt="Sesion privada con Gong en Espacio EMUNA Bella Vista"
              width={1778}
              height={1280}
              unoptimized
            />
            <div className="case-card-body">
              <p className="case-meta">17 julio 2026</p>
              <h2>SESION PRIVADA en Espacio EMUNA (Bella Vista)</h2>
              <div className="case-chips">
                <span className="case-chip">Experiencia Gong</span>
                <span className="case-chip">6 participantes</span>
                <span className="case-chip">WIBindex 1.0</span>
              </div>
              <p>
                Comparativa grupal de estr&eacute;s fisiol&oacute;gico y energ&iacute;a
                neurofisiol&oacute;gica antes y despu&eacute;s de una pr&aacute;ctica som&aacute;tica
                privada de 50 minutos.
              </p>
              <Link
                className="preview-cta"
                href="/casos/sesion-privada-emuna-bella-vista-2026-07-17"
              >
                Ver caso <span>&rarr;</span>
              </Link>
            </div>
          </article>

          <article className="case-card">
            <Image
              src="/images/casos/espacio-amrita-gong-2026-06-26.jpeg"
              alt="Practica grupal con Gong en Espacio AMRITA"
              width={955}
              height={1077}
              unoptimized
            />
            <div className="case-card-body">
              <p className="case-meta">26 junio 2026</p>
              <h2>Espacio AMRITA</h2>
              <div className="case-chips">
                <span className="case-chip">Experiencia Gong</span>
                <span className="case-chip">5 participantes</span>
                <span className="case-chip">WIBindex 1.0</span>
              </div>
              <p>
                Comparativa grupal de estr&eacute;s fisiol&oacute;gico y energ&iacute;a
                neurofisiol&oacute;gica antes y despu&eacute;s de una pr&aacute;ctica som&aacute;tica
                de 50 minutos.
              </p>
              <Link
                className="preview-cta"
                href="/casos/espacio-amrita-2026-06-26"
              >
                Ver caso <span>&rarr;</span>
              </Link>
            </div>
          </article>

          <article className="case-card">
            <Image
              src="/images/casos/centro-alser-gong-2026-06-12.jpg"
              alt="Experiencia de inteligencia somatica con Gong en Centro Integral Formativo AlSer"
              width={1200}
              height={781}
              unoptimized
            />
            <div className="case-card-body">
              <p className="case-meta">12 junio 2026</p>
              <h2>Centro Integral Formativo AlSer</h2>
              <div className="case-chips">
                <span className="case-chip">Experiencia Gong</span>
                <span className="case-chip">5 participantes</span>
                <span className="case-chip">WIBindex 1.0</span>
              </div>
              <p>
                Experiencia de inteligencia som&aacute;tica y educaci&oacute;n del BioCampo
                Humano con medici&oacute;n GDV Bio-Well pre y post pr&aacute;ctica
                vibroac&uacute;stica.
              </p>
              <Link
                className="preview-cta"
                href="/casos/centro-alser-san-miguel-2026-06-12"
              >
                Ver caso <span>&rarr;</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <footer className="cases-footer cases-shell">
        www.bienestarvibracional.com
      </footer>
    </main>
  );
}
