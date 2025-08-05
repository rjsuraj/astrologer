import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface LazyMediaProps extends React.HTMLProps<HTMLImageElement | HTMLVideoElement> {
  src: string;
  alt: string;
  isVideo?: boolean;
}

const LazyMedia: React.FC<LazyMediaProps> = ({ src, alt, isVideo = false, ...props }) => {
  const [ref, inView] = useIntersectionObserver({
    rootMargin: '200px',
    threshold: 0,
  });

  return (
    <div ref={ref}>
      {inView ? (
        isVideo ? (
          <video src={src} autoPlay muted loop playsInline {...(props as React.HTMLProps<HTMLVideoElement>)} />
        ) : (
          <img src={src} alt={alt} {...(props as React.HTMLProps<HTMLImageElement>)} />
        )
      ) : (
        <div style={{ paddingTop: '56.25%', backgroundColor: '#eee' }} />
      )}
    </div>
  );
};

export default LazyMedia;
