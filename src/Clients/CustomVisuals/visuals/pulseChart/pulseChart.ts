/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

module powerbi.visuals.samples {
    import SelectionManager = utility.SelectionManager;
    import ValueFormatter = powerbi.visuals.valueFormatter;
    import ClassAndSelector = jsCommon.CssConstants.ClassAndSelector;
    import createClassAndSelector = jsCommon.CssConstants.createClassAndSelector;
    import AxisScale = powerbi.visuals.axisScale;
    import TextMeasurementService = powerbi.TextMeasurementService;

    export interface PulseChartConstructorOptions {
        animator?: IGenericAnimator;
        svg?: D3.Selection;
        behavior?: IInteractiveBehavior;
    }

    export interface PulseBehaviorOptions {
        layerOptions?: any[];
        clearCatcher: D3.Selection;
    }

    export interface TooltipSettings {
        dataPointColor: string;
        marginTop: number;
        height: number;
        timeWidth: number;
        timeHeight: number;
    }

    export interface PulseChartSeries extends LineChartSeries {
        name?: string;
        data: PulseChartDataPoint[];
        color: string;
        identity: SelectionId;
        width: number;
        xAxis?: D3.Svg.Axis;
        widthOfGap: number;
    }

    export interface PulseChartTooltipData {
        time: string;
        title: string;
        description: string;
    }

    export interface PulseChartPointXY {
        x: number;
        y: number;
    }

    export interface PulseChartDataPoint extends LineChartDataPoint, PulseChartPointXY {
        popupInfo?: PulseChartTooltipData;
    }

    export interface PulseChartLegend extends DataViewObject {
        show?: boolean;
        showTitle?: boolean;
        titleText?: string;
        position?: LegendPosition;
    }

    export interface PulseChartPopup {
        showType: string;
        width: number;
        color: string;
        fontSize: number;
        fontColor: string;
        showTime: boolean;
        timeColor: string;
        timeFill: string;
        dotSize: number;
    }

    module PulseChartPopupShow {
        export var HIDE: string = 'Hide';
        export var SELECTED: string = 'Selected';
        export var ALWAYS: string = 'Always';

        export var type: IEnumType = createEnumType([
            { value: HIDE, displayName: PulseChartPopupShow.HIDE },
            { value: SELECTED, displayName: PulseChartPopupShow.SELECTED },
            { value: ALWAYS, displayName: PulseChartPopupShow.ALWAYS },
        ]);
    }

    export interface PulseChartSeriesSetting {
        fill: string;
        width: number;
        showByDefault: boolean;
    }

    export interface PulseChartPlaybackSetting {
        pauseDuration: number;
        playSpeed: number;
        autoplay: boolean;
        autoplayPauseDuration: number;
    }

    export interface PulseChartXAxisSettings {
        show: boolean;
        step: number;
    }

    export interface PulseChartSettings {
        displayName?: string;
        fillColor?: string;
        precision: number;
        legend?: PulseChartLegend;
        colors?: IColorPalette;
        series: PulseChartSeriesSetting;
        popup: PulseChartPopup;
        xAxis: PulseChartXAxisSettings;
        playback: PulseChartPlaybackSetting;
        format?: string;
    }

    export interface PulseChartData {
        categoryMetadata: DataViewMetadataColumn;
        hasHighlights?: boolean;

        series: PulseChartSeries[];
        isScalar?: boolean;
        dataLabelsSettings: PointDataLabelsSettings;
        axesLabels: ChartAxesLabels;
        hasDynamicSeries?: boolean;
        defaultSeriesColor?: string;
        categoryData?: LineChartCategoriesData[];

        categories: any[];
        legendData?: LegendData;

        grouped: DataViewValueColumnGroup[];

        xScale?: D3.Scale.GenericScale<D3.Scale.TimeScale | D3.Scale.LinearScale>;
        commonYScale?: D3.Scale.LinearScale;
        yScales?: D3.Scale.LinearScale[];

        yAxis?: D3.Svg.Axis;

        // yAxisProperties?: IAxisProperties;
        settings?: PulseChartSettings;
        formatter?: IValueFormatter;
    }

    interface PulseChartProperty {
        [propertyName: string]: DataViewObjectPropertyIdentifier;
    }

    interface PulseChartProperties {
        [objectName: string]: PulseChartProperty;
    }

    interface PulseChartXAxisProperties {
        values: (Date | number)[];
        scale: D3.Scale.TimeScale;
        formatter: IValueFormatter;
    }

    interface PulseChartPoint {
        x: number;
        value: Date | number;
    }

    export class PulseChart implements IVisual {

        public static RoleNames = {
            Timestamp: "Timestamp",
            Category: "Category",
            Value: "Value",
            EventTitle: "EventTitle",
            EventDescription: "EventDescription",
        };

        public static capabilities: VisualCapabilities = {
            dataRoles: [
                {
                    displayName: PulseChart.RoleNames.Timestamp,
                    name: PulseChart.RoleNames.Timestamp,
                    kind: powerbi.VisualDataRoleKind.Grouping
                },
                {
                    displayName: PulseChart.RoleNames.Value,
                    name: PulseChart.RoleNames.Value,
                    kind: powerbi.VisualDataRoleKind.Measure
                },
                {
                    displayName: PulseChart.RoleNames.Category,
                    name: PulseChart.RoleNames.Category,
                    kind: powerbi.VisualDataRoleKind.Grouping
                },
                {
                    displayName: PulseChart.RoleNames.EventTitle,
                    name: PulseChart.RoleNames.EventTitle,
                    kind: powerbi.VisualDataRoleKind.GroupingOrMeasure
                },
                {
                    displayName: PulseChart.RoleNames.EventDescription,
                    name: PulseChart.RoleNames.EventDescription,
                    kind: powerbi.VisualDataRoleKind.GroupingOrMeasure
                },
            ],
            dataViewMappings: [{
                conditions: [
                    {
                        'Timestamp': { min: 1, max: 1 },
                        'Value': { max: 0 },
                        'Category': { max: 0 },
                        'EventTitle': { max: 0 },
                        'EventDescription': { max: 0 }
                    },
                    {
                        'Timestamp': { min: 1, max: 1 },
                        'Value': { min: 1, max: 1 },
                        'Category': { max: 0 },
                        'EventTitle': { max: 0 },
                        'EventDescription': { max: 0 }
                    },
                    {
                        'Timestamp': { min: 1, max: 1 },
                        'Value': { min: 1, max: 1 },
                        'Category': { max: 1 },
                        'EventTitle': { max: 1 },
                        'EventDescription': { max: 1 }
                    }
                ],
                categorical: {
                    categories: {
                        for: { in: PulseChart.RoleNames.Timestamp },
                        dataReductionAlgorithm: { top: { count: 10000 } }
                    },
                    values: {
                        group: {
                            by: PulseChart.RoleNames.Category,
                            select: [
                                { bind: { to: PulseChart.RoleNames.Value } },
                                { bind: { to: PulseChart.RoleNames.EventTitle } },
                                { bind: { to: PulseChart.RoleNames.EventDescription } }
                            ],
                            dataReductionAlgorithm: { top: {} }
                        },
                    },
                },
            }],
            objects: {
                series: {
                    displayName: "Series",
                    description: "Series",
                    properties: {
                        fill: {
                            displayName: data.createDisplayNameGetter('Visual_Fill'),
                            type: {
                                fill: {
                                    solid: {
                                        color: true
                                    }
                                }
                            }
                        },
                        width: {
                            displayName: 'Width',
                            type: {
                                numeric: true
                            }
                        },
                        showByDefault: {
                            displayName: 'Show by default',
                            type: {
                                bool: true
                            }
                        },
                    }
                },
                general: {
                    displayName: 'General',
                    properties: {
                        formatString: { type: { formatting: { formatString: true } } },
                        fill: {
                            displayName: 'Background color',
                            type: { fill: { solid: { color: true } } }
                        }
                    }
                },
                popup: {
                    displayName: 'Popup',
                    properties: {
                        showType: {
                            displayName: "Show",
                            type: { enumeration: PulseChartPopupShow.type }
                        },
                        width: {
                            displayName: 'Width',
                            type: {
                                numeric: true
                            }
                        },
                        color: {
                            displayName: data.createDisplayNameGetter('Visual_Fill'),
                            type: { fill: { solid: { color: true } } }
                        },
                        fontSize: {
                            displayName: "Text size",
                            type: { formatting: { fontSize: true } }
                        },
                        fontColor: {
                            displayName: "Text color",
                            type: { fill: { solid: { color: true } } }
                        },
                        showTime: {
                            displayName: 'Show time',
                            type: { bool: true }
                        },
                        timeColor: {
                            displayName: "Time color",
                            type: { fill: { solid: { color: true } } }
                        },
                        timeFill: {
                            displayName: "Time fill",
                            type: { fill: { solid: { color: true } } }
                        },
                        dotSize: {
                            displayName: "Dot Size",
                            type: { numeric: true }
                        },
                    }
                },
                xAxis: {
                    displayName: data.createDisplayNameGetter('Visual_XAxis'),
                    properties: {
                        show: {
                            displayName: data.createDisplayNameGetter("Visual_Show"),
                            type: { bool: true }
                        },
                        step: {
                            displayName: "Step",
                            type: { numeric: true }
                        }
                    }
                },
                playback: {
                    displayName: 'Playback',
                    properties: {
                        autoplay: {
                            displayName: "Autoplay",
                            type: { bool: true }
                        },
                        playSpeed: {
                            displayName: "Play Speed",
                            type: { numeric: true }
                        },
                        pauseDuration: {
                            displayName: "Pause Duration",
                            type: { numeric: true }
                        },
                        autoplayPauseDuration: {
                            displayName: "Start Delay",
                            type: { numeric: true }
                        },
                    }
                },
            },
            sorting: {
                default: {},
            }
        };

