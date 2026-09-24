import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Pop, Reveal } from '../motion.jsx';
import { categories, posts } from '../data/posts.js';
import { image } from './Phone.jsx';

export function SubscribeForm() {
  const [done, setDone] = useState(false);
  return (
    <form
      className="subscribe"
      onSubmit={(event) => {
        event.preventDefault();
        setDone(true);
      }}
    >
      <label className="sr-only" htmlFor="subscribe-email">
        Email address
      </label>
      <input
        id="subscribe-email"
        type="email"
        required
        placeholder="you@studio.com"
        autoComplete="email"
      />
      <button className="btn btn-secondary" type="submit">
        <span>{done ? 'Subscribed' : 'Subscribe'}</span>
      </button>
    </form>
  );
}

export function FeaturedPost({ post }) {
  return (
    <Pop as="article" className="featured" delay={0} amount="some">
      <div className="featured-copy">
        <span className="post-tag">{post.category}</span>
        <h2>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <time>{post.date}</time>
        <Link className="btn btn-tertiary" to={`/blog/${post.slug}`}>
          <span>Read more</span>
        </Link>
      </div>
      <Link
        className="featured-media"
        to={`/blog/${post.slug}`}
        aria-label={post.title}
      >
        <img src={image(post.image)} alt="" />
      </Link>
    </Pop>
  );
}

export function PostCard({ post, delay = 0 }) {
  return (
    <Pop as="article" className="post" delay={delay}>
      <Link to={`/blog/${post.slug}`} className="post-media post-media-lg">
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
  );
}

export function BlogGrid({ exclude }) {
  const [active, setActive] = useState('All');
  const list = posts
    .filter((p) => p.slug !== exclude)
    .filter(
      (p) =>
        active === 'All' || p.category === active || p.tags.includes(active),
    );
  return (
    <div className="blog-list">
      <Reveal
        className="blog-filter"
        delay={0.1}
        role="tablist"
        aria-label="Filter posts"
      >
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={active === c}
            className={active === c ? 'is-active' : ''}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </Reveal>
      <div className="blog-grid blog-grid-3" key={active}>
        {list.map((post, i) => (
          <PostCard post={post} key={post.slug} delay={Math.min(i, 5) * 0.06} />
        ))}
      </div>
    </div>
  );
}

// Returns to the previous in-app page when there is one; otherwise (a page
// opened directly or from outside) it links to the given fallback.
export function BackButton({ to, label }) {
  const navigate = useNavigate();
  const location = useLocation();
  const hasHistory = location.key !== 'default';
  return (
    <Link
      className="back-btn"
      to={to}
      aria-label={label}
      onClick={(event) => {
        if (!hasHistory || event.metaKey || event.ctrlKey) return;
        event.preventDefault();
        navigate(-1);
      }}
    >
      <ArrowLeft size={18} />
      <span>Back</span>
    </Link>
  );
}
