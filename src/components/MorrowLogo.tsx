/**
 * MorrowLogo — inline SVG squircle icon + "$morrow" in Inter.
 * Server component: no 'use client' needed.
 * Colors adapt to theme via CSS custom properties.
 */

interface MorrowLogoProps {
  /** Height of the squircle icon in px */
  iconSize?: number;
  /** CSS font-size for the "$morrow" wordmark */
  fontSize?: string;
  /** CSS font-weight for the wordmark */
  fontWeight?: number | string;
}

export default function MorrowLogo({
  iconSize = 20,
  fontSize = '0.9375rem',
  fontWeight = 600,
}: MorrowLogoProps) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: `${Math.round(iconSize * 0.4)}px`,
        lineHeight: 1,
      }}
    >
      {/* Squircle icon — same path as the original SVG asset */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 256 256"
        fill="none"
        aria-hidden="true"
        style={{ flexShrink: 0, display: 'block' }}
      >
        <path
          d="M 108 0 C 119.046 0 128 8.954 128 20 C 128 8.954 136.954 0 148 0 L 206 0 C 233.614 0 256 22.386 256 50 L 256 108 C 256 119.046 247.046 128 236 128 C 247.046 128 256 136.954 256 148 L 256 206 C 256 233.614 233.614 256 206 256 L 148 256 C 136.954 256 128 247.046 128 236 C 128 247.046 119.046 256 108 256 L 50 256 C 22.386 256 0 233.614 0 206 L 0 148 C 0 136.954 8.954 128 20 128 C 8.954 128 0 119.046 0 108 L 0 50 C 0 22.386 22.386 0 50 0 Z M 128 100 C 112.536 100 100 112.536 100 128 C 100 143.464 112.536 156 128 156 C 143.464 156 156 143.464 156 128 C 156 112.536 143.464 100 128 100 Z"
          fill="var(--color-fd-primary)"
        />
      </svg>

      {/* Wordmark */}
      <span
        style={{
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
          fontSize,
          fontWeight,
          color: 'var(--color-fd-foreground)',
          letterSpacing: '-0.01em',
          whiteSpace: 'nowrap',
        }}
      >
        $morrow
      </span>
    </span>
  );
}
