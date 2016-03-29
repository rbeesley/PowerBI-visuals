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
    import IStringResourceProvider = jsCommon.IStringResourceProvider;
    import ClassAndSelector = jsCommon.CssConstants.ClassAndSelector;
    import PixelConverter = jsCommon.PixelConverter;

    export interface TornadoChartSections {
        left: number;
        right?: number;
    }

    export interface TornadoChartTextOptions {
        fontFamily?: string;
        fontSize?: number;
        sizeUnit?: string;
    }

    export interface TornadoChartConstructorOptions {
        svg?: D3.Selection;
        animator?: IGenericAnimator;
        margin?: IMargin;
        sections?: TornadoChartSections;
        columnPadding?: number;
    }

    export interface TornadoChartSeries {
        fill: string;
        name: string;
        selectionId: SelectionId;
        categoryAxisEnd: number;
    }

    export interface TornadoChartSettings {
        labelOutsideFillColor: string;
        categoriesFillColor: string;
        labelSettings: VisualDataLabelsSettings;
        showLegend?: boolean;
        showCategories?: boolean;
        legendFontSize?: number;
        legendColor?: string;
    }

    export interface TornadoChartDataView {
        categories: TextData[];
        series: TornadoChartSeries[];
        settings: TornadoChartSettings;
        legend: LegendData;
        dataPoints: TornadoChartPoint[];
        highlightedDataPoints?: TornadoChartPoint[];
    }

    export interface TornadoChartPoint extends SelectableDataPoint {
        dx: number;
        px: number;
        angle: number;
        width: number;
        label: LabelData;
        color: string;
        tooltipData: TooltipDataItem[];
        categoryIndex: number;
        highlight?: boolean;
    }

    export interface LabelData {
        dx: number;
        value: number | string;
        source: number | string;
        color: string;
        width: number;
    }

    export interface LineData {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    }

    export interface TextData {
        text: string;
        height: number;
        width: number;
        textProperties: TextProperties;
    }

    export interface TornadoBehaviorOptions {
        columns: D3.Selection;
        clearCatcher: D3.Selection;
        interactivityService: IInteractivityService;
    }

    class TornadoWebBehavior implements IInteractiveBehavior {
        private columns: D3.Selection;
        private clearCatcher: D3.Selection;
        private interactivityService: IInteractivityService;

        public bindEvents(options: TornadoBehaviorOptions, selectionHandler: ISelectionHandler) {
            this.columns = options.columns;
            this.clearCatcher = options.clearCatcher;
            this.interactivityService = options.interactivityService;

            this.columns.on('click', (d: SelectableDataPoint, i: number) => {
                selectionHandler.handleSelection(d, d3.event.ctrlKey);
            });

            this.clearCatcher.on('click', () => {
                selectionHandler.handleClearSelection();
            });
        }

        public renderSelection(hasSelection: boolean) {
            let hasHighlights = this.interactivityService.hasSelection();
            this.columns.style("fill-opacity", (d: TornadoChartPoint) => ColumnUtil.getFillOpacity(d.selected, d.highlight, !d.highlight && hasSelection, !d.selected && hasHighlights));
        }
    }

    class TornadoChartScrolling {
        public isScrollable: boolean;
        public scrollViewport: IViewport;

        private static ScrollBarMinLength = 15;
        private isYScrollBarVisible: boolean;
        private brushGraphicsContextY: D3.Selection;
        private scrollYBrush: D3.Svg.Brush = d3.svg.brush();

        private getRoot: () => D3.Selection;
        private getViewport: () => IViewport;
        private getMargin: () => IMargin;

        private get root(): D3.Selection {
            return this.getRoot();
        }

        private get viewport(): IViewport {
            return this.getViewport();
        }

        private get margin(): IMargin {
            return this.getMargin();
        }

        constructor(getRoot: () => D3.Selection, getViewport: () => IViewport, getMargin: () => IMargin, isScrollable: boolean) {
            this.getRoot = getRoot;
            this.getViewport = getViewport;
            this.getMargin = getMargin;
            this.isScrollable = isScrollable;
        }

        public renderY(data: TornadoChartDataView, prefferedHeight: number, onScroll: () => {}): void {
            this.isYScrollBarVisible = prefferedHeight > this.viewport.height
                && this.viewport.height > 0
                && this.viewport.width > 0;

            this.brushGraphicsContextY = this.createOrRemoveScrollbar(this.isYScrollBarVisible, this.brushGraphicsContextY, 'y brush');
            this.updateScrollViewport();

            if (!this.isYScrollBarVisible) {
                onScroll.call(this, jQuery.extend(true, {}, data), 0, 1);
                return;
            }

            let scrollSpaceLength: number = this.viewport.height;
            let extentData: any = this.getExtentData(prefferedHeight, scrollSpaceLength);

            let onRender = () => {
                let scrollPosition = extentData.toScrollPosition(this.scrollYBrush.extent(), scrollSpaceLength);
                onScroll.call(this, jQuery.extend(true, {}, data), scrollPosition[0], scrollPosition[1]);
                this.setScrollBarSize(this.brushGraphicsContextY, extentData.value[1], true);
            };

            let scrollYScale: D3.Scale.OrdinalScale = d3.scale.ordinal().rangeBands([0, scrollSpaceLength]);
            this.scrollYBrush.y(scrollYScale).extent(extentData.value);

            this.renderScrollbar(
                this.scrollYBrush,
                this.brushGraphicsContextY,
                this.viewport.width,
                this.margin.top,
                onRender);

            onRender();
        }

        private updateScrollViewport() {
            this.scrollViewport = { height: this.viewport.height, width: this.viewport.width };

            if (this.isYScrollBarVisible && this.isScrollable) {
                this.scrollViewport.width -= TornadoChart.ScrollBarWidth;
            }
        }

        private createOrRemoveScrollbar(isVisible, brushGraphicsContext, brushClass) {
            if (isVisible && this.isScrollable) {
                return brushGraphicsContext || this.root.append("g").classed(brushClass, true);
            }

            return brushGraphicsContext ? void brushGraphicsContext.remove() : undefined;
        }

        private renderScrollbar(brush: D3.Svg.Brush,
            brushGraphicsContext: D3.Selection,
            brushX: number,
            brushY: number,
            onRender: () => void): void {
            brush.on("brush", () => window.requestAnimationFrame(() => onRender()));

            brushGraphicsContext.attr({
                "transform": visuals.SVGUtil.translate(brushX, brushY),
                "drag-resize-disabled": "true" /*disables resizing of the visual when dragging the scrollbar in edit mode*/
            });

            brushGraphicsContext.call(brush); /*call the brush function, causing it to create the rectangles   */
            /* Disabling the zooming feature */
            brushGraphicsContext.selectAll(".resize rect").remove();
            brushGraphicsContext.select(".background").remove();
            brushGraphicsContext.selectAll(".extent").style({
                "fill-opacity": 0.125,
                "cursor": "default",
            });
        }

        private setScrollBarSize(brushGraphicsContext: D3.Selection, minExtent: number, isVertical: boolean): void {
            brushGraphicsContext.selectAll("rect").attr(isVertical ? "width" : "height", TornadoChart.ScrollBarWidth);
            brushGraphicsContext.selectAll("rect").attr(isVertical ? "height" : "width", minExtent);
        }

        private getExtentData(svgLength: number, scrollSpaceLength: number): any {
            let value: number = scrollSpaceLength * scrollSpaceLength / svgLength;

            let scaleMultipler: number = TornadoChartScrolling.ScrollBarMinLength <= value
                ? 1
                : value / TornadoChartScrolling.ScrollBarMinLength;

            value = Math.max(value, TornadoChartScrolling.ScrollBarMinLength);

            let toScrollPosition = (extent: number[], scrollSpaceLength: number) => {
                let scrollSize: number = extent[1] - extent[0];
                let scrollPosition: number = extent[0] / (scrollSpaceLength - scrollSize);

                scrollSize *= scaleMultipler;

                let start: number = (scrollPosition * (scrollSpaceLength - scrollSize));
                let end: number = (start + scrollSize);

                return [start / scrollSpaceLength, end / scrollSpaceLength];
            };

            return { value: [0, value], toScrollPosition: toScrollPosition };
        }
    }

    export class TornadoChartWarning implements IVisualWarning {
        public get code(): string {
            return "TornadoChartWarning";
        }

        public getMessages(resourceProvider: IStringResourceProvider): IVisualErrorMessage {
            let message: string = "This visual requires two distinct values to be returned for the Legend field.",
                titleKey: string = "",
                detailKey: string = "",
                visualMessage: IVisualErrorMessage;

            visualMessage = {
                message: message,
                title: resourceProvider.get(titleKey),
                detail: resourceProvider.get(detailKey)
            };

            return visualMessage;
        }
    }

    export function getTornadoChartWarning(): IVisualWarning {
        return new TornadoChartWarning();
    }

    export class TornadoChart implements IVisual {
        private static ClassName: string = "tornado-chart";

        private static Properties: any = {
            general: {
                formatString: <DataViewObjectPropertyIdentifier>{
                    objectName: "general",
                    propertyName: "formatString"
                }
            },
            labels: {
                show: <DataViewObjectPropertyIdentifier>{
                    objectName: "labels",
                    propertyName: "show"
                },
                fontSize: <DataViewObjectPropertyIdentifier>{
                    objectName: "labels",
                    propertyName: "fontSize"
                },
                labelPrecision: <DataViewObjectPropertyIdentifier>{
                    objectName: "labels",
                    propertyName: "labelPrecision"
                },
                labelDisplayUnits: <DataViewObjectPropertyIdentifier>{
                    objectName: "labels",
                    propertyName: "labelDisplayUnits"
                },
                insideFill: <DataViewObjectPropertyIdentifier>{
                    objectName: "labels",
                    propertyName: "insideFill"
                },
                outsideFill: <DataViewObjectPropertyIdentifier>{
                    objectName: "labels",
                    propertyName: "outsideFill"
                }
            },
            dataPoint: {
                fill: <DataViewObjectPropertyIdentifier>{
                    objectName: "dataPoint",
                    propertyName: "fill"
                }
            },
            legend: {
                show: <DataViewObjectPropertyIdentifier>{
                    objectName: "legend",
                    propertyName: "show"
                },
                labelColor: <DataViewObjectPropertyIdentifier>{
                    objectName: "legend",
                    propertyName: "labelColor"
                },
                fontSize: <DataViewObjectPropertyIdentifier>{
                    objectName: "legend",
                    propertyName: "fontSize"
                },
            },
            categories: {
                show: <DataViewObjectPropertyIdentifier>{
                    objectName: "categories",
                    propertyName: "show"
                },
                fill: <DataViewObjectPropertyIdentifier>{
                    objectName: "categories",
                    propertyName: "fill"
                }
            }
        };

        private static Columns: ClassAndSelector = {
            "class": "columns",
            selector: ".columns"
        };

        private static Column: ClassAndSelector = {
            "class": "column",
            selector: ".column"
        };

        private static Axes: ClassAndSelector = {
            "class": "axes",
            selector: ".axes"
        };

        private static Axis: ClassAndSelector = {
            "class": "axis",
            selector: ".axis"
        };

        private static Labels: ClassAndSelector = {
            "class": "labels",
            selector: ".labels"
        };

        private static Label: ClassAndSelector = {
            "class": "label",
            selector: ".label"
        };

        private static LabelTitle: ClassAndSelector = {
            "class": "label-title",
            selector: ".label-title"
        };

        private static LabelText: ClassAndSelector = {
            "class": "label-text",
            selector: ".label-text"
        };

        private static Categories: ClassAndSelector = {
            "class": "categories",
            selector: ".categories"
        };

        private static Category: ClassAndSelector = {
            "class": "category",
            selector: ".category"
        };

        private static CategoryTitle: ClassAndSelector = {
            "class": "category-title",
            selector: ".category-title"
        };

        private static CategoryText: ClassAndSelector = {
            "class": "category-text",
            selector: ".category-text"
        };

        private static MaxSeries: number = 2;
        private static MaxPrecision: number = 17; // max number of decimals in float
        private static LabelPadding: number = 2.5;
        private static CategoryMinHeight: number = 25;
        private static DefaultFontSize: number = 9;
        private static DefaultLegendFontSize: number = 8;
        private static HighlightedShapeFactor: number = 0.5;

        public static ScrollBarWidth = 10;

        public static capabilities: VisualCapabilities = {
            dataRoles: [{
                name: "Category",
                kind: VisualDataRoleKind.Grouping,
                displayName: data.createDisplayNameGetter("Role_DisplayName_Group")
            }, {
                    name: "Series",
                    kind: VisualDataRoleKind.Grouping,
                    displayName: data.createDisplayNameGetter('Role_DisplayName_Legend')
                }, {
                    name: "Values",
                    kind: VisualDataRoleKind.Measure,
                    displayName: data.createDisplayNameGetter("Role_DisplayName_Values")
                }],
            dataViewMappings: [{
                conditions: [
                    { "Category": { max: 1 }, "Values": { min: 0, max: 1 }, "Series": { min: 0, max: 1 } },
                    { "Category": { max: 1 }, "Values": { min: 2, max: 2 }, "Series": { max: 0 } }
                ],
                categorical: {
                    categories: {
                        for: {
                            in: "Category"
                        }
                    },
                    values: {
                        group: {
                            by: "Series",
                            select: [{ for: { in: "Values" } }],
                            dataReductionAlgorithm: { top: {} }
                        }
                    }
                }
            }],
            objects: {
                general: {
                    displayName: 'General',
                    properties: {
                        formatString: {
                            type: {
                                formatting: {
                                    formatString: true
                                }
                            },
                        }
                    }
                },
                dataPoint: {
                    displayName: 'Data Colors',
                    properties: {
                        fill: {
                            displayName: data.createDisplayNameGetter('Visual_Fill'),
                            type: { fill: { solid: { color: true } } }
                        }
                    }
                },
                categoryAxis: {
                    displayName: 'X-Axis',
                    properties: {
                        end: {
                            displayName: 'End',
                            type: { numeric: true },
                            suppressFormatPainterCopy: true,
                        },
                    }
                },
                labels: {
                    displayName: 'Data Labels',
                    properties: {
                        show: {
                            displayName: 'Show',
                            type: { bool: true }
                        },
                        labelPrecision: {
                            displayName: 'Decimal Places',
                            placeHolderText: 'Auto',
                            type: { numeric: true }
                        },
                        fontSize: {
                            displayName: data.createDisplayNameGetter('Visual_TextSize'),
                            type: { formatting: { fontSize: true } }
                        },
                        labelDisplayUnits: {
                            displayName: 'Display Units',
                            type: { formatting: { labelDisplayUnits: true } },
                        },
                        insideFill: {
                            displayName: 'Inside fill',
                            type: { fill: { solid: { color: true } } }
                        },
                        outsideFill: {
                            displayName: 'Outside fill',
                            type: { fill: { solid: { color: true } } }
                        }
                    }
                },
                legend: {
                    displayName: 'Legend',
                    properties: {
                        show: {
                            displayName: 'Show',
                            type: { bool: true }
                        },
                        position: {
                            displayName: 'Position',
                            description: data.createDisplayNameGetter('Visual_LegendPositionDescription'),
                            type: { enumeration: legendPosition.type }
                        },
                        showTitle: {
                            displayName: 'Title',
                            description: data.createDisplayNameGetter('Visual_LegendShowTitleDescription'),
                            type: { bool: true }
                        },
                        titleText: {
                            displayName: 'Legend Name',
                            description: data.createDisplayNameGetter('Visual_LegendNameDescription'),
                            type: { text: true }
                        },
                        labelColor: {
                            displayName: 'Color',
                            type: { fill: { solid: { color: true } } }
                        },
                        fontSize: {
                            displayName: 'TextSize',
                            type: { formatting: { fontSize: true } }
                        },
                    }
                },
                categories: {
                    displayName: 'Group',
                    properties: {
                        show: {
                            displayName: 'Show',
                            type: { bool: true }
                        },
                        fill: {
                            displayName: 'Color',
                            type: { fill: { solid: { color: true } } }
                        }
                    }
                }
            },
            supportsHighlight: true,
        };

        private DefaultTornadoChartSettings: TornadoChartSettings = {
            labelOutsideFillColor: dataLabelUtils.defaultLabelColor,
            labelSettings: {
                show: true,
                precision: null,
                fontSize: TornadoChart.DefaultFontSize,
                displayUnits: 0,
                labelColor: dataLabelUtils.defaultInsideLabelColor,
            },
            showCategories: true,
            showLegend: true,
            legendFontSize: TornadoChart.DefaultLegendFontSize,
            legendColor: LegendData.DefaultLegendLabelFillColor,
            categoriesFillColor: "#777"
        };

        private DefaultFillColors: string[] = [
            "purple", "teal"
        ];

        private columnPadding: number = 5;
        private leftLabelMargin: number = 4;
        private durationAnimations: number;
        private InnerTextHeightDelta: number = 2;
        private textOptions: TornadoChartTextOptions = {};

        private sections: TornadoChartSections = {
            left: 75,
            right: 0,
        };

        private currentSections: TornadoChartSections = _.clone(this.sections);

        private margin: IMargin = {
            top: 10,
            right: 5,
            bottom: 10,
            left: 10
        };

        private root: D3.Selection;
        private svg: D3.Selection;
        private main: D3.Selection;
        private columns: D3.Selection;
        private axes: D3.Selection;
        private labels: D3.Selection;
        private categories: D3.Selection;
        private clearCatcher: D3.Selection;

        private legendObjectProperties: DataViewObject;
        private legend: ILegend;
        private hasDynamicSeries: boolean;
        private hasHighlights: boolean;
        private behavior: IInteractiveBehavior;
        private colors: IDataColorPalette;
        private interactivityService: IInteractivityService;
        private animator: IGenericAnimator;
        private hostService: IVisualHostServices;
        private scrolling: TornadoChartScrolling;

        private viewport: IViewport;
        private tornadoChartDataView: TornadoChartDataView;
        private defaultTornadoChartDataView: TornadoChartDataView;
        private labelHeight: number;
        private heightColumn: number = 0;
        private widthLeftSection: number = 0;
        private widthRightSection: number = 0;

        constructor(tornadoChartConstructorOptions?: TornadoChartConstructorOptions) {
            if (tornadoChartConstructorOptions) {
                this.svg = tornadoChartConstructorOptions.svg || this.svg;
                this.margin = tornadoChartConstructorOptions.margin || this.margin;
                this.sections = tornadoChartConstructorOptions.sections || this.sections;
                this.columnPadding = tornadoChartConstructorOptions.columnPadding || this.columnPadding;
                this.currentSections = _.clone(this.sections);
                this.animator = tornadoChartConstructorOptions.animator;
            }
        }

        public init(visualInitOptions: VisualInitOptions): void {
            let style: IVisualStyle = visualInitOptions.style,
                fontSize: string;

            this.hostService = visualInitOptions.host;
            let element: JQuery = visualInitOptions.element;
            this.colors = style.colorPalette.dataColors;
            let interactivity = visualInitOptions.interactivity;
            this.interactivityService = createInteractivityService(this.hostService);

            let root: D3.Selection;
            if (this.svg)
                this.root = root = this.svg;
            else
                this.root = root = d3.select(element.get(0))
                    .append("svg");

            root
                .classed(TornadoChart.ClassName, true)
                .style('position', 'absolute');

            fontSize = root.style("font-size");

            this.textOptions.sizeUnit = fontSize.slice(fontSize.length - 2);
            this.textOptions.fontSize = Number(fontSize.slice(0, fontSize.length - 2));
            this.textOptions.fontFamily = root.style("font-family");
            this.scrolling = new TornadoChartScrolling(() => root, () => this.viewport, () => this.margin, true);
            let main: D3.Selection = this.main = root.append("g");
            this.columns = main
                .append("g")
                .classed(TornadoChart.Columns.class, true);

            this.axes = main
                .append("g")
                .classed(TornadoChart.Axes.class, true);

            this.labels = main
                .append("g")
                .classed(TornadoChart.Labels.class, true);

            this.categories = main
                .append("g")
                .classed(TornadoChart.Categories.class, true);

            this.behavior = new TornadoWebBehavior();
            this.clearCatcher = appendClearCatcher(this.columns);
            this.defaultTornadoChartDataView = {
                categories: [],
                series: [],
                settings: null,
                legend: null,
                dataPoints: [],
                highlightedDataPoints: [],
            };

            this.legend = createLegend(element, interactivity && interactivity.isInteractiveLegend, this.interactivityService);
        }

        public update(visualUpdateOptions: VisualUpdateOptions): void {
            if (!visualUpdateOptions ||
                !visualUpdateOptions.dataViews ||
                !visualUpdateOptions.dataViews[0]) {
                return;
            }

            this.viewport = {
                height: visualUpdateOptions.viewport.height,
                width: visualUpdateOptions.viewport.width
            };

            if (this.animator)
                this.durationAnimations = AnimatorCommon.GetAnimationDuration(this.animator, visualUpdateOptions.suppressAnimations);
            else
                this.durationAnimations = visualUpdateOptions.suppressAnimations ? 0 : 250;

            this.tornadoChartDataView = this.converter(visualUpdateOptions.dataViews[0]);

            if (this.interactivityService) {
                this.interactivityService.applySelectionStateToData(this.tornadoChartDataView.dataPoints);
                this.interactivityService.applySelectionStateToData(this.tornadoChartDataView.highlightedDataPoints);
            }

            this.render();
        }

        private subtractMargin(viewport: IViewport): IViewport {
            return <IViewport>{
                height: viewport.height - this.margin.top - this.margin.bottom,
                width: viewport.width - this.margin.left - this.margin.right
            };
        }

        private updateElements(): void {
            let elementsTranslate: string = SVGUtil.translate(this.widthLeftSection, 0);

            this.root.attr({
                "height": this.viewport.height,
                "width": this.viewport.width
            });

            this.main.attr("transform", SVGUtil.translate(
                this.margin.left,
                this.margin.top
            ));

            this.columns
                .attr("transform", elementsTranslate);

            this.labels
                .attr("transform", elementsTranslate);

            this.axes
                .attr("transform", elementsTranslate);
        }

        public converter(dataView: DataView): TornadoChartDataView {
            if (!dataView ||
                !dataView.categorical ||
                !dataView.categorical.categories ||
                !dataView.categorical.categories[0] ||
                !dataView.categorical.categories[0].source ||
                !dataView.categorical.values ||
                !dataView.categorical.values[0]) {
                return this.defaultTornadoChartDataView;
            }

            let categorical: DataViewCategorical = dataView.categorical;
            let categories: DataViewCategoryColumn[] = categorical.categories || [];
            let values: DataViewValueColumns = categorical.values;
            if (values.length > TornadoChart.MaxSeries) {
                this.hostService.setWarnings([getTornadoChartWarning()]);
                return this.defaultTornadoChartDataView;
            }
            let category: DataViewCategoricalColumn = categories[0];
            let categoryValues: number[] = category.values;
            let categoryValuesLength: number = categoryValues.length;
            let objects: DataViewObjects = this.getObjectsFromDataView(dataView);

            let settings: TornadoChartSettings = this.parseSettings(objects);
            let formatStringProp: DataViewObjectPropertyIdentifier = TornadoChart.Properties.general.formatString;
            let categorySourceFormatString: string = valueFormatter.getFormatString(category.source, formatStringProp);
            this.hasDynamicSeries = !!values.source;
            let hasHighlights: boolean = this.hasHighlights = !!(values.length > 0 && values[0].highlights);
            this.labelHeight = TextMeasurementService.estimateSvgTextHeight({
                fontFamily: dataLabelUtils.StandardFontFamily,
                fontSize: PixelConverter.fromPoint(settings.labelSettings.fontSize),
            });

            let series: TornadoChartSeries[] = [];
            let dataPoints: TornadoChartPoint[] = [];
            let highlightedDataPoints: TornadoChartPoint[] = [];
            let categoriesLabels: TextData[] = [];

            let groupedValues: DataViewValueColumnGroup[] = [];
            if (values.grouped)
                groupedValues = values.grouped();
            
            // Parse category labels and compute maximum category length
            let maxCategoryLength: number = 0;
            let showCategories = settings.showCategories;
            for (let i = 0; i < categoryValuesLength; i++) {
                let formattedCategoryValue = valueFormatter.format(categoryValues[i], categorySourceFormatString);
                let textData = this.getTextData(formattedCategoryValue, true);
                categoriesLabels.push(textData);
                if (showCategories && textData.width > maxCategoryLength)
                    maxCategoryLength = textData.width;
            }

            let scrollBarWidth: number = (categoryValuesLength * TornadoChart.CategoryMinHeight > this.viewport.height) ? TornadoChart.ScrollBarWidth : 0;
            this.widthLeftSection = maxCategoryLength + TornadoChart.LabelPadding;
            let maxColumnWidth = this.widthRightSection = this.viewport.width - this.margin.right - this.widthLeftSection - scrollBarWidth;
            this.updateElements();

            let minValue: number = Math.min(d3.min(values[0].values), 0);
            let maxValue: number = d3.max(values[0].values);
            if (values.length === TornadoChart.MaxSeries) {
                minValue = d3.min([minValue, d3.min(values[1].values)]);
                maxValue = d3.max([maxValue, d3.max(values[1].values)]);
                maxColumnWidth = maxColumnWidth / TornadoChart.MaxSeries;
            }

            for (let seriesIndex = 0; seriesIndex < values.length; seriesIndex++) {
                let parsedSeries: TornadoChartSeries = this.parseSeries(values, seriesIndex, this.hasDynamicSeries, groupedValues);
                series.push(parsedSeries);
                let currentSeries = values[seriesIndex];
                let measureName = currentSeries.source.queryName;

                for (let i = 0; i < categoryValuesLength; i++) {
                    let value = currentSeries.values[i] == null || isNaN(currentSeries.values[i]) ? 0 : currentSeries.values[i];
                    let identity = SelectionIdBuilder.builder()
                        .withCategory(category, i)
                        .withSeries(values, currentSeries)
                        .withMeasure(measureName)
                        .createSelectionId();
                    let formattedCategoryValue = categoriesLabels[i].text;
                    let tooltipInfo: TooltipDataItem[];
                    tooltipInfo = TooltipBuilder.createTooltipInfo(formatStringProp, categorical, formattedCategoryValue, value, null, null, seriesIndex, i, null);

                    let shiftToMiddle: boolean = seriesIndex === 0 && values.length === TornadoChart.MaxSeries;
                    let shiftToRight: boolean = seriesIndex === 1;
                
                    // Limit maximum value with what the user choose
                    maxValue = parsedSeries.categoryAxisEnd ? Math.min(parsedSeries.categoryAxisEnd, maxValue) : maxValue;
                    let widthOfColumn: number = this.getColumnWidth(value, minValue, maxValue, maxColumnWidth);
                    let shift: number = maxColumnWidth - widthOfColumn;

                    let dx: number = shift * Number(shiftToMiddle) + maxColumnWidth * Number(shiftToRight);
                    let formatString = dataView.categorical.values[seriesIndex].source.format;

                    let label: LabelData = this.getLabelData(
                        value,
                        dx,
                        widthOfColumn,
                        shiftToMiddle,
                        formatString,
                        settings);

                    dataPoints.push({
                        dx: dx,
                        px: widthOfColumn / 2,
                        angle: shiftToMiddle ? 180 : 0,
                        width: widthOfColumn,
                        label: label,
                        color: parsedSeries.fill,
                        selected: false,
                        identity: identity,
                        tooltipData: tooltipInfo,
                        categoryIndex: i,
                    });

                    if (hasHighlights) {
                        let highlightIdentity = SelectionId.createWithHighlight(identity);
                        let highlight = currentSeries.highlights[i];
                        let highlightedValue = highlight != null ? highlight : 0;
                        widthOfColumn = this.getColumnWidth(highlightedValue, minValue, maxValue, maxColumnWidth);
                        shift = maxColumnWidth - widthOfColumn;

                        dx = shift * Number(shiftToMiddle) + maxColumnWidth * Number(shiftToRight);

                        label = this.getLabelData(
                            highlightedValue,
                            dx,
                            widthOfColumn,
                            shiftToMiddle,
                            formatString,
                            settings);

                        tooltipInfo = TooltipBuilder.createTooltipInfo(formatStringProp, categorical, formattedCategoryValue, value, null, null, seriesIndex, i, highlightedValue);

                        highlightedDataPoints.push({
                            dx: dx,
                            px: widthOfColumn / 2,
                            angle: shiftToMiddle ? 180 : 0,
                            width: widthOfColumn,
                            label: label,
                            color: parsedSeries.fill,
                            selected: false,
                            identity: highlightIdentity,
                            tooltipData: tooltipInfo,
                            categoryIndex: i,
                            tooltipInfo: tooltipInfo,
                            highlight: true,
                        });
                    }
                }
            }

            return {
                categories: categoriesLabels,
                series: series,
                settings: settings,
                legend: this.getLegendData(series),
                dataPoints: dataPoints,
                highlightedDataPoints: highlightedDataPoints,
            };
        }

        private parseSettings(objects: DataViewObjects): TornadoChartSettings {
            let precision: number = this.getPrecision(objects);

            let displayUnits: number = DataViewObjects.getValue<number>(
                objects,
                TornadoChart.Properties.labels.labelDisplayUnits,
                this.DefaultTornadoChartSettings.labelSettings.displayUnits);

            let labelSettings = this.DefaultTornadoChartSettings.labelSettings;

            return {
                labelOutsideFillColor: this.getColor(TornadoChart.Properties.labels.outsideFill, this.DefaultTornadoChartSettings.labelOutsideFillColor, objects),
                labelSettings: {
                    show: DataViewObjects.getValue<boolean>(objects, TornadoChart.Properties.labels.show, labelSettings.show),
                    precision: precision,
                    fontSize: DataViewObjects.getValue<number>(objects, TornadoChart.Properties.labels.fontSize, labelSettings.fontSize),
                    displayUnits: displayUnits,
                    labelColor: this.getColor(TornadoChart.Properties.labels.insideFill, labelSettings.labelColor, objects),
                },
                showCategories: DataViewObjects.getValue<boolean>(objects, TornadoChart.Properties.categories.show, this.DefaultTornadoChartSettings.showCategories),
                showLegend: DataViewObjects.getValue<boolean>(objects, TornadoChart.Properties.legend.show, this.DefaultTornadoChartSettings.showLegend),
                legendFontSize: DataViewObjects.getValue<number>(objects, TornadoChart.Properties.legend.fontSize, this.DefaultTornadoChartSettings.legendFontSize),
                legendColor: this.getColor(TornadoChart.Properties.legend.labelColor, this.DefaultTornadoChartSettings.legendColor, objects),
                categoriesFillColor: this.getColor(TornadoChart.Properties.categories.fill, this.DefaultTornadoChartSettings.categoriesFillColor, objects)
            };
        }

        private getColor(properties: any, defaultColor: string, objects: DataViewObjects): string {
            let colorHelper: ColorHelper = new ColorHelper(this.colors, properties, defaultColor);
            return colorHelper.getColorForMeasure(objects, "");
        }

        private getPrecision(objects: DataViewObjects): number {
            let precision: number = DataViewObjects.getValue<number>(
                objects,
                TornadoChart.Properties.labels.labelPrecision,
                this.DefaultTornadoChartSettings.labelSettings.precision);

            if (precision >= TornadoChart.MaxPrecision) {
                return TornadoChart.MaxPrecision;
            }

            return precision;
        }

        private getObjectsFromDataView(dataView: DataView): DataViewObjects {
            if (!dataView ||
                !dataView.metadata ||
                !dataView.metadata.columns ||
                !dataView.metadata.objects) {
                this.legendObjectProperties = {};
                return null;
            }
            this.legendObjectProperties = DataViewObjects.getObject(dataView.metadata.objects, "legend", {});
            return dataView.metadata.objects;
        }

        private parseSeries(dataViewValueColumns: DataViewValueColumns, index: number, isGrouped: boolean, grouped: DataViewValueColumnGroup[]): TornadoChartSeries {
            let dataViewValueColumn: DataViewValueColumn = dataViewValueColumns[index];
            let seriesGroup: DataViewValueColumnGroup | DataViewValueColumn = isGrouped ? grouped[index] : grouped[0].values[index];
            let source: DataViewMetadataColumn = dataViewValueColumn.source;

            let selectionId: SelectionId = seriesGroup.identity
                ? SelectionId.createWithId(seriesGroup.identity)
                : SelectionIdBuilder.builder()
                    .withSeries(dataViewValueColumns, seriesGroup)
                    .withMeasure(source.queryName)
                    .createSelectionId();

            let displayName: string = source.groupName ? source.groupName : source.displayName;
            let objects: DataViewObjects = source.objects;
            let categoryAxisObject: DataViewObject | DataViewObjectWithId[];

            if (isGrouped)
                categoryAxisObject = seriesGroup.objects ? seriesGroup.objects['categoryAxis'] : null;
            else
                categoryAxisObject = objects ? objects['categoryAxis'] : null;

            let color: string = this.getColor(
                TornadoChart.Properties.dataPoint.fill,
                this.DefaultFillColors[index],
                objects);
            let categoryAxisEnd: number = categoryAxisObject ? categoryAxisObject['end'] : null;

            return <TornadoChartSeries>{
                fill: color,
                name: displayName,
                selectionId: selectionId,
                categoryAxisEnd: categoryAxisEnd,
            };
        }

        private getLegendData(series: TornadoChartSeries[]): LegendData {
            let legendDataPoints: LegendDataPoint[] = [];

            if (this.hasDynamicSeries)
                legendDataPoints = series.map((item: TornadoChartSeries) => {
                    return <LegendDataPoint>{
                        label: item.name,
                        color: item.fill,
                        icon: LegendIcon.Box,
                        selected: false,
                        identity: item.selectionId
                    };
                });

            return {
                dataPoints: legendDataPoints
            };
        }

        private clearData(): void {
            this.columns.selectAll("*").remove();
            this.axes.selectAll("*").remove();
            this.labels.selectAll("*").remove();
            this.categories.selectAll("*").remove();
            this.legend.drawLegend({ dataPoints: [] }, this.viewport);
        }

        public onClearSelection(): void {
            if (this.interactivityService)
                this.interactivityService.clearSelection();
        }

        private render(): void {
            let tornadoChartDataView: TornadoChartDataView = this.tornadoChartDataView;
            if (!tornadoChartDataView ||
                !tornadoChartDataView.settings) {
                this.clearData();
                return;
            }

            this.renderLegend();
            this.updateViewport();

            let viewport: IViewport = this.subtractMargin(this.viewport);
            if (viewport.width <= 0 || viewport.height <= 0) {
                return;
            }
            this.viewport = viewport;

            this.scrolling.renderY(
                tornadoChartDataView,
                tornadoChartDataView.categories.length * TornadoChart.CategoryMinHeight,
                this.renderWithScrolling.bind(this));
        }

        private renderWithScrolling(tornadoChartDataView: TornadoChartDataView, scrollStart: number, scrollEnd: number): void {
            let categoriesLength = tornadoChartDataView.categories.length;
            let startIndex: number = scrollStart * categoriesLength;
            let endIndex: number = scrollEnd * categoriesLength;

            let startIndexRound: number = Math.floor(startIndex);
            let endIndexRound: number = Math.floor(endIndex);

            let maxValues: number = Math.floor(this.scrolling.scrollViewport.height / TornadoChart.CategoryMinHeight);

            if (scrollEnd - scrollStart < 1 && maxValues < endIndexRound - startIndexRound) {
                if (startIndex - startIndexRound > endIndex - endIndexRound) {
                    startIndexRound++;
                }
                else {
                    endIndex--;
                }
            }

            if (this.interactivityService) {
                this.interactivityService.applySelectionStateToData(tornadoChartDataView.dataPoints);
                this.interactivityService.applySelectionStateToData(tornadoChartDataView.highlightedDataPoints);
            }
            
            // Filter data according to the visible visual area
            tornadoChartDataView.categories = tornadoChartDataView.categories.slice(startIndexRound, endIndexRound);
            tornadoChartDataView.dataPoints = _.filter(tornadoChartDataView.dataPoints, (d: TornadoChartPoint) => d.categoryIndex >= startIndexRound && d.categoryIndex < endIndexRound);
            tornadoChartDataView.highlightedDataPoints = _.filter(tornadoChartDataView.highlightedDataPoints, (d: TornadoChartPoint) => d.categoryIndex >= startIndexRound && d.categoryIndex < endIndexRound);

            this.tornadoChartDataView = tornadoChartDataView;
            this.computeHeightColumn();
            this.renderMiddleSection();
            this.renderAxes();
            this.renderCategories();
        }

        private updateViewport(): void {
            let legendMargins: IViewport = this.legend.getMargins(),
                legendPosition: LegendPosition;

            legendPosition = LegendPosition[<string>this.legendObjectProperties[legendProps.position]];

            switch (legendPosition) {
                case LegendPosition.Top:
                case LegendPosition.TopCenter:
                case LegendPosition.Bottom:
                case LegendPosition.BottomCenter: {
                    this.viewport.height -= legendMargins.height;

                    break;
                }
                case LegendPosition.Left:
                case LegendPosition.LeftCenter:
                case LegendPosition.Right:
                case LegendPosition.RightCenter: {
                    this.viewport.width -= legendMargins.width;

                    break;
                }
            }
        }

        private computeHeightColumn(): void {
            let length: number = this.tornadoChartDataView.categories.length;
            this.heightColumn = (this.scrolling.scrollViewport.height - ((length - 1) * this.columnPadding)) / length;
        }

        private renderMiddleSection(): void {
            let tornadoChartDataView: TornadoChartDataView = this.tornadoChartDataView;
            let dataPointsWithHighlights: TornadoChartPoint[] = tornadoChartDataView.dataPoints.concat(tornadoChartDataView.highlightedDataPoints);
            this.renderColumns(dataPointsWithHighlights, tornadoChartDataView.series.length === 2);
            this.renderLabels(this.hasHighlights ? tornadoChartDataView.highlightedDataPoints : tornadoChartDataView.dataPoints, tornadoChartDataView.settings.labelSettings);
        }

        private renderColumns(columnsData: TornadoChartPoint[], selectSecondSeries: boolean = false): void {
            let columnsSelection: D3.UpdateSelection = this.main
                .select(TornadoChart.Columns.selector)
                .selectAll(TornadoChart.Column.selector)
                .data(columnsData);

            let hasSelection = this.interactivityService && this.interactivityService.hasSelection();
            let hasHighlights = this.hasHighlights;
            let heightColumn = Math.max(this.heightColumn, 0);
            let py = heightColumn / 2;
            let pyHighlighted = heightColumn * TornadoChart.HighlightedShapeFactor / 2;
            let categoriesLength = this.tornadoChartDataView.categories.length;

            columnsSelection
                .enter()
                .append("svg:rect")
                .classed(TornadoChart.Column.class, true);

            columnsSelection
                .style("fill", (item: TornadoChartPoint) => item.color)
                .style("fill-opacity", (item: TornadoChartPoint) => ColumnUtil.getFillOpacity(item.selected, item.highlight, hasSelection, hasHighlights))
                .attr("transform", (item: TornadoChartPoint, index: number) => {
                    let highlighted: boolean = hasHighlights && item.highlight;
                    let highlightOffset: number = highlighted ? heightColumn * (1 - TornadoChart.HighlightedShapeFactor) / 2 : 0;
                    let dy: number = (heightColumn + this.columnPadding) * (index % categoriesLength) + highlightOffset;
                    return SVGUtil.translateAndRotate(item.dx, dy, item.px, highlighted ? pyHighlighted : py, item.angle);
                })
                .transition()
                .duration(this.durationAnimations)
                .attr("width", (item: TornadoChartPoint) => Math.max(item.width, 0))
                .attr("height", (item: TornadoChartPoint) => (hasHighlights && item.highlight) ? heightColumn * TornadoChart.HighlightedShapeFactor : heightColumn);

            columnsSelection
                .exit()
                .remove();

            let interactivityService = this.interactivityService;

            if (interactivityService) {
                interactivityService.applySelectionStateToData(columnsData);
                let behaviorOptions: TornadoBehaviorOptions = {
                    columns: columnsSelection,
                    clearCatcher: this.clearCatcher,
                    interactivityService: this.interactivityService,
                };
                interactivityService.bind(columnsData, this.behavior, behaviorOptions);
            }

            this.renderTooltip(columnsSelection);
        }

        private renderTooltip(selection: D3.UpdateSelection): void {
            TooltipManager.addTooltip(selection, (tooltipEvent: TooltipEvent) => {
                return (<TornadoChartPoint>tooltipEvent.data).tooltipData;
            });
        }

        private getColumnWidth(value: number, minValue: number, maxValue: number, width: number): number {
            if (minValue === maxValue) {
                return width;
            }
            let columnWidth = width * (value - minValue) / (maxValue - minValue);

            // In case the user specifies a custom category axis end we limit the
            // column width to the maximum available width
            return Math.min(width, columnWidth);
        }

        private getLabelData(
            value: number,
            dxColumn: number,
            columnWidth: number,
            isColumnPositionLeft: boolean,
            formatStringProp: string,
            settings?: TornadoChartSettings): LabelData {

            let dx: number,
                tornadoChartSettings: TornadoChartSettings = settings ? settings : this.tornadoChartDataView.settings,
                labelSettings: VisualDataLabelsSettings = tornadoChartSettings.labelSettings,
                fontSize: number = labelSettings.fontSize,
                color: string = labelSettings.labelColor;

            let maxOutsideLabelWidth = isColumnPositionLeft
                ? dxColumn - this.leftLabelMargin
                : this.widthRightSection - (dxColumn + columnWidth + this.leftLabelMargin + this.margin.right);
            let maxLabelWidth = Math.max(maxOutsideLabelWidth, columnWidth - this.leftLabelMargin);
            let textProperties: TextProperties = {
                fontFamily: dataLabelUtils.StandardFontFamily,
                fontSize: PixelConverter.fromPoint(fontSize),
                text: valueFormatter.format(value, formatStringProp)
            };
            let valueAfterValueFormatter: string = TextMeasurementService.getTailoredTextOrDefault(textProperties, maxLabelWidth);
            let textDataAfterValueFormatter: TextData = this.getTextData(valueAfterValueFormatter, true, false, fontSize);

            if (columnWidth > textDataAfterValueFormatter.width + TornadoChart.LabelPadding) {
                dx = dxColumn + columnWidth / 2 - textDataAfterValueFormatter.width / 2;
            } else {
                if (isColumnPositionLeft) {
                    dx = dxColumn - this.leftLabelMargin - textDataAfterValueFormatter.width;
                } else {
                    dx = dxColumn + columnWidth + this.leftLabelMargin;
                }
                color = tornadoChartSettings.labelOutsideFillColor;
            }

            return {
                dx: dx,
                source: value,
                value: valueAfterValueFormatter,
                color: color,
                width: textDataAfterValueFormatter.width
            };
        }

        private renderAxes(): void {
            let linesData: LineData[],
                axesSelection: D3.UpdateSelection,
                axesElements: D3.Selection = this.main
                    .select(TornadoChart.Axes.selector)
                    .selectAll(TornadoChart.Axis.selector);

            if (this.tornadoChartDataView.series.length !== TornadoChart.MaxSeries) {
                axesElements.remove();
                return;
            }

            linesData = this.generateAxesData();

            axesSelection = axesElements.data(linesData);

            axesSelection
                .enter()
                .append("svg:line")
                .classed(TornadoChart.Axis.class, true);

            axesSelection
                .transition()
                .duration(this.durationAnimations)
                .attr("x1", (item: LineData) => item.x1)
                .attr("y1", (item: LineData) => item.y1)
                .attr("x2", (item: LineData) => item.x2)
                .attr("y2", (item: LineData) => item.y2);

            axesSelection
                .exit()
                .remove();
        }

        private generateAxesData(): LineData[] {
            let x: number,
                y1: number,
                y2: number;

            x = this.widthRightSection / 2;
            y1 = 0;
            y2 = this.scrolling.scrollViewport.height;

            return [{
                x1: x,
                y1: y1,
                x2: x,
                y2: y2
            }];
        }

        private renderLabels(dataPoints: TornadoChartPoint[], labelsSettings: VisualDataLabelsSettings): void {
            let labelEnterSelection: D3.Selection,
                labelSelection: D3.UpdateSelection = this.main
                    .select(TornadoChart.Labels.selector)
                    .selectAll(TornadoChart.Label.selector)
                    .data(dataPoints);
            
            // Check if labels can be displayed
            if (!labelsSettings.show || this.labelHeight >= this.heightColumn) {
                this.labels.selectAll("*").remove();
                return;
            }

            let fontSizeInPx: string = PixelConverter.fromPoint(labelsSettings.fontSize);
            let labelYOffset: number = this.heightColumn / 2 + this.labelHeight / 2 - this.InnerTextHeightDelta;
            let categoriesLength: number = this.tornadoChartDataView.categories.length;

            labelEnterSelection = labelSelection
                .enter()
                .append("g");

            labelEnterSelection
                .append("svg:title")
                .classed(TornadoChart.LabelTitle.class, true);

            labelEnterSelection
                .append("svg:text")
                .attr("dy", dataLabelUtils.DefaultDy)
                .classed(TornadoChart.LabelText.class, true);

            labelSelection
                .attr("pointer-events", "none")
                .classed(TornadoChart.Label.class, true);

            labelSelection
                .select(TornadoChart.LabelTitle.selector)
                .text((item: TornadoChartPoint) => item.label.source);

            labelSelection
                .attr("transform", (item: TornadoChartPoint, index: number) => {
                    let dy = (this.heightColumn + this.columnPadding) * (index % categoriesLength);
                    return SVGUtil.translate(item.label.dx, dy + labelYOffset);
                });

            labelSelection
                .select(TornadoChart.LabelText.selector)
                .attr("fill", (item: TornadoChartPoint) => item.label.color)
                .attr("font-size", (item: TornadoChartPoint) => fontSizeInPx)
                .text((item: TornadoChartPoint) => item.label.value);

            labelSelection
                .exit()
                .remove();
        }

        private renderCategories(): void {
            let settings: TornadoChartSettings = this.tornadoChartDataView.settings,
                color: string = settings.categoriesFillColor,
                categoriesEnterSelection: D3.Selection,
                categoriesSelection: D3.UpdateSelection,
                categoryElements: D3.Selection = this.main
                    .select(TornadoChart.Categories.selector)
                    .selectAll(TornadoChart.Category.selector),
                self: TornadoChart = this;

            if (!settings.showCategories) {
                categoryElements.remove();
                return;
            }

            categoriesSelection = categoryElements.data(this.tornadoChartDataView.categories);

            categoriesEnterSelection = categoriesSelection
                .enter()
                .append("g");

            categoriesEnterSelection
                .append("svg:title")
                .classed(TornadoChart.CategoryTitle.class, true);

            categoriesEnterSelection
                .append("svg:text")
                .classed(TornadoChart.CategoryText.class, true);

            categoriesSelection
                .attr("transform", (item: string, index: number) => {
                    let shift: number = (this.heightColumn + this.columnPadding) * index + this.heightColumn / 2,
                        textData: TextData = this.getTextData(item, false, true);

                    shift = shift + textData.height / 2 - this.InnerTextHeightDelta;

                    return SVGUtil.translate(0, shift);
                })
                .classed(TornadoChart.Category.class, true);

            categoriesSelection
                .select(TornadoChart.CategoryTitle.selector)
                .text((item: string) => item);

            categoriesSelection
                .select(TornadoChart.CategoryText.selector)
                .attr("fill", color)
                .text((item: TextData) => {
                    let textData: TextData = self.getTextData(item.text);

                    return TextMeasurementService.getTailoredTextOrDefault(textData.textProperties, self.widthLeftSection);
                });

            categoriesSelection
                .exit()
                .remove();
        }

        private renderLegend(): void {
            let legend = this.tornadoChartDataView.legend;
            if (!legend) {
                return;
            }
            let settings: TornadoChartSettings = this.tornadoChartDataView.settings;

            let legendData: LegendData = {
                title: legend.title,
                dataPoints: legend.dataPoints,
                fontSize: settings.legendFontSize,
                labelColor: settings.legendColor,
            };

            if (this.legendObjectProperties) {
                let position: string;

                LegendData.update(legendData, this.legendObjectProperties);

                position = <string>this.legendObjectProperties[legendProps.position];

                if (position) {
                    this.legend.changeOrientation(LegendPosition[position]);
                }
            }

            this.legend.drawLegend(legendData, _.clone(this.viewport));
            Legend.positionChartArea(this.root, this.legend);
        }

        private getTextData(text: string, measureWidth: boolean = false, measureHeight: boolean = false, overrideFontSize?: number): TextData {
            let width: number = 0,
                height: number = 0,
                fontSize: string,
                textProperties: TextProperties;

            text = text || "";

            fontSize = overrideFontSize
                ? PixelConverter.fromPoint(overrideFontSize)
                : `${this.textOptions.fontSize}${this.textOptions.sizeUnit}`;

            textProperties = {
                text: text,
                fontFamily: this.textOptions.fontFamily,
                fontSize: fontSize
            };

            if (measureWidth) {
                width = TextMeasurementService.measureSvgTextWidth(textProperties);
            }

            if (measureHeight) {
                height = TextMeasurementService.estimateSvgTextHeight(textProperties);
            }

            return {
                text: text,
                width: width,
                height: height,
                textProperties: textProperties
            };
        }

        public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstanceEnumeration {
            let enumeration = new ObjectEnumerationBuilder(),
                settings: TornadoChartSettings;

            if (!this.tornadoChartDataView ||
                !this.tornadoChartDataView.settings) {
                return [];
            }

            settings = this.tornadoChartDataView.settings;

            switch (options.objectName) {
                case "dataPoint": {
                    this.enumerateDataPoint(enumeration);
                    break;
                }
                case "categoryAxis": {
                    this.enumerateCategoryAxis(enumeration);
                    break;
                }
                case "labels": {
                    let labelSettings = settings.labelSettings;
                    let labels: VisualObjectInstance = {
                        objectName: "labels",
                        displayName: "Labels",
                        selector: null,
                        properties: {
                            show: labelSettings.show,
                            fontSize: labelSettings.fontSize,
                            labelPrecision: labelSettings.precision,
                            labelDisplayUnits: labelSettings.displayUnits,
                            insideFill: labelSettings.labelColor,
                            outsideFill: settings.labelOutsideFillColor
                        }
                    };

                    enumeration.pushInstance(labels);
                    break;
                }
                case "legend": {
                    if (!this.hasDynamicSeries)
                        return;

                    let showTitle: boolean = true,
                        titleText: string = "",
                        legend: VisualObjectInstance;

                    showTitle = DataViewObject.getValue<boolean>(
                        this.legendObjectProperties,
                        legendProps.showTitle,
                        showTitle);

                    titleText = DataViewObject.getValue<string>(
                        this.legendObjectProperties,
                        legendProps.titleText,
                        titleText);

                    legend = {
                        objectName: "legend",
                        displayName: "Legend",
                        selector: null,
                        properties: {
                            show: settings.showLegend,
                            position: LegendPosition[this.legend.getOrientation()],
                            showTitle: showTitle,
                            titleText: titleText,
                            fontSize: settings.legendFontSize,
                            labelColor: settings.legendColor,
                        }
                    };

                    enumeration.pushInstance(legend);
                    break;
                }
                case "categories": {
                    let categories: VisualObjectInstance = {
                        objectName: "categories",
                        displayName: "Categories",
                        selector: null,
                        properties: {
                            show: settings.showCategories,
                            fill: settings.categoriesFillColor
                        }
                    };

                    enumeration.pushInstance(categories);
                    break;
                }
            }

            return enumeration.complete();
        }

        private enumerateDataPoint(enumeration: ObjectEnumerationBuilder): void {
            if (!this.tornadoChartDataView ||
                !this.tornadoChartDataView.series) {
                return;
            }

            let series: TornadoChartSeries[] = this.tornadoChartDataView.series;

            for (let item of series) {
                enumeration.pushInstance({
                    objectName: "dataPoint",
                    displayName: item.name,
                    selector: ColorHelper.normalizeSelector(item.selectionId.getSelector(), false),
                    properties: {
                        fill: { solid: { color: item.fill } }
                    }
                });
            }
        }

        private enumerateCategoryAxis(enumeration: ObjectEnumerationBuilder): void {
            if (!this.tornadoChartDataView || !this.tornadoChartDataView.series)
                return;

            let series: TornadoChartSeries[] = this.tornadoChartDataView.series;

            for (let item of series) {
                enumeration.pushInstance({
                    objectName: "categoryAxis",
                    displayName: item.name,
                    selector: item.selectionId ? item.selectionId.getSelector() : null,
                    properties: {
                        end: item.categoryAxisEnd,
                    }
                });
            }
        }

        public destroy(): void {
            this.root = null;
        }
    }
}