        private static Properties: PulseChartProperties = {
            general: {
                formatString: {
                    objectName: "general",
                    propertyName: "formatString"
                }
            },
            legend: {
                show: { objectName: 'legend', propertyName: 'show' },
                position: { objectName: 'legend', propertyName: 'position' },
                showTitle: { objectName: 'legend', propertyName: 'showTitle' },
                titleText: { objectName: 'legend', propertyName: 'titleText' },
            },
            series: {
                fill: { objectName: 'series', propertyName: 'fill' },
                width: { objectName: 'series', propertyName: 'width' },
                showByDefault: { objectName: 'series', propertyName: 'showByDefault' },
            },
            labels: {
                labelPrecision: {
                    objectName: "labels",
                    propertyName: "labelPrecision"
                }
            },
            popup: {
                showType: {
                    objectName: "popup",
                    propertyName: "showType"
                },
                width: {
                    objectName: "popup",
                    propertyName: "width"
                },
                color: {
                    objectName: "popup",
                    propertyName: "color"
                },
                fontSize: {
                    objectName: "popup",
                    propertyName: "fontSize"
                },
                fontColor: {
                    objectName: "popup",
                    propertyName: "fontColor"
                },
                showTime: {
                    objectName: 'popup',
                    propertyName: 'showTime'
                },
                timeColor: {
                    objectName: "popup",
                    propertyName: "timeColor"
                },
                timeFill: {
                    objectName: "popup",
                    propertyName: "timeFill"
                },
                dotSize: {
                    objectName: "popup",
                    propertyName: "dotSize"
                }
            },
            xAxis: {
                show: {
                    objectName: "xAxis",
                    propertyName: "show"
                },
                step: {
                    objectName: "xAxis",
                    propertyName: "step"
                }
            },
            playback: {
                autoplay: {
                    objectName: "playback",
                    propertyName: "autoplay"
                },
                playSpeed: {
                    objectName: "playback",
                    propertyName: "playSpeed"
                },
                pauseDuration: {
                    objectName: "playback",
                    propertyName: "pauseDuration"
                },
                autoplayPauseDuration: {
                    objectName: "playback",
                    propertyName: "autoplayPauseDuration"
                },
            },
        };

        private static DefaultTextProperties: TextProperties = {
            fontFamily: "Segoe UI,Tahoma,Verdana,Geneva,sans-serif",
            fontSize: "11px"
        };

        private static DateTimeFormatString: string = "%H:mm";

        private static DefaultSettings: PulseChartSettings = {
            precision: 0,
            popup: {
                showType: PulseChartPopupShow.ALWAYS,
                width: 100,
                color: "#808181",
                fontSize: 10,
                fontColor: 'white',
                showTime: true,
                timeColor: 'white',
                timeFill: '#010101',
                dotSize: 5,
            },
            series: {
                fill: "#3779B7",
                width: 2,
                showByDefault: true
            },
            xAxis: {
                step: 30,
                show: true
            },
            playback: {
                autoplay: true,
                playSpeed: 5,
                pauseDuration: 10,
                autoplayPauseDuration: 0
            }
        };

        private static MaxWidthOfLabel: number = 40;
        private static MaxWidthOfYAxis: number = 50;

        private svg: D3.Selection;
        private chart: D3.Selection;
        private xAxis: D3.Selection;
        private yAxis: D3.Selection;
        private gaps: D3.Selection;

        private animationDot: D3.Selection;

        private lineX: D3.Svg.Line;

        private data: PulseChartData;

        private yDomain: number[] = [];

        private selectionManager: SelectionManager;

        private animator: IGenericAnimator;

        private animationHandler: PulseAnimator;

        private behavior: IInteractiveBehavior;
        private colors: IDataColorPalette;

        private viewport: IViewport;
        private margin: IMargin;

        private static DefaultMargin: IMargin = {
            top: 120,
            bottom: 100,
            right: 45,
            left: 45,
        };

        private static DefaultViewport: IViewport = {
            width: 50,
            height: 50
        };

        private static DefaultTooltipSettings: TooltipSettings = {
            dataPointColor: "#808181",
            marginTop: 20,
            height: 64,
            timeWidth: 35,
            timeHeight: 15,
        };

        private static dotSizeMin = 1;
        private static dotSizeMax = 10;

        private static MinInterval = 60 * 1000;

        private static MaxCountOfTicksOnYAxis: number = 3;

        private lastSelectedPoint: SelectionId;

        private scaleType: string = AxisScale.linear;

        private static Chart: ClassAndSelector = createClassAndSelector('chart');
        private static Line: ClassAndSelector  = createClassAndSelector('line');
        //private static Lines: ClassAndSelector = createClassAndSelector('lines');
        //private static Node: ClassAndSelector  = createClassAndSelector('node');
        private static LineNode: ClassAndSelector = createClassAndSelector('lineNode');
        //private static Axis: ClassAndSelector = createClassAndSelector('axis');
        private static AxisNode: ClassAndSelector = createClassAndSelector('axisNode');
        private static Dot: ClassAndSelector  = createClassAndSelector('dot');
        //private static Dots: ClassAndSelector = createClassAndSelector('dots');
        private static Tooltip: ClassAndSelector = createClassAndSelector('Tooltip');
        private static TooltipRect: ClassAndSelector = createClassAndSelector('tooltipRect');
        private static TooltipTriangle: ClassAndSelector = createClassAndSelector('tooltipTriangle');
        private static Gaps: ClassAndSelector = createClassAndSelector("gaps");
        private static Gap: ClassAndSelector = createClassAndSelector("gap");
        private static GapNode: ClassAndSelector = createClassAndSelector("gapNode");
        private static TooltipLine: ClassAndSelector = createClassAndSelector('tooltipLine');
        private static TooltipTime: ClassAndSelector = createClassAndSelector('tooltipTime');
        private static TooltipTimeRect: ClassAndSelector = createClassAndSelector('tooltipTimeRect');
        private static TooltipTitle: ClassAndSelector = createClassAndSelector('tooltipTitle');
        private static TooltipDescription: ClassAndSelector = createClassAndSelector('tooltipDescription');

        private static AnimationDot: ClassAndSelector = createClassAndSelector('animationDot');

        private rootSelection: D3.UpdateSelection;
        private animationSelection: D3.UpdateSelection;

        public constructor(options?: PulseChartConstructorOptions) {
            if (options) {
                if (options.svg) {
                    this.svg = options.svg;
                }
                if (options.animator) {
                    //this.animator = options.animator;
                }
                if (options.behavior) {
                    this.behavior = options.behavior;
                }
            } else {
                this.behavior = new PulseBehavior([new ColumnChartWebBehavior()]);
            }

            this.margin = PulseChart.DefaultMargin;
        }

        private static getMeasureIndexOfRole(categories: DataViewCategoryColumn[], roleName: string): number {
          for (var i = 0; i < categories.length; i++) {
              if (categories[i].source &&
                  categories[i].source.roles &&
                  categories[i].source.roles[roleName]) {
                  return i;
              }
          }

          return -1;
        }

