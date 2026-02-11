/**
 * Compatibility layer for Next.js → React (Vite) migration.
 * Use these in place of next/image, next/link, next/head, next/script.
 */
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// React Router Link - accepts href (Next style) and passes as "to"
export function Link({ href, passHref, children, ...rest }) {
  return <RouterLink to={href || '#'} {...rest}>{children}</RouterLink>;
}

// Plain img in place of next/image (no optimization; use src as-is)
export function Image({ src, alt = '', width, height, className, style, fill, ...rest }) {
  const resolvedSrc = typeof src === 'object' && src !== null && 'default' in src ? src.default : src;
  if (fill) {
    return <img src={resolvedSrc} alt={alt} className={className} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', ...style }} loading="lazy" {...rest} />;
  }
  return (
    <img
      src={resolvedSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      loading="lazy"
      {...rest}
    />
  );
}

// Head: use Helmet so meta/title work in SPA
export function Head({ children }) {
  return <Helmet>{children}</Helmet>;
}

// Script: render as regular script tag (for schema etc.)
export function Script({ id, src, children, strategy, dangerouslySetInnerHTML }) {
  if (dangerouslySetInnerHTML?.__html) {
    return <script id={id} type="application/ld+json" dangerouslySetInnerHTML={dangerouslySetInnerHTML} />;
  }
  if (src) return null; // external scripts: load in index.html or useEffect
  if (typeof children === 'string') return <script id={id} type="application/ld+json">{children}</script>;
  return null;
}
