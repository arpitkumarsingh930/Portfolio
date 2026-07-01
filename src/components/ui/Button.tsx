import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type CommonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  if (props.as === 'a') {
    const { children, variant = 'primary', icon, className = '', as: _as, ...anchorProps } = props;
    const base = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
    const classes = `${base} ${className}`;

    return (
      <a className={classes} {...anchorProps}>
        {children}
        {icon}
      </a>
    );
  }

  const { children, variant = 'primary', icon, className = '', as: _as, ...buttonProps } = props;
  const base = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  const classes = `${base} ${className}`;

  return (
    <button className={classes} {...buttonProps}>
      {children}
      {icon}
    </button>
  );
}