        public converter(dataView: DataView, interactivityService?: IInteractivityService): PulseChartData {
            //console.log('PulseChart converter');

            if (!dataView.categorical
                || !dataView.categorical.values
                || !dataView.categorical.values[0]
                || !dataView.categorical.values[0].values
                || !dataView.categorical.categories) {
                    return null;
            }

            // var isScalar: boolean = CartesianChart.getIsScalar(
            //     dataView.metadata ? dataView.metadata.objects : null,
            //     PulseChart.Properties["general"]["formatString"],
            //     ValueType.fromDescriptor({ text: true }));

            var isScalar: boolean =
                dataView && dataView.categorical && dataView.categorical.categories &&
                dataView.categorical.categories[0] && dataView.categorical.categories[0].source &&
                dataView.categorical.categories[0].source.type && dataView.categorical.categories[0].source.type.dateTime
                ? false
                : true;

            var categories: DataViewCategoryColumn[] = dataView.categorical.categories;
            var settings: PulseChartSettings = this.parseSettings(dataView, isScalar);
            var categoryMeasureIndex = PulseChart.getMeasureIndexOfRole(categories, PulseChart.RoleNames.Timestamp);
            var eventTitleMeasureIndex = PulseChart.getMeasureIndexOfRole(categories, PulseChart.RoleNames.EventTitle);
            var eventDescriptionMeasureIndex = PulseChart.getMeasureIndexOfRole(categories, PulseChart.RoleNames.EventDescription);

            if (categoryMeasureIndex < 0) {
                // console.error("categoryMeasureIndex not found");
                return null;
            }

            var category: DataViewCategoryColumn = dataView.categorical.categories[categoryMeasureIndex];
            if (!category) {
                // console.error("dataView.categorical.categories[categoryMeasureIndex] not found");
                return null;
            }

            var categoryValues: any[] = category.values;

            if (!categoryValues || _.isEmpty(dataView.categorical.values)) {
                return null;
            }

            var eventTitleValues: any[] = [];
            if (eventTitleMeasureIndex >= 0) {
                eventTitleValues = dataView.categorical.categories[eventTitleMeasureIndex].values;
            }

            var eventDescriptionValues: any[] = [];
            if (eventDescriptionMeasureIndex >= 0) {
                eventDescriptionValues = dataView.categorical.categories[eventDescriptionMeasureIndex].values;
            }

            var xAxisCardProperties: DataViewObject = CartesianHelper.getCategoryAxisProperties(dataView.metadata);
            isScalar = CartesianHelper.isScalar(isScalar, xAxisCardProperties);
            var categorical = ColumnUtil.applyUserMinMax(isScalar, dataView.categorical, xAxisCardProperties);

            var formatStringProp = PulseChart.Properties["general"]["formatString"];
            var categoryType: ValueType = AxisHelper.getCategoryValueType(category.source, isScalar);
            var isDateTime = AxisHelper.isDateTime(categoryType);
            //var categoryValues: any[] = category.values;
            var series: PulseChartSeries[] = [];
            var seriesLen = category.values ? category.values.length : 0;
            var hasDynamicSeries = !!(category.values && category.source);
            //var values: DataViewValueColumns = categorical.values;
            var values = dataView.categorical.categories;
            var labelFormatString: string = values && values[0] ? valueFormatter.getFormatString(values[0].source, formatStringProp) : undefined;
            var defaultLabelSettings: LineChartDataLabelsSettings = dataLabelUtils.getDefaultLineChartLabelSettings();

            var defaultSeriesColor: string;

            if (dataView.metadata && dataView.metadata.objects) {
                var objects = dataView.metadata.objects;
                defaultSeriesColor = DataViewObjects.getFillColor(objects, lineChartProps.dataPoint.defaultColor);

                //var labelsObj = <DataLabelObject>objects['labels'];
                //dataLabelUtils.updateLabelSettingsFromLabelsObject(labelsObj, defaultLabelSettings);
            }

            //var colorHelper = new ColorHelper(colors, lineChartProps.dataPoint.fill, defaultSeriesColor);

            var grouped: DataViewValueColumnGroup[];
            if (dataView.categorical.values) {
                grouped = dataView.categorical.values.grouped();
                //console.log("grouped", grouped);
            }

            var valueMeasureIndex = 0;

            if (valueMeasureIndex < 0) {
                console.error("valueMeasureIndex < 0");
            }

            seriesLen = 1;

            var seriesIndex: number = 0;
            var lastValue = null;

            var column = category;
            var valuesMetadata = column.source;
            var dataPoints: PulseChartDataPoint[] = [];
            var groupedIdentity = grouped[seriesIndex];

            var color = settings.series.fill;
            var width: number = settings.series.width;
            var seriesLabelSettings: LineChartDataLabelsSettings;

            if (!hasDynamicSeries) {
                var labelsSeriesGroup = grouped && grouped.length > 0 && grouped[0].values ? grouped[0].values[seriesIndex] : null;
                var labelObjects = (labelsSeriesGroup && labelsSeriesGroup.source && labelsSeriesGroup.source.objects) ? <DataLabelObject>labelsSeriesGroup.source.objects['labels'] : null;
                if (labelObjects) {
                    //seriesLabelSettings = Prototype.inherit(defaultLabelSettings);
                    //dataLabelUtils.updateLabelSettingsFromLabelsObject(labelObjects, seriesLabelSettings);
                }
            }

            var dataPointLabelSettings = (seriesLabelSettings) ? seriesLabelSettings : defaultLabelSettings;

            for (var categoryIndex = 0, seriesCategoryIndex = 0, len = column.values.length; categoryIndex < len; categoryIndex++ , seriesCategoryIndex++) {
                var categoryValue = categoryValues[categoryIndex];
                var value = AxisHelper.normalizeNonFiniteNumber(column.values[categoryIndex]);

                var identity = SelectionIdBuilder.builder()
                    .withCategory(column, categoryIndex)
                    .createSelectionId();

                var key = identity.getKey(),
                    widthOfGap: number = PulseChart.getWidthOfGap(categoryValue, lastValue, isDateTime),
                    isGap: boolean = PulseChart.isGap(widthOfGap, isDateTime);

                if (isGap && dataPoints.length > 0) {
                    series.push({
                        displayName: grouped[seriesIndex].name,
                        key: key,
                        lineIndex: seriesIndex,
                        color: color,
                        xCol: category.source,
                        yCol: column.source,
                        data: dataPoints,
                        identity: identity,
                        selected: false,
                        labelSettings: seriesLabelSettings,
                        width: width,
                        widthOfGap: widthOfGap
                    });

                    seriesCategoryIndex = 0;
                    dataPoints = [];
                }

                lastValue = categoryValue;

                // When Scalar, skip null categories and null values so we draw connected lines and never draw isolated dots.
                if (isScalar && (categoryValue === null || value === null)) {
                    continue;
                }

                var categorical: DataViewCategorical = dataView.categorical;
                var y0_group = groupedIdentity.values[valueMeasureIndex];
                //console.log('y0_group', y0_group);
                //var y1_group = groupedIdentity.values[valueMeasureIndex];

                var y0 = y0_group.values[categoryIndex];
                //var y1 = y1_group.values[categoryIndex];
                ////console.log('y0', y0);

                if (y0 === null) {
                    y0_group = grouped[1].values[valueMeasureIndex];
                    y0 = y0_group.values[categoryIndex];
                }

                var popupInfo: PulseChartTooltipData = null;

                if (eventTitleValues[categoryIndex] ||
                    eventDescriptionValues[categoryIndex]) {
                    var time = categoryValue;

                    if (isDateTime && categoryValue) {
                        var formatterTime = valueFormatter.create({ format: "hh:mm" });
                        time = formatterTime.format(categoryValue);
                    }

                    popupInfo = {
                        time: time,
                        title: eventTitleValues[categoryIndex],
                        description: eventDescriptionValues[categoryIndex]
                    };
                }

                var categoryValue = isDateTime && categoryValue ? categoryValue : categoryValue;

                var dataPoint: PulseChartDataPoint = {
                    categoryValue: categoryValue,
                    value: value,
                    categoryIndex: categoryIndex,
                    seriesIndex: seriesIndex,
                    tooltipInfo: null,//tooltipInfo,
                    popupInfo: popupInfo,
                    selected: false,
                    identity: identity,
                    key: JSON.stringify({ ser: key, catIdx: categoryIndex }),
                    labelFill: dataPointLabelSettings.labelColor,
                    labelFormatString: labelFormatString || valuesMetadata.format,
                    labelSettings: dataPointLabelSettings,
                    x: categoryValue,
                    y: y0,
                    pointColor: color,
                    groupIndex: PulseChart.getGroupIndex(categoryIndex, grouped)
                };

                dataPoints.push(dataPoint);
            }

            if (interactivityService) {
                interactivityService.applySelectionStateToData(dataPoints);
            }

            if (dataPoints.length > 0) {
                series.push({
                    displayName: grouped[seriesIndex].name,
                    key: key,
                    lineIndex: seriesIndex,
                    color: color,
                    xCol: category.source,
                    yCol: column.source,
                    data: dataPoints,
                    identity: identity,
                    selected: false,
                    labelSettings: seriesLabelSettings,
                    width: width,
                    widthOfGap: 0
                });
            }
            // }

            xAxisCardProperties = CartesianHelper.getCategoryAxisProperties(dataView.metadata);
            var valueAxisProperties = CartesianHelper.getValueAxisProperties(dataView.metadata);

            // Convert to DataViewMetadataColumn
            var valuesMetadataArray: powerbi.DataViewMetadataColumn[] = [];
            if (values) {
                for (var i = 0; i < values.length; i++) {

                    if (values[i] && values[i].source && values[i].source.displayName) {
                        valuesMetadataArray.push({ displayName: values[i].source.displayName });
                    }
                }
            }

            var axesLabels = converterHelper.createAxesLabels(xAxisCardProperties, valueAxisProperties, category.source, valuesMetadataArray);
            if (interactivityService) {
                interactivityService.applySelectionStateToData(series);
            }

            return {
                series: series,
                isScalar: isScalar,
                dataLabelsSettings: defaultLabelSettings,
                axesLabels: { x: axesLabels.xAxisLabel, y: axesLabels.yAxisLabel },
                hasDynamicSeries: hasDynamicSeries,
                categoryMetadata: category.source,
                categories: categoryValues,
                settings: settings,
                grouped: grouped
            };
        }

        private static getGroupIndex(index: number, grouped: DataViewValueColumnGroup[]): number {
            for (var i = 0; i < grouped.length; i++) {
                if (grouped[i].values && grouped[i].values[0] &&
                    grouped[i].values[0].values[index] !== undefined &&
                    grouped[i].values[0].values[index] !== null) {
                        return i;
                    }
            }

            return 0;
        }

        private static isGap(widthOfGap: number, isDate: boolean): boolean {
            // if (!isDate) {
            //     return widthOfGap > 1;
            // } else {
                return widthOfGap > PulseChart.MinInterval;
            // }
        }

        private static getWidthOfGap(newValue: Date | number, oldValue: Date | number, isDate): number {
            if (!newValue || !oldValue) {
                return 0;
            }

            var firstValue: number,
                secondValue: number;

            if (isDate) {
                firstValue = (<Date> oldValue).getTime();
                secondValue = (<Date> newValue).getTime();
            } else {
                firstValue = <number> oldValue;
                secondValue = <number> newValue;
            }

            return secondValue - firstValue;
        }

        public init(options: VisualInitOptions): void {
            (<any>powerbi.formattingService).initialize();//Fixes the framework bug: "Cannot read property 'getFormatString' of undefined".

            this.selectionManager = new SelectionManager({ hostServices: options.host });
            var svg: D3.Selection = this.svg = d3.select(options.element.get(0))
                .append('svg')
                .classed('pulseChart', true);

            this.gaps = svg.append('g').classed(PulseChart.Gaps.class, true);
            this.chart = svg.append('g').attr('class', PulseChart.Chart.class);
            this.xAxis = svg.append('g').attr('class', 'x axis');
            this.yAxis = svg.append('g').attr('class', 'y axis');
            this.animationDot = this.chart.append('circle').classed(PulseChart.AnimationDot.class, true).attr('display', 'none');

            this.animationHandler = new PulseAnimator(this, svg);

            var style: IVisualStyle = options.style;

            this.colors = style && style.colorPalette
                ? style.colorPalette.dataColors
                : new DataColorPalette();
        }

        public update(options: VisualUpdateOptions): void {

            if (!options || !options.dataViews || !options.dataViews[0]) {
                this.clear();
                return;
            }

            var dataView: DataView = options.dataViews[0];

            this.setSize(options.viewport);
            this.data = this.converter(dataView);
            if (!this.validateData(this.data)) {
                this.clear();
                return;
            }

            this.calculateAxesProperties();
            this.render(true);
        }

        private validateData(data: PulseChartData): boolean {
            if (!data) {
                return false;
            }

            if (data.categories.some(x => !(x instanceof Date || $.isNumeric(x)))) {
                return false;
            }

            return true;
        }

        private setSize(viewport: IViewport): void {
            var height: number,
                width: number;

            height = viewport.height - this.margin.top - this.margin.bottom;
            width = viewport.width - this.margin.left - this.margin.right - PulseChart.MaxWidthOfYAxis;

            height = Math.max(height, PulseChart.DefaultViewport.height);
            width  = Math.max(width, PulseChart.DefaultViewport.width);

            this.viewport = {
                height: height,
                width: width
            };

            this.updateElements(viewport.height, viewport.width);
        }

        private updateElements(height: number, width: number): void {
            this.svg.attr({
                'height': height,
                'width': width
            });

            this.gaps.attr('transform', SVGUtil.translate(this.margin.left, this.margin.top + (this.viewport.height / 2)));
            this.chart.attr('transform', SVGUtil.translate(this.margin.left, this.margin.top));
            this.yAxis.attr('transform', SVGUtil.translate(this.viewport.width + this.margin.left + PulseChart.MaxWidthOfYAxis, this.margin.top));
            this.xAxis.attr('transform', SVGUtil.translate(this.margin.left, this.margin.top + (this.viewport.height / 2)));
        }

        public calculateAxesProperties() {
            var xAxes: D3.Svg.Axis[],
                yScales: D3.Scale.LinearScale[];

            this.data.xScale = this.getXAxisScale();
            this.data.yScales = this.getYAxisScales();
            this.data.commonYScale = this.getCommonYAxisScale(this.data.yScales);

            this.data.yAxis = this.createAxisY();

            xAxes = this.createAxisX(
                this.data.isScalar,
                this.data.series,
                <D3.Scale.LinearScale> this.data.xScale,
                this.data.settings.format,
                this.data.settings.xAxis.step,
                this.data.settings.xAxis.show);

            this.data.series.forEach((series: PulseChartSeries, index: number) => {
                series.xAxis = xAxes[index];
            });
        }

        private getXAxisScale(): D3.Scale.GenericScale<D3.Scale.TimeScale | D3.Scale.LinearScale> {
            var data: PulseChartData = this.data;

            return this.createScale(
                data.isScalar,
                [data.categories[0], data.categories[data.categories.length - 1]],
                0,
                this.viewport.width);
        }

