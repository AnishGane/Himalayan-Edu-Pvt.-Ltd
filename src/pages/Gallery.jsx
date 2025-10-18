import React, { useEffect, useRef, useState } from 'react';
import { galleryData } from '../constants/data';
import { IoChevronBack, IoChevronForward, IoClose } from 'react-icons/io5';
import StyledHeading from '../components/StyleHeading';
import PageTitle from '../components/PageTitle';
import MetaTags from '../components/MetaTags';
import ImgixImage from '../components/ImgixImage';

const Gallery = () => {
  const [showFullImage, setShowFullImage] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const modalRef = useRef(null);
  const [isMobileWidth, setIsMobileWidth] = useState(false);

  useEffect(() => {
    setIsMobileWidth(window.innerWidth < 768);
  }, []);

  const openImage = (index) => {
    setCurrentIndex(index);
    setShowFullImage(true);
  };

  const closeImage = () => setShowFullImage(false);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryData.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === galleryData.length - 1 ? 0 : prev + 1));
  };

  // Prevent background scroll
  useEffect(() => {
    const html = document.documentElement;
    html.style.overflow = showFullImage ? 'hidden' : '';
    return () => {
      html.style.overflow = '';
    };
  }, [showFullImage]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeImage();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!showFullImage) return;

      if (e.key === 'ArrowRight') nextImage();
      else if (e.key === 'ArrowLeft') prevImage();
      else if (e.key === 'Escape') closeImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showFullImage]);

  const title = 'Gallery - Himalayan Educational Group Service Pvt. Ltd.';
  const description =
    'Explore the gallery showcasing our classes, events, and Japanese cultural activities.';
  const url = 'https://yourdomain.com/gallery';
  const image = galleryData[0]?.image; // first image as preview

  return (
    <>
      <MetaTags title={title} description={description} url={url} image={image} />
      <PageTitle title="Gallery - Himalayan Educational Group Service Pvt. Ltd." />
      <section
        id="gallery_section"
        className="relative p-3.5 md:p-8 2xl:mx-40"
        aria-labelledby="gallery-heading"
      >
        <StyledHeading text={'Gallery'} id="gallery-heading" />

        {/* Gallery Grid */}
        <div className="wrapper relative z-30 mt-6 mb-12 w-full rounded-lg bg-gradient-to-br from-gray-50 to-red-50 md:mt-2 md:border md:border-gray-200 md:p-6">
          <article
            className="article_card grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3"
            role="list"
          >
            {galleryData.map((g, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-sm transition-all duration-200 hover:scale-[1.012] md:aspect-16/11"
                role="listitem"
                title="CLick to open image"
              >
                <button
                  onClick={() => openImage(index)}
                  aria-label={`Open image ${index + 1} of ${galleryData.length}`}
                  className="h-full w-full cursor-crosshair"
                >
                  <ImgixImage
                    src={g.image}
                    alt={g.alt}
                    className="h-full w-full object-cover"
                    responsiveWidths={[240, 320, 360, 480, 768, 1024, 1440, 1920]}
                    quality={isMobileWidth ? 60 : 75}
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 50vw"
                  />
                </button>
                <span
                  className="bg-cta-red absolute bottom-2 left-3 flex h-4 w-4 items-center justify-center rounded-full p-4 text-sm font-semibold text-white"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
              </div>
            ))}
          </article>
        </div>

        {/* Fullscreen Lightbox */}
        {showFullImage && (
          <div
            className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`Image ${currentIndex + 1} of ${galleryData.length}`}
          >
            <div ref={modalRef} className="relative w-full max-w-5xl">
              {/* Close Button */}
              <button
                onClick={closeImage}
                aria-label="Close image"
                className="absolute -top-8 -right-2 cursor-pointer text-3xl text-white transition hover:text-red-500 md:text-4xl lg:-right-8"
              >
                <IoClose />
              </button>

              {/* Left Arrow */}
              <button
                onClick={prevImage}
                aria-label="Previous image"
                className="absolute top-1/2 left-1 -translate-y-1/2 cursor-pointer text-3xl text-white transition hover:text-gray-300 md:text-4xl lg:-left-10"
              >
                <IoChevronBack />
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextImage}
                aria-label="Next image"
                className="absolute top-1/2 right-1 -translate-y-1/2 cursor-pointer text-3xl text-white transition hover:text-gray-300 md:text-4xl lg:-right-10"
              >
                <IoChevronForward />
              </button>

              {/* Full Image */}
              <ImgixImage
                src={galleryData[currentIndex].image}
                alt={galleryData[currentIndex].alt}
                className="max-h-[80vh] w-full cursor-default rounded-md object-contain"
                responsiveWidths={[240, 320, 360, 480, 768, 1024, 1440, 1920]}
                quality={isMobileWidth ? 60 : 75}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 50vw"
              />
              {/* Image Counter */}
              <p className="mt-2 text-right text-[14px] font-medium text-white sm:text-base">
                {currentIndex + 1} of {galleryData.length}
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Gallery;
