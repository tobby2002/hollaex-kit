const UP_COLOR_WHITE = "#D6FFE7";
const DOWN_COLOR_WHITE = "#ED1C24";
const UP_COLOR_DARK = "#6D9EEB";
const DOWN_COLOR_DARK = "#FF9800";


export const WHITE_THEME = {
	"paneProperties.background": "#ffffff",
	"paneProperties.vertGridProperties.color": "#E6ECEF",
	"paneProperties.horzGridProperties.color": "#E6ECEF",
	// "paneProperties.crossHairProperties.color": "#1f212a",
	"symbolWatermarkProperties.transparency": 90,
	"symbolWatermarkProperties.color": '#1f212a',
	"scalesProperties.textColor": "#292b2c",
	"scalesProperties.backgroundColor": "#ffffff",
	// Candles-property
	"mainSeriesProperties.candleStyle.upColor": UP_COLOR_WHITE,
	"mainSeriesProperties.candleStyle.downColor": DOWN_COLOR_WHITE,
	"mainSeriesProperties.candleStyle.drawWick": true,
	"mainSeriesProperties.candleStyle.drawBorder": true,
	"mainSeriesProperties.candleStyle.borderUpColor": UP_COLOR_WHITE,
	"mainSeriesProperties.candleStyle.borderDownColor": DOWN_COLOR_WHITE,
	"mainSeriesProperties.candleStyle.wickUpColor": UP_COLOR_WHITE,
	"mainSeriesProperties.candleStyle.wickDownColor": DOWN_COLOR_WHITE,
	"mainSeriesProperties.candleStyle.barColorsOnPrevClose": true,

	//  Hollow Candles styles
	"mainSeriesProperties.hollowCandleStyle.upColor": UP_COLOR_WHITE,
	"mainSeriesProperties.hollowCandleStyle.downColor": DOWN_COLOR_WHITE,
	"mainSeriesProperties.hollowCandleStyle.drawWick": true,
	"mainSeriesProperties.hollowCandleStyle.drawBorder": true,
	"mainSeriesProperties.hollowCandleStyle.borderColor": DOWN_COLOR_WHITE,
	"mainSeriesProperties.hollowCandleStyle.borderUpColor": UP_COLOR_WHITE,
	"mainSeriesProperties.hollowCandleStyle.borderDownColor": DOWN_COLOR_WHITE,
	"mainSeriesProperties.hollowCandleStyle.wickUpColor": UP_COLOR_WHITE,
	"mainSeriesProperties.hollowCandleStyle.wickDownColor": DOWN_COLOR_WHITE,

	//  Heiken Ashi styles
	"mainSeriesProperties.haStyle.upColor": UP_COLOR_WHITE,
	"mainSeriesProperties.haStyle.downColor": DOWN_COLOR_WHITE,
	"mainSeriesProperties.haStyle.drawWick": true,
	"mainSeriesProperties.haStyle.drawBorder": true,
	"mainSeriesProperties.haStyle.borderColor": DOWN_COLOR_WHITE,
	"mainSeriesProperties.haStyle.borderUpColor": UP_COLOR_WHITE,
	"mainSeriesProperties.haStyle.borderDownColor": DOWN_COLOR_WHITE,
	"mainSeriesProperties.haStyle.wickColor": DOWN_COLOR_WHITE,
	"mainSeriesProperties.haStyle.barColorsOnPrevClose": false,

	//	Bars styles
	"mainSeriesProperties.barStyle.upColor": UP_COLOR_WHITE,
	"mainSeriesProperties.barStyle.downColor": DOWN_COLOR_WHITE,
	"mainSeriesProperties.barStyle.barColorsOnPrevClose": false,
	"mainSeriesProperties.barStyle.dontDrawOpen": false,


	//	Area styles
	"mainSeriesProperties.areaStyle.color1": UP_COLOR_WHITE,
	"mainSeriesProperties.areaStyle.color2": DOWN_COLOR_WHITE,
	"mainSeriesProperties.areaStyle.linecolor": DOWN_COLOR_WHITE,
	// "mainSeriesProperties.areaStyle.linestyle": CanvasEx.LINESTYLE_SOLID,
	"mainSeriesProperties.areaStyle.linewidth": 1,
	"mainSeriesProperties.areaStyle.priceSource": "close",

	//  Baseline styles
	"mainSeriesProperties.baselineStyle.baselineColor": UP_COLOR_WHITE,
	"mainSeriesProperties.baselineStyle.topFillColor1": UP_COLOR_WHITE,
	"mainSeriesProperties.baselineStyle.topFillColor2": UP_COLOR_WHITE,
	"mainSeriesProperties.baselineStyle.bottomFillColor1": DOWN_COLOR_WHITE,
	"mainSeriesProperties.baselineStyle.bottomFillColor2": DOWN_COLOR_WHITE,
	"mainSeriesProperties.baselineStyle.topLineColor": UP_COLOR_WHITE,
	"mainSeriesProperties.baselineStyle.bottomLineColor": DOWN_COLOR_WHITE,
	"mainSeriesProperties.baselineStyle.topLineWidth": 1,
	"mainSeriesProperties.baselineStyle.bottomLineWidth": 1,
	"mainSeriesProperties.baselineStyle.priceSource": "close",
	"mainSeriesProperties.baselineStyle.transparency": 50,
	"mainSeriesProperties.baselineStyle.baseLevelPercentage": 50
};

