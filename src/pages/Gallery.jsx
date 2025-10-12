import React, { useEffect, useRef, useState } from 'react';
import { galleryData } from '../constants/data';
import { IoChevronBack, IoChevronForward, IoClose } from 'react-icons/io5';
import StyledHeading from '../components/StyleHeading';

const Gallery = () => {
  const [showFullImage, setShowFullImage] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const modalRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowFullImage(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const html = document.documentElement;

    if (showFullImage) {
      html.style.overflow = 'hidden';
    } else {
      html.style.overflow = '';
    }

    return () => {
      html.style.overflow = '';
    };
  }, [showFullImage]);

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

  return (
    <section id="gallery_section" className="bg-section-bg">
      {/*  Diagonal Cross Grid Bottom Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      `,
          backgroundSize: '40px 40px',
          WebkitMaskImage:
            'radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)',
          maskImage: 'radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)',
        }}
      />

      <div className="content">
        <StyledHeading text={'Gallery'} />

        {/* Gallery Grid */}
        <div className="wrapper mb-4">
          <article className="article_card gap-6">
            {galleryData.map((g, index) => (
              <div
                title="Click to Enlarge"
                className="relative transition-all duration-200 hover:scale-[1.012]"
                key={index}
              >
                <img
                  src={g.image}
                  className="h-[19.45rem] w-full cursor-crosshair rounded-sm object-cover"
                  alt={`Image No.${g.id}`}
                  loading="lazy"
                  onClick={() => openImage(index)}
                />
                <p className="bg-cta-red absolute bottom-2 left-3 flex h-4 w-4 items-center justify-center rounded-full p-4 text-sm font-semibold text-white">
                  {index + 1}
                </p>
              </div>
            ))}
          </article>
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      {showFullImage && (
        <div className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div ref={modalRef} className="relative w-full max-w-5xl">
            {/* Close Button */}
            <button
              className="absolute -top-8 -right-2 cursor-pointer text-3xl text-white transition hover:text-red-500 md:text-4xl lg:-right-8"
              onClick={closeImage}
            >
              <IoClose />
            </button>

            {/* Left Arrow */}
            <button
              className="absolute top-1/2 left-1 -translate-y-1/2 cursor-pointer text-3xl text-white transition hover:text-gray-300 md:text-4xl lg:-left-10"
              onClick={prevImage}
            >
              <IoChevronBack />
            </button>

            {/* Right Arrow */}
            <button
              className="absolute top-1/2 right-1 -translate-y-1/2 cursor-pointer text-3xl text-white transition hover:text-gray-300 md:text-4xl lg:-right-10"
              onClick={nextImage}
            >
              <IoChevronForward />
            </button>

            {/* Full Image */}
            <img
              src={galleryData[currentIndex].image}
              alt={`Gallery ${currentIndex + 1}`}
              className="max-h-[80vh] w-full cursor-pointer rounded-md object-contain"
            />

            {/* Image Counter */}
            <p className="mt-2 text-right text-[14px] font-medium text-white sm:text-base">
              {currentIndex + 1} of {galleryData.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
