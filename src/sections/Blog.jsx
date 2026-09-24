import React from 'react';
import { Link } from 'react-router-dom';
import { BlurText, Pop, Reveal, SectionTag } from '../motion.jsx';
import { posts } from '../data/posts.js';
import { image } from './Phone.jsx';

export default function Blog({ number = '06' }) {
  const [a, featured, c, d] = posts;
  const cards = [a, featured, c, d];
  return (
    <section className="section blog" id="blog">
      <div className="section-head">
        <SectionTag number={number}>Blog</SectionTag>
        <BlurText className="h2" lines={['Grow your knowledge.']} />
        <Reveal as="p" className="lead">
          Stay informed, inspired and in control with expert advice, practical
          tips and the latest creator-economy insights.
        </Reveal>
      </div>

      <div className="blog-grid">
        {cards.map((post, i) =>
          post === featured ? (
            <Pop
              as="article"
              className="post post-featured"
              key={post.slug}
              delay={i * 0.08}
            >
              <img src={image(post.image)} alt="" />
              <div className="post-featured-copy">
                <span className="post-category">{post.category}</span>
                <h3>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <time>{post.date}</time>
                <Link className="btn btn-tertiary" to={`/blog/${post.slug}`}>
                  <span>Read more</span>
                </Link>
              </div>
            </Pop>
          ) : (
            <Pop as="article" className="post" key={post.slug} delay={i * 0.08}>
              <Link to={`/blog/${post.slug}`} className="post-media">
                <img src={image(post.image)} alt="" />
              </Link>
              <time>{post.date}</time>
              <h3>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <div className="post-tags">
                {post.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </Pop>
          ),
        )}
      </div>
      <Reveal className="blog-more" delay={0.2}>
        <Link to="/blog">View all articles</Link>
      </Reveal>
    </section>
  );
}
