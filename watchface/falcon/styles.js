import {img,range} from "../../utils/helper";
import {Colors} from "../../utils/config/constants";

let bgNumArr = range(10).map((v) => {
    return img(`bgNum/${v}.png`);
});

let bigNumArr = range(10).map((v) => {
    return img(`bigNum/${v}.png`);
});

let smallNumArr = range(10).map((v) => {
    return img(`smallNum/${v}.png`);
});

let smallNumAccentArr = range(10).map((v) => {
    return img(`smallNumAccent/${v}.png`);
});

let weekEnArr = range(1, 8).map((v) => {
    return img(`week_en/${v}.png`);
});

let weatherArr = range(29).map((v) => {
    return img(`weather/${v}.png`);
});

let moonArr = range(1, 30).map((v) => {
    return img(`moon/${v}.png`);
});

export const DIGITAL_TIME = {
    hour_startX: px(124),
    hour_startY: px(36),
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
    am_x: px(319),
    am_y: px(45),
    am_sc_path: img('bigNum/am.png'),
    am_en_path: img('bigNum/am.png'),
    pm_x: px(319),
    pm_y: px(45),
    pm_sc_path: img('bigNum/pm.png'),
    pm_en_path: img('bigNum/pm.png'),
    show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONAL_AOD
};

const dateX = px(203);
const dateY = px(345);
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
    x: px(145),
    y: px(345),
    week_en: weekEnArr,
    week_tc: weekEnArr,
    week_sc: weekEnArr,
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_VALUE_NO_DATA_TEXT = {
    x: px(141),
    y: px(132),
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
    color: Colors.white,
    align_h: hmUI.align.CENTER_H,
    dot_image: img('bgNum/d.png'),
    font_array: bgNumArr,
    text: '0',
    visible: false,
    h_space:1,
    show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONAL_AOD
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
    x: px(6),
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
    x: px(155),
    y: px(117),
    src: 'watchdrip/bgOk.png',
    show_level: hmUI.show_level.ONLY_NORMAL
};

export const BG_STATUS_HIGH_IMG = {
    x: px(267),
    y: px(117),
    src: 'watchdrip/bgHight.png',
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
    XDRIP: 100001,
    AAPS: 100002
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
        }
    ],
    count: 2,
    default_type: CUSTOM_WIDGETS.XDRIP,
    tips_BG: img('mask/text_tag-wide.png'),
    tips_width: 300,
    tips_margin: 5, // optional, default value: 0,
    tips_x: -32,
    tips_y: -45,
    show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_EDIT
};
// END edit group treatments aaps/xdrip data


// BEGIN edit group default styles
const editWidgetW = px(105);
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
            type: hmUI.edit_type.STEP,
            preview: img('widgets/steps.png')
        },
        {
            type: hmUI.edit_type.DISTANCE,
            preview: img('widgets/distance.png')
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
            type: hmUI.edit_type.MOON,
            preview: img('widgets/moon.png')
        }
    ],
    count: 8,
    tips_BG: img('mask/text_tag.png'),
    tips_width: 110,
    tips_margin: 5, // optional, default value: 0
    show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_EDIT
};

// Default styles for all IMG widgets 
export const EDIT_DEFAULT_IMG = {
    w: px(editWidgetW), // full width to center
    pos_x: px((editWidgetW - editWidgetIconWidth) / 2), // center the image
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
    dot_image: img('smallNum/d.png')
};
// END edit group default styles


// BEGIN Top Left Edit Widgets
const topLeftX = px(32);
const topLeftY = px(115);

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

// Styles for all Top Left TEXT_IMG widgets
export const EDIT_TL_TEXT_IMG = {
    x: px(topLeftX),
    y: px(topLeftY + editWidgetIconHeight + editWidgetIconMargin)
};
// END Top Left Edit Widgets


// BEGIN Top Right Edit Widgets
const topRightX = px(286);
const topRightY = px(110);

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

// Styles for all Top Right TEXT_IMG widgets
export const EDIT_TR_TEXT_IMG = {
    x: px(topRightX),
    y: px(topRightY + editWidgetIconHeight + editWidgetIconMargin)
};
// END Top Right Edit Widgets


// BEGIN Bottom Left Edit Widgets
const bottomLeftX = px(42);
const bottomLeftY = px(217);

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

// Styles for all Bottom Left TEXT_IMG widgets
export const EDIT_BL_TEXT_IMG = {
    x: px(bottomLeftX),
    y: px(bottomLeftY + editWidgetIconHeight + editWidgetIconMargin)
};
// END Bottom Left Edit Widgets


// BEGIN Bottom Right Edit Widgets
const bottomRightX = px(286);
const bottomRightY = px(217);

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

// Default styles for all Bottom Right TEXT_IMG widgets
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
    src: img('widgets/steps.png') // 40x40px
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

// STEP widget
export const EDIT_PAI_IMG = {
    src: img('widgets/pai.png') // 40x40px
};
export const EDIT_PAI_TEXT_IMG = {
    type: hmUI.data_type.PAI_DAILY
};

// STEP widget
export const EDIT_UVI_IMG = {
    src: img('widgets/uvi.png') // 40x40px
};
export const EDIT_UVI_TEXT_IMG = {
    type: hmUI.data_type.UVI
};

// STEP widget
export const EDIT_ALTIMETER_IMG = {
    src: img('widgets/air-pressure.png') // 40x40px
};
export const EDIT_ALTIMETER_TEXT_IMG = {
    type: hmUI.data_type.ALTIMETER
};

// MOON widget
export const EDIT_MOON_IMG_LEVEL = {
    image_array: moonArr, // 90x70px
    image_length: moonArr.length,
    type: hmUI.data_type.WEATHER
};
// END Edit Widgets
