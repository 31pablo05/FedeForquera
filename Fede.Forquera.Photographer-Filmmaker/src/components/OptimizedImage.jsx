import React from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px',
  priority = false,
  onClick
}) => {
  // Genera diferentes tamaños basados en el nombre del archivo
  const generateSrcSet = (imagePath) => {
    const pathParts = imagePath.split('.');
    const basePath = pathParts[0];
    const extension = pathParts[1];
    
    // Para mostrar imágenes de 380px, necesitamos versiones de 380px, 760px (2x), y 1140px (3x)
    return [
      `${basePath}.${extension} 1440w`, // Original
      // Idealmente tendrías estas versiones optimizadas:
      // `${basePath}-large.${extension} 760w`,
      // `${basePath}-medium.${extension} 380w`,
      // `${basePath}-small.${extension} 190w`
    ].join(', ');
  };

  return (
    <img
      src={src}
      srcSet={generateSrcSet(src)}
      sizes={sizes}
      alt={alt}
      className={className}
      width={width}
      height={height}
      onClick={onClick}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      style={{
        maxWidth: '100%',
        height: 'auto',
        objectFit: 'cover'
      }}
    />
  );
};

export default OptimizedImage;