        private createScale(isScalar: boolean, domain: (number | Date)[], minX: number, maxX: number): D3.Scale.GenericScale<D3.Scale.LinearScale | D3.Scale.TimeScale> {
            var scale: D3.Scale.GenericScale<D3.Scale.LinearScale | D3.Scale.TimeScale>;

            if (isScalar) {
                scale = d3.scale.linear();
            } else {
                scale = d3.time.scale();
            }

            return scale
                .domain(domain)
                .rangeRound([minX, maxX]);
        }

        private getCommonYAxisScale(scales: D3.Scale.LinearScale[]): D3.Scale.LinearScale {
            var domain: number[] = [];

            scales.forEach((scale: D3.Scale.LinearScale) => domain = domain.concat(scale.domain()));

            return <D3.Scale.LinearScale> this.createScale(
                true,
                [d3.max(domain), d3.min(domain)],
                0,
                this.viewport.height);
        }

        private getYAxisScales(): D3.Scale.LinearScale[] {
            var data: PulseChartData = this.data,
                stepOfHeight: number = this.viewport.height / data.grouped.length;

            return <D3.Scale.LinearScale[]> data.grouped.map((group: DataViewValueColumnGroup, index: number) => {
                var values: number[] = group.values[0].values.filter((value: any) => {
                    if (value !== null && value !== undefined) {
                        return true;
                    }

                    return false;
                });

                var minValue: number = Number.MAX_VALUE,
                    maxValue: number = -Number.MAX_VALUE;

                values.forEach((value: number) => {
                    if (value < minValue) {
                        minValue = value;
                    }

                    if (value > maxValue) {
                        maxValue = value;
                    }
                });

                return this.createScale(true, [maxValue, minValue], stepOfHeight * index, stepOfHeight * (index + 1));
            });
        }

        private createAxisY(): D3.Svg.Axis {
            var formatter: IValueFormatter,
                data: PulseChartData = this.data,
                scale: D3.Scale.GenericScale<D3.Scale.LinearScale | D3.Scale.OrdinalScale> = this.data.commonYScale,
                categoryDomain: string[] = [];

            data.grouped.forEach((group: DataViewValueColumnGroup) => {
                if (!group.name) {
                    return;
                }

                if (!categoryDomain.some((categoryDomainValue: string) => categoryDomainValue === group.name)) {
                    categoryDomain.push(group.name);
                }
            });

            if (categoryDomain.length > 0) {
                scale = d3.scale.ordinal()
                    .rangePoints([0, this.viewport.height])
                    .domain(categoryDomain);
            }

            formatter = valueFormatter.create({
                value: scale.domain()[0],
                value2: scale.domain()[1]
            });

            return d3.svg.axis()
                .scale(scale)
                .tickFormat((value: any) => {
                    return TextMeasurementService.getTailoredTextOrDefault({
                        text: formatter.format(value),
                        fontFamily: PulseChart.DefaultTextProperties.fontFamily,
                        fontSize: PulseChart.DefaultTextProperties.fontSize
                    }, PulseChart.MaxWidthOfYAxis);
                })
                .ticks(PulseChart.MaxCountOfTicksOnYAxis);
        }

        private createAxisX(
            isScalar: boolean,
            series: PulseChartSeries[],
            originalScale: D3.Scale.GenericScale<D3.Scale.TimeScale | D3.Scale.LinearScale>,
            formatString: string,
            step: number = 30,
            show: boolean = true): D3.Svg.Axis[] {

            var xAxisProperties: PulseChartXAxisProperties[] = [];

            xAxisProperties = series.map((seriesElement: PulseChartSeries) => {
                var formatter: IValueFormatter,
                    scale: D3.Scale.GenericScale<D3.Scale.TimeScale | D3.Scale.LinearScale>,
                    dataPoints: PulseChartDataPoint[] = seriesElement.data,
                    minValue: number | Date = dataPoints[0].categoryValue,
                    maxValue: number | Date = dataPoints[dataPoints.length - 1].categoryValue,
                    minX: number = originalScale(dataPoints[0].categoryValue),
                    maxX: number = originalScale(dataPoints[dataPoints.length - 1].categoryValue),
                    values: (Date | number)[] = [];

                scale = this.createScale(isScalar, [minValue, maxValue], minX, maxX);

                formatter = valueFormatter.create({
                    format: formatString,
                    value: minValue,
                    value2: maxValue
                });

                if (show) {
                    if (isScalar) {
                        values = d3.range(<number>minValue, <number>maxValue, step);
                    } else {
                        values = d3.time.minute.range(<Date>minValue, <Date>maxValue, step);
                    }
                }

                return <PulseChartXAxisProperties> {
                    values: values,
                    scale: scale,
                    formatter: formatter
                };
            });

            this.resolveIntersections(xAxisProperties);

            return xAxisProperties.map((properties: PulseChartXAxisProperties) => {
                var values: (Date | number)[] = properties.values.filter((value: Date | number) => value !== null);

                return d3.svg.axis()
                    .scale(properties.scale)
                    .tickValues(values)
                    .tickFormat((value: Date) => {
                        return properties.formatter.format(value);
                    });
            });
        }

        private resolveIntersections(xAxisProperties: PulseChartXAxisProperties[]): void {
            var leftPoint: PulseChartPoint = null,
                rightPoint: PulseChartPoint = null,
                currentPoint: PulseChartPoint = null;

            xAxisProperties.forEach((properties: PulseChartXAxisProperties) => {
                var scale: D3.Scale.GenericScale<D3.Scale.TimeScale | D3.Scale.LinearScale> = properties.scale,
                    length: number = properties.values.length;

                for (var i = 0; i < length; i++) {
                    var currentValue: Date | number = properties.values[i];

                    currentPoint = {
                        value: properties.values[i],
                        x: scale(currentValue)
                    };

                    if (!leftPoint) {
                        var leftValue: Date | number = properties.values[i - 1];

                        leftPoint = {
                            value: leftValue,
                            x: scale(leftValue)
                        };
                    }

                    if (this.isIntersect(leftPoint, currentPoint)) {
                        properties.values[i] = null;
                        rightPoint = null;

                        continue;
                    }

                    if (!rightPoint && i < length - 1) {
                        var rightValue: Date | number = properties.values[i + 1];

                        rightPoint = {
                            value: rightValue,
                            x: scale(rightValue)
                       };
                    } else {
                        leftPoint = currentPoint;
                    }

                    if (rightPoint && this.isIntersect(currentPoint, rightPoint)) {
                        properties.values[i + 1] = null;
                        leftPoint = currentPoint;
                        i++;
                    }

                    rightPoint = null;
                }
            });
        }

        private isIntersect(leftPoint: PulseChartPoint, rightPoint: PulseChartPoint): boolean {
            return (leftPoint.x + PulseChart.MaxWidthOfLabel) > rightPoint.x;
        }

        /**
         * Creates a [min,max] from your Cartiesian data values.
         *
         * @param data The series array of CartesianDataPoints.
         * @param includeZero Columns and bars includeZero, line and scatter do not.
         */
        private createValueDomain(data: PulseChartSeries[], includeZero: boolean): number[] {
            if (data.length === 0) {
                return null;
            }

            var minY0 = <number>d3.min(data, (kv) => { return d3.min(kv.data, d => { return d.y; }); });
            var maxY0 = <number>d3.max(data, (kv) => { return d3.max(kv.data, d => { return d.y; }); });

            // var min = Math.min(minY0, -1 * maxY0);
            //console.log('min', min, 'min', minY0, 'max', maxY0);
            return [Math.min(minY0, maxY0), Math.max(minY0, maxY0)];
        }

        private isAutoPlay(): boolean {
            return this.data &&
                this.data.settings &&
                this.data.settings.playback &&
                this.data.settings.playback.autoplay;
        }

        public render(suppressAnimations: boolean): CartesianVisualRenderResult {
            var duration = AnimatorCommon.GetAnimationDuration(this.animator, suppressAnimations);
            var result: CartesianVisualRenderResult;
            var data = this.data;
            this.lastSelectedPoint = null;

            if (!data) {
                this.clear();
                return;
            }

            var xScale: D3.Scale.LinearScale = <D3.Scale.LinearScale>data.xScale,
                yScales: D3.Scale.LinearScale[] = <D3.Scale.LinearScale[]>data.yScales;

            this.lineX = d3.svg.line()
                .x((d: PulseChartDataPoint) => {
                    return xScale(d.categoryValue);
                })
                .y((d: PulseChartDataPoint) => {
                    return yScales[d.groupIndex](d.y);
                });

            this.renderGaps(data, duration);
            this.renderAxes(data, duration);

            this.animationHandler.setSize(this.getSeriesSize());
            this.animationHandler.render(this.isAutoPlay());

            return result;
        }

        private getSeriesSize(): number {
            if (this.data ||
                this.data.series ||
                this.data.series.length) {
                    return this.data.series.length;
                }
            return 0;
        }

        private renderAxes(data: PulseChartData, duration: number): void {
            this.renderXAxis(data, duration);
            this.renderYAxis(data, duration);
        }

        private renderXAxis(data: PulseChartData, duration: number): void {
            var axisNodeSelection: D3.Selection,
                axisNodeUpdateSelection: D3.UpdateSelection,
                ticksSelection: D3.Selection,
                ticksUpdateSelection: D3.UpdateSelection;

            axisNodeSelection = this.xAxis.selectAll(PulseChart.AxisNode.selector);

            axisNodeUpdateSelection = axisNodeSelection.data(data.series);

            axisNodeUpdateSelection
                .enter()
                .append("g")
                .classed(PulseChart.AxisNode.class, true);

            axisNodeUpdateSelection
                .call((selection: D3.Selection) => {
                    selection[0].forEach((selectionElement: Element, index: number) => {
                        d3.select(selectionElement)
                            .transition()
                            .duration(duration)
                            .call(data.series[index].xAxis.orient('bottom'));
                    });
                });

            axisNodeUpdateSelection
                .exit()
                .remove();

            ticksSelection = this.xAxis.selectAll(".tick");

            ticksUpdateSelection = ticksSelection
                .selectAll(".axisBox")
                .data([[]]);

            ticksUpdateSelection
                .enter()
                .insert("rect", "text")
                .attr({
                    x: -(PulseChart.MaxWidthOfLabel / 2),
                    y: "-0.7em",
                    width: PulseChart.MaxWidthOfLabel,
                    height: "1.3em"
                })
                .classed("axisBox", true);

            ticksUpdateSelection
                .exit()
                .remove();

            this.xAxis
                .selectAll("text")
                .attr({
                    dy: "-0.5em"
                });

            this.xAxis.selectAll(".domain")[0].forEach((element: Element) => {
                element.parentNode.insertBefore(element, element.parentNode.firstChild);
            });
        }

