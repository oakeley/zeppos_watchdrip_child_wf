import {DebugText} from "../../shared/debug";
import {Watchdrip} from "../../utils/watchdrip/watchdrip";
import {WatchdripData} from "../../utils/watchdrip/watchdrip-data";
import {getGlobal} from "../../shared/global";
import {
    BG_DELTA_TEXT,
    BG_STALE_IMG,
    BG_STATUS_HIGHT_IMG,
    BG_STATUS_LOW_IMG,
    BG_STATUS_OK_IMG,
    BG_TIME_TEXT,
    BG_TREND_IMAGE,
    BG_VALUE_NO_DATA_TEXT,
    BG_VALUE_TEXT_IMG,
    DAYS_MONTHS_TEXT_IMG,
    DIGITAL_TIME_HOUR,
    DIGITAL_TIME_MINUTES,
    DIGITAL_TIME_SEPARATOR,
    IMG_LOADING_PROGRESS,
    IMG_STATUS_BT_DISCONNECTED,
    PHONE_BATTERY_TEXT,
    WATCH_BATTERY_TEXT,
    TIME_AM_PM,
    WEEK_DAYS,
    AAPS_TEXT,
    AAPS_TIME_TEXT,
    // Edit masks
    EDIT_MASK_70,
    EDIT_MASK_100,
    // Default edit group styles
    EDIT_GROUP_DEFAULTS,
    // Top Left Edit Group
    EDIT_TOP_LEFT_GROUP,
    EDIT_TOP_LEFT_DEFAULT_IMG,
    EDIT_TOP_LEFT_DEFAULT_TEXT_IMG,
    // Top Right Edit Group
    EDIT_TOP_RIGHT_GROUP,
    EDIT_TOP_RIGHT_DEFAULT_IMG,
    EDIT_TOP_RIGHT_DEFAULT_TEXT_IMG,
    // Bottom Left Edit Group
    EDIT_BOTTOM_LEFT_GROUP,
    EDIT_BOTTOM_LEFT_DEFAULT_IMG,
    EDIT_BOTTOM_LEFT_DEFAULT_TEXT_IMG,
    // Bottom Right Edit Group
    EDIT_BOTTOM_RIGHT_GROUP,
    EDIT_BOTTOM_RIGHT_DEFAULT_IMG,
    EDIT_BOTTOM_RIGHT_DEFAULT_TEXT_IMG,
    // Editable Widgets specific styles
    EDIT_HEART_IMG,
    EDIT_HEART_TEXT_IMG,
    EDIT_STEP_IMG,
    EDIT_STEP_TEXT_IMG,
    EDIT_DISTANCE_IMG,
    EDIT_DISTANCE_TEXT_IMG,
    EDIT_WEATHER_CURRENT_IMG,
    EDIT_WEATHER_CURRENT_TEXT_IMG
} from "./styles";
import {BG_IMG} from "../../utils/config/styles_global";
import {PROGRESS_ANGLE_INC, PROGRESS_UPDATE_INTERVAL_MS, TEST_DATA} from "../../utils/config/constants";

let imgBg, digitalClockHour, digitalClockMinutes, timeAM_PM, digitalClockSeparator, btDisconnected, weekImg, 
    dateDayMonthsImg, mask, maskCover, editGroupTopLeft, editGroupTopRight, editGroupBottomLeft, editGroupBottomRight;
let bgValNoDataTextWidget, bgValTextImgWidget, bgValTimeTextWidget, bgDeltaTextWidget, bgTrendImageWidget, bgStaleLine, 
    phoneBattery, watchBattery, bgStatusLow, bgStatusOk, bgStatusHight, progress, aapsText, aapsTimeText;

let globalNS, progressTimer, progressAngle;

let debug, watchdrip;

export const logger = Logger.getLogger("timer-page");

function initDebug() {
    globalNS.debug = new DebugText();
    debug = globalNS.debug;
    debug.setLines(12);
}

function startLoader() {
    progress.setProperty(hmUI.prop.VISIBLE, true);
    progressAngle = 0;
    progress.setProperty(hmUI.prop.MORE, {angle: progressAngle});
    progressTimer = globalNS.setInterval(() => {
        updateLoader();
    }, PROGRESS_UPDATE_INTERVAL_MS);
}

function updateLoader() {
    progressAngle = progressAngle + PROGRESS_ANGLE_INC;
    if (progressAngle >= 360) progressAngle = 0;
    progress.setProperty(hmUI.prop.MORE, {angle: progressAngle});
}

