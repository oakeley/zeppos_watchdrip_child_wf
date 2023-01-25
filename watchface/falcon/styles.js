import {img,range} from "../../utils/helper";
import {Colors} from "../../utils/config/constants";

const bgNumArr = range(10).map((v) => {
    return img(`bgNum/${v}.png`);
});

const bgNumAODArr = range(10).map((v) => {
    return img(`bgNumAOD/${v}.png`);
});

const bigNumArr = range(10).map((v) => {
    return img(`bigNum/${v}.png`);
});

const bigNumAODArr = range(10).map((v) => {
    return img(`bigNumAOD/${v}.png`);
});

const smallNumArr = range(10).map((v) => {
    return img(`smallNum/${v}.png`);
});

const smallNumAccentArr = range(10).map((v) => {
    return img(`smallNumAccent/${v}.png`);
});

const weekEnArr = range(1, 8).map((v) => {
    return img(`week_en/${v}.png`);
});

const weatherArr = range(29).map((v) => {
    return img(`weather/${v}.png`);
});

const moonArr = range(1, 30).map((v) => {
    return img(`moon/${v}.png`);
});

const stepsArr = range(10).map((v) => {
    return img(`widgets/progress-right-10-100/progress${v}.png`);
});

export const DIGITAL_TIME = {
    hour_startX: px(125),
    hour_startY: px(28),
    hour_zero: true,
    hour_space: 2,
    hour_align: hmUI.align.CENTER_H,
    hour_array: bigNumArr,
    hour_unit_sc: img('bigNum/sp.png'), // colon
    hour_unit_tc: img('bigNum/sp.png'),
    hour_unit_en: img('bigNum/sp.png'),
    minute_zero: true,
    minute_space: 2,
    minute_align: hmUI.align.CENTER_H,
    minute_array: bigNumArr,
    minute_follow: 1,
    am_x: px(295),
    am_y: px(45),
    am_sc_path: img('bigNum/am.png'),
    am_en_path: img('bigNum/am.png'),
    pm_x: px(295),
    pm_y: px(45),
    pm_sc_path: img('bigNum/pm.png'),
    pm_en_path: img('bigNum/pm.png'),
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const DIGITAL_TIME_AOD = {
    hour_startX: px(95),
    hour_startY: px(108),
    hour_array: bigNumAODArr,
    hour_unit_sc: img('bigNumAOD/sp.png'), // colon
    hour_unit_tc: img('bigNumAOD/sp.png'),
    hour_unit_en: img('bigNumAOD/sp.png'),
    minute_array: bigNumAODArr,
    am_sc_path: img('bigNumAOD/am.png'),
    am_en_path: img('bigNumAOD/am.png'),
    am_x: px(325),
    am_y: px(120),
    pm_sc_path: img('bigNumAOD/pm.png'),
    pm_en_path: img('bigNumAOD/pm.png'),
    pm_x: px(325),
    pm_y: px(120),
    show_level: hmUI.show_level.ONAL_AOD
};

const dateX = px(202);
const dateY = px(103);
const dateFontWidth = 16; // widest image in font array
const dateDotWidth = 7;
const dateFontSpacing = 1;
export const DATE_TEXT_IMG = {
    day_startX: px(dateX),
    day_startY: px(dateY),
    day_zero: 1,
    day_space: dateFontSpacing,
    day_follow: 0,
    day_align: hmUI.align.LEFT,
    day_sc_array: smallNumAccentArr,
    day_tc_array: smallNumAccentArr,
    day_en_array: smallNumAccentArr,
    day_unit_sc: img('smallNumAccent/d.png'), // dot
    day_unit_tc: img('smallNumAccent/d.png'),
    day_unit_en: img('smallNumAccent/d.png'),
    month_startX: px(dateX + (dateFontWidth * 2) + dateDotWidth + (dateFontSpacing * 3)),
    month_startY: px(dateY),
    month_follow: 0,
    month_zero: 1,
    month_space: dateFontSpacing,
    month_align: hmUI.align.LEFT,
    month_sc_array: smallNumAccentArr,
    month_tc_array: smallNumAccentArr,
    month_en_array: smallNumAccentArr,
    // month_unit_sc: img('smallNumAccent/d.png'), // dot
    // month_unit_tc: img('smallNumAccent/d.png'),
    // month_unit_en: img('smallNumAccent/d.png'),
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const WEEK_DAYS_IMG = {
    x: px(142),
    y: px(103),
    week_en: weekEnArr,
    week_tc: weekEnArr,
    week_sc: weekEnArr,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_VALUE_NO_DATA_TEXT = {
    x: px(141),
    y: px(218),
    w: px(134),
    h: px(54),
    color: Colors.white,
    text_size: px(34),
    align_h: hmUI.align.RIGHT,
    align_v: hmUI.align.CENTER_V,
    text_style: hmUI.text_style.NONE,
    text: 'No data',
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_VALUE_TEXT_IMG = {
    x: px(141),
    y: px(135),
    w: px(134),
    align_h: hmUI.align.CENTER_H,
    dot_image: img('bgNum/d.png'),
    font_array: bgNumArr,
    text: '0',
    visible: false,
    h_space:1,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_VALUE_TEXT_IMG_AOD = {
    x: px(80),
    y: px(185),
    w: px(255),
    dot_image: img('bgNumAOD/d.png'),
    font_array: bgNumAODArr,
    show_level: hmUI.show_level.ONAL_AOD
};

export const BG_TIME_TEXT = {
    x: px(137),
    y: px(235),
    w: px(141),
    h: px(36),
    color: Colors.defaultTransparent,
    text_size: px(23),
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.TOP,
    text_style: hmUI.text_style.NONE,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_DELTA_TEXT = {
    x: px(166),
    y: px(206),
    w: px(85),
    h: px(49),
    color: Colors.defaultTransparent,
    text_size: px(27),
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.TOP,
    text_style: hmUI.text_style.NONE,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_TREND_IMAGE = {
    src: 'watchdrip/arrows/None.png',
    x: px(182),
    y: px(274),
    w: px(52),
    h: px(49),
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_STALE_IMG = {
    x: px(142),
    y: px(160),
    src: 'watchdrip/stale.png',
    visible: false,
    show_level: hmUI.show_level.ONLY_NORMAL
};

// Xdrip modified to put ExternalStatusService.getLastStatusLine()
export const AAPS_TEXT = {
    x: px(22),
    y: px(342),
    w: px(371),
    h: px(32),
    color: Colors.white,
    text_size: px(23),
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.CENTER_V,
    text_style: hmUI.text_style.NONE,
    show_level: hmUI.show_level.ONLY_NORMAL
};

// Xdrip modified to put ExternalStatusService.getLastStatusLineTime()
export const AAPS_TIME_TEXT = {
    x: px(62),
    y: px(376),
    w: px(292),
    h: px(32),
    color: Colors.defaultTransparent,
    text_size: px(23),
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.CENTER_V,
    text_style: hmUI.text_style.NONE,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const PHONE_BATTERY_TEXT = {
    x: px(321),
    y: px(299),
    w: px(80),
    h: px(29),
    color: Colors.white,
    text_size: px(22),
    align_h: hmUI.align.LEFT,
    align_v: hmUI.align.TOP,
    text_style: hmUI.text_style.NONE,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const WATCH_BATTERY_TEXT = {
    x: px(12),
    y: px(299),
    w: px(80),
    h: px(29),
    color: Colors.white,
    text_size: px(22),
    align_h: hmUI.align.RIGHT,
    align_v: hmUI.align.TOP,
    text_style: hmUI.text_style.NONE,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_STATUS_LOW_IMG = {
    x: px(130),
    y: px(117),
    src: 'watchdrip/bgLow.png',
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_STATUS_OK_IMG = {
    x: px(136),
    y: px(117),
    src: 'watchdrip/bgOk.png',
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_STATUS_HIGH_IMG = {
    x: px(267),
    y: px(117),
    src: 'watchdrip/bgHigh.png',
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const IMG_STATUS_BT_DISCONNECTED = {
    x: px(37),
    y: px(32),
    src: img('status/bt_disconnect.png'),
    type: hmUI.system_status.DISCONNECT,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const IMG_LOADING_PROGRESS = {
    x: px(188),
    y: px(223),
    src: 'watchdrip/progress.png',
    angle: 0,
    center_x: 20,
    center_y: 20,
    visible: false,
    show_level: hmUI.show_level.ONLY_NORMAL
};


// 100% edit mask
export const EDIT_MASK_100 = {
    x: px(0),
    y: px(0),
    w: px(416),
    h: px(416),
    src: img('mask/mask100.png'),
    show_level: hmUI.show_level.ONLY_EDIT
};

// 70% edit mask
export const EDIT_MASK_70 = {
    x: px(0),
    y: px(0),
    w: px(416),
    h: px(416),
    src: img('mask/mask70.png'),
    show_level: hmUI.show_level.ONLY_EDIT
};


// BEGIN edit group treatments aaps/xdrip data
export const CUSTOM_WIDGETS = {
    NONE: 100001,
    XDRIP: 100002,
    AAPS: 100003
};

export const EDIT_GROUP_AAPS_XDRIP = {
    edit_id: 105,
    x: px(62),
    y: px(342),
    w: px(292),
    h: px(62),
    select_image: img('mask/select-wide.png'),
    un_select_image: img('mask/un_select-wide.png'),
    optional_types: [
        {
            type: CUSTOM_WIDGETS.XDRIP,
            title_sc: 'xDrip+ default treatments data',
            title_tc: 'xDrip+ default treatments data',
            title_en: 'xDrip+ default treatments data',
            preview: img('widgets/xdrip.png')
        },
        {
            type: CUSTOM_WIDGETS.AAPS,
            title_sc: 'AAPS IOB/COB data (requires modified xDrip+)',
            title_tc: 'AAPS IOB/COB data (requires modified xDrip+)',
            title_en: 'AAPS IOB/COB data (requires modified xDrip+)',
            preview: img('widgets/aaps.png')
        },
        // custom empty widget, nothing is rendered
        {
            type: CUSTOM_WIDGETS.NONE,
            title_sc: 'None (empty space)',
            title_tc: 'None (empty space)',
            title_en: 'None (empty space)',
            preview: img('widgets/empty.png')
        }
    ],
    count: 3,
    default_type: CUSTOM_WIDGETS.XDRIP,
    tips_BG: img('mask/text_tag-wide.png'),
    tips_width: 300,
    tips_margin: 0, // optional, default value: 0,
    tips_x: -32,
    tips_y: -45,
    show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_EDIT
};
// END edit group treatments aaps/xdrip data


// BEGIN edit group default styles
const editWidgetW = px(111);
const editWidgetH = px(76);
const editWidgetIconHeight = 40;
const editWidgetIconWidth = 40;
const editWidgetIconMargin = 7;

export const EDIT_GROUP_DEFAULTS = {
    w: px(editWidgetW),
    h: px(editWidgetH),
    select_image: img('mask/select.png'),
    un_select_image: img('mask/un_select.png'),
    optional_types: [
        {
            type: hmUI.edit_type.HEART,
            preview: img('widgets/heart.png')
        },
        {
            type: hmUI.edit_type.SPO2,
            preview: img('widgets/spo2.png')
        },
        {
            type: hmUI.edit_type.STEP,
            preview: img('widgets/steps/steps.png')
        },
        {
            type: hmUI.edit_type.DISTANCE,
            preview: img('widgets/distance.png')
        },
        {
            type: hmUI.edit_type.CAL,
            preview: img('widgets/calories.png')
        },
        {
            type: hmUI.edit_type.STAND,
            preview: img('widgets/stand.png')
        },
        {
            type: hmUI.edit_type.PAI_DAILY,
            preview: img('widgets/pai.png')
        },
        {
            type: hmUI.edit_type.WEATHER,
            preview: img('widgets/temp.png')
        },
        {
            type: hmUI.edit_type.ALTIMETER,
            preview: img('widgets/air-pressure.png')
        },
        {
            type: hmUI.edit_type.UVI,
            preview: img('widgets/uvi.png')
        },
        {
            type: hmUI.edit_type.AQI,
            preview: img('widgets/aqi.png')
        },
        {
            type: hmUI.edit_type.MOON,
            preview: img('widgets/moon.png')
        },
        // custom empty widget, nothing is rendered
        {
            type: CUSTOM_WIDGETS.NONE,
            title_sc: 'None (empty space)',
            title_tc: 'None (empty space)',
            title_en: 'None (empty space)',
            preview: img('widgets/empty.png')
        }
    ],
    count: 13,
    tips_BG: img('mask/text_tag.png'),
    tips_width: 110,
    tips_margin: 0, // optional, default value: 0
    show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_EDIT
};

// Default styles for all IMG widgets 
export const EDIT_DEFAULT_IMG = {
    // TODO: make images full width and remove this
    w: px(editWidgetW), // full width to center
    pos_x: px((editWidgetW - editWidgetIconWidth) / 2), // center the image
    show_level: hmUI.show_level.ONLY_NORMAL
};

// Default styles for all IMG_LEVEL widgets 
export const EDIT_DEFAULT_IMG_LEVEL = {
    w: px(40),
    w: px(10),
    show_level: hmUI.show_level.ONLY_NORMAL
};

// Default styles for all TEXT_IMG widgets
export const EDIT_DEFAULT_TEXT_IMG = {
    w: px(editWidgetW),
    padding: false,
    h_space: 1,
    align_h: hmUI.align.CENTER_H,
    show_level: hmUI.show_level.ONLY_NORMAL,
    font_array: smallNumArr,
    dot_image: img('smallNum/d.png'),
    negative_image: img('smallNum/negative_image.png')
};
// END edit group default styles


// BEGIN Top Left Edit Widgets
const topLeftX = px(19);
const topLeftY = px(119);

export const EDIT_TOP_LEFT_GROUP = {
    edit_id: 101,
    x: px(topLeftX),
    y: px(topLeftY),
    tips_x: 0,
    tips_y: -45,
    default_type: hmUI.edit_type.HEART
}; 

// Styles for all Top Left IMG widgets
export const EDIT_TL_IMG = {
    x: px(topLeftX),
    y: px(topLeftY)
};

// Styles for all Top Left IMG_LEVEL widgets
export const EDIT_TL_IMG_LEVEL = {
    x: px(topLeftX + editWidgetIconWidth + 8),
    y: px(topLeftY + 15)
};

// Styles for all Top Left TEXT_IMG widgets
export const EDIT_TL_TEXT_IMG = {
    x: px(topLeftX),
    y: px(topLeftY + editWidgetIconHeight + editWidgetIconMargin)
};
// END Top Left Edit Widgets


// BEGIN Top Right Edit Widgets
const topRightX = px(284);
const topRightY = px(124);

export const EDIT_TOP_RIGHT_GROUP = {
    edit_id: 102,
    x: px(topRightX),
    y: px(topRightY),
    tips_x: -25,
    tips_y: -45,
    default_type: hmUI.edit_type.STEP
}; 

// Default styles for all Top Right IMG widgets
export const EDIT_TR_IMG = {
    x: px(topRightX),
    y: px(topRightY)
};

// Styles for all Top Right IMG_LEVEL widgets
export const EDIT_TR_IMG_LEVEL = {
    x: px(topRightX + editWidgetIconWidth + 8),
    y: px(topRightY + 15)
};

// Styles for all Top Right TEXT_IMG widgets
export const EDIT_TR_TEXT_IMG = {
    x: px(topRightX),
    y: px(topRightY + editWidgetIconHeight + editWidgetIconMargin)
};
// END Top Right Edit Widgets


// BEGIN Bottom Left Edit Widgets
const bottomLeftX = px(19);
const bottomLeftY = px(211);

export const EDIT_BOTTOM_LEFT_GROUP = {
    edit_id: 103,
    x: px(bottomLeftX),
    y: px(bottomLeftY),
    tips_x: 0,
    tips_y: 75,
    default_type: hmUI.edit_type.WEATHER
}; 

// Styles for all Bottom Left IMG widgets
export const EDIT_BL_IMG = {
    x: px(bottomLeftX),
    y: px(bottomLeftY)
};

// Styles for all Bottom Left IMG_LEVEL widgets
export const EDIT_BL_IMG_LEVEL = {
    x: px(bottomLeftX + editWidgetIconWidth + 8),
    y: px(bottomLeftY + 15)
};

// Styles for all Bottom Left TEXT_IMG widgets
export const EDIT_BL_TEXT_IMG = {
    x: px(bottomLeftX),
    y: px(bottomLeftY + editWidgetIconHeight + editWidgetIconMargin)
};
// END Bottom Left Edit Widgets


// BEGIN Bottom Right Edit Widgets
const bottomRightX = px(296);
const bottomRightY = px(211);

export const EDIT_BOTTOM_RIGHT_GROUP = {
    edit_id: 104,
    x: px(bottomRightX),
    y: px(bottomRightY),
    tips_x: -25,
    tips_y: 75,
    default_type: hmUI.edit_type.DISTANCE
}; 

// Styles for all Bottom Right IMG widgets
export const EDIT_BR_IMG = {
    x: px(bottomRightX),
    y: px(bottomRightY)
};

// Styles for all Bottom Right IMG_LEVEL widgets
export const EDIT_BR_IMG_LEVEL = {
    x: px(bottomRightX + editWidgetIconWidth + 8),
    y: px(bottomRightY + 15)
};

// Styles for all Bottom Right TEXT_IMG widgets
export const EDIT_BR_TEXT_IMG = {
    x: px(bottomRightX),
    y: px(bottomRightY + editWidgetIconHeight + editWidgetIconMargin)
};
// END Bottom Right Edit Widgets


// BEGIN Edit Widgets
// These styles are merged with the above default styles.
// HEART widget
export const EDIT_HEART_IMG = {
    src: img('widgets/heart.png') // 40x40px
};
export const EDIT_HEART_TEXT_IMG = {
    type: hmUI.data_type.HEART
};

// STEP widget
export const EDIT_STEP_IMG = {
    src: img('widgets/steps/steps-base.png'), // 90x40px
    pos_x: 0 // remove later 
};
export const EDIT_STEP_IMG_LEVEL = {
    image_array: stepsArr, // 90x40px
    image_length: stepsArr.length,
    type: hmUI.data_type.STEP,
    //level: 9
};
export const EDIT_STEP_TEXT_IMG = {
    type: hmUI.data_type.STEP
};

// DISTANCE widget
export const EDIT_DISTANCE_IMG = {
    src: img('widgets/distance.png') // 40x40px
};
export const EDIT_DISTANCE_TEXT_IMG = {
    type: hmUI.data_type.DISTANCE,
    unit_sc: img('smallNum/unit-distance-metric.png'),
    unit_tc: img('smallNum/unit-distance-metric.png'),
    unit_en: img('smallNum/unit-distance-metric.png'),
    imperial_unit_sc: img('smallNum/unit-distance-imperial.png'),
    imperial_unit_tc: img('smallNum/unit-distance-imperial.png'),
    imperial_unit_en: img('smallNum/unit-distance-imperial.png'),
    align_h: hmUI.align.LEFT  // override alignment because of unit
};

// WEATHER widget
export const EDIT_WEATHER_CONDITION_IMG_LEVEL = {
    image_array: weatherArr, // 90x40px
    image_length: weatherArr.length,
    type: hmUI.data_type.WEATHER
};
export const EDIT_WEATHER_CURRENT_TEXT_IMG = {
    type: hmUI.data_type.WEATHER_CURRENT,
    unit_sc: img('smallNum/unit-temperature-metric.png'),
    unit_tc: img('smallNum/unit-temperature-metric.png'),
    unit_en: img('smallNum/unit-temperature-metric.png'),
    imperial_unit_sc: img('smallNum/unit-temperature-imperial.png'),
    imperial_unit_tc: img('smallNum/unit-temperature-imperial.png'),
    imperial_unit_en: img('smallNum/unit-temperature-imperial.png')
};

// PAI widget
export const EDIT_PAI_IMG = {
    src: img('widgets/pai.png') // 40x40px
};
export const EDIT_PAI_TEXT_IMG = {
    type: hmUI.data_type.PAI_DAILY
};

// UVI widget
export const EDIT_UVI_IMG = {
    src: img('widgets/uvi.png') // 40x40px
};
export const EDIT_UVI_TEXT_IMG = {
    type: hmUI.data_type.UVI
};

// ALTIMETER widget
export const EDIT_ALTIMETER_IMG = {
    src: img('widgets/air-pressure.png') // 40x40px
};
export const EDIT_ALTIMETER_TEXT_IMG = {
    type: hmUI.data_type.ALTIMETER,
    nit_sc: img('smallNum/unit-pressure-metric.png'),
    unit_tc: img('smallNum/unit-pressure-metric.png'),
    unit_en: img('smallNum/unit-pressure-metric.png'),
    imperial_unit_sc: img('smallNum/unit-pressure-imperial.png'),
    imperial_unit_tc: img('smallNum/unit-pressure-imperial.png'),
    imperial_unit_en: img('smallNum/unit-pressure-imperial.png'),
    align_h: hmUI.align.LEFT  // override alignment because of unit
};

// MOON widget
export const EDIT_MOON_IMG_LEVEL = {
    image_array: moonArr, // 90x70px
    image_length: moonArr.length,
    type: hmUI.data_type.WEATHER
};

// CAL widget
export const EDIT_CAL_IMG = {
    src: img('widgets/calories.png') // 40x40px
};
export const EDIT_CAL_TEXT_IMG = {
    type: hmUI.data_type.CAL,
    nit_sc: img('smallNum/unit-calories.png'),
    unit_tc: img('smallNum/unit-calories.png'),
    unit_en: img('smallNum/unit-calories.png'),
    imperial_unit_sc: img('smallNum/unit-calories.png'),
    imperial_unit_tc: img('smallNum/unit-calories.png'),
    imperial_unit_en: img('smallNum/unit-calories.png'),
    align_h: hmUI.align.LEFT  // override alignment because of unit
};

// AQI widget
export const EDIT_AQI_IMG = {
    src: img('widgets/aqi.png') // 40x40px
};
export const EDIT_AQI_TEXT_IMG = {
    type: hmUI.data_type.AQI
};

// SPO2 widget
export const EDIT_SPO2_IMG = {
    src: img('widgets/spo2.png') // 40x40px
};
export const EDIT_SPO2_TEXT_IMG = {
    type: hmUI.data_type.SPO2,
    nit_sc: img('smallNum/unit-spo2.png'),
    unit_tc: img('smallNum/unit-spo2.png'),
    unit_en: img('smallNum/unit-spo2.png'),
    imperial_unit_sc: img('smallNum/unit-spo2.png'),
    imperial_unit_tc: img('smallNum/unit-spo2.png'),
    imperial_unit_en: img('smallNum/unit-spo2.png')
};

// STAND widget
export const EDIT_STAND_IMG = {
    src: img('widgets/stand.png') // 40x40px
};
export const EDIT_STAND_TEXT_IMG = {
    type: hmUI.data_type.STAND,
    dot_image: img('smallNum/slash.png')
};
// END Edit Widgets
