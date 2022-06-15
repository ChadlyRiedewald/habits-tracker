import { createGlobalStyle } from 'styled-components';
import * as CONSTANTS from './constants';

const GlobalStyles = createGlobalStyle`
  html {
	// Colors
	--color-orange-100: ${CONSTANTS.COLORS.orange['100']};
	--color-orange-200: ${CONSTANTS.COLORS.orange['200']};
	--color-orange-300: ${CONSTANTS.COLORS.orange['300']};
	--color-orange-400: ${CONSTANTS.COLORS.orange['400']};
	--color-orange-500: ${CONSTANTS.COLORS.orange['500']};
	--color-orange-600: ${CONSTANTS.COLORS.orange['600']};
	--color-orange-700: ${CONSTANTS.COLORS.orange['700']};
    --color-gray-100: ${CONSTANTS.COLORS.gray['100']};
    --color-gray-200: ${CONSTANTS.COLORS.gray['200']};
    --color-gray-300: ${CONSTANTS.COLORS.gray['300']};
    --color-gray-400: ${CONSTANTS.COLORS.gray['400']};
    --color-gray-500: ${CONSTANTS.COLORS.gray['500']};
    --color-gray-600: ${CONSTANTS.COLORS.gray['600']};
    --color-gray-700: ${CONSTANTS.COLORS.gray['700']};
    --color-gray-800: ${CONSTANTS.COLORS.gray['800']};
    --color-gray-900: ${CONSTANTS.COLORS.gray['900']};
    --color-sports: ${CONSTANTS.COLORS.habits.sports};
    --color-mind: ${CONSTANTS.COLORS.habits.mind};
    --color-hobby: ${CONSTANTS.COLORS.habits.hobby};
    --color-food: ${CONSTANTS.COLORS.habits.food};
    --color-health: ${CONSTANTS.COLORS.habits.health};
    --color-study: ${CONSTANTS.COLORS.habits.study};
    --color-finance: ${CONSTANTS.COLORS.habits.finance};
    --color-success: ${CONSTANTS.COLORS.other.success};
    --color-success-bg: ${CONSTANTS.COLORS.other.successBg};
    --color-error: ${CONSTANTS.COLORS.other.error};
    --color-error-bg: ${CONSTANTS.COLORS.other.errorBg};
    --color-alert: ${CONSTANTS.COLORS.other.alert};
    --color-alert-bg: ${CONSTANTS.COLORS.other.alertBg};
	
	// Padding
	--padding-xs: ${`${CONSTANTS.SPACING.xs}px`};
	--padding-sm: ${`${CONSTANTS.SPACING.sm}px`};
	--padding-md: ${`${CONSTANTS.SPACING.md}px`};
	--padding-lg: ${`${CONSTANTS.SPACING.lg}px`};
	--padding-xl: ${`${CONSTANTS.SPACING.xl}px`};
	--padding-xxl: ${`${CONSTANTS.SPACING.xxl}px`};
	--padding-xxxl: ${`${CONSTANTS.SPACING.xxxl}px`};

    // Button padding
	--btn-padding-normal: 12px 1.5em;
	--btn-padding-wide: 0.75em 3.5em;
	
	// Margin
	--margin-xs: calc(${CONSTANTS.SPACING.xs / 16}em);
	--margin-sm: calc(${CONSTANTS.SPACING.sm / 16}em);
	--margin-md: calc(${CONSTANTS.SPACING.md / 16}em);
	--margin-lg: calc(${CONSTANTS.SPACING.lg / 16}em);
	--margin-xl: calc(${CONSTANTS.SPACING.xl / 16}em);
	--margin-xxl: calc(${CONSTANTS.SPACING.xxl / 16}em);
	--margin-xxxl: calc(${CONSTANTS.SPACING.xxxl / 16}em);
	
	// Font-family
	--font-family: 'Inria Sans', sans-serif;
	
	// Font sizes
	--font-xxs: ${CONSTANTS.FONT_SIZES.xxs};
	--font-xs: ${CONSTANTS.FONT_SIZES.xs};
	--font-sm: ${CONSTANTS.FONT_SIZES.sm};
	--font-md: ${CONSTANTS.FONT_SIZES.md};
	--font-lg: ${CONSTANTS.FONT_SIZES.lg};
	--font-xl: ${CONSTANTS.FONT_SIZES.xl};
	--font-xxl: ${CONSTANTS.FONT_SIZES.xxl};
	
	// Font weights
	--font-weight-normal: ${CONSTANTS.FONT_WEIGHTS.normal};
	--font-weight-bold: ${CONSTANTS.FONT_WEIGHTS.bold};
	
	// Line heights
	--line-height-sm: ${CONSTANTS.LINE_HEIGHTS.sm};
	--line-height-md: ${CONSTANTS.LINE_HEIGHTS.md};
	--line-height-lg: ${CONSTANTS.LINE_HEIGHTS.lg};
	
	// Border radius
	--border-radius-sm: ${CONSTANTS.BORDER_RADIUS.sm};
	--border-radius-md: ${CONSTANTS.BORDER_RADIUS.md};
	--border-radius-lg: ${CONSTANTS.BORDER_RADIUS.lg};
	--border-radius-xl: ${CONSTANTS.BORDER_RADIUS.xl};
	
	// Border width
    --border-width-xxs: ${CONSTANTS.BORDER_WIDTH.xxs};
    --border-width-xs: ${CONSTANTS.BORDER_WIDTH.xs};
    --border-width-sm: ${CONSTANTS.BORDER_WIDTH.sm};
    --border-width-md: ${CONSTANTS.BORDER_WIDTH.md};
    --border-width-lg: ${CONSTANTS.BORDER_WIDTH.lg};
    --border-width-xl: ${CONSTANTS.BORDER_WIDTH.xl};
    --border-width-xxl: ${CONSTANTS.BORDER_WIDTH.xxl};
    --border-width-xxxl: ${CONSTANTS.BORDER_WIDTH.xxxl};
	
	// Fixed Heights
      --height-mobile-nav: ${`${CONSTANTS.SPACING.lg}px`};
    @media screen and ${CONSTANTS.BREAKPOINTS.smMin} {
      --height-mobile-nav: calc(${CONSTANTS.SPACING.lg * 1.25}px);
    }
    @media screen and ${CONSTANTS.BREAKPOINTS.lgMin} {
      --height-mobile-nav: 0;
    }
	
	// Fixed Widths
	@media screen and ${CONSTANTS.BREAKPOINTS.lgMin} {
      --width-nav: ${CONSTANTS.WIDTH.navigation.sm};
    }    
	@media screen and ${CONSTANTS.BREAKPOINTS.xlMin} {
      --width-nav: ${CONSTANTS.WIDTH.navigation.md};
    }
	
	// Shadows
    --shadow-color: 0deg 0% 60%;
    --shadow-elevation-low:
            0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
            0.4px 0.8px 1px -1.2px hsl(var(--shadow-color) / 0.34),
            1px 2px 2.5px -2.5px hsl(var(--shadow-color) / 0.34);
    --shadow-elevation-medium:
            0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.1),
            0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.1),
            2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.1),
            5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.1);
    --shadow-elevation-high:
            0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.1),
            1.5px 2.9px 3.7px -0.4px hsl(var(--shadow-color) / 0.1),
            2.7px 5.4px 6.8px -0.7px hsl(var(--shadow-color) / 0.1),
            4.5px 8.9px 11.2px -1.1px hsl(var(--shadow-color) / 0.1),
            7.1px 14.3px 18px -1.4px hsl(var(--shadow-color) / 0.1),
            11.2px 22.3px 28.1px -1.8px hsl(var(--shadow-color) / 0.1),
            17px 33.9px 42.7px -2.1px hsl(var(--shadow-color) / 0.1),
            25px 50px 62.9px -2.5px hsl(var(--shadow-color) / 0.1);
	
	// Button padding
  }
  
  // CSS Reset
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
}

body {
  line-height: var(--line-height-lg);
  -webkit-font-smoothing: antialiased;
  font-family: var(--font-family);
  font-size: var(--font-size-xs);
  background-color: var(--color-gray-200);
  color: var(--color-gray-600);
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}

ul {
  list-style: none;
  width: 100%;
}

form {
  display: flex;
  flex-direction: column;
  gap: calc(var(--padding-sm) * 1.5);
  width: 100%;
}

input, textarea {
  color: var(--color-gray-600);
  background-color: var(--color-orange-100);
  outline-color: var(--color-orange-400);
  border: none;
  padding: calc(var(--padding-xs) * 1.5) var(--padding-sm);
  border-radius: var(--border-radius-sm);
}

  textarea {
    resize: none;
	height: 8rem;
	
	@media screen and ${CONSTANTS.BREAKPOINTS.smMin} {
		height: 10rem;
	}
  }

label {
  display: flex;
  flex-direction: column;
  gap: var(--padding-xs);
}

li {
  width: 100%;
}

  // Typography
  h1, h2, h3, h4, h5, h6 {
	font-weight: var(--font-weight-normal);
	line-height: var(--line-height-sm);
  }
  
  h1 { font-size: var(--font-xxl) }
  h2 { font-size: var(--font-xl) }
  h3 { font-size: var(--font-lg) }
  h4 { font-size: var(--font-md) }
  h5 { font-size: var(--font-sm) }
  h6 { font-size: var(--font-xs) }
  p {
	font-size: var(--font-xs);
    line-height: var(--line-height-lg);
  }
  
  a {
    text-decoration: none;
    font-size: var(--font-xs);
    color: var(--color-orange-400);
  }
  
  label, input, textarea, button {
    @media screen and ${CONSTANTS.BREAKPOINTS.smMin} {
    font-size: var(--font-md);
    }
  }
`;

export default GlobalStyles;
