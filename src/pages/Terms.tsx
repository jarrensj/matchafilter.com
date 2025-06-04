import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Terms = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/terms.md')
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => console.error('Error loading terms:', error));
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="prose prose-charcoal max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Terms; 