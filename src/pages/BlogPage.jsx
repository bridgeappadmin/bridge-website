import React from 'react';
import PageHero from '../sections/PageHero.jsx';
import {
  BlogGrid,
  FeaturedPost,
  SubscribeForm,
} from '../sections/BlogSections.jsx';
import Download from '../sections/Download.jsx';
import { posts } from '../data/posts.js';

export default function BlogPage() {
  const [featured] = posts;
  return (
    <>
      <PageHero
        lines={['Blog']}
        subtitle="Get smarter about collabs — straight to your inbox."
      >
        <SubscribeForm />
      </PageHero>
      <div className="sheet sheet-light sheet-page">
        <section className="section blog-page" id="posts">
          <FeaturedPost post={featured} />
          <BlogGrid exclude={featured.slug} />
        </section>
      </div>
      <div className="dark-block">
        <Download />
      </div>
    </>
  );
}
