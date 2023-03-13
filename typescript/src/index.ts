/** units of spacing in px */
export enum DS_SHAPE_SPACING {
  /** Basic unit */
  BASE = 4,

  /** Between section and next section */
  SECTION = 40,
  /** Between title/heading and descriptive text */
  HEADING_DESCRIPTION = 8,

  /** Between heading and content on desktop */
  HEADING_CONTENT_DESKTOP = 24,
  /** Between heading and content on mobile */
  HEADING_CONTENT_MOBILE = 16,

  /** Between pieces of related content */
  CONTENT = 24,

  /** Between edge of viewport and content > large breakpoint */
  SIDE_LARGE = 32,
  /** Between edge of viewport and content medium to large breakpoint */
  SIDE_MEDIUM = 24,
  /** Between edge of viewport and content small to medium breakpoint and below */
  SIDE_SMALL = 16,
}

/** units of spacing in base spacing units */
export enum DS_SPACING_UNITS {
  /** Basic unit */
  BASE = 1,

  /** Between section and next section */
  SECTION = DS_SHAPE_SPACING.SECTION / DS_SHAPE_SPACING.BASE,
  /** Between title/heading and descriptive text */
  HEADING_DESCRIPTION = DS_SHAPE_SPACING.HEADING_DESCRIPTION /
    DS_SHAPE_SPACING.BASE,

  /** Between heading and content on desktop */
  HEADING_CONTENT_DESKTOP = DS_SHAPE_SPACING.HEADING_CONTENT_DESKTOP /
    DS_SHAPE_SPACING.BASE,
  /** Between heading and content on mobile */
  HEADING_CONTENT_MOBILE = DS_SHAPE_SPACING.HEADING_CONTENT_MOBILE /
    DS_SHAPE_SPACING.BASE,

  /** Between pieces of related content */
  CONTENT = DS_SHAPE_SPACING.CONTENT / DS_SHAPE_SPACING.BASE,

  /** Between edge of viewport and content > large breakpoint */
  SIDE_LARGE = DS_SHAPE_SPACING.SIDE_LARGE / DS_SHAPE_SPACING.BASE,
  /** Between edge of viewport and content medium to large breakpoint */
  SIDE_MEDIUM = DS_SHAPE_SPACING.SIDE_MEDIUM / DS_SHAPE_SPACING.BASE,
  /** Between edge of viewport and content small to medium breakpoint and below */
  SIDE_SMALL = DS_SHAPE_SPACING.SIDE_SMALL / DS_SHAPE_SPACING.BASE,
}

/** Heights of various elements in px */
export enum DS_HEIGHT {
  AVATAR_LARGE = 48,
  AVATAR_SMALL = 40,

  BUTTON_LARGE = 48,
  BUTTON_MEDIUM = 36,
  BUTTON_SMALL = 32,

  TOOLBAR = 64,
}

/** Heights of various elements in units of spacing */
export enum DS_HEIGHT_UNITS {
  AVATAR_LARGE = DS_HEIGHT.AVATAR_LARGE / DS_SHAPE_SPACING.BASE,
  AVATAR_SMALL = DS_HEIGHT.AVATAR_SMALL / DS_SHAPE_SPACING.BASE,

  BUTTON_LARGE = DS_HEIGHT.BUTTON_LARGE / DS_SHAPE_SPACING.BASE,
  BUTTON_MEDIUM = DS_HEIGHT.BUTTON_MEDIUM / DS_SHAPE_SPACING.BASE,
  BUTTON_SMALL = DS_HEIGHT.BUTTON_SMALL / DS_SHAPE_SPACING.BASE,

  TOOLBAR = DS_HEIGHT.TOOLBAR / DS_SHAPE_SPACING.BASE,
}