        private renderYAxis(data: PulseChartData, duration: number): void {
            var yAxis: D3.Svg.Axis = data.yAxis;

            yAxis.orient('left');

            this.yAxis
                .transition()
                .duration(duration)
                .call(yAxis);
        }

        public renderChart(): void {
            var data: PulseChartData = this.data;
            var series: PulseChartSeries[] = this.data.series;
            var sm: SelectionManager = this.selectionManager;

            var selection: D3.UpdateSelection = this.rootSelection = this.chart.selectAll(PulseChart.LineNode.selector).data(series);

            selection
                .enter()
                .append('g')
                .classed(PulseChart.LineNode.class, true);

            if (this.animationHandler.isAnimated()) {
                this.animationDot
                    .attr('display', 'inline')
                    .attr("r", this.data.settings.popup.dotSize)
                    .style("fill", this.data.settings.popup.color);

                if (sm.hasSelection()) {
                    this.drawTooltips(data, sm.getSelectionIds());
                }
            } else {
                this.hideDot();
                this.drawDots(data);
                this.drawTooltips(data);
            }

            this.drawLines(data);

            selection
                .exit()
                .remove();
        }

        private drawLinesStatic(limit: number, isAnimated: boolean): void {
             var node: ClassAndSelector = PulseChart.Line,
                 rootSelection: D3.UpdateSelection = this.rootSelection;

             var selection: D3.UpdateSelection = rootSelection.filter((d, index) => {
                if (isAnimated) {
                    return index < limit;
                }
                return true;
            }).selectAll(node.selector).data(d => [d]);

            selection
                .enter()
                .append('path')
                .classed(node.class, true);

            selection
                .style({
                    'fill': "none",
                    'stroke': (d: PulseChartSeries) => d.color,
                    'stroke-width': (d: PulseChartSeries) => `${d.width}px`
                });

           selection.attr('d', d => this.lineX(d.data));
           selection
                .exit()
                .remove();
        }

        private drawLinesStaticBeforeAnimation(limit: number): void {
             var node: ClassAndSelector = PulseChart.Line,
                 rootSelection: D3.UpdateSelection = this.rootSelection,
                 start: number = this.animationHandler.getCurrentIndex();

             var selection: D3.UpdateSelection = this.animationSelection = rootSelection.filter((d, index) => {
                return index === limit;
            }).selectAll(node.selector).data(d => [d]);

            selection
                .enter()
                .append('path')
                .classed(node.class, true);

            selection
                .style({
                    'fill': "none",
                    'stroke': (d: PulseChartSeries) => d.color,
                    'stroke-width': (d: PulseChartSeries) => `${d.width}px`
                });

            selection
                .attr('d', (d: PulseChartSeries) => {
                    var flooredStart = Math.floor(start),
                        dataReduced: PulseChartDataPoint[] = d.data.slice(0, flooredStart);

                    this.moveAnimationDot(dataReduced[dataReduced.length - 1]);

                    return this.lineX(dataReduced);
                 });

           selection
                .exit()
                .remove();
        }

        private moveAnimationDot(d: PulseChartDataPoint): void {
            var xScale: D3.Scale.LinearScale = <D3.Scale.LinearScale>this.data.xScale,
                yScales: D3.Scale.LinearScale[] = <D3.Scale.LinearScale[]>this.data.yScales;

            this.animationDot
                .attr("cx", xScale(d.x))
                .attr("cy", yScales[d.groupIndex](d.y));
        }

        private getAnimationDuration(): number {
            if (this.data &&
                this.data.settings &&
                this.data.settings.playback &&
                this.data.settings.playback.playSpeed) {
                    return 1000 / this.data.settings.playback.playSpeed;
                }
            return 300;
        }

        public playAnimation() {
            var selection: D3.UpdateSelection = this.animationSelection;
            var duration: number = this.getAnimationDuration();
            var start: number = this.animationHandler.getCurrentIndex();

            this.clearSelection();

            selection
                .transition()
                .duration(duration)
                .ease("linear")
                .attrTween('d', (d: PulseChartSeries) => this.getInterpolation(d.data, start))
                .each("end", () => {
                    //console.log('end transition');
                });
        }

        public pauseAnimation(): void {
            if (!this.animationSelection) {
                return;
            }
            this.animationSelection
                .transition()
                .duration(0);
        }

        public stopAnimation() {
            this.pauseAnimation();
            this.clearChart();
        }

        private drawLines(data: PulseChartData): void {
            var seriesCount: number = this.animationHandler.getCurrentSeries(),
                isAnimated: boolean = this.animationHandler.isAnimated();

            this.drawLinesStatic(seriesCount, isAnimated);

            if (isAnimated) {
                this.drawLinesStaticBeforeAnimation(seriesCount);
            }
        }

        private findNextDataPoint(d: PulseChartDataPoint[], start: number) {
            if (start >= d.length) {
                 return start;
            }

            if (start < (d.length - 1)) {
                return start + 1;
            }
            return start;

            for (var i: number = start, iLen = d.length; i < iLen; i++) {
                if (d[i] && d[i].popupInfo) {
                    return i;
                 }
             }
             return i;
        }

        private showDot() {
            this.animationDot.attr('display', 'inline');
        }

        private hideDot() {
            this.animationDot.attr('display', 'none');
        }

        private getInterpolation(data: PulseChartDataPoint[], start: number) {
            var xScale: D3.Scale.LinearScale = <D3.Scale.LinearScale>this.data.xScale,
                yScales: D3.Scale.LinearScale[] = <D3.Scale.LinearScale[]>this.data.yScales;

            //start = Math.floor(start);

            var stop: number = start + 1;

            //console.log("start: ", start, "stop: ", stop);

            if (stop >= data.length) {
                this.animationHandler.playNext();
                return;
            }

            this.showDot();

            var lineFunction: D3.Svg.Line = d3.svg.line()
                .x(d => d.x)
                .y(d => d.y)
                .interpolate("linear");

            var interpolatedLine = data.slice(0, start + 1).map((d: PulseChartDataPoint): PulseChartPointXY => {
                    return {
                        x: xScale(d.x),
                        y: yScale(d.y)
                    };
            });

            var x0: number = xScale(data[start].x);
            var x1: number = xScale(data[stop].x);

            var y0: number = yScale(data[start].y);
            var y1: number = yScale(data[stop].y);

            var interpolateIndex: D3.Scale.LinearScale = d3.scale.linear()
                .domain([0, 1])
                .range([start, stop]);

            var interpolateX: D3.Scale.LinearScale = d3.scale.linear()
                .domain([0, 1])
                .range([x0, x1]);

            var interpolateY: D3.Scale.LinearScale = d3.scale.linear()
                .domain([0, 1])
                .range([y0, y1]);

            var steps: number = 0;

            return (t: number) => {
                /*
                var index: number = interpolate(t);
                var flooredX = Math.floor(index);

                this.animationHandler.setCurrentIndex(index);

                // console.log('t:', t, 'index', index, 'flooredX', flooredX);

                if (flooredX > 0 && flooredX < data.length) {
                    var weight = interpolate(t) - flooredX;

                    //var weightedLineAverageX = xScale( data[flooredX].x) * weight +  xScale(data[flooredX - 1].x) * (1 - weight);
                    //var x = weightedLineAverageX;
                    var x = xScale( data[start].x) + (xScale(data[stop].x) - xScale(data[start].x)) * weight;

                    interpolatedLine.push({ "x": x, "y": y });
                    this.animationDot
                        .attr("cx", x)
                        .attr("cy", y);

                    console.log("start y: ", yScale( data[start].y), "stop y: ", yScale(data[stop].y), "y:", y);
                }
                */

                var index: number = interpolateIndex(t);
                var flooredX = Math.floor(index);

                //console.log('t:', t, 'y', index, 'flooredX', flooredX);
                steps++;

                if (t >= 1) {

                   //console.log('steps:', steps);
                   this.handleSelection(data[flooredX]);
                }

                this.animationHandler.setCurrentIndex(stop);

                var x: number = interpolateX(t);
                var y: number = interpolateY(t);

                this.animationDot
                        .attr("cx", x)
                        .attr("cy", y);

                interpolatedLine.push({ "x": x, "y": y });

                //console.log("t: ", t, "y:", y);

                return lineFunction(interpolatedLine);
            };
        }

        private clearSelection(): void {
            var sm: SelectionManager = this.selectionManager;
            sm.clear();

            this.chart.selectAll(PulseChart.Tooltip.selector).remove();
        }

        private handleSelection(d: PulseChartDataPoint): void {
            var sm: SelectionManager = this.selectionManager;
            this.clearSelection();

            if (!d || !d.popupInfo) {
                this.animationHandler.play();
                return;
            }

            this.animationHandler.pause();

            sm.select(d.identity).then((selectionIds: SelectionId[]) => {
                this.setSelection(selectionIds);

                setTimeout(() => {
                    this.clearSelection();
                    this.animationHandler.play();
                }, this.getPauseDuration());

            });
        }

        private getPauseDuration() {
            if (this.data &&
                this.data.settings &&
                this.data.settings.playback) {
                return this.data.settings.playback.pauseDuration * 1000;
            }
            return PulseChart.DefaultSettings.playback.pauseDuration * 1000;
        }

        private nextLineWithAnimation() {
            //this.animationHandler.pause();

            //this.animationHandler.play();
            /*
            setTimeout(() => {
                this.animationHandler.play();
            }, this.getPauseDuration());*/
        }

        private drawDots(data: PulseChartData): void {
            var xScale: D3.Scale.LinearScale = <D3.Scale.LinearScale>data.xScale,
                yScales: D3.Scale.LinearScale[] = <D3.Scale.LinearScale[]>data.yScales,
                node: ClassAndSelector = PulseChart.Dot,
                rootSelection: D3.UpdateSelection = this.rootSelection,
                sm: SelectionManager = this.selectionManager;

            var selection: D3.UpdateSelection = rootSelection.selectAll(node.selector)
                .data(d => {
                    return _.filter(d.data, (value: PulseChartDataPoint) => value.popupInfo);
                 });

            selection
                .enter()
                .append("circle")
                .classed(node.class, true);

            selection
                .attr("cx", (d: PulseChartDataPoint) => xScale(d.categoryValue))
                .attr("cy", (d: PulseChartDataPoint) => yScale(d.y))
                .attr("r", this.data.settings.popup.dotSize)
                .style("fill", this.data.settings.popup.color)
                .style("cursor", "pointer")
                .on("mouseover", function(d) {
                    d3.select(this)
                        .attr("r", 6);
                })
                .on("mouseout", function(d) {
                    d3.select(this)
                        .attr("r", 5);
                })
                .on("click", (d: PulseChartDataPoint) => {
                    d3.event.stopPropagation();
                    sm.select(d.identity, d3.event.ctrlKey)
                        .then((selectionIds: SelectionId[]) => this.setSelection(selectionIds));
                });

            selection
                .exit()
                .remove();
        }

