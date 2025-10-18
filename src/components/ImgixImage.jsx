import React, { useState } from 'react';

const ImgixBaseURL = 'https://himalayanedu.imgix.net'; // Your Imgix Base URL that is set in Imgix Source

const ImgixImage = ({
  src, // e.g. "/images/image_1.webp"
  alt = '',
  width,
  height,
  className = '',
  fit = 'crop',
  format = 'auto',
  quality = 80,
  lazy = true,
  fallback = true,
  ...props
}) => {
  const [imgError, setImgError] = useState(false);

  // Construct Imgix URL
  const imgixUrl = `${ImgixBaseURL}${src.startsWith('/') ? src : `/${src}`}?auto=${format},compress&fit=${fit}&q=${quality}${
    width ? `&w=${width}` : ''
  }${height ? `&h=${height}` : ''}`;

  // Local fallback (original public image)
  const fallbackUrl = `${window.location.origin}${src}`;

  return (
    <img
      src={!imgError ? imgixUrl : fallbackUrl}
      alt={alt}
      loading={lazy ? 'lazy' : 'eager'}
      onError={() => fallback && setImgError(true)}
      width={width}
      height={height}
      className={className}
      {...props}
    />
  );
};

export default ImgixImage;