/** Used in border-radius in px */
export enum DS_SHAPE_BORDER_RADIUS {
  SMALL = 4,
  MEDIUM = 8,
  LARGE = 12,
  CARD = 12,
  BUTTON_LARGE = DS_HEIGHT.BUTTON_LARGE / 2,
  BUTTON_MEDIUM = DS_HEIGHT.BUTTON_MEDIUM / 2,
  BUTTON_SMALL = DS_HEIGHT.BUTTON_SMALL / 2,
}

/** Viewport breakpoints in px */
export enum DS_BREAKPOINT {
  /** Very small viewports */
  INTRA = 0,
  /** Phones in portrait mode */
  SMALL = 375,
  /** Tablet in portrait mode */
  MEDIUM = 600,
  /** Phone in landscape, tablet in landscape, desktop */
  LARGE = 840,
  /** Very large viewports, used to determine when a layout should stop expanding */
  ULTRA = 1440,
}

/** Used in font-family  */
export const DS_FONT_FAMILY =
  '-apple-system, AvenirNext, Arial, BlinkMacSystemFont, Helvetica Neue, Helvetica, sans-serif';

/** Used in font-size in px */
export enum DS_FONT_SIZE {
  H1 = 96,
  H2 = 60,
  H3 = 48,
  H4 = 34,
  H5 = 24,
  H6 = 20,
  AVATAR = 20,
  NORMAL_LARGE = 16,
  NORMAL_SMALL = 14,
  BUTTON_LARGE = 16,
  BUTTON_MEDIUM = 14,
  BUTTON_SMALL = 13,
  LABEL = 12,
  TOOLTIP = 10,
}

/** Used in letter-spacing */
export enum DS_LETTER_SPACING {
  L_2 = '-1.5px',
  L_1 = '-0.5px',
  L0 = '0px',
  L1 = '0.1px',
  L2 = '0.14px',
  L3 = '0.15px',
  L4 = '0.25px',
  L5 = '0.4px',
  L6 = '0.46px',
  L7 = '1px',
}

/** Used in font-weight */
export enum DS_FONT_WEIGHT {
  ULTRA_LIGHT = 100,
  LIGHT = 300,
  REGULAR = 400,
  MEDIUM = 500,
  DEMI = 600,
  BOLD = 700,
  ULTRA_BOLD = 900,
}

/** Colors available to use in 6 or 8 digit hex */
export enum DS_COLOR {
  /**
   * LIGHT THEME
   */

  /* PRIMARY */
  LIGHT_PRIMARY_MAIN = '#0060A9',
  LIGHT_PRIMARY_DARK = '#00315B',
  LIGHT_PRIMARY_LIGHT = '#4A93E5',
  LIGHT_PRIMARY_TEXT_CONTRAST = '#FFFFFF',

  // Same as LIGHT_PRIMARY_MAIN but with added transparency
  LIGHT_PRIMARY_4P = '#0060A980',
  LIGHT_PRIMARY_8P = '#0060A914',
  LIGHT_PRIMARY_12P = '#0060A91F',
  LIGHT_PRIMARY_30P = '#0060A94D',
  LIGHT_PRIMARY_50P = '#0060A980',

  /* SECONDARY */
  LIGHT_SECONDARY_MAIN = '#504CCB',
  LIGHT_SECONDARY_DARK = '#1E0C9E',
  LIGHT_SECONDARY_LIGHT = '#8482FF',
  LIGHT_SECONDARY_TEXT_CONTRAST = '#FFFFFF',

  // Same as LIGHT_SECONDARY_MAIN but with added transparency
  LIGHT_SECONDARY_4P = '#504CCB4D',
  LIGHT_SECONDARY_8P = '#504CCB14',
  LIGHT_SECONDARY_12P = '#504CCB1F',
  LIGHT_SECONDARY_30P = '#504CCB4D',
  LIGHT_SECONDARY_50P = '#504CCB80',

  /* ERROR */
  LIGHT_ERROR_MAIN = '#D14836',
  LIGHT_ERROR_DARK = '#AF3021',
  LIGHT_ERROR_LIGHT = '#FFEDEA',
  LIGHT_ERROR_TEXT_CONTRAST = '#FFFFFF',

