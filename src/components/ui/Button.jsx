import { motion } from 'framer-motion';
import { openBooksyWidget } from '../../utils/booksy';
import './Button.css';

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  ...props
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  const isBooksy = href && href.includes('booksy');

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    if (isBooksy) {
      openBooksyWidget(e);
    }
  };

  const content = (
    <>
      <span className="btn__text">{children}</span>
      {icon !== false && (
        <motion.span
          className="btn__arrow"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          →
        </motion.span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        onClick={handleClick}
        target={isBooksy ? '_self' : (href.startsWith('http') ? '_blank' : undefined)}
        rel={isBooksy ? undefined : (href.startsWith('http') ? 'noopener noreferrer' : undefined)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}
