/* Shape */
export enum DS_HEIGHT {
  AVATAR_LARGE = 48,
  AVATAR_SMALL = 40,

  BUTTON_LARGE = 48,
  BUTTON_MEDIUM = 36,
  BUTTON_SMALL = 32,
}

export enum DS_SHAPE_SPACING {
  NORMAL = 4,
}

export enum DS_SHAPE_BORDER_RADIUS {
  NORMAL = 4,
  BUTTON_LARGE = DS_HEIGHT.BUTTON_LARGE / 2,
  BUTTON_MEDIUM = DS_HEIGHT.BUTTON_MEDIUM / 2,
  BUTTON_SMALL = DS_HEIGHT.BUTTON_SMALL / 2,
}

/* Breakpoints */
export enum DS_BREAKPOINT {
  MOBILE = 375,
  DESKTOP = 1440,
}

/* Font */
export const DS_FONT_FAMILY =
  '-apple-system, AvenirNext, Arial, BlinkMacSystemFont, Helvetica Neue, Helvetica, sans-serif';

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

export enum DS_FONT_WEIGHT {
  ULTRA_LIGHT = 100,
  LIGHT = 300,
  REGULAR = 400,
  MEDIUM = 500,
  DEMI = 600,
  BOLD = 700,
  ULTRA_BOLD = 900,
}

/* Colors */
export enum DS_COLOR {
  /**
   * LIGHT THEME
   */

  /* PRIMARY */
  LIGHT_PRIMARY_MAIN = '#282CC4',
  LIGHT_PRIMARY_DARK = '#00006F',
  LIGHT_PRIMARY_LIGHT = '#5E65F6',
  LIGHT_PRIMARY_TEXT_CONTRAST = '#FFFFFF',

  // Same as LIGHT_PRIMARY_MAIN but with added transparency
  LIGHT_PRIMARY_4P = '#282CC480',
  LIGHT_PRIMARY_8P = '#282CC414',
  LIGHT_PRIMARY_12P = '#282CC41F',
  LIGHT_PRIMARY_30P = '#282CC44D',
  LIGHT_PRIMARY_50P = '#282CC480',

  /* SECONDARY */
  LIGHT_SECONDARY_MAIN = '#592B9A',
  LIGHT_SECONDARY_DARK = '#280056',
  LIGHT_SECONDARY_LIGHT = '#8C60CF',
  LIGHT_SECONDARY_TEXT_CONTRAST = '#FFFFFF',

  // Same as LIGHT_SECONDARY_MAIN but with added transparency
  LIGHT_SECONDARY_4P = '#592B9A4D',
  LIGHT_SECONDARY_8P = '#592B9A14',
  LIGHT_SECONDARY_12P = '#592B9A1F',
  LIGHT_SECONDARY_30P = '#592B9A4D',
  LIGHT_SECONDARY_50P = '#592B9A80',

  /* ERROR */
  LIGHT_ERROR_MAIN = '#EB0052',
  LIGHT_ERROR_DARK = '#BD0041',
  LIGHT_ERROR_LIGHT = '#FFEDEF',
  LIGHT_ERROR_TEXT_CONTRAST = '#FFFFFF',

  // Same as LIGHT_ERROR_MAIN but with added transparency
  LIGHT_ERROR_4P = '#EB00524D',
  LIGHT_ERROR_8P = '#EB005214',
  LIGHT_ERROR_12P = '#EB00521F',
  LIGHT_ERROR_30P = '#EB00524D',
  LIGHT_ERROR_50P = '#EB005280',

  LIGHT_ERROR_160P = '#5E0021',
  LIGHT_ERROR_190P = '#FDE5EE',

  /* WARNING */
  LIGHT_WARNING_MAIN = '#D14900',
  LIGHT_WARNING_DARK = '#812900',
  LIGHT_WARNING_LIGHT = '#FFEDE6',
  LIGHT_WARNING_TEXT_CONTRAST = '#FFFFFF',

  // Same as LIGHT_WARNING_MAIN but with added transparency
  LIGHT_WARNING_4P = '#8129004D',
  LIGHT_WARNING_8P = '#81290014',
  LIGHT_WARNING_12P = '#8129001F',
  LIGHT_WARNING_30P = '#8129004D',
  LIGHT_WARNING_50P = '#81290080',

  LIGHT_WARNING_160P = '#541D00',
  LIGHT_WARNING_190P = '#FAEDE6',

  /* INFO */
  LIGHT_INFO_MAIN = '#007DB8',
  LIGHT_INFO_DARK = '#006495',
  LIGHT_INFO_LIGHT = '#E6F2FF',
  LIGHT_INFO_TEXT_CONTRAST = '#FFFFFF',

