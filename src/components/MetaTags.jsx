import React from 'react';
import { Helmet } from 'react-helmet-async'; // Recommended for React SEO

const MetaTags = ({ title, description, url, image }) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {/* Keywords */}
      <meta
        name="keywords"
        content="Japanese language courses, JLPT preparation, JFT, NAT, online Japanese classes, Japanese grammar, vocabulary, practical conversation, Himalayan Educational Group"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default MetaTags;
