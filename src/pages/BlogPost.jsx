import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PageHero from '../sections/PageHero.jsx';
import Download from '../sections/Download.jsx';
import { BackButton, PostCard } from '../sections/BlogSections.jsx';
import { ProseSection, slugify } from '../sections/Prose.jsx';
import { findPost, posts } from '../data/posts.js';
import { image } from '../sections/Phone.jsx';
import NotFound from './NotFound.jsx';

export default function BlogPost() {
  const { slug } = useParams();
  const post = findPost(slug);
  if (!post) return <NotFound />;
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const toc = post.sections.map((s) => s.heading);

  return (
    <>
      <PageHero short />
      <div className="sheet sheet-light sheet-page sheet-article">
        <article className="section article">
          <BackButton to="/blog" label="Back to blog" />
          <div className="article-meta">
            <span className="post-tag">{post.category}</span>
            <time>{post.date}</time>
          </div>
          <h1 className="article-title">{post.title}</h1>
          <div className="article-cover">
            <img src={image(post.image)} alt="" />
          </div>
          <div className="article-body">
            <nav className="toc" aria-label="In this article">
              <ul>
                {toc.map((h, i) => (
                  <li key={h}>
                    <a href={`#${slugify(h)}`}>
                      {i < toc.length - 1 ? `${i + 1}. ${h}` : h}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="prose">
              <p className="prose-intro">{post.intro}</p>
              {post.sections.map((s, i) => (
                <ProseSection
                  key={s.heading}
                  section={{
                    ...s,
                    heading:
                      i < post.sections.length - 1
                        ? `${i + 1}. ${s.heading}`
                        : s.heading,
                  }}
                />
              ))}
            </div>
          </div>
        </article>
        <section className="section more-posts" aria-labelledby="more-title">
          <div className="more-head">
            <h2 id="more-title" className="h2">
              Keep reading.
            </h2>
            <Link to="/blog">View all articles</Link>
          </div>
          <div className="blog-grid blog-grid-3">
            {more.map((p, i) => (
              <PostCard post={p} key={p.slug} delay={i * 0.06} />
            ))}
          </div>
        </section>
      </div>
      <div className="dark-block">
        <Download />
      </div>
    </>
  );
}
