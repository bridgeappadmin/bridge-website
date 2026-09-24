import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Briefcase, Clock, MapPin, Wallet } from 'lucide-react';
import PageHero from '../sections/PageHero.jsx';
import Download from '../sections/Download.jsx';
import { BackButton } from '../sections/BlogSections.jsx';
import { ProseSection } from '../sections/Prose.jsx';
import { findJob } from '../data/jobs.js';
import NotFound from './NotFound.jsx';

export default function JobPost() {
  const { slug } = useParams();
  const job = findJob(slug);
  if (!job) return <NotFound />;
  const facts = [
    ['Location', job.location, MapPin],
    ['Type', job.type, Clock],
    ['Department', job.department, Briefcase],
    ['Salary', job.salary, Wallet],
  ];
  return (
    <>
      <PageHero short />
      <div className="sheet sheet-light sheet-page sheet-article">
        <article className="section article job-post">
          <BackButton to="/careers" label="Back to careers" />
          <h1 className="article-title">{job.title}</h1>
          <div className="job-layout">
            <div className="prose">
              {job.sections.map((s, i) => (
                <ProseSection
                  key={s.heading}
                  section={{ ...s, heading: `${i + 1}. ${s.heading}` }}
                />
              ))}
            </div>
            <aside className="job-side">
              {facts.map(([label, value, Icon]) => (
                <div className="job-fact" key={label}>
                  <span>
                    <Icon size={14} /> {label}
                  </span>
                  <strong>{value}</strong>
                </div>
              ))}
              <p className="job-closes">
                Applications close on <b>{job.closes}</b>
              </p>
              <Link className="apply-btn" to={`/contact?role=${job.slug}`}>
                Apply now
              </Link>
            </aside>
          </div>
        </article>
      </div>
      <div className="dark-block">
        <Download />
      </div>
    </>
  );
}