function stopLoader() {
    if (progressTimer !== null) {
        globalNS.clearInterval(progressTimer);
        progressTimer = null;
    }
    progress.setProperty(hmUI.prop.VISIBLE, false);
}

function mergeStyles(styleObj1, styleObj2) {
    return Object.assign({}, styleObj1, styleObj2);
}


WatchFace({
    // TODO: Refactor into a single function: 2 switches in sequence. 1st save widget defaults, 2nd merge in specific styles
    drawWidget(editType, editID){

    },
    // draw editable Widget TOP LEFT
    drawWidgetTopLeft(editType) {
        switch (editType) {
            case hmUI.edit_type.HEART:
                hmUI.createWidget(hmUI.widget.IMG, mergeStyles(EDIT_TOP_LEFT_DEFAULT_IMG, EDIT_HEART_IMG));
                hmUI.createWidget(hmUI.widget.TEXT_IMG, mergeStyles(EDIT_TOP_LEFT_DEFAULT_TEXT_IMG, EDIT_HEART_TEXT_IMG));
                break;
            case hmUI.edit_type.STEP:
                hmUI.createWidget(hmUI.widget.IMG, mergeStyles(EDIT_TOP_LEFT_DEFAULT_IMG, EDIT_STEP_IMG));
                hmUI.createWidget(hmUI.widget.TEXT_IMG, mergeStyles(EDIT_TOP_LEFT_DEFAULT_TEXT_IMG, EDIT_STEP_TEXT_IMG));
                break;
            case hmUI.edit_type.WEATHER_CURRENT:
                hmUI.createWidget(hmUI.widget.IMG, mergeStyles(EDIT_TOP_LEFT_DEFAULT_IMG, EDIT_WEATHER_CURRENT_IMG));
                hmUI.createWidget(hmUI.widget.TEXT_IMG, mergeStyles(EDIT_TOP_LEFT_DEFAULT_TEXT_IMG, EDIT_WEATHER_CURRENT_TEXT_IMG));
                break;
            case hmUI.edit_type.DISTANCE:
                hmUI.createWidget(hmUI.widget.IMG, mergeStyles(EDIT_TOP_LEFT_DEFAULT_IMG, EDIT_DISTANCE_IMG));
                hmUI.createWidget(hmUI.widget.TEXT_IMG, mergeStyles(EDIT_TOP_LEFT_DEFAULT_TEXT_IMG, EDIT_DISTANCE_TEXT_IMG));
                break;    
        }
    },
    // draw editable Widget TOP RIGHT
    drawWidgetTopRight(editType) {
        switch (editType) {
            case hmUI.edit_type.HEART:
                hmUI.createWidget(hmUI.widget.IMG, mergeStyles(EDIT_TOP_RIGHT_DEFAULT_IMG, EDIT_HEART_IMG));
                hmUI.createWidget(hmUI.widget.TEXT_IMG, mergeStyles(EDIT_TOP_RIGHT_DEFAULT_TEXT_IMG, EDIT_HEART_TEXT_IMG));
                break;
            case hmUI.edit_type.STEP:
                hmUI.createWidget(hmUI.widget.IMG, mergeStyles(EDIT_TOP_RIGHT_DEFAULT_IMG, EDIT_STEP_IMG));
                hmUI.createWidget(hmUI.widget.TEXT_IMG, mergeStyles(EDIT_TOP_RIGHT_DEFAULT_TEXT_IMG, EDIT_STEP_TEXT_IMG));
                break;
            case hmUI.edit_type.WEATHER_CURRENT:
                hmUI.createWidget(hmUI.widget.IMG, mergeStyles(EDIT_TOP_RIGHT_DEFAULT_IMG, EDIT_WEATHER_CURRENT_IMG));
                hmUI.createWidget(hmUI.widget.TEXT_IMG, mergeStyles(EDIT_TOP_RIGHT_DEFAULT_TEXT_IMG, EDIT_WEATHER_CURRENT_TEXT_IMG));
                break;
            case hmUI.edit_type.DISTANCE:
                hmUI.createWidget(hmUI.widget.IMG, mergeStyles(EDIT_TOP_RIGHT_DEFAULT_IMG, EDIT_DISTANCE_IMG));
                hmUI.createWidget(hmUI.widget.TEXT_IMG, mergeStyles(EDIT_TOP_RIGHT_DEFAULT_TEXT_IMG, EDIT_DISTANCE_TEXT_IMG));
                break;
        }
    },
    // draw editable Widget BOTTOM LEFT
    drawWidgetBottomLeft(editType) {
        switch (editType) {
            case hmUI.edit_type.HEART:
                hmUI.createWidget(hmUI.widget.IMG, mergeStyles(EDIT_BOTTOM_LEFT_DEFAULT_IMG, EDIT_HEART_IMG));
                hmUI.createWidget(hmUI.widget.TEXT_IMG, mergeStyles(EDIT_BOTTOM_LEFT_DEFAULT_TEXT_IMG, EDIT_HEART_TEXT_IMG));
                break;
            case hmUI.edit_type.STEP:
                hmUI.createWidget(hmUI.widget.IMG, mergeStyles(EDIT_BOTTOM_LEFT_DEFAULT_IMG, EDIT_STEP_IMG));
                hmUI.createWidget(hmUI.widget.TEXT_IMG, mergeStyles(EDIT_BOTTOM_LEFT_DEFAULT_TEXT_IMG, EDIT_STEP_TEXT_IMG));
                break;
            case hmUI.edit_type.WEATHER_CURRENT:
                hmUI.createWidget(hmUI.widget.IMG, mergeStyles(EDIT_BOTTOM_LEFT_DEFAULT_IMG, EDIT_WEATHER_CURRENT_IMG));
                hmUI.createWidget(hmUI.widget.TEXT_IMG, mergeStyles(EDIT_BOTTOM_LEFT_DEFAULT_TEXT_IMG, EDIT_WEATHER_CURRENT_TEXT_IMG));
                break;
            case hmUI.edit_type.DISTANCE:
                hmUI.createWidget(hmUI.widget.IMG, mergeStyles(EDIT_BOTTOM_LEFT_DEFAULT_IMG, EDIT_DISTANCE_IMG));
                hmUI.createWidget(hmUI.widget.TEXT_IMG, mergeStyles(EDIT_BOTTOM_LEFT_DEFAULT_TEXT_IMG, EDIT_DISTANCE_TEXT_IMG));
                break;
        }
    },
    // draw editable Widget BOTTOM RIGHT
    drawWidgetBottomRight(editType) {
        switch (editType) {
            case hmUI.edit_type.HEART:
                hmUI.createWidget(hmUI.widget.IMG, mergeStyles(EDIT_BOTTOM_RIGHT_DEFAULT_IMG, EDIT_HEART_IMG));
                hmUI.createWidget(hmUI.widget.TEXT_IMG, mergeStyles(EDIT_BOTTOM_RIGHT_DEFAULT_TEXT_IMG, EDIT_HEART_TEXT_IMG));
                break;
            case hmUI.edit_type.STEP:
                hmUI.createWidget(hmUI.widget.IMG, mergeStyles(EDIT_BOTTOM_RIGHT_DEFAULT_IMG, EDIT_STEP_IMG));
                hmUI.createWidget(hmUI.widget.TEXT_IMG, mergeStyles(EDIT_BOTTOM_RIGHT_DEFAULT_TEXT_IMG, EDIT_STEP_TEXT_IMG));
                break;
            case hmUI.edit_type.WEATHER_CURRENT:
                hmUI.createWidget(hmUI.widget.IMG, mergeStyles(EDIT_BOTTOM_RIGHT_DEFAULT_IMG, EDIT_WEATHER_CURRENT_IMG));
                hmUI.createWidget(hmUI.widget.TEXT_IMG, mergeStyles(EDIT_BOTTOM_RIGHT_DEFAULT_TEXT_IMG, EDIT_WEATHER_CURRENT_TEXT_IMG));
                break;
            case hmUI.edit_type.DISTANCE:
                hmUI.createWidget(hmUI.widget.IMG, mergeStyles(EDIT_BOTTOM_RIGHT_DEFAULT_IMG, EDIT_DISTANCE_IMG));
                hmUI.createWidget(hmUI.widget.TEXT_IMG, mergeStyles(EDIT_BOTTOM_RIGHT_DEFAULT_TEXT_IMG, EDIT_DISTANCE_TEXT_IMG));
                break;
        }
    },
    // Init View
    initView() {
        imgBg = hmUI.createWidget(hmUI.widget.IMG, BG_IMG);

        digitalClockHour = hmUI.createWidget(hmUI.widget.IMG_TIME, DIGITAL_TIME_HOUR);
        digitalClockMinutes = hmUI.createWidget(hmUI.widget.IMG_TIME, DIGITAL_TIME_MINUTES);
        timeAM_PM = hmUI.createWidget(hmUI.widget.IMG_TIME, TIME_AM_PM);
        digitalClockSeparator = hmUI.createWidget(hmUI.widget.IMG, DIGITAL_TIME_SEPARATOR);

        weekImg = hmUI.createWidget(hmUI.widget.IMG_WEEK, WEEK_DAYS);
        dateDayMonthsImg = hmUI.createWidget(hmUI.widget.IMG_DATE, DAYS_MONTHS_TEXT_IMG);

        btDisconnected = hmUI.createWidget(hmUI.widget.IMG_STATUS, IMG_STATUS_BT_DISCONNECTED);

        watchBattery = hmUI.createWidget(hmUI.widget.TEXT, WATCH_BATTERY_TEXT);
        const battery = hmSensor.createSensor(hmSensor.id.BATTERY);
        battery.addEventListener(hmSensor.event.CHANGE, function() {
            watchBattery.setProperty(hmUI.prop.TEXT, battery.current + '%');
        });
        const widgetDelegate = hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
            resume_call: (function() {
                watchBattery.setProperty(hmUI.prop.TEXT, battery.current + '%');
            })
        });

        
        // BEGIN editable components init
        // 100% edit mask
        maskCover = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_MASK, EDIT_MASK_100);
        // 70% edit mask
        mask = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_FG_MASK, EDIT_MASK_70);
        // Top Left editable widget
        editGroupTopLeft = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_GROUP, mergeStyles(EDIT_GROUP_DEFAULTS, EDIT_TOP_LEFT_GROUP));
        const editTopLeftType = editGroupTopLeft.getProperty(hmUI.prop.CURRENT_TYPE);
        this.drawWidgetTopLeft(editTopLeftType);
        // Top Right editable widget
        editGroupTopRight = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_GROUP, mergeStyles(EDIT_GROUP_DEFAULTS, EDIT_TOP_RIGHT_GROUP));
        const editTopRightType = editGroupTopRight.getProperty(hmUI.prop.CURRENT_TYPE);
        this.drawWidgetTopRight(editTopRightType);
        // Bottom Left editable widget
        editGroupBottomLeft = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_GROUP, mergeStyles(EDIT_GROUP_DEFAULTS, EDIT_BOTTOM_LEFT_GROUP));
        const editBottomLeftType = editGroupBottomLeft.getProperty(hmUI.prop.CURRENT_TYPE);
        this.drawWidgetBottomLeft(editBottomLeftType);
        // Bottom Right editable widget
        editGroupBottomRight = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_GROUP, mergeStyles(EDIT_GROUP_DEFAULTS, EDIT_BOTTOM_RIGHT_GROUP));
        const editBottomRightType = editGroupBottomRight.getProperty(hmUI.prop.CURRENT_TYPE);
        this.drawWidgetBottomRight(editBottomRightType);
        // END editable components init


        //init watchdrip related widgets
        bgValNoDataTextWidget = hmUI.createWidget(hmUI.widget.TEXT, BG_VALUE_NO_DATA_TEXT);
        bgValTextImgWidget = hmUI.createWidget(hmUI.widget.TEXT_IMG, BG_VALUE_TEXT_IMG);
        bgValTimeTextWidget = hmUI.createWidget(hmUI.widget.TEXT, BG_TIME_TEXT);
        bgDeltaTextWidget = hmUI.createWidget(hmUI.widget.TEXT, BG_DELTA_TEXT);
        bgTrendImageWidget = hmUI.createWidget(hmUI.widget.IMG, BG_TREND_IMAGE);
        bgStaleLine = hmUI.createWidget(hmUI.widget.IMG, BG_STALE_IMG);
        phoneBattery = hmUI.createWidget(hmUI.widget.TEXT, PHONE_BATTERY_TEXT);
        bgStatusLow = hmUI.createWidget(hmUI.widget.IMG, BG_STATUS_LOW_IMG);
        bgStatusOk = hmUI.createWidget(hmUI.widget.IMG, BG_STATUS_OK_IMG);
        bgStatusHight = hmUI.createWidget(hmUI.widget.IMG, BG_STATUS_HIGHT_IMG);
        progress = hmUI.createWidget(hmUI.widget.IMG, IMG_LOADING_PROGRESS);
        // From modified xDrip ExternalStatusService.getLastStatusLine()
        aapsText = hmUI.createWidget(hmUI.widget.TEXT, AAPS_TEXT);
        // From modified xDrip ExternalStatusService.getLastStatusLineTime()
        aapsTimeText = hmUI.createWidget(hmUI.widget.TEXT, AAPS_TIME_TEXT);
    },
    updateStart() {
        bgValTimeTextWidget.setProperty(hmUI.prop.VISIBLE, false);
        startLoader();
    },
    updateFinish(isSuccess) {
        stopLoader();
        bgValTimeTextWidget.setProperty(hmUI.prop.VISIBLE, true);
    },

    /**
     * @param {WatchdripData} watchdripData The watchdrip data info
     */
    updateValuesWidget(watchdripData) {
        if (watchdripData === undefined) return;
        let bgObj = watchdripData.getBg();

        bgStatusLow.setProperty(hmUI.prop.VISIBLE, false);
        bgStatusOk.setProperty(hmUI.prop.VISIBLE, false);
        bgStatusHight.setProperty(hmUI.prop.VISIBLE, false);

        if (bgObj.isHasData()) {
            if (bgObj.isHigh) {
                bgStatusHight.setProperty(hmUI.prop.VISIBLE, true);
            } else if (bgObj.isLow) {
                bgStatusLow.setProperty(hmUI.prop.VISIBLE, true);
            } else {
                bgStatusOk.setProperty(hmUI.prop.VISIBLE, true);
            }
        }
        if (bgObj.isHasData()) {
            bgValTextImgWidget.setProperty(hmUI.prop.TEXT, bgObj.getBGVal());
            bgValTextImgWidget.setProperty(hmUI.prop.VISIBLE, true);
            bgValNoDataTextWidget.setProperty(hmUI.prop.VISIBLE, false);
        } else {
            bgValNoDataTextWidget.setProperty(hmUI.prop.VISIBLE, true);
            bgValTextImgWidget.setProperty(hmUI.prop.VISIBLE, false);
        }
        bgDeltaTextWidget.setProperty(hmUI.prop.TEXT, bgObj.delta);

        bgTrendImageWidget.setProperty(hmUI.prop.SRC, bgObj.getArrowResource());

        phoneBattery.setProperty(hmUI.prop.TEXT, watchdripData.getStatus().getBatVal());

        // Fill data from modified xDrip ExternalStatusService.getLastStatusLine()
        let treatmentObj = watchdripData.getTreatment();
        let aapsString = "";
        let insText = "IOB: " + treatmentObj.insulin + " U";
        insText = insText.replace(".0 U", " U");
        aapsString = aapsString + insText + " - ";        
        let carbText = "COB: " + treatmentObj.carbs + " g";
        carbText = carbText.replace(".0 g", " g");
        aapsString = aapsString + carbText;
        aapsText.setProperty(hmUI.prop.TEXT, aapsString);

        if (TEST_DATA){
            bgStatusLow.setProperty(hmUI.prop.VISIBLE, true);
            bgStatusOk.setProperty(hmUI.prop.VISIBLE, true);
            bgStatusHight.setProperty(hmUI.prop.VISIBLE, true);
            bgValTimeTextWidget.setProperty(hmUI.prop.VISIBLE, true);
        }
    },

    /**
     * @param {WatchdripData} watchdripData The watchdrip data info
     */
    updateTimesWidget(watchdripData) {
        if (watchdripData === undefined) return;
        let bgObj = watchdripData.getBg();
        bgValTimeTextWidget.setProperty(hmUI.prop.TEXT, watchdripData.getTimeAgo(bgObj.time));

        bgStaleLine.setProperty(hmUI.prop.VISIBLE, watchdripData.isBgStale());

        // Fill data from modified xDrip ExternalStatusService.getLastStatusLine()
        let treatmentObj = watchdripData.getTreatment();
        aapsTimeText.setProperty(hmUI.prop.TEXT, watchdripData.getTimeAgo(treatmentObj.time));
    },

    onInit() {
        logger.log("wf on init invoke");
    },

    build() {
        logger.log("wf on build invoke");
        globalNS = getGlobal();
        initDebug();
        debug.log("build");
        this.initView();
        globalNS.watchdrip = new Watchdrip();
        watchdrip = globalNS.watchdrip;
        watchdrip.setUpdateValueWidgetCallback(this.updateValuesWidget);
        watchdrip.setUpdateTimesWidgetCallback(this.updateTimesWidget);
        watchdrip.setOnUpdateStartCallback(this.updateStart);
        watchdrip.setOnUpdateFinishCallback(this.updateFinish);
        watchdrip.start();
    },

    onDestroy() {
        logger.log("wf on destroy invoke");
        watchdrip.destroy();
    },

    onShow() {
        debug.log("onShow");
    },

    onHide() {
        debug.log("onHide");
    },
});
