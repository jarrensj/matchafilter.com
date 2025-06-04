import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Privacy = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/privacy.md')
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => console.error('Error loading privacy policy:', error));
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="prose prose-charcoal max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Privacy; 