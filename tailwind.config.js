module.exports = {
  theme: {
    screens: {},
    fontFamily: {
      sans: [
        "Inter",
        "Arial",
        "Helvetica"
      ]
    },

    fontSize: {
      xs: "10px",
      sm: "12px",
      base: "15px",
      lg: "20px",
    },

    borderRadius: {
      'none': '0',
      'default': '0.25rem',
      'lg': '0.8rem',
      'full': '9999px',
    },

    letterSpacing: {
      widest: '0.16em',
    },
    
    extend: {
      width: {
        "fixed-container": "610px"
      },
      colors: {
        // custom
        "theme-black": "#2D3346",
        "theme-gray": "#E4E4EE",
        "theme-text-blue": "#166397",
      },

      transitionProperty: {
        'height': 'height'
      },

      opacity: {
        "5": "0.05",
        "10": "0.1",
        "20": "0.2",
        "80": "0.8"
      }
    },
  },

  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    bgOpacity: ["responsive", "hover", "focus", "active", "group-hover", "group-focus"],
    borderColor: ["responsive", "group-hover", "hover", "focus"],
    borderRadius: ["responsive", "hover"],
    borderWidth: ["responsive", "focus"],
    display: ["responsive", "group-hover"],
    opacity: ["responsive", "group-hover", "hover", "group-focus"],
    textColor: ["responsive", "group-hover", "hover", "focus", "active"],
    textOpacity: ["responsive", "hover", "focus", "active", "group-hover", "group-focus"],
    textDecoration: ["responsive", "hover", "focus"],
    zIndex: ["responsive", "hover"],
    margin: ["responsive", "hover", "focus", "active", "first", "last"]
  },
};
