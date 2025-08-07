import React, { useState, useCallback } from 'react';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  priority = false,
  onClick,
  placeholder = 'blur' // 'blur', 'skeleton', 'none'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setError(true);
    setIsLoaded(true);
  }, []);

  const placeholderClass = placeholder === 'skeleton' 
    ? 'animate-pulse bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-[length:200%_100%]'
    : placeholder === 'blur'
    ? 'bg-gradient-to-br from-gray-200 to-gray-300'
    : 'bg-gray-200';

  return (
    <div className="relative overflow-hidden" style={{ width, height }}>
      {/* Placeholder */}
      {!isLoaded && (
        <div 
          className={`absolute inset-0 ${placeholderClass} transition-opacity duration-300`}
          style={{ width: '100%', height: '100%' }}
        />
      )}
      
      {/* Image */}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        width={width}
        height={height}
        onClick={onClick}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        style={{
          maxWidth: '100%',
          height: 'auto',
          objectFit: 'cover'
        }}
      />

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 text-sm">
          Error cargando imagen
        </div>
      )}
    </div>
  );
};

export default LazyImage;
