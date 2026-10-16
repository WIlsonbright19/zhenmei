import React from 'react';
import { Magnetic } from './Magnetic';

export type ButtonVariant = 'primary' | 'secondary' | 'white' | 'secondary-white';

interface RollingButtonProps {
  children: string;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
  external?: boolean;
  magnetic?: boolean;
}

export const RollingButton: React.FC<RollingButtonProps> = ({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ariaLabel,
  external = false,
  magnetic = true,
}) => {
  const variantClasses = {
    primary: 'homura-btn-primary',
    secondary: 'homura-btn-secondary',
    white: 'homura-btn-white',
    'secondary-white': 'homura-btn-secondary-white',
  }[variant];

  const content = (
    <div className="btn-text-roll">
      <div className="btn-text-track">
        <span className="btn-text-slot">{children}</span>
        <span className="btn-text-slot" aria-hidden="true">{children}</span>
      </div>
    </div>
  );

  const baseClass = `homura-btn ${variantClasses} ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (onClick) {
      onClick();
    }
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  let el = (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={baseClass}
      aria-label={ariaLabel || children}
    >
      {content}
    </button>
  );

  if (href) {
    el = (
      <a
        href={href}
        onClick={handleClick}
        className={baseClass}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel || children}
      >
        {content}
      </a>
    );
  }

  if (magnetic && !disabled) {
    return <Magnetic>{el}</Magnetic>;
  }

  return el;
};
