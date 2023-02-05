import { createGlobalTheme, createVar, globalStyle } from '@vanilla-extract/css';
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

export const vars = createGlobalTheme(':root', {
    // breakpoints: {
    //     mobile: '640px',
    //     tablet: '768px',
    //     desktop: '1024px',
    //     wide: '1280px',
    //     ultraWide: '1600px',
    // },
    colours: {
        primary: '#f90',
        secondary: '#383838',
        tertiary: '#f5f5f5',
        black: '#000',
    },
    fontFamily: {
        nav: 'cursive',
        body: 'sans-serif',
    },
    fontWeight: {
        normal: '400',
        bold: '700',
    },
    textAlign: {
        left: 'left',
        center: 'center',
        right: 'right',
    },
    lineHeight: {
        1.5: '1.5rem',
        2: '2rem',
        2.5: '2.5rem',
        3: '3rem',
        3.25: '3.25rem',
    },
    space: {
        auto: 'auto',
        none: '0px',
        px: '1px',
        '0.5': '2px',
        '1': '4px',
        '1.5': '6px',
        '-2': '-8px',
        '2': '8px',
        '2.5': '10px',
        '3': '12px',
        '3.5': '14px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
        '11': '44px',
        '12': '48px',
        '24': '96px',
        Screen: 'calc(-50vw + 50%)',
    },
    // sizes: {
    //     none: '0px',
    //     '1px': '1px',
    //     '2px': '2px',
    //     '4px': '4px',
    //     '8px': '8px',
    // },
    fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
    },
    widths: {
        auto: 'auto',
        '10': '2.5rem',
        '1200px': '1200px',
        '1384px': '1384px',
        '50%': '50%',
        '100%': '100%',
    },
    maxWidths: {
        project_thumbnail: '640px',
        '860px': '860px',
        '100%': '100%',
    },
    heights: {
        project_thumbnail: '360px',
        '1': '0.25rem',
        '64': '16rem',
        '100%': '100%',
    },
});

export const isBurgerMenuOpen = createVar();

const responsiveProperties = defineProperties({
    conditions: {
        default: {},
        mobile: { '@media': `screen and (min-width: 640px)` },
        tablet: { '@media': `screen and (min-width: 768px)` },
        desktop: { '@media': `screen and (min-width: 1024px)` },
        wide: { '@media': `screen and (min-width: 1280px)` },
        ultraWide: { '@media': `screen and (min-width: 1600px)` },
    },
    defaultCondition: 'default',
    properties: {
        justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
        display: ['block', 'inline-block', 'flex', 'grid', 'none', isBurgerMenuOpen],
        alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
        position: ['absolute', 'relative'],
        flexGrow: ['0', '1'],
        flexWrap: ['wrap', 'wrap-reverse'],
        fontFamily: vars.fontFamily,
        width: vars.widths,
        maxWidth: vars.maxWidths,
        minWidth: ['50%'],
        height: vars.heights,
        paddingTop: vars.space,
        paddingBottom: vars.space,
        paddingLeft: vars.space,
        paddingRight: vars.space,
        marginTop: vars.space,
        marginBottom: vars.space,
        marginLeft: vars.space,
        marginRight: vars.space,
        fontSize: vars.fontSize,
        fontWeight: vars.fontWeight,
        minHeight: ['120px'],
        // visibility: ['visible', 'hidden'],
        borderWidth: ['1px'],
        borderRadius: ['0.25rem'],
        textAlign: vars.textAlign,
    },
    shorthands: {
        padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
        paddingX: ['paddingLeft', 'paddingRight'],
        paddingY: ['paddingTop', 'paddingBottom'],
        margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
        marginX: ['marginLeft', 'marginRight'],
        marginY: ['marginTop', 'marginBottom'],
    },
});

const colourProperties = defineProperties({
    conditions: {
        default: {},
        hover: { selector: '&:hover' },
    },
    defaultCondition: 'default',
    properties: {
        color: vars.colours,
        opacity: [0, 0.5, 1],
        background: vars.colours,
        borderColor: vars.colours,
        textDecorationLine: ['none', 'underline'],
    },
});

export const sprinkles = createSprinkles(responsiveProperties, colourProperties);

globalStyle('blockquote', {
    '@media': {
        [`screen and (min-width: 640px)`]: {
            fontSize: vars.fontSize['3xl'],
            lineHeight: vars.lineHeight['2'],
        },
        [`screen and (min-width: 768px)`]: {
            fontSize: vars.fontSize['4xl'],
            lineHeight: vars.lineHeight['2.5'],
        },
        [`screen and (min-width: 1024px)`]: {
            fontSize: vars.fontSize['5xl'],
            lineHeight: vars.lineHeight['3.25'],
        },
    },

    background: vars.colours.tertiary,
    color: vars.colours.secondary,
    fontSize: vars.fontSize['2xl'],
    fontWeight: vars.fontWeight.bold,
    lineHeight: vars.lineHeight['1.5'],
    textAlign: vars.textAlign.center,
    padding: vars.space[5],
    marginLeft: vars.space.Screen,
    marginRight: vars.space.Screen,
});

globalStyle(':root', {
    background: vars.colours.secondary,
});

globalStyle('body', {
    overflowX: 'hidden',
});

globalStyle('a', {
    textDecorationLine: 'none',
});

globalStyle('h1', {
    '@media': {
        [`screen and (min-width: 640px)`]: {
            fontSize: vars.fontSize['4xl'],
            lineHeight: vars.lineHeight['2'],
        },
        [`screen and (min-width: 1024px)`]: {
            fontSize: vars.fontSize['5xl'],
            lineHeight: vars.lineHeight['3.25'],
        },
    },
    fontFamily: vars.fontFamily.body,
    textAlign: vars.textAlign.center,
    color: vars.colours.tertiary,
    fontSize: vars.fontSize['3xl'],
    fontWeight: vars.fontWeight.bold,
});
