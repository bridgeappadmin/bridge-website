import { useEffect } from 'react';

const BASE = 'Tazmify';

export function useTitle(title, description) {
  useEffect(() => {
    document.title = title
      ? `${title} — ${BASE}`
      : `${BASE} — Where creators and brands connect`;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.content = description;
    }
  }, [title, description]);
}
