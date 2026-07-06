module.exports = {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'spin-reverse': 'spin-back 3s linear infinite',
      },
      keyframes: {
        'spin-back': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        }
      }
    },
  },
}