        private renderGaps(data: PulseChartData, duration: number): void {
            var gaps: IRect[],
                gapsSelection: D3.UpdateSelection,
                gapsEnterSelection: D3.Selection,
                gapNodeSelection: D3.UpdateSelection,
                series: PulseChartSeries[] = data.series,
                isScalar: boolean = data.isScalar,
                xScale: D3.Scale.LinearScale = <D3.Scale.LinearScale>data.xScale;

            gaps = [{
                left: -4.5,
                top: -5,
                height: 10,
                width: 3
            }, {
                left: 1.5,
                top: -5,
                height: 10,
                width: 3
            }];

            gapsSelection = this.gaps.selectAll(PulseChart.Gap.selector)
                .data(series.slice(0, series.length - 1));

            gapsEnterSelection = gapsSelection
                .enter()
                .append("g");

            gapsSelection
                .attr("transform", (seriesElement: PulseChartSeries, index: number) => {
                    var x: number,
                        middleOfGap: number = seriesElement.widthOfGap / 2,
                        categoryValue: number | Date = seriesElement.data[seriesElement.data.length - 1].categoryValue;

                    if (isScalar) {
                        x = xScale(middleOfGap + <number>categoryValue);
                    } else {
                        x = xScale(new Date(middleOfGap + ((<Date>categoryValue).getTime())));
                    }

                    return SVGUtil.translate(x, 0);
                });

            gapNodeSelection = gapsSelection.selectAll(PulseChart.GapNode.selector)
                .data(gaps);

            gapNodeSelection
                .enter()
                .append("rect")
                .attr({
                    x: (gap: IRect) => gap.left,
                    y: (gap: IRect) => gap.top,
                    height: (gap: IRect) => gap.height,
                    width: (gap: IRect) => gap.width
                })
                .classed(PulseChart.GapNode.class, true);

            gapsEnterSelection.classed(PulseChart.Gap.class, true);

            gapsSelection
                .exit()
                .remove();

            gapNodeSelection
                .exit()
                .remove();
        }

        private setSelection(selectionIds?: SelectionId[]): void {
            //console.log('selectionIds', selectionIds, 'this.data', this.data);
            this.drawTooltips(this.data, selectionIds);
        }

        private isPopupShow(d: PulseChartDataPoint, selectionIds?: SelectionId[]): boolean {
            var data = this.data;

            if (!d.popupInfo) {
                return false;
            }

            if (data &&
                data.settings &&
                data.settings.popup &&
                (data.settings.popup.showType === PulseChartPopupShow.HIDE)) {
                    return false;
                }

            if (selectionIds) {
                return SelectionManager.containsSelection(selectionIds, d.identity);
            }

            if (data &&
                data.settings &&
                data.settings.popup &&
                (data.settings.popup.showType === PulseChartPopupShow.ALWAYS)) {
                    return true;
                }


            return false;
        }

        private drawTooltips(data: PulseChartData, selectionIds?: SelectionId[]) {
            var xScale: D3.Scale.LinearScale = <D3.Scale.LinearScale>data.xScale,
                yScales: D3.Scale.LinearScale[] = <D3.Scale.LinearScale[]>data.yScales,
                node: ClassAndSelector = PulseChart.Tooltip;

            var rootSelection: D3.UpdateSelection = this.rootSelection;

            var line: D3.Svg.Line = d3.svg.line()
                .x(d => d.x)
                .y(d => d.y);

            var marginTop: number = PulseChart.DefaultTooltipSettings.marginTop;
            var width: number = this.data.settings.popup.width;
            var height: number = PulseChart.DefaultTooltipSettings.height;

            var topShift: number = 20;

            var durationTooltip: number = 1000;
            var durationLine: number = 700;

            var tooltipShiftY = (y: number, groupIndex: number) => this.isHigherMiddle(y, groupIndex) ? (-1 * marginTop + topShift) : this.viewport.height + marginTop;

            var tooltipRoot: D3.UpdateSelection = rootSelection.selectAll(node.selector)
                .data(d => {
                    return _.filter(d.data, (value: PulseChartDataPoint) => this.isPopupShow(value, selectionIds));
                });

            tooltipRoot
                .enter()
                .append("g")
                .classed(node.class, true);

            tooltipRoot
                .attr("transform", (d: PulseChartDataPoint) => {
                    var x: number = xScale(d.x) - width/2;
                    var y: number = tooltipShiftY(d.y, d.groupIndex);
                    return SVGUtil.translate(x, y);
                })
                .style("opacity", 0)
                .transition()
                .duration(durationTooltip)
                .style("opacity", 1);

            var tooltipRect = tooltipRoot.selectAll(PulseChart.TooltipRect.selector).data(d => [d]);
            tooltipRect.enter().append("path").classed(PulseChart.TooltipRect.class, true);
            tooltipRect
                .attr("display", (d: PulseChartDataPoint) => d.popupInfo ? "inherit" : "none")
                .style('fill', this.data.settings.popup.color)
                .attr('d', (d: PulseChartDataPoint) => {
                    var path = [
                        {
                            "x": -2,
                            "y": this.isHigherMiddle(d.y, d.groupIndex) ? (-1 * marginTop) : 0,
                        },
                        {
                            "x": -2,
                            "y": this.isHigherMiddle(d.y, d.groupIndex) ? (-1 * (marginTop + height)) : height,
                        },
                        {
                            "x": width - 2,
                            "y": this.isHigherMiddle(d.y, d.groupIndex) ? (-1 * (marginTop + height)) : height,
                        },
                        {
                            "x": width - 2,
                            "y": this.isHigherMiddle(d.y, d.groupIndex) ? (-1 * marginTop) : 0,
                        }
                    ];
                    return line(path);
                });

            var tooltipTriangle = tooltipRoot.selectAll(PulseChart.TooltipTriangle.selector).data(d => [d]);
            tooltipTriangle.enter().append("path").classed(PulseChart.TooltipTriangle.class, true);
            tooltipTriangle
                .style('fill', this.data.settings.popup.color)
                .attr('d', (d: PulseChartDataPoint) => {
                    var path = [
                        {
                            "x": width / 2 - 5,
                            "y": this.isHigherMiddle(d.y, d.groupIndex) ? (-1 * marginTop) : 0,
                        },
                        {
                            "x": width / 2,
                            "y": this.isHigherMiddle(d.y, d.groupIndex) ? (-1 * (marginTop - 5)) : -5,
                        },
                        {
                            "x": width / 2 + 5,
                            "y": this.isHigherMiddle(d.y, d.groupIndex) ? (-1 * marginTop) : 0,
                        },
                    ];
                    return line(path);
                })
                .style('stroke-width', "1px");

            var tooltipLine = tooltipRoot.selectAll(PulseChart.TooltipLine.selector).data(d => [d]);
            tooltipLine.enter().append("path").classed(PulseChart.TooltipLine.class, true);
            tooltipLine
                .style('fill', this.data.settings.popup.color)
                .style('stroke', this.data.settings.popup.color)
                .style('stroke-width', "1px")
                .attr('d', (d: PulseChartDataPoint) => {
                    var path = [
                        {
                            "x": width/2,
                            "y": this.isHigherMiddle(d.y, d.groupIndex) ? yScales[d.groupIndex](d.y) + tooltipShiftY(d.y, d.groupIndex) : yScales[d.groupIndex](d.y) - tooltipShiftY(d.y, d.groupIndex), //start
                        },
                        {
                            "x": width/2,
                            "y": this.isHigherMiddle(d.y, d.groupIndex) ? yScales[d.groupIndex](d.y) + tooltipShiftY(d.y, d.groupIndex) : yScales[d.groupIndex](d.y) - tooltipShiftY(d.y, d.groupIndex),
                        }];
                    return line(path);
                })
                .transition()
                .duration(durationLine)
                .attr('d', (d: PulseChartDataPoint) => {
                    var path = [
                        {
                            "x": width/2,
                            "y": this.isHigherMiddle(d.y, d.groupIndex) ? yScales[d.groupIndex](d.y) + tooltipShiftY(d.y, d.groupIndex) : yScales[d.groupIndex](d.y) - tooltipShiftY(d.y, d.groupIndex),
                        },
                        {
                            "x": width/2,
                            "y": this.isHigherMiddle(d.y, d.groupIndex) ? (-1 * marginTop) : 0, //end
                        }];
                    return line(path);
                });

            var timeRect = tooltipRoot.selectAll(PulseChart.TooltipTimeRect.selector).data(d => [d]);
            var timeDisplayStyle = { "display": this.data.settings.popup.showTime ? "" : "none" };
            timeRect.enter().append("path").classed(PulseChart.TooltipTimeRect.class, true);
            timeRect
                .style("fill", this.data.settings.popup.timeFill)
                .style(timeDisplayStyle)
                .attr('d', (d: PulseChartDataPoint) => {
                    var path = [
                        {
                            "x": width - PulseChart.DefaultTooltipSettings.timeWidth - 2,
                            "y": this.isHigherMiddle(d.y, d.groupIndex) ? (-1 * (marginTop + height)) : 0,
                        },
                        {
                            "x": width - PulseChart.DefaultTooltipSettings.timeWidth  -2,
                            "y": this.isHigherMiddle(d.y, d.groupIndex)
                                ? (-1 * (marginTop + height - PulseChart.DefaultTooltipSettings.timeHeight))
                                : PulseChart.DefaultTooltipSettings.timeHeight,
                        },
                        {
                            "x": width - 2,
                            "y": this.isHigherMiddle(d.y, d.groupIndex)
                                ? (-1 * (marginTop + height - PulseChart.DefaultTooltipSettings.timeHeight))
                                : PulseChart.DefaultTooltipSettings.timeHeight,
                        },
                        {
                            "x": width - 2,
                            "y": this.isHigherMiddle(d.y, d.groupIndex) ? (-1 * (marginTop + height)) : 0,
                        }
                    ];
                    return line(path);
                });

            var time = tooltipRoot.selectAll(PulseChart.TooltipTime.selector).data(d => [d]);
            time.enter().append("text").classed(PulseChart.TooltipTime.class, true);
            time
                .style({
                    "font-family": "sans-serif",
                    "font-weight": "bold",
                    "font-size": "12px"
                })
                .style(timeDisplayStyle)
                .style("fill", this.data.settings.popup.timeColor)
                .attr("x", (d: PulseChartDataPoint) => width - PulseChart.DefaultTooltipSettings.timeWidth)
                .attr("y", (d: PulseChartDataPoint) => this.isHigherMiddle(d.y, d.groupIndex)
                    ? (-1 * (marginTop + height - PulseChart.DefaultTooltipSettings.timeHeight  + 3))
                    : PulseChart.DefaultTooltipSettings.timeHeight - 3)
                .text((d: PulseChartDataPoint) => d.popupInfo.time);

            var title = tooltipRoot.selectAll(PulseChart.TooltipTitle.selector).data(d => [d]);
            title.enter().append("text").classed(PulseChart.TooltipTitle.class, true);
            title
                .style({
                    "font-family": "sans-serif",
                    "font-weight": "bold",
                    "font-size": "12px"
                })
                .style("fill", this.data.settings.popup.fontColor)
                //.attr("stroke", "white")
                .attr("x", (d: PulseChartDataPoint) => 0)
                .attr("y", (d: PulseChartDataPoint) => this.isHigherMiddle(d.y, d.groupIndex) ? (-1 * (marginTop + height - 12)) : 12)
                .text((d: PulseChartDataPoint) => {
                    if (!d.popupInfo) {
                        return "";
                    }

                    var textProperties = {
                        text: d.popupInfo.title || "",
                        fontFamily: "sans-serif",
                        fontSize: "12px"
                    };

                    return powerbi.TextMeasurementService.getTailoredTextOrDefault(textProperties,
                        width - 2 - (this.data.settings.popup.showTime ? PulseChart.DefaultTooltipSettings.timeWidth : 0));
                });

            var textFontSize = `${this.data.settings.popup.fontSize}px`;
            var description = tooltipRoot.selectAll(PulseChart.TooltipDescription.selector).data(d => [d]);
            description.enter().append("text").classed(PulseChart.TooltipDescription.class, true);
            description
                .style({
                    "font-family": "sans-serif",
                    "font-size": textFontSize
                })
                .style("fill", this.data.settings.popup.fontColor)
                .attr("x", (d: PulseChartDataPoint) => 0)
                .attr("y", (d: PulseChartDataPoint) => 0)
                .text((d: PulseChartDataPoint) => d.popupInfo && d.popupInfo.description)
                .call(d => d.forEach(x => x[0] &&
                    powerbi.TextMeasurementService.wordBreak(x[0], width - 2, height - 26)))
                .attr("x", (d: PulseChartDataPoint) => 0)
                .attr("y", (d: PulseChartDataPoint) => this.isHigherMiddle(d.y, d.groupIndex) ? (-1 * (marginTop + height - 26)) : 26);

            tooltipRoot
                .exit()
                .remove();
        }