  // Same as LIGHT_ERROR_MAIN but with added transparency
  LIGHT_ERROR_4P = '#D148364D',
  LIGHT_ERROR_8P = '#D1483614',
  LIGHT_ERROR_12P = '#D148361F',
  LIGHT_ERROR_30P = '#D148364D',
  LIGHT_ERROR_50P = '#D1483680',

  LIGHT_ERROR_160P = '#680100',
  LIGHT_ERROR_190P = '#FDE5EE',

  /* WARNING */
  LIGHT_WARNING_MAIN = '#B4611B',
  LIGHT_WARNING_DARK = '#954A00',
  LIGHT_WARNING_LIGHT = '#FFEDE4',
  LIGHT_WARNING_TEXT_CONTRAST = '#FFFFFF',

  // Same as LIGHT_WARNING_MAIN but with added transparency
  LIGHT_WARNING_4P = '#B4611B4D',
  LIGHT_WARNING_8P = '#B4611B14',
  LIGHT_WARNING_12P = '#B4611B1F',
  LIGHT_WARNING_30P = '#B4611B4D',
  LIGHT_WARNING_50P = '#B4611B80',

  LIGHT_WARNING_160P = '#551E00',
  LIGHT_WARNING_190P = '#F8EFE8',

  /* INFO */
  LIGHT_INFO_MAIN = '#007FB2',
  LIGHT_INFO_DARK = '#00658E',
  LIGHT_INFO_LIGHT = '#E5F3FF',
  LIGHT_INFO_TEXT_CONTRAST = '#FFFFFF',

  // Same as LIGHT_INFO_MAIN but with added transparency
  LIGHT_INFO_4P = '#007FB24D',
  LIGHT_INFO_8P = '#007FB214',
  LIGHT_INFO_12P = '#007FB21F',
  LIGHT_INFO_30P = '#007FB24D',
  LIGHT_INFO_50P = '#007FB280',

  LIGHT_INFO_160P = '#053347',
  LIGHT_INFO_190P = '#E5F2F7',

  /* SUCCESS */
  LIGHT_SUCCESS_MAIN = '#488600',
  LIGHT_SUCCESS_DARK = '#386B00',
  LIGHT_SUCCESS_LIGHT = '#D0FFA4',
  LIGHT_SUCCESS_TEXT_CONTRAST = '#FFFFFF',

  // Same as LIGHT_SUCCESS_MAIN but with added transparency
  LIGHT_SUCCESS_4P = '#4886004D',
  LIGHT_SUCCESS_8P = '#48860014',
  LIGHT_SUCCESS_12P = '#4886001F',
  LIGHT_SUCCESS_30P = '#4886004D',
  LIGHT_SUCCESS_50P = '#48860080',

  LIGHT_SUCCESS_160P = '#1E3600',
  LIGHT_SUCCESS_190P = '#EDF3E5',

  /* TEXT */
  LIGHT_TEXT_PRIMARY_HEADER = '#001C38',
  LIGHT_TEXT_SECONDARY_HEADER = '#0D006A',
  LIGHT_TEXT_DISABLED = '#00000061',
  LIGHT_TEXT_BODY = '#1A1A2C',
  LIGHT_TEXT_SUB = '#1A1A2CB2',

  /* ACTION */
  LIGHT_ACTION_ACTIVE = '#00000099',
  LIGHT_ACTION_HOVER = '#0000000A',
  LIGHT_ACTION_SELECTED = '#00000014',
  LIGHT_ACTION_DISABLED = '#00000042',
  LIGHT_ACTION_DISABLED_BACKGROUND = '#0000001F',
  LIGHT_ACTION_FOCUS = '#0000001F',

  /* BACKGROUND */
  LIGHT_BACKGROUND_PAPER = '#FFFFFF',
  LIGHT_BACKGROUND_DEFAULT = '#FFFFFF',

