import React, { useState } from 'react';

const IMGIX_BASE_URL = 'https://himalayanedu.imgix.net'; // Your Imgix Base URL that is set in Imgix Source

const ImgixImage = ({
  src, // eg: '/image_1.webp'
  alt = '',
  className = '',
  fit = 'crop',
  quality = 75,
  sizes = '(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw', // 👈 smarter sizing hint
  responsiveWidths = [320, 480, 640, 768, 1024, 1280],
  lazy = true,
  fallback = true,
  ...props
}) => {
  const [imgError, setImgError] = useState(false);

  const basePath = src.startsWith('/') ? src : `/${src}`;
  const fallbackUrl = `${window.location.origin}${basePath}`;

  const srcSet = responsiveWidths
    .map(
      (w) =>
        `${IMGIX_BASE_URL}${basePath}?auto=format,compress&fit=${fit}&q=${quality}&w=${w} ${w}w`
    )
    .join(', ');

  const mainUrl = `${IMGIX_BASE_URL}${basePath}?auto=format,compress&fit=${fit}&q=${quality}`;

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
