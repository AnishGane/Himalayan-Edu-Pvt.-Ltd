import React, { useState } from 'react';

const IMGIX_BASE_URL = 'https://himalayanedu.imgix.net'; // Your Imgix Base URL that is set in Imgix Source

const ImgixImage = ({
  src, // eg: 'images/image_1.webp'
  alt = '',
  className = '',
  fit = 'crop',
  format = 'auto',
  quality = 80,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  responsiveWidths = [320, 480, 768, 1024, 1280, 1600],
  lazy = true,
  fallback = true,
  ...props
}) => {
  const [imgError, setImgError] = useState(false);

  const basePath = src.startsWith('/') ? src : `/${src}`;
  const fallbackUrl = `${window.location.origin}${basePath}`;

  // Build Imgix srcset for responsive sizes
  const srcSet = responsiveWidths
    .map(
      (w) =>
        `${IMGIX_BASE_URL}${basePath}?auto=${format},compress&fit=${fit}&q=${quality}&w=${w} ${w}w`
    )
    .join(', ');

  // Default main URL
  const mainUrl = `${IMGIX_BASE_URL}${basePath}?auto=${format},compress&fit=${fit}&q=${quality}`;

  return (
    <img
      src={!imgError ? mainUrl : fallbackUrl}
      srcSet={!imgError ? srcSet : undefined}
      sizes={!imgError ? sizes : undefined}
      alt={alt}
      loading={lazy ? 'lazy' : 'eager'}
      onError={() => fallback && setImgError(true)}
      className={className}
      {...props}
    />
  );
};

export default ImgixImage;
