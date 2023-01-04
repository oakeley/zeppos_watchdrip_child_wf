import {img,range} from "../../utils/helper";
import {Colors} from "../../utils/config/constants";

let bgNumArr = range(10).map((v) => {
    return img(`bgNum/${v}.png`);
});

let weekEnArray = range(1, 8).map((v) => {
    return img(`week_en/${v}.png`);
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

export const DIGITAL_TIME_HOUR = {
    hour_startX: px(86),
    hour_startY: px(26),
    hour_zero: true,
    hour_space: 2,
    hour_align: hmUI.align.CENTER_H,
    hour_array: bigNumArr,
};

export const DIGITAL_TIME_MINUTES = {
    minute_startX: px(176),
    minute_startY: px(26),
    minute_zero: true,
    minute_space: 2,
    minute_align: hmUI.align.CENTER_H,
    minute_array: bigNumArr,
};

export const TIME_AM_PM = {
    am_x: px(241),
    am_y: px(64),
    am_sc_path: img('bigNum/am.png'),
    am_en_path: img('bigNum/am.png'),
    pm_x: px(298),
    pm_y: px(64),
    pm_sc_path: img('bigNum/pm.png'),
    pm_en_path: img('bigNum/pm.png'),
}

export const DIGITAL_TIME_SEPARATOR = {
    x: px(164),
    y: px(43),
    src: img( `bigNum/sp.png`)
};

/* export const ANALOG_TIME_SECONDS = {
    second_centerX: px(168),
    second_centerY: px(168),
    second_posX: px(5),
    second_posY: px(162),
    second_path: img("point/sec.png")
}; */

export const NORMAL_HEART_RATE_TEXT_IMG = {
    x: px(50),
    y: px(158),
    w: px(50),
    padding: false,
    h_space: 1,
    align_h: hmUI.align.LEFT,
    type: hmUI.data_type.HEART,
    show_level: hmUI.show_level.ONLY_NORMAL,
    font_array: smallNumArr
}

export const NORMAL_STEPS_TEXT_IMG = {
    x: px(236),
    y: px(158),
    w: px(95),
    padding: false,
    h_space: 1,
    align_h: hmUI.align.CENTER_H,
    type: hmUI.data_type.STEP,
    show_level: hmUI.show_level.ONLY_NORMAL,
    font_array: smallNumArr
}

/* export const NORMAL_DIST_TEXT_IMG = {
    x: px(222),
    y: px(218),
    w: px(78),
    padding: false,
    h_space: 1,
    align_h: hmUI.align.RIGHT,
    type: hmUI.data_type.DISTANCE,
    dot_image: img('smallNumAccent/d.png'),
    show_level: hmUI.show_level.ONLY_NORMAL,
    font_array: smallNumAccentArr
} */

export const WEEK_DAYS = {
    x: px(33),
    y: px(219),
    week_en: weekEnArray,
    week_tc: weekEnArray,
    week_sc: weekEnArray,
}

export const DAYS_TEXT_IMG = {
    day_startX: px(99),
    day_startY: px(215),
    day_zero: 1,
    day_space: 1,
    day_align: hmUI.align.LEFT,
    day_is_character: false,
    day_sc_array: smallNumAccentArr,
    day_tc_array: smallNumAccentArr,
    day_en_array: smallNumAccentArr,
}

/* export const BATTERY_ARC = {
    x: px(21),
    y: px(8),
    w: px(390),
    h: px(390),
    start_angle: -253,
    end_angle: -253,
    color: Colors.accent,
    line_width: px(9),
    show_level: hmUI.show_level.ONLY_NORMAL,
}

export const PAI_ARC = {
    x: px(7),
    y: px(7),
    w: px(390),
    h: px(390),
    start_angle: 73,
    end_angle: 73,
    color: Colors.accent,
    line_width: px(9),
    show_level: hmUI.show_level.ONLY_NORMAL,
} */

export const BG_VALUE_NO_DATA_TEXT = {
    x: px(114),
    y: px(122),
    w: px(108),
    h: px(50),
    color: Colors.white,
    text_size: px(34),
    align_h: hmUI.align.RIGHT,
    align_v: hmUI.align.CENTER_V,
    text_style: hmUI.text_style.NONE,
    text: 'No data'
};

export const BG_VALUE_TEXT_IMG = {
    x: px(114),
    y: px(122),
    w: px(108),
    color: Colors.white,
    align_h: hmUI.align.CENTER_H,
    dot_image: img('bgNum/d.png'),
    font_array: bgNumArr,
    text: '0',
    visible: false,
    h_space:1
};

export const BG_TIME_TEXT = {
    x: px(111),
    y: px(211),
    w: px(114),
    h: px(33),
    color: Colors.defaultTransparent,
    text_size: px(23),
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.TOP,
    text_style: hmUI.text_style.NONE,
};

export const BG_DELTA_TEXT = {
    x: px(134),
    y: px(187),
    w: px(69),
    h: px(45),
    color: Colors.defaultTransparent,
    text_size: px(28),
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.TOP,
    text_style: hmUI.text_style.NONE,
};

export const BG_TREND_IMAGE = {
    src: 'watchdrip/arrows/None.png',
    x: px(147),
    y: px(239),
    w: px(42),
    h: px(45),
};

export const BG_STALE_RECT = {
    x: px(115),
    y: px(148),
    w: px(120),
    h: px(4),
    color: Colors.white,
    visible: false,
};

export const BG_STALE_IMG = {
    x: px(115),
    y: px(148),
    src: 'watchdrip/stale.png',
    visible: false,
};

export const IOB_TEXT = {
    x: px(88),
    y: px(302),
    w: px(243),
    h: px(30),
    color: Colors.white,
    text_size: px(22),
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.CENTER_V,
    text_style: hmUI.text_style.NONE,
};

export const TREATMENT_TEXT = {
    x: px(113),
    y: px(328),
    w: px(190),
    h: px(32),
    color: Colors.white,
    text_size: px(22),
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.TOP,
    text_style: hmUI.text_style.NONE,
};

export const PHONE_BATTERY_TEXT = {
    x: px(260),
    y: px(240),
    w: px(71),
    h: px(27),
    color: Colors.white,
    text_size: px(21),
    align_h: hmUI.align.LEFT,
    align_v: hmUI.align.TOP,
    text_style: hmUI.text_style.NONE,
};

export const WATCH_BATTERY_TEXT = {
    x: px(0),
    y: px(240),
    w: px(71),
    h: px(27),
    color: Colors.white,
    text_size: px(21),
    align_h: hmUI.align.RIGHT,
    align_v: hmUI.align.TOP,
    text_style: hmUI.text_style.NONE,
};

export const BG_STATUS_LOW_IMG = {
    x: px(105),
    y: px(108),
    src: 'watchdrip/bgLow.png',
};

export const BG_STATUS_OK_IMG = {
    x: px(125),
    y: px(108),
    src: 'watchdrip/bgOk.png',
};

export const BG_STATUS_HIGHT_IMG = {
    x: px(216),
    y: px(108),
    src: 'watchdrip/bgHight.png',
};

export const IMG_STATUS_BT_DISCONNECTED = {
    x: px(106),
    y: px(124),
    src: img('status/bt_disconnect.png'),
    type: hmUI.system_status.DISCONNECT,
    show_level: hmUI.show_level.ONLY_NORMAL,
};

export const IMG_LOADING_PROGRESS = {
    x: px(152),
    y: px(206),
    src: 'watchdrip/progress.png',
    angle:0,
    center_x: 20,
    center_y: 20,
    visible: false,
};
