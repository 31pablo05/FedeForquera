import React, { useState, useEffect, useRef } from 'react';

const LazyBackgroundVideo = ({ 
  src, 
  poster, 
  className = '',
  style = {},
  children 
}) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoad) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <section ref={sectionRef} className="relative">
      {shouldLoad ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className={className}
          style={style}
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        // Placeholder mientras no se carga el video
        <div 
          className={className}
          style={{
            ...style,
            backgroundImage: poster ? `url(${poster})` : 'linear-gradient(135deg, #1e293b, #334155, #1e293b)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      )}
      {children}
    </section>
  );
};

export default LazyBackgroundVideo;
