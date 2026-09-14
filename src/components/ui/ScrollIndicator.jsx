import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  return (
    <motion.div
      className="scroll-indicator"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-xs)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--color-light-gray)',
        }}
      >
        Scroll
      </span>
      <motion.div
        style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, var(--color-accent), transparent)',
          transformOrigin: 'top',
        }}
        animate={{
          scaleY: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
}
