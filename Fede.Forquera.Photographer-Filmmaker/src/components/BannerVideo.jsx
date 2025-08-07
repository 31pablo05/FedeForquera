// BannerVideo.js
import React from 'react';

const BannerVideo = () => {
  return (
    <div className="w-full h-[50vh] md:h-[65vh] lg:h-[75vh] xl:h-[80vh] relative overflow-hidden bg-slate-900">
      <video
        className="w-full h-full object-cover object-top"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/videos/fondoVideo.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      {/* Overlay gradient para mejor integración */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-slate-900/40"></div>
    </div>
  );
};

export default BannerVideo;