  // Same as LIGHT_INFO_MAIN but with added transparency
  LIGHT_INFO_4P = '#007DB84D',
  LIGHT_INFO_8P = '#007DB814',
  LIGHT_INFO_12P = '#007DB81F',
  LIGHT_INFO_30P = '#007DB84D',
  LIGHT_INFO_50P = '#007DB880',

  LIGHT_INFO_160P = '#00324A',
  LIGHT_INFO_190P = '#E6F2F8',

  /* SUCCESS */
  LIGHT_SUCCESS_MAIN = '#00802B',
  LIGHT_SUCCESS_DARK = '#006E24',
  LIGHT_SUCCESS_LIGHT = '#C4FFC5',
  LIGHT_SUCCESS_TEXT_CONTRAST = '#FFFFFF',

  // Same as LIGHT_SUCCESS_MAIN but with added transparency
  LIGHT_SUCCESS_4P = '#00802B4D',
  LIGHT_SUCCESS_8P = '#00802B14',
  LIGHT_SUCCESS_12P = '#00802B1F',
  LIGHT_SUCCESS_30P = '#00802B4D',
  LIGHT_SUCCESS_50P = '#00802B80',

  LIGHT_SUCCESS_160P = '#003311',
  LIGHT_SUCCESS_190P = '#E6F2EA',

  /* TEXT */
  LIGHT_TEXT_PRIMARY = '#191919',
  LIGHT_TEXT_SECONDARY = '#000000BF',
  LIGHT_TEXT_DISABLED = '#00000080',

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
  LIGHT_BACKGROUND_PRIMARY = '#EEEEFA', // Same as PRIMARY_8P
  LIGHT_BACKGROUND_SECONDARY = '#F2EEF7', // Same as SECONDARY_8P

  /* MISC */
  LIGHT_DIVIDER = '#0000001A',
  LIGHT_OUTLINE_BORDER = '#FFFFFF',
  LIGHT_INPUT_LINE = '#FFFFFF',
  LIGHT_BACKDROP_OVERLAY = '#00000080',
  LIGHT_RATING_ACTIVE = '#FFB400',
  LIGHT_SNACKBAR_BACKGROUND = '#323232',

  /**
   * DARK THEME
   */

  /* PRIMARY */
  DARK_PRIMARY_MAIN = '#FFFFFF',
  DARK_PRIMARY_DARK = '#9CA3FF',
  DARK_PRIMARY_LIGHT = '#F0EFFF',
  DARK_PRIMARY_TEXT_CONTRAST = '#000000CC',

  // Same as DARK_PRIMARY_DARK but with added transparency
  DARK_PRIMARY_8P = '#9CA3FF14',
  DARK_PRIMARY_12P = '#9CA3FF1F',
  DARK_PRIMARY_16P = '#9CA3FF29',
  DARK_PRIMARY_30P = '#9CA3FF4D',
  DARK_PRIMARY_50P = '#9CA3FF80',

  /* SECONDARY */
  DARK_SECONDARY_MAIN = '#F8EDFF',
  DARK_SECONDARY_DARK = '#D6BAFF',
  DARK_SECONDARY_LIGHT = '#FFFBFF',
  DARK_SECONDARY_TEXT_CONTRAST = '#000000DE',

  // Same as DARK_SECONDARY_DARK but with added transparency
  DARK_SECONDARY_8P = '#D6BAFF14',
  DARK_SECONDARY_12P = '#D6BAFF1F',
  DARK_SECONDARY_16P = '#D6BAFF1F29',
  DARK_SECONDARY_30P = '#D6BAFF4D',
  DARK_SECONDARY_50P = '#D6BAFF80',

  /* ERROR */
  DARK_ERROR_MAIN = '#FFB2BC',
  DARK_ERROR_DARK = '#670020',
  DARK_ERROR_LIGHT = '#FFEDEF',
  DARK_ERROR_TEXT_CONTRAST = '#FFFFFF',

  // Same as DARK_ERROR_MAIN but with added transparency
  DARK_ERROR_8P = '#FFB2BC14',
  DARK_ERROR_12P = '#FFB2BC1F',
  DARK_ERROR_30P = '#FFB2BC4D',
  DARK_ERROR_50P = '#FFB2BC80',

  DARK_ERROR_160P = '#FFE0E4',
  DARK_ERROR_190P = '#191213',

