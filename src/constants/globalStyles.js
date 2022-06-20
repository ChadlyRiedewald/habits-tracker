import { createGlobalStyle } from 'styled-components';
import { COLORS } from './colors';
import { BREAKPOINTS } from './breakpoints';
import * as S from './spacing';
import * as T from './typography';

const GlobalStyles = createGlobalStyle`
  html {
	/////////////////////// Colors
	--color-orange-100: ${COLORS.orange['100']};
	--color-orange-200: ${COLORS.orange['200']};
	--color-orange-300: ${COLORS.orange['300']};
	--color-orange-400: ${COLORS.orange['400']};
	--color-orange-500: ${COLORS.orange['500']};
	--color-orange-600: ${COLORS.orange['600']};
	--color-orange-700: ${COLORS.orange['700']};
    --color-gray-100: ${COLORS.gray['100']};
    --color-gray-200: ${COLORS.gray['200']};
    --color-gray-300: ${COLORS.gray['300']};
    --color-gray-400: ${COLORS.gray['400']};
    --color-gray-500: ${COLORS.gray['500']};
    --color-gray-600: ${COLORS.gray['600']};
    --color-gray-700: ${COLORS.gray['700']};
    --color-gray-800: ${COLORS.gray['800']};
    --color-gray-900: ${COLORS.gray['900']};
    --color-sports: ${COLORS.habits.sports};
    --color-mind: ${COLORS.habits.mind};
    --color-hobby: ${COLORS.habits.hobby};
    --color-food: ${COLORS.habits.food};
    --color-health: ${COLORS.habits.health};
    --color-study: ${COLORS.habits.study};
    --color-finance: ${COLORS.habits.finance};
    --color-success: ${COLORS.other.success};
    --color-success-bg: ${COLORS.other.successBg};
    --color-error: ${COLORS.other.error};
    --color-error-bg: ${COLORS.other.errorBg};
    --color-alert: ${COLORS.other.alert};
    --color-alert-bg: ${COLORS.other.alertBg};
	
	/////////////////////// Padding
	--padding-xs: ${`${S.SPACING.xs}px`};
	--padding-sm: ${`${S.SPACING.sm}px`};
	--padding-md: ${`${S.SPACING.md}px`};
	--padding-lg: ${`${S.SPACING.lg}px`};
	--padding-xl: ${`${S.SPACING.xl}px`};
	--padding-xxl: ${`${S.SPACING.xxl}px`};
	--padding-xxxl: ${`${S.SPACING.xxxl}px`};

    /////////////////////// Button padding
	--btn-padding-small: 0.375em 0.75em;
	--btn-padding-normal: 0.75em 1.5em;
	--btn-padding-wide: 0.75em 3.5em;
	
	/////////////////////// Margin
	--margin-xs: calc(${S.SPACING.xs / 16}em);
	--margin-sm: calc(${S.SPACING.sm / 16}em);
	--margin-md: calc(${S.SPACING.md / 16}em);
	--margin-lg: calc(${S.SPACING.lg / 16}em);
	--margin-xl: calc(${S.SPACING.xl / 16}em);
	--margin-xxl: calc(${S.SPACING.xxl / 16}em);
	--margin-xxxl: calc(${S.SPACING.xxxl / 16}em);
	
	/////////////////////// Font-family
	--font-family: 'Inria Sans', sans-serif;
	
	/////////////////////// Font sizes
	--font-xxs: ${T.FONT_SIZES.xxs};
	--font-xs: ${T.FONT_SIZES.xs};
	--font-sm: ${T.FONT_SIZES.sm};
	--font-md: ${T.FONT_SIZES.md};
	--font-lg: ${T.FONT_SIZES.lg};
	--font-xl: ${T.FONT_SIZES.xl};
	--font-xxl: ${T.FONT_SIZES.xxl};
	
	/////////////////////// Font weights
	--font-weight-normal: ${T.FONT_WEIGHTS.normal};
	--font-weight-bold: ${T.FONT_WEIGHTS.bold};
	
	/////////////////////// Line heights
	--line-height-sm: ${T.LINE_HEIGHTS.sm};
	--line-height-md: ${T.LINE_HEIGHTS.md};
	--line-height-lg: ${T.LINE_HEIGHTS.lg};
	
	/////////////////////// Border radius
	--border-radius-sm: ${S.BORDER_RADIUS.sm};
	--border-radius-md: ${S.BORDER_RADIUS.md};
	--border-radius-lg: ${S.BORDER_RADIUS.lg};
	--border-radius-xl: ${S.BORDER_RADIUS.xl};
	
	/////////////////////// Border width
    --border-width-xxs: ${S.BORDER_WIDTH.xxs};
    --border-width-xs: ${S.BORDER_WIDTH.xs};
    --border-width-sm: ${S.BORDER_WIDTH.sm};
    --border-width-md: ${S.BORDER_WIDTH.md};
    --border-width-lg: ${S.BORDER_WIDTH.lg};
    --border-width-xl: ${S.BORDER_WIDTH.xl};
    --border-width-xxl: ${S.BORDER_WIDTH.xxl};
    --border-width-xxxl: ${S.BORDER_WIDTH.xxxl};
	
	/////////////////////// Fixed Heights
      --height-mobile-nav: ${S.HEIGHTS.mobileNav.sm};
    @media screen and ${BREAKPOINTS.smMin} {
      --height-mobile-nav: ${S.HEIGHTS.mobileNav.md};
    }
    @media screen and ${BREAKPOINTS.lgMin} {
      --height-mobile-nav: 0;
    }
	
	/////////////////////// Fixed Widths
	@media screen and ${BREAKPOINTS.lgMin} {
      --width-nav: ${S.WIDTHS.desktopNav.sm};
    }    
	@media screen and ${BREAKPOINTS.xlMin} {
      --width-nav: ${S.WIDTHS.desktopNav.md};
    }
	
	/////////////////////// Shadows
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
  }
  
  /////////////////////// CSS Reset
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
	
	@media screen and ${BREAKPOINTS.smMin} {
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
    @media screen and ${BREAKPOINTS.smMin} {
    font-size: var(--font-md);
    }
  }
`;

export default GlobalStyles;