export const DARK_THEME = {
	"paneProperties.background": "#1F212A",
	"paneProperties.vertGridProperties.color": "#34416D",
	"paneProperties.horzGridProperties.color": "#0C1D51",
	// "paneProperties.crossHairProperties.color": "#aaaaaa",
	"symbolWatermarkProperties.transparency": 90,
	"symbolWatermarkProperties.color": '#aaaaaa',
	"scalesProperties.textColor": "#AAA",
	"scalesProperties.backgroundColor": "#000000",

	// Candles-property
	"mainSeriesProperties.candleStyle.upColor": UP_COLOR_DARK,
	"mainSeriesProperties.candleStyle.downColor": DOWN_COLOR_DARK,
	"mainSeriesProperties.candleStyle.drawWick": true,
	"mainSeriesProperties.candleStyle.drawBorder": true,
	"mainSeriesProperties.candleStyle.borderUpColor": UP_COLOR_DARK,
	"mainSeriesProperties.candleStyle.borderDownColor": DOWN_COLOR_DARK,
	"mainSeriesProperties.candleStyle.wickUpColor": UP_COLOR_DARK,
	"mainSeriesProperties.candleStyle.wickDownColor": DOWN_COLOR_DARK,
	"mainSeriesProperties.candleStyle.barColorsOnPrevClose": true,

	//  Hollow Candles styles
	"mainSeriesProperties.hollowCandleStyle.upColor": UP_COLOR_DARK,
	"mainSeriesProperties.hollowCandleStyle.downColor": DOWN_COLOR_DARK,
	"mainSeriesProperties.hollowCandleStyle.drawWick": true,
	"mainSeriesProperties.hollowCandleStyle.drawBorder": true,
	"mainSeriesProperties.hollowCandleStyle.borderColor": DOWN_COLOR_DARK,
	"mainSeriesProperties.hollowCandleStyle.borderUpColor": UP_COLOR_DARK,
	"mainSeriesProperties.hollowCandleStyle.borderDownColor": DOWN_COLOR_DARK,
	"mainSeriesProperties.hollowCandleStyle.wickUpColor": UP_COLOR_DARK,
	"mainSeriesProperties.hollowCandleStyle.wickDownColor": DOWN_COLOR_DARK,

	//  Heiken Ashi styles
	"mainSeriesProperties.haStyle.upColor": UP_COLOR_DARK,
	"mainSeriesProperties.haStyle.downColor": DOWN_COLOR_DARK,
	"mainSeriesProperties.haStyle.drawWick": true,
	"mainSeriesProperties.haStyle.drawBorder": true,
	"mainSeriesProperties.haStyle.borderColor": DOWN_COLOR_DARK,
	"mainSeriesProperties.haStyle.borderUpColor": UP_COLOR_DARK,
	"mainSeriesProperties.haStyle.borderDownColor": DOWN_COLOR_DARK,
	"mainSeriesProperties.haStyle.wickColor": DOWN_COLOR_DARK,
	"mainSeriesProperties.haStyle.barColorsOnPrevClose": false,
	"mainSeriesProperties.haStyle.wickUpColor": UP_COLOR_DARK,
	"mainSeriesProperties.haStyle.wickDownColor": DOWN_COLOR_DARK,
	
	//	Bars styles
	"mainSeriesProperties.barStyle.upColor": UP_COLOR_DARK,
	"mainSeriesProperties.barStyle.downColor": DOWN_COLOR_DARK,
	"mainSeriesProperties.barStyle.barColorsOnPrevClose": false,
	"mainSeriesProperties.barStyle.dontDrawOpen": false,

	//	Area styles
	"mainSeriesProperties.areaStyle.color1": UP_COLOR_DARK,
	"mainSeriesProperties.areaStyle.color2": DOWN_COLOR_DARK,
	"mainSeriesProperties.areaStyle.linecolor": UP_COLOR_DARK,
	// "mainSeriesProperties.areaStyle.linestyle": CanvasEx.LINESTYLE_SOLID,
	"mainSeriesProperties.areaStyle.linewidth": 1,
	"mainSeriesProperties.areaStyle.priceSource": "close",

	//  Baseline styles
	"mainSeriesProperties.baselineStyle.baselineColor": UP_COLOR_DARK,
	"mainSeriesProperties.baselineStyle.topFillColor1": UP_COLOR_DARK,
	"mainSeriesProperties.baselineStyle.topFillColor2": UP_COLOR_DARK,
	"mainSeriesProperties.baselineStyle.bottomFillColor1": DOWN_COLOR_DARK,
	"mainSeriesProperties.baselineStyle.bottomFillColor2": DOWN_COLOR_DARK,
	"mainSeriesProperties.baselineStyle.topLineColor": UP_COLOR_DARK,
	"mainSeriesProperties.baselineStyle.bottomLineColor": DOWN_COLOR_DARK,
	"mainSeriesProperties.baselineStyle.topLineWidth": 1,
	"mainSeriesProperties.baselineStyle.bottomLineWidth": 1,
	"mainSeriesProperties.baselineStyle.priceSource": "close",
	"mainSeriesProperties.baselineStyle.transparency": 50,
	"mainSeriesProperties.baselineStyle.baseLevelPercentage": 50
};

export const VOLUME_WHITE = {
	"volume.volume.color.0": UP_COLOR_WHITE,
	"volume.volume.color.1": DOWN_COLOR_WHITE,
	"volume.volume.transparency": 50,
};

export const VOLUME_DARK = {
	"volume.volume.color.0": UP_COLOR_DARK,
	"volume.volume.color.1": DOWN_COLOR_DARK,
	"volume.volume.transparency": 50,
};