  /* WARNING */
  DARK_WARNING_MAIN = '#FFB597',
  DARK_WARNING_DARK = '#5B1B00',
  DARK_WARNING_LIGHT = '#FFEDE6',
  DARK_WARNING_TEXT_CONTRAST = '#000000DE',

  // Same as DARK_WARNING_MAIN but with added transparency
  DARK_WARNING_8P = '#FFB59714',
  DARK_WARNING_12P = '#FFB5971F',
  DARK_WARNING_30P = '#FFB5974D',
  DARK_WARNING_50P = '#FFB59780',

  DARK_WARNING_160P = '#FFE1D5',
  DARK_WARNING_190P = '#19120F',

  /* INFO */
  DARK_INFO_MAIN = '#8FCDFF',
  DARK_INFO_DARK = '#8FCDFF',
  DARK_INFO_LIGHT = '#E6F2FF',
  DARK_INFO_TEXT_CONTRAST = '#000000DE',

  // Same as DARK_INFO_MAIN but with added transparency
  DARK_INFO_8P = '#8FCDFF14',
  DARK_INFO_12P = '#8FCDFF1F',
  DARK_INFO_30P = '#8FCDFF4D',
  DARK_INFO_50P = '#8FCDFF80',

  DARK_INFO_160P = '#D2EBFF',
  DARK_INFO_190P = '#0E1419',

  /* SUCCESS */
  DARK_SUCCESS_MAIN = '#62DF75',
  DARK_SUCCESS_DARK = '#00390E',
  DARK_SUCCESS_LIGHT = '#C4FFC5',
  DARK_SUCCESS_TEXT_CONTRAST = '#000000DE',

  // Same as DARK_SUCCESS_MAIN but with added transparency
  DARK_SUCCESS_8P = '#62DF7514',
  DARK_SUCCESS_12P = '#62DF751F',
  DARK_SUCCESS_30P = '#62DF754D',
  DARK_SUCCESS_50P = '#62DF7580',

  DARK_SUCCESS_160P = '#C0F2C8',
  DARK_SUCCESS_190P = '#0A160C',

  /* TEXT */
  DARK_TEXT_PRIMARY = '#FFFFFF',
  DARK_TEXT_SECONDARY = '#FFFFFFB2',
  DARK_TEXT_DISABLED = '#FFFFFF80',

  /* ACTION */
  DARK_ACTION_ACTIVE = '#FFFFFFCC',
  DARK_ACTION_HOVER = '#FFFFFF14',
  DARK_ACTION_SELECTED = '#FFFFFF29',
  DARK_ACTION_DISABLED = '#FFFFFF4D',
  DARK_ACTION_DISABLED_BACKGROUND = '#FFFFFF1F',
  DARK_ACTION_FOCUS = '#FFFFFF1F',

  /* BACKGROUND */
  DARK_BACKGROUND_PAPER = '#121212',
  DARK_BACKGROUND_PAPER_E1 = '#121212',
  DARK_BACKGROUND_PAPER_E2 = '#121212',
  DARK_BACKGROUND_PAPER_E3 = '#121212',
  DARK_BACKGROUND_PAPER_E4 = '#121212',
  DARK_BACKGROUND_PAPER_E6 = '#121212',
  DARK_BACKGROUND_PAPER_E8 = '#121212',
  DARK_BACKGROUND_PAPER_E12 = '#121212',
  DARK_BACKGROUND_PAPER_E16 = '#121212',
  DARK_BACKGROUND_PAPER_E24 = '#121212',
  DARK_BACKGROUND_DEFAULT = '#121212',

  /* MISC */
  DARK_DIVIDER = '#FFFFFF1F',
  DARK_OUTLINE_BORDER = '#FFFFFF3B',
  DARK_INPUT_LINE = '#FFFFFF6B',
  DARK_BACKDROP_OVERLAY = '#FFFFFF8F',
  DARK_RATING_ACTIVE = '#FFB400',
  DARK_SNACKBAR_BACKGROUND = '#323232',
}

export enum DS_GRADIENT {
  LIGHT_PRIMARY = 'linear-gradient(135deg, #7D84FF 0%, #282CC4 100%)',
  LIGHT_SECONDARY = 'linear-gradient(135deg, #A67AEB 0%, #592B9A 100%)',
  LIGHT_INFO = 'linear-gradient(180deg, #007DB8 0%, #006495 100%)',

  DARK_PRIMARY = 'linear-gradient(135deg, #7D84FF 0%, #282CC4 100%)',
  DARK_SECONDARY = 'linear-gradient(135deg, #A67AEB 0%, #592B9A 100%)',
  DARK_INFO = 'linear-gradient(180deg, #007DB8 0%, #006495 100%)',
}