  /* MISC */
  LIGHT_DIVIDER = '#0000001A',
  LIGHT_OUTLINE_BORDER = '#FFFFFF',
  LIGHT_INPUT_LINE = '#FFFFFF',
  LIGHT_BACKDROP_OVERLAY = '#00000080',
  LIGHT_SNACKBAR_BACKGROUND = '#323232',

  /**
   * DARK THEME
   */

  /* PRIMARY */
  DARK_PRIMARY_MAIN = '#FFFFFF',
  DARK_PRIMARY_DARK = '#A2C9FF',
  DARK_PRIMARY_LIGHT = '#EAF1FF',
  DARK_PRIMARY_TEXT_CONTRAST = '#000000CC',

  // Same as DARK_PRIMARY_DARK but with added transparency
  DARK_PRIMARY_8P = '#A2C9FF14',
  DARK_PRIMARY_12P = '#A2C9FF1F',
  DARK_PRIMARY_16P = '#A2C9FF29',
  DARK_PRIMARY_30P = '#A2C9FF4D',
  DARK_PRIMARY_50P = '#A2C9FF80',

  /* SECONDARY */
  DARK_SECONDARY_MAIN = '#F2EFFF',
  DARK_SECONDARY_DARK = '#C2C1FF',
  DARK_SECONDARY_LIGHT = '#FFFBFF',
  DARK_SECONDARY_TEXT_CONTRAST = '#000000DE',

  // Same as DARK_SECONDARY_DARK but with added transparency
  DARK_SECONDARY_8P = '#C2C1FF14',
  DARK_SECONDARY_12P = '#C2C1FF1F',
  DARK_SECONDARY_16P = '#C2C1FF1F29',
  DARK_SECONDARY_30P = '#C2C1FF4D',
  DARK_SECONDARY_50P = '#C2C1FF80',

  /* ERROR */
  DARK_ERROR_MAIN = '#FFB4A8',
  DARK_ERROR_DARK = '#680100',
  DARK_ERROR_LIGHT = '#FFEDEA',
  DARK_ERROR_TEXT_CONTRAST = '#FFFFFF',

  // Same as DARK_ERROR_MAIN but with added transparency
  DARK_ERROR_8P = '#FFB4A814',
  DARK_ERROR_12P = '#FFB4A81F',
  DARK_ERROR_30P = '#FFB4A84D',
  DARK_ERROR_50P = '#FFB4A880',

  DARK_ERROR_160P = '#FEE1DC',
  DARK_ERROR_190P = '#1A1211',

  /* WARNING */
  DARK_WARNING_MAIN = '#FFB785',
  DARK_WARNING_DARK = '#502500',
  DARK_WARNING_LIGHT = '#FFEDE4',
  DARK_WARNING_TEXT_CONTRAST = '#000000DE',

  // Same as DARK_WARNING_MAIN but with added transparency
  DARK_WARNING_8P = '#FFB78514',
  DARK_WARNING_12P = '#FFB7851F',
  DARK_WARNING_30P = '#FFB7854D',
  DARK_WARNING_50P = '#FFB78580',

  DARK_WARNING_160P = '#FEE2CE',
  DARK_WARNING_190P = '#1A120E',

  /* INFO */
  DARK_INFO_MAIN = '85CFFF',
  DARK_INFO_DARK = '#001E2E',
  DARK_INFO_LIGHT = '#E5F3FF',
  DARK_INFO_TEXT_CONTRAST = '#000000DE',

  // Same as DARK_INFO_MAIN but with added transparency
  DARK_INFO_8P = '#85CFFF14',
  DARK_INFO_12P = '#85CFFF1F',
  DARK_INFO_30P = '#85CFFF4D',
  DARK_INFO_50P = '#85CFFF80',

  DARK_INFO_160P = '#CEECFF',
  DARK_INFO_190P = '#0D151B',

