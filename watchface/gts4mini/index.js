import {DebugText} from "../../shared/debug";
import {Watchdrip} from "../../utils/watchdrip/watchdrip";
import {WatchdripData} from "../../utils/watchdrip/watchdrip-data";
import {getGlobal} from "../../shared/global";
import {
    BG_DELTA_TEXT,
    BG_STALE_IMG,
    BG_STATUS_HIGH_IMG,
    BG_STATUS_LOW_IMG,
    BG_STATUS_OK_IMG,
    BG_TIME_TEXT,
    BG_TREND_IMAGE,
    BG_VALUE_NO_DATA_TEXT,
    BG_VALUE_TEXT_IMG,
    WEEK_DAYS_IMG,
    DATE_TEXT_IMG,
    DIGITAL_TIME,
    IMG_LOADING_PROGRESS,
    IMG_STATUS_BT_DISCONNECTED,
    PHONE_BATTERY_TEXT,
    WATCH_BATTERY_TEXT,
    AAPS_TEXT,
    AAPS_TIME_TEXT,
    // Edit masks
    EDIT_MASK_70,
    EDIT_MASK_100,
    // xdrip or aaps treatments formatting edit group
    EDIT_GROUP_AAPS_XDRIP,
    CUSTOM_WIDGETS,
    // Default edit group styles
    EDIT_GROUP_DEFAULTS,
    EDIT_DEFAULT_IMG,
    EDIT_DEFAULT_TEXT_IMG,
    // Top Left Edit Group
    EDIT_TOP_LEFT_GROUP,
    EDIT_TL_IMG,
    EDIT_TL_TEXT_IMG,
    // Top Right Edit Group
    EDIT_TOP_RIGHT_GROUP,
    EDIT_TR_IMG,
    EDIT_TR_TEXT_IMG,
    // Bottom Left Edit Group
    EDIT_BOTTOM_LEFT_GROUP,
    EDIT_BL_IMG,
    EDIT_BL_TEXT_IMG,
    // Bottom Right Edit Group
    EDIT_BOTTOM_RIGHT_GROUP,
    EDIT_BR_IMG,
    EDIT_BR_TEXT_IMG,
    // Editable Widgets specific styles
    EDIT_HEART_IMG,
    EDIT_HEART_TEXT_IMG,
    EDIT_STEP_IMG,
    EDIT_STEP_TEXT_IMG,
    EDIT_DISTANCE_IMG,
    EDIT_DISTANCE_TEXT_IMG,
    EDIT_WEATHER_CONDITION_IMG_LEVEL,
    EDIT_WEATHER_CURRENT_TEXT_IMG,
    EDIT_PAI_IMG,
    EDIT_PAI_TEXT_IMG,
    EDIT_UVI_IMG,
    EDIT_UVI_TEXT_IMG,
    EDIT_ALTIMETER_IMG,
    EDIT_ALTIMETER_TEXT_IMG,
    EDIT_MOON_IMG_LEVEL
} from "./styles";
import {BG_IMG, BG_FILL_RECT} from "../../utils/config/styles_global";
import {PROGRESS_ANGLE_INC, PROGRESS_UPDATE_INTERVAL_MS} from "../../utils/config/constants";

let imgBg, digitalClock, btDisconnected, daysImg, dateImg, mask, maskCover, editGroupTopLeft, editGroupTopRight, 
    editGroupBottomLeft, editGroupBottomRight, editGroupAAPSxDrip;
let bgValNoDataTextWidget, bgValTextImgWidget, bgValTimeTextWidget, bgDeltaTextWidget, bgTrendImageWidget, bgStaleLine, 
    phoneBattery, watchBattery, bgStatusLow, bgStatusOk, bgStatusHigh, progress, aapsText, aapsTimeText;

let globalNS, progressTimer, progressAngle, screenType;

let debug, watchdrip;

export const logger = Logger.getLogger("timer-page");