        private isHigherMiddle(value: number, groupIndex: number): boolean {
            if (this.data.yScales.length > 1) {
                return groupIndex === 0;
            }

            var domain: number[] = this.data.commonYScale.domain(),
                minValue: number = d3.min(domain),
                middleValue = Math.abs((d3.max(domain) - minValue) / 2);

            middleValue = middleValue === 0
                ? middleValue
                : minValue + middleValue;

            return value >= middleValue;
        }

        private static getObjectsFromDataView(dataView: DataView): DataViewObjects {
            if (!dataView ||
                !dataView.metadata ||
                !dataView.metadata.columns ||
                !dataView.metadata.objects) {
                return null;
            }

            return dataView.metadata.objects;
        }

        private parseSettings(dataView: DataView, isScalar: boolean): PulseChartSettings {
            var settings: PulseChartSettings = <PulseChartSettings>{},
                objects: DataViewObjects = PulseChart.getObjectsFromDataView(dataView);

            if (isScalar) {
                var source: DataViewMetadataColumn = dataView.categorical.categories[0]
                    ? dataView.categorical.categories[0].source
                    : undefined;

                settings.format = ValueFormatter.getFormatString(source, PulseChart.Properties["general"]["formatString"]);
            } else {
                settings.format = PulseChart.DateTimeFormatString;
            }

            settings.popup = this.getPopupSettings(objects);
            settings.xAxis = this.getAxisXSettings(objects);
            settings.series = this.getSeriesSettings(objects);
            settings.playback = PulseChart.getPlaybackSettings(objects);

            return settings;
        }

        private getPopupSettings(objects: DataViewObjects): PulseChartPopup {
            var showType = DataViewObjects.getValue<string>(
                objects,
                PulseChart.Properties["popup"]["showType"],
                PulseChart.DefaultSettings.popup.showType);

            var width = DataViewObjects.getValue<number>(
                objects,
                PulseChart.Properties["popup"]["width"],
                PulseChart.DefaultSettings.popup.width);

            width = Math.max(0, width);

            var colorHelper = new ColorHelper(
                this.colors,
                PulseChart.Properties["popup"]["color"],
                PulseChart.DefaultSettings.popup.color);

            var color = colorHelper.getColorForMeasure(objects, "");

            var fontSize = DataViewObjects.getValue<number>(
                objects,
                PulseChart.Properties["popup"]["fontSize"],
                PulseChart.DefaultSettings.popup.fontSize);

            var fontColorHelper = new ColorHelper(
                this.colors,
                PulseChart.Properties["popup"]["fontColor"],
                PulseChart.DefaultSettings.popup.fontColor);

            var fontColor = fontColorHelper.getColorForMeasure(objects, "");

            var showTime =  DataViewObjects.getValue<boolean>(
                objects,
                PulseChart.Properties["popup"]["showTime"],
                PulseChart.DefaultSettings.popup.showTime);

            var timeColorHelper = new ColorHelper(
                this.colors,
                PulseChart.Properties["popup"]["timeColor"],
                PulseChart.DefaultSettings.popup.timeColor);

            var timeColor = timeColorHelper.getColorForMeasure(objects, "");

            var timeFillHelper = new ColorHelper(
                this.colors,
                PulseChart.Properties["popup"]["timeFill"],
                PulseChart.DefaultSettings.popup.timeFill);

            var timeFill = timeFillHelper.getColorForMeasure(objects, "");

            var dotSize = DataViewObjects.getValue<number>(
                objects,
                PulseChart.Properties["popup"]["dotSize"],
                PulseChart.DefaultSettings.popup.dotSize);

            if (dotSize < PulseChart.dotSizeMin) {
                dotSize = PulseChart.dotSizeMin;
            }

            if (dotSize > PulseChart.dotSizeMax) {
                dotSize = PulseChart.dotSizeMax;
            }
            return {
                showType: showType,
                width: width,
                color: color,
                fontSize: fontSize,
                fontColor: fontColor,
                showTime: showTime,
                timeColor: timeColor,
                timeFill: timeFill,
                dotSize: dotSize,
            };
        }

        private getSeriesSettings(objects: DataViewObjects): PulseChartSeriesSetting {
            var width = DataViewObjects.getValue<number>(
                objects,
                PulseChart.Properties["series"]["width"],
                PulseChart.DefaultSettings.series.width);

            var colorHelper = new ColorHelper(
                this.colors,
                PulseChart.Properties["series"]["fill"],
                PulseChart.DefaultSettings.series.fill);

            var fill = colorHelper.getColorForMeasure(objects, "");

            var showByDefault = DataViewObjects.getValue<boolean>(
                objects,
                PulseChart.Properties["series"]["showByDefault"],
                PulseChart.DefaultSettings.series.showByDefault);

            return {
                width,
                fill,
                showByDefault
            };
        }

        private getAxisXSettings(objects: DataViewObjects): PulseChartXAxisSettings {
            var xAxisSettings: PulseChartXAxisSettings = <PulseChartXAxisSettings> {};

            xAxisSettings.show = DataViewObjects.getValue<boolean>(
                objects,
                PulseChart.Properties["xAxis"]["show"],
                PulseChart.DefaultSettings.xAxis.show);

            xAxisSettings.step = DataViewObjects.getValue<number>(
                objects,
                PulseChart.Properties["xAxis"]["step"],
                PulseChart.DefaultSettings.xAxis.step);

            return xAxisSettings;
        }

        private static getPlaybackSettings(objects: DataViewObjects): PulseChartPlaybackSetting {
            var playbackSettings: PulseChartPlaybackSetting = <PulseChartPlaybackSetting> {};

            playbackSettings.autoplay = DataViewObjects.getValue<boolean>(
                objects,
                PulseChart.Properties["playback"]["autoplay"],
                PulseChart.DefaultSettings.playback.autoplay);

            playbackSettings.playSpeed = DataViewObjects.getValue<number>(
                objects,
                PulseChart.Properties["playback"]["playSpeed"],
                PulseChart.DefaultSettings.playback.playSpeed);

            playbackSettings.pauseDuration = DataViewObjects.getValue<number>(
                objects,
                PulseChart.Properties["playback"]["pauseDuration"],
                PulseChart.DefaultSettings.playback.pauseDuration);

            playbackSettings.autoplayPauseDuration = DataViewObjects.getValue<number>(
                objects,
                PulseChart.Properties["playback"]["autoplayPauseDuration"],
                PulseChart.DefaultSettings.playback.autoplayPauseDuration);

            return playbackSettings;
        }

        private clear(): void {
            this.gaps.selectAll(PulseChart.Gap.selector).remove();
            this.xAxis.selectAll(PulseChart.AxisNode.selector).remove();

            if (this.animationHandler) {
                this.animationHandler.hide();
            } else {
                this.clearChart();
            }
        }

        public clearChart(): void {
           this.clearSelection();
           this.hideDot();
           this.chart.selectAll(PulseChart.LineNode.selector).remove();
           this.chart.selectAll(PulseChart.Dot.selector).remove();
           this.chart.selectAll(PulseChart.Tooltip.selector).remove();
        }

        public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstanceEnumeration {
            var enumeration = new ObjectEnumerationBuilder(),
                settings: PulseChartSettings;

            settings = this.data.settings;

            switch (options.objectName) {
                case "popup": {
                    this.readPopupInstance(enumeration);
                    break;
                }
                case "xAxis": {
                    this.xAxisInstance(enumeration);
                    break;
                }
                case "series": {
                    this.readSeriesInstance(enumeration);
                    break;
                }
                case "playback": {
                    this.readPlaybackInstance(enumeration);
                    break;
                }
            }

            return enumeration.complete();
        }