  /* SUCCESS */
  DARK_SUCCESS_MAIN = '#85DC33',
  DARK_SUCCESS_DARK = '#1A3700',
  DARK_SUCCESS_LIGHT = '#D0FFA4',
  DARK_SUCCESS_TEXT_CONTRAST = '#000000DE',

  // Same as DARK_SUCCESS_MAIN but with added transparency
  DARK_SUCCESS_8P = '#85DC3314',
  DARK_SUCCESS_12P = '#85DC331F',
  DARK_SUCCESS_30P = '#85DC334D',
  DARK_SUCCESS_50P = '#85DC3380',

  DARK_SUCCESS_160P = '#C0F2C8',
  DARK_SUCCESS_190P = '#0D1705',

  /* TEXT */
  DARK_TEXT_PRIMARY_HEADER = '#EAF1FF',
  DARK_TEXT_SECONDARY_HEADER = '#F2EFFF',
  DARK_TEXT_DISABLED = '#FFFFFF80',
  DARK_TEXT_BODY = '#FFFFFF',
  DARK_TEXT_SUB = '#FFFFFFB2',

  /* ACTION */
  DARK_ACTION_ACTIVE = '#FFFFFFCC',
  DARK_ACTION_HOVER = '#FFFFFF14',
  DARK_ACTION_SELECTED = '#FFFFFF29',
  DARK_ACTION_DISABLED = '#FFFFFF4D',
  DARK_ACTION_DISABLED_BACKGROUND = '#FFFFFF1F',
  DARK_ACTION_FOCUS = '#FFFFFF1F',

  /* BACKGROUND */
  DARK_BACKGROUND_PAPER = '#121212',
  DARK_BACKGROUND_DEFAULT = '#121212',

  /* MISC */
  DARK_DIVIDER = '#FFFFFF1F',
  DARK_OUTLINE_BORDER = '#1B1A2C',
  DARK_INPUT_LINE = '#1B1A2C',
  DARK_BACKDROP_OVERLAY = '#FFFFFF80',
  DARK_SNACKBAR_BACKGROUND = '#323232',
  DARK_BUTTON_LABEL_ICON = '#004881',
}

/** Available gradients, can be used in the background property */
export enum DS_GRADIENT {
  LIGHT_BACKGROUND_PRIMARY = 'linear-gradient(180deg, #E2F6FF 0%, #FDF7F9 100%),linear-gradient(0deg, rgba(0, 0, 0, 0.23), rgba(0, 0, 0, 0.23))',
  LIGHT_BACKGROUND_SECONDARY = 'linear-gradient(180deg, #C2C1FF 0%, #FFFBFF 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.72)),linear-gradient(0deg, rgba(0, 0, 0, 0.23), rgba(0, 0, 0, 0.23))',
  LIGHT_ICON_PRIMARY = 'linear-gradient(135deg, #4A93E5 0%, #504CCB 100%)',
  LIGHT_ICON_SECONDARY = 'linear-gradient(135deg, #504CCB 0%, #8482FF 100%)',

  DARK_BACKGROUND_PRIMARY = 'linear-gradient(180deg, #2B3B72 0%, #1F54B2 100%)',
  DARK_BACKGROUND_SECONDARY = 'linear-gradient(180deg, #504CCB 0%, #8482FF 100%),linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))',
  DARK_ICON_PRIMARY = 'linear-gradient(180deg, #4A93E5 0%, #504CCB 100%)',
  DARK_ICON_SECONDARY = 'linear-gradient(180deg, #504CCB 0%, #8482FF 100%)',

  CALM_HEALTH = 'linear-gradient(252.44deg, #C8E7FF 0%, rgba(84, 132, 213, 0) 50%), linear-gradient(50.52deg, #BB91E9 1.06%, rgba(187, 145, 233, 0) 42.51%), linear-gradient(107.56deg, #4667C4 0%, #5286D7 49.48%, #7193DF 100%)',
}