function initDebug() {
    globalNS.debug = new DebugText();
    debug = globalNS.debug;
    debug.setLines(12);
};


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
    // draws the editable widgets
    drawWidget(imgStyle, textImgStyle, editType){
        switch (editType) {
            case hmUI.edit_type.HEART:
                hmUI.createWidget(hmUI.widget.IMG, mergeStyles(imgStyle, EDIT_HEART_IMG));
                hmUI.createWidget(hmUI.widget.TEXT_IMG, mergeStyles(textImgStyle, EDIT_HEART_TEXT_IMG));
                break;
            case hmUI.edit_type.STEP:
                hmUI.createWidget(hmUI.widget.IMG, mergeStyles(imgStyle, EDIT_STEP_IMG));
                hmUI.createWidget(hmUI.widget.TEXT_IMG, mergeStyles(textImgStyle, EDIT_STEP_TEXT_IMG));
                break;
            case hmUI.edit_type.WEATHER:
                hmUI.createWidget(hmUI.widget.IMG_LEVEL, mergeStyles(imgStyle, EDIT_WEATHER_CONDITION_IMG_LEVEL));
                hmUI.createWidget(hmUI.widget.TEXT_IMG, mergeStyles(textImgStyle, EDIT_WEATHER_CURRENT_TEXT_IMG));
                break;
            case hmUI.edit_type.DISTANCE:
                hmUI.createWidget(hmUI.widget.IMG, mergeStyles(imgStyle, EDIT_DISTANCE_IMG));
                hmUI.createWidget(hmUI.widget.TEXT_IMG, mergeStyles(textImgStyle, EDIT_DISTANCE_TEXT_IMG));
                break; 
            case hmUI.edit_type.ALTIMETER:
                hmUI.createWidget(hmUI.widget.IMG, mergeStyles(imgStyle, EDIT_ALTIMETER_IMG));
                hmUI.createWidget(hmUI.widget.TEXT_IMG, mergeStyles(textImgStyle, EDIT_ALTIMETER_TEXT_IMG));
                break;
            case hmUI.edit_type.UVI:
                hmUI.createWidget(hmUI.widget.IMG, mergeStyles(imgStyle, EDIT_UVI_IMG));
                hmUI.createWidget(hmUI.widget.TEXT_IMG, mergeStyles(textImgStyle, EDIT_UVI_TEXT_IMG));
                break;
            case hmUI.edit_type.PAI:
                hmUI.createWidget(hmUI.widget.IMG, mergeStyles(imgStyle, EDIT_PAI_IMG));
                hmUI.createWidget(hmUI.widget.TEXT_IMG, mergeStyles(textImgStyle, EDIT_PAI_TEXT_IMG));
                break;
            case hmUI.edit_type.MOON:
                hmUI.createWidget(hmUI.widget.IMG_LEVEL, mergeStyles(imgStyle, EDIT_MOON_IMG_LEVEL));
                break;              
        };
    },

    // Init View
    initView() {
        screenType = hmSetting.getScreenType();
        if (screenType === hmSetting.screen_type.AOD) {
            imgBg = hmUI.createWidget(hmUI.widget.FILL_RECT, BG_FILL_RECT);
        } else {
            imgBg = hmUI.createWidget(hmUI.widget.IMG, BG_IMG);
        };

        digitalClock = hmUI.createWidget(hmUI.widget.IMG_TIME, DIGITAL_TIME);

        daysImg = hmUI.createWidget(hmUI.widget.IMG_WEEK, WEEK_DAYS_IMG);

        dateTextImg = hmUI.createWidget(hmUI.widget.IMG_DATE, DATE_TEXT_IMG);

        btDisconnected = hmUI.createWidget(hmUI.widget.IMG_STATUS, IMG_STATUS_BT_DISCONNECTED);

        watchBattery = hmUI.createWidget(hmUI.widget.TEXT, WATCH_BATTERY_TEXT);
        
        // UI lifecycle proxy
        const widgetDelegate = hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
            resume_call: (function() {
                // Update watch battery
                const batterySensor = hmSensor.createSensor(hmSensor.id.BATTERY);
                watchBattery.setProperty(hmUI.prop.TEXT, batterySensor.current + '%');
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
        this.drawWidget(mergeStyles(EDIT_DEFAULT_IMG, EDIT_TL_IMG), mergeStyles(EDIT_DEFAULT_TEXT_IMG, EDIT_TL_TEXT_IMG), editTopLeftType);
        // Top Right editable widget
        editGroupTopRight = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_GROUP, mergeStyles(EDIT_GROUP_DEFAULTS, EDIT_TOP_RIGHT_GROUP));
        const editTopRightType = editGroupTopRight.getProperty(hmUI.prop.CURRENT_TYPE);
        this.drawWidget(mergeStyles(EDIT_DEFAULT_IMG, EDIT_TR_IMG), mergeStyles(EDIT_DEFAULT_TEXT_IMG, EDIT_TR_TEXT_IMG), editTopRightType);
        // Bottom Left editable widget
        editGroupBottomLeft = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_GROUP, mergeStyles(EDIT_GROUP_DEFAULTS, EDIT_BOTTOM_LEFT_GROUP));
        const editBottomLeftType = editGroupBottomLeft.getProperty(hmUI.prop.CURRENT_TYPE);
        this.drawWidget(mergeStyles(EDIT_DEFAULT_IMG, EDIT_BL_IMG), mergeStyles(EDIT_DEFAULT_TEXT_IMG, EDIT_BL_TEXT_IMG), editBottomLeftType);
        // Bottom Right editable widget
        editGroupBottomRight = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_GROUP, mergeStyles(EDIT_GROUP_DEFAULTS, EDIT_BOTTOM_RIGHT_GROUP));
        const editBottomRightType = editGroupBottomRight.getProperty(hmUI.prop.CURRENT_TYPE);
        this.drawWidget(mergeStyles(EDIT_DEFAULT_IMG, EDIT_BR_IMG), mergeStyles(EDIT_DEFAULT_TEXT_IMG, EDIT_BR_TEXT_IMG), editBottomRightType);
        
        // xdrip or aaps treatments formatting edit group
        editGroupAAPSxDrip = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_GROUP, EDIT_GROUP_AAPS_XDRIP);
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
        bgStatusHigh = hmUI.createWidget(hmUI.widget.IMG, BG_STATUS_HIGH_IMG);
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
        bgStatusHigh.setProperty(hmUI.prop.VISIBLE, false);

        if (bgObj.isHasData()) {
            if (bgObj.isHigh) {
                bgStatusHigh.setProperty(hmUI.prop.VISIBLE, true);
            } else if (bgObj.isLow) {
                bgStatusLow.setProperty(hmUI.prop.VISIBLE, true);
            } else {
                bgStatusOk.setProperty(hmUI.prop.VISIBLE, true);
            };
            
            bgValTextImgWidget.setProperty(hmUI.prop.TEXT, bgObj.getBGVal());
            bgValTextImgWidget.setProperty(hmUI.prop.VISIBLE, true);
            bgValNoDataTextWidget.setProperty(hmUI.prop.VISIBLE, false);
        } else {
            bgValNoDataTextWidget.setProperty(hmUI.prop.VISIBLE, true);
            bgValTextImgWidget.setProperty(hmUI.prop.VISIBLE, false);
        };

        bgDeltaTextWidget.setProperty(hmUI.prop.TEXT, bgObj.delta);

        bgTrendImageWidget.setProperty(hmUI.prop.SRC, bgObj.getArrowResource());

        phoneBattery.setProperty(hmUI.prop.TEXT, watchdripData.getStatus().getBatVal());

        let treatmentObj = watchdripData.getTreatment();
        // treatments formatting according to user selection
        const editTypeAAPSxDrip = editGroupAAPSxDrip.getProperty(hmUI.prop.CURRENT_TYPE);
        switch (editTypeAAPSxDrip) {
            // default xDrip data
            case CUSTOM_WIDGETS.XDRIP:
                aapsText.setProperty(hmUI.prop.TEXT, treatmentObj.getPredictIOB());
                break;
            // Fill data from modified xDrip ExternalStatusService.getLastStatusLine()    
            case CUSTOM_WIDGETS.AAPS:
                let aapsString = "";
                let insText = "IOB: " + treatmentObj.insulin + " U";
                insText = insText.replace(".0 U", " U");
                aapsString = aapsString + insText + " - ";        
                let carbText = "COB: " + treatmentObj.carbs + " g";
                carbText = carbText.replace(".0 g", " g");
                aapsString = aapsString + carbText;
                aapsText.setProperty(hmUI.prop.TEXT, aapsString);
                break;
        };
    },

    /**
     * @param {WatchdripData} watchdripData The watchdrip data info
     */
    updateTimesWidget(watchdripData) {
        if (watchdripData === undefined) return;
        let bgObj = watchdripData.getBg();
        bgValTimeTextWidget.setProperty(hmUI.prop.TEXT, watchdripData.getTimeAgo(bgObj.time));

        bgStaleLine.setProperty(hmUI.prop.VISIBLE, watchdripData.isBgStale());

        let treatmentObj = watchdripData.getTreatment();
        // treatments formatting according to user selection
        const editTypeAAPSxDrip = editGroupAAPSxDrip.getProperty(hmUI.prop.CURRENT_TYPE);
        switch (editTypeAAPSxDrip) {
            // default xDrip data
            case CUSTOM_WIDGETS.XDRIP:
                let treatmentsText = treatmentObj.getTreatments();
                if (treatmentsText !== "") {
                    treatmentsText = treatmentsText + " " + watchdripData.getTimeAgo(treatmentObj.time);
                };
                aapsTimeText.setProperty(hmUI.prop.TEXT, treatmentsText);
                break;
            // Fill data from modified xDrip ExternalStatusService.getLastStatusLine()    
            case CUSTOM_WIDGETS.AAPS:
                aapsTimeText.setProperty(hmUI.prop.TEXT, watchdripData.getTimeAgo(treatmentObj.time));
                break;
        };
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