        private readPopupInstance(enumeration: ObjectEnumerationBuilder): void {
            var popupSettings: PulseChartPopup = this.data.settings.popup;

            if (!popupSettings) {
                popupSettings = PulseChart.DefaultSettings.popup;
            }

            var popup: VisualObjectInstance = {
                objectName: "popup",
                displayName: "popup",
                selector: null,
                properties: {
                    showType: popupSettings.showType,
                    width: popupSettings.width,
                    color: popupSettings.color,
                    fontColor: popupSettings.fontColor,
                    fontSize: popupSettings.fontSize,
                    showTime: popupSettings.showTime,
                    timeColor: popupSettings.timeColor,
                    timeFill: popupSettings.timeFill,
                    dotSize: popupSettings.dotSize
                }
            };

            enumeration.pushInstance(popup);
        }

        private xAxisInstance(enumeration: ObjectEnumerationBuilder): void {
            var xAxisSettings: PulseChartXAxisSettings =
                this.data.settings.xAxis || PulseChart.DefaultSettings.xAxis;

            enumeration.pushInstance({
                objectName: "xAxis",
                displayName: "xAxis",
                selector: null,
                properties: {
                    show: xAxisSettings.show,
                    step: xAxisSettings.step
                }
            });
        }

        private readSeriesInstance(enumeration: ObjectEnumerationBuilder): void {
            var seriesSettings: PulseChartSeriesSetting =
                this.data.settings.series || PulseChart.DefaultSettings.series;

            var series: VisualObjectInstance = {
                objectName: "series",
                displayName: "series",
                selector: null,
                properties: {
                    fill: seriesSettings.fill,
                    width: seriesSettings.width,
                    showByDefault: seriesSettings.showByDefault,
                }
            };

            enumeration.pushInstance(series);
        }

        private readPlaybackInstance(enumeration: ObjectEnumerationBuilder): void {
            var playbackSettings: PulseChartPlaybackSetting =
                this.data.settings.playback || PulseChart.DefaultSettings.playback;

            enumeration.pushInstance({
                objectName: "playback",
                displayName: "playback",
                selector: null,
                properties: {
                    autoplay: playbackSettings.autoplay,
                    playSpeed: playbackSettings.playSpeed,
                    pauseDuration: playbackSettings.pauseDuration,
                    autoplayPauseDuration: playbackSettings.autoplayPauseDuration,
                }
            });
        }
    }

    enum PulseAnimatorStates {
        Ready,
        Play,
        Paused
    }

    export class PulseAnimator {

        private chart: PulseChart;
        private svg: D3.Selection;
        private animationPlay: D3.Selection;
        private animationPause: D3.Selection;
        private animationToStart: D3.Selection;
        private animationToEnd: D3.Selection;

        private static AnimationPlay: ClassAndSelector = createClassAndSelector('animationPlay');
        private static AnimationPause: ClassAndSelector = createClassAndSelector('animationPause');
        private static AnimationToStart: ClassAndSelector = createClassAndSelector('animationToStart');
        private static AnimationToEnd: ClassAndSelector = createClassAndSelector('animationToEnd');
        private animatorState: PulseAnimatorStates;

		private animationIndex;
		public static animationMinIndex: number = 1;

        private animationSeries;
        private animationSeriesMax;

        private container: D3.Selection;

        constructor(chart: PulseChart, svg: D3.Selection) {
            this.chart = chart;
            this.svg = svg;

			this.animationIndex = 1;
			this.animationSeries = 0;

            this.animatorState = PulseAnimatorStates.Ready;

            var container = this.container = this.svg.append('g');

            this.animationPlay = container.append('g').classed(PulseAnimator.AnimationPlay.class, true);
            this.animationPlay
                .append("circle")
                .attr("cx", 12)
                .attr("cy", 12)
                .attr("r", 10)
                .attr("fill", "transparent");

            this.animationPlay
                .append("path")
                .attr("d", "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z")
                .style("fill", "#777");

            this.animationPause = container.append('g').classed(PulseAnimator.AnimationPause.class, true);
            this.animationPause
                .append("circle")
                .attr("cx", 12)
                .attr("cy", 12)
                .attr("r", 10)
                .attr("fill", "transparent");

            this.animationPause
                .append("path")
                .attr("d", "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17h-3v-10h3v10zm5-10h-3v10h3v-10z")
                .style("fill", "#777");

            /* ToStart */
            this.animationToStart = container.append('g').classed(PulseAnimator.AnimationToStart.class, true);
            this.animationToStart
                .append("circle")
                .attr("cx", 12)
                .attr("cy", 12)
                .attr("r", 10)
                .attr("fill", "transparent");

            this.animationToStart
                .append("path")
                .attr("d", "M16.434 20.467c.552-.204 1.077-.462 1.569-.771l1.189 1.618c-.706.457-1.47.829-2.278 1.107l-.48-1.954zm-10.105-3.424l-1.2 1.775c.421.557.904 1.062 1.426 1.526l1.082-1.709c-.497-.475-.938-1.009-1.308-1.592zm-1.176-6.043c.711-3.972 4.174-7 8.347-7 4.687 0 8.5 3.813 8.5 8.5 0 2.313-.932 4.411-2.436 5.945l1.197 1.627c1.993-1.911 3.239-4.594 3.239-7.572 0-5.798-4.703-10.5-10.5-10.5-5.288 0-9.649 3.914-10.377 9h-3.123l4 5.917 4-5.917h-2.847zm5.745 9.574c-.582-.189-1.139-.429-1.658-.733l-1.065 1.683c.688.409 1.424.739 2.201.983l.522-1.933zm3.592.364c-.839.097-1.035.066-1.623.021l-.533 1.972c.946.105 1.661.092 2.636-.045l-.48-1.948z")
                .style("fill", "#777");

            /* ToEnd */
            this.animationToEnd = container.append('g').classed(PulseAnimator.AnimationToEnd.class, true);
            this.animationToEnd
                .append("circle")
                .attr("cx", 12)
                .attr("cy", 12)
                .attr("r", 10)
                .attr("fill", "transparent");

            this.animationToEnd
                .append("path")
                .attr("d", "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-6 16v-8l5 4-5 4zm5 0v-8l5 4-5 4zm7-8h-2v8h2v-8z")
                .style("fill", "#777");
        }

        public render(isAutoPlay: boolean): void {
            this.renderControls();

            if (this.animatorState === PulseAnimatorStates.Play) {
				this.play();
			} else {
                this.chart.renderChart();
            }
        }

        private renderControls(): void {
            this.show();

            this.animationPlay
                .attr('transform', SVGUtil.translate(0, 0))
                .on("click", () => {
                    this.play();
                });

            this.animationPause
                .attr('transform', SVGUtil.translate(30, 0))
                .on("click", () => {
                    this.pause();
                });

            this.animationToStart
                .attr('transform', SVGUtil.translate(60, 0))
                .style("fill", "#777")
                .on("click", () => {
                    this.toStart();
                });

            this.animationToEnd
                .attr('transform', SVGUtil.translate(90, 0))
                .style("fill", "#777")
                .on("click", () => {
                    this.toEnd();
                });
        }

        public hide() {
            if (this.isAnimated()) {
                this.stop();
            }
            this.container.attr('display', 'none');
        }

        public show() {
            this.container.attr('display', 'block');
        }

        public isAnimated(): boolean {
            return (this.animatorState === PulseAnimatorStates.Paused) || (this.animatorState === PulseAnimatorStates.Play);
        }

        public isPlaying(): boolean {
            return this.animatorState === PulseAnimatorStates.Play;
        }

        public play(): void {
            if (this.animatorState === PulseAnimatorStates.Paused) {
                this.animatorState = PulseAnimatorStates.Play;
            } else if (this.animatorState === PulseAnimatorStates.Ready) {
                this.animatorState = PulseAnimatorStates.Play;
                this.chart.clearChart();
            }
            this.chart.renderChart();
            this.chart.playAnimation();
        }

        public pause(): void {
            if (this.animatorState === PulseAnimatorStates.Play) {
                this.animatorState = PulseAnimatorStates.Paused;
				this.chart.pauseAnimation();
            }
        }

        private toStart(): void {
            this.stop();
            this.play();
        }

        private toEnd(): void {
            this.stop();
            this.chart.renderChart();
        }

        public stop(): void {
            this.animatorState = PulseAnimatorStates.Ready;
			this.setCurrentIndex(PulseAnimator.animationMinIndex);
			this.animationSeries = 0;

            this.chart.stopAnimation();
        }

        public setSize(series: number): void {
            this.animationSeriesMax = series;
        }

		public playNext(): void {
            this.setCurrentIndex(PulseAnimator.animationMinIndex);

			this.animationSeries++;
			if (this.animationSeries >= this.animationSeriesMax) {
				this.animationSeries = 0;
                this.chart.clearChart();
			} else {
                //this.play();
			}
            this.play();
		}

		public setCurrentIndex(index: number): void {
			this.animationIndex = index;
		}

		public getCurrentIndex(): number {
			return this.animationIndex;
		}

		public getCurrentSeries(): number {
			return this.animationSeries;
		}
    }

    export class PulseBehavior implements IInteractiveBehavior {
        private behaviors: IInteractiveBehavior[];

        constructor(behaviors: IInteractiveBehavior[]) {
            this.behaviors = behaviors;
        }

        public bindEvents(options: PulseBehaviorOptions, selectionHandler: ISelectionHandler): void {
            var behaviors = this.behaviors;
            for (var i: number = 0, ilen: number = behaviors.length; i < ilen; i++) {
                behaviors[i].bindEvents(options.layerOptions[i], selectionHandler);
            }

            options.clearCatcher.on('click', () => {
                selectionHandler.handleClearSelection();
            });
        }

        public renderSelection(hasSelection: boolean) {
            for (var i: number = 0; i < this.behaviors.length; i++) {
                this.behaviors[i].renderSelection(hasSelection);
            }
        }
    }

    export class PulseDataWrapper {
        private data: CartesianData;
        private isScalar: boolean;

        public constructor(columnChartData: CartesianData, isScalar: boolean) {
            this.data = columnChartData;
            this.isScalar = isScalar;
        }

        public lookupXValue(index: number, type: ValueType): any {
            debug.assertValue(this.data, 'this.data');

            var isDateTime: boolean = AxisHelper.isDateTime(type);
            if (isDateTime && this.isScalar) {
                return new Date(index);
            }

            var data = this.data;
            if (type.text) {
                debug.assert(index < data.categories.length, 'category index out of range');
                return data.categories[index];
            }
            else {
                var firstSeries = data.series[0];
                if (firstSeries) {
                    var seriesValues = firstSeries.data;
                    if (seriesValues) {
                        if (this.data.hasHighlights) {
                            index = index * 2;
                        }
                        var dataPoint = seriesValues[index];
                        if (dataPoint) {
                            if (isDateTime) {
                                return new Date(dataPoint.categoryValue);
                            }
                            return dataPoint.categoryValue;
                        }
                    }
                }
            }

            return index;
        }
    }
}
