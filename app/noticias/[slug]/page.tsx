import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articles, getArticle } from "../noticias-data";
import "../noticias.css";
import NewsHeader from "../NewsHeader";
import NewsFooter from "../NewsFooter";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  return article ? {
    title: `${article.title} | Ciencia BV`,
    description: article.dek,
    openGraph: { title: article.title, description: article.dek, images: [article.image] },
  } : {};
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return <main className="news-shell">
    <NewsHeader />
    <div className="news-wrap news-article-actions"><Link href="/noticias">← Todas las noticias</Link></div>
    <section className="news-wrap news-article-hero">
      <p className="news-kicker">Brief mensual · {article.date} · {article.reading}</p>
      <h1>{article.title}</h1>
      <p className="news-dek">{article.dek}</p>
    </section>
    <div className="news-wrap"><Image className="news-cover" src={article.image} alt={article.imageAlt} width={1400} height={700} priority /></div>
    <article className="news-article">
      <p className="news-summary"><strong>Lectura rápida.</strong> {article.summary}</p>
      {article.campaign && <aside className="news-campaign">
        <p className="news-kicker">{article.campaign.kicker}</p>
        <h2>{article.campaign.title}</h2>
        <p>{article.campaign.body}</p>
        <a className="news-button" href={article.campaign.href} target="_blank" rel="noopener noreferrer">{article.campaign.label}</a>
      </aside>}
      <h2>Hallazgos principales</h2>
      {article.findings.map((finding) => <section className="news-finding" key={finding.title}>
        <span className={`news-level ${finding.level}`}>{finding.level}</span>
        <h3>{finding.title}</h3>
        <p><strong>Estudio:</strong> {finding.study}</p>
        <p><strong>Resultado:</strong> {finding.result}</p>
        <p><strong>Contexto de la evidencia:</strong> {finding.limit}</p>
        <p><strong>Implicancia práctica:</strong> {finding.implication}</p>
        <div className="news-links">{finding.links.map((link) => <a className="news-source" href={link.href} target="_blank" rel="noopener noreferrer" key={link.href}>{link.label} ↗</a>)}</div>
      </section>)}
      <aside className="news-cta">
        <p className="news-kicker">Práctica informada</p>
        <h2>Experimentar, observar e integrar</h2>
        <p>Las sesiones de Vibroacústica aplicada con Gong proponen exploración sensorial, autorregulación y aprendizaje de inteligencia somática.</p>
        <div className="news-cta-actions">
          <a className="news-button" href="https://wa.me/541140488837?text=Le%C3%AD%20Ciencia%20BV%20y%20quiero%20conocer%20las%20sesiones%20de%20Vibroac%C3%BAstica%20aplicada%20con%20Gong" target="_blank" rel="noopener noreferrer">Consultar una sesión</a>
          <a className="news-button secondary" href="https://empresas.bienestarvibracional.com/" target="_blank" rel="noopener noreferrer">Soy empresa ↗</a>
        </div>
      </aside>
      <h2>Criterios para leer esta evidencia</h2>
      <ul>{article.protocol.map((item) => <li key={item}>{item}</li>)}</ul>
      <aside className="news-pathways">
        <p className="news-kicker">Tecnología de Conocimiento de la Tierra</p>
        <h2>Seguí explorando el vínculo entre naturaleza, cuerpo y conciencia</h2>
        <p>Conocé el universo de los hongos adaptógenos, las propuestas de Guardianes de los Andes y la Mentoría M3M, donde integramos inteligencia somática, vibroacústica, observación del biocampo y tecnologías naturales en un proceso profesional de aprendizaje y transformación.</p>
        <div className="news-cta-actions">
          <a className="news-button" href="https://adaptogenos.bienestarvibracional.com/" target="_blank" rel="noopener noreferrer">Explorar Adaptógenos ↗</a>
          <a className="news-button secondary" href="https://m3m.bienestarvibracional.com/" target="_blank" rel="noopener noreferrer">Conocer la Mentoría M3M ↗</a>
        </div>
      </aside>
    </article>
    <NewsFooter />
  </main>;
}
