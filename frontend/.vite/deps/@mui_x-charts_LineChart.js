import {
  ChartsAxis,
  ChartsAxisHighlight,
  ChartsLegend,
  ChartsOverlay,
  ChartsTooltip,
  ResponsiveChartContainer,
  animated,
  getColor,
  getValueToPositionMapper,
  to,
  useChartGradient,
  useChartId,
  useInteractionItemProps,
  useItemHighlighted,
  useSlotProps,
  useSpring
} from "./chunk-YMANLX6N.js";
import {
  CartesianContext,
  DEFAULT_X_AXIS_KEY,
  InteractionContext,
  Symbol,
  _extends,
  _objectWithoutPropertiesLoose,
  area_default,
  catmullRom_default,
  cleanId,
  color,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  getSymbol,
  init_extends,
  line_default,
  linear_default,
  monotoneX,
  monotoneY,
  natural_default,
  require_jsx_runtime,
  stepAfter,
  stepBefore,
  step_default,
  string_default,
  styled_default,
  symbolsFill,
  useDrawingArea,
  useId,
  useLineSeries,
  useSeries,
  useSvgRef,
  useThemeProps,
  useTicks
} from "./chunk-U4XWPRBY.js";
import {
  require_prop_types
} from "./chunk-WV6XQKQQ.js";
import "./chunk-4ZSTBHIF.js";
import {
  require_react
} from "./chunk-HAZNF34R.js";
import {
  __toESM
} from "./chunk-WXXH56N5.js";

// node_modules/@mui/x-charts/esm/LineChart/LineChart.js
init_extends();
var React15 = __toESM(require_react());
var import_prop_types14 = __toESM(require_prop_types());

// node_modules/@mui/x-charts/esm/LineChart/AreaPlot.js
init_extends();
var React4 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/@mui/x-charts/esm/LineChart/AreaElement.js
init_extends();
var React3 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());

// node_modules/@mui/x-charts/esm/LineChart/AnimatedArea.js
init_extends();
var React2 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/x-charts/esm/internals/useAnimatedPath.js
var React = __toESM(require_react());
function usePrevious(value) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
var useAnimatedPath = (path, skipAnimation) => {
  const previousPath = usePrevious(path);
  const interpolator = React.useMemo(() => previousPath ? string_default(previousPath, path) : () => path, [previousPath, path]);
  const {
    value
  } = useSpring({
    from: {
      value: 0
    },
    to: {
      value: 1
    },
    reset: true,
    immediate: skipAnimation
  });
  return to([value], interpolator);
};

// node_modules/@mui/x-charts/esm/LineChart/AnimatedArea.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["d", "skipAnimation", "ownerState"];
var AreaElementPath = styled_default(animated.path, {
  name: "MuiAreaElement",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  ownerState
}) => ({
  stroke: "none",
  fill: ownerState.gradientId && `url(#${ownerState.gradientId})` || ownerState.isHighlighted && color(ownerState.color).brighter(1).formatHex() || color(ownerState.color).brighter(0.5).formatHex(),
  transition: "opacity 0.2s ease-in, fill 0.2s ease-in",
  opacity: ownerState.isFaded ? 0.3 : 1
}));
function AnimatedArea(props) {
  const {
    d,
    skipAnimation,
    ownerState
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    left,
    top,
    right,
    bottom,
    width,
    height
  } = useDrawingArea();
  const chartId = useChartId();
  const path = useAnimatedPath(d, skipAnimation);
  const {
    animatedWidth
  } = useSpring({
    from: {
      animatedWidth: left
    },
    to: {
      animatedWidth: width + left + right
    },
    reset: false,
    immediate: skipAnimation
  });
  const clipId = cleanId(`${chartId}-${ownerState.id}-area-clip`);
  return (0, import_jsx_runtime.jsxs)(React2.Fragment, {
    children: [(0, import_jsx_runtime.jsx)("clipPath", {
      id: clipId,
      children: (0, import_jsx_runtime.jsx)(animated.rect, {
        x: 0,
        y: 0,
        width: animatedWidth,
        height: top + height + bottom
      })
    }), (0, import_jsx_runtime.jsx)("g", {
      clipPath: `url(#${clipId})`,
      children: (0, import_jsx_runtime.jsx)(AreaElementPath, _extends({}, other, {
        ownerState,
        d: path
      }))
    })]
  });
}
true ? AnimatedArea.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  d: import_prop_types.default.string.isRequired,
  ownerState: import_prop_types.default.shape({
    classes: import_prop_types.default.object,
    color: import_prop_types.default.string.isRequired,
    gradientId: import_prop_types.default.string,
    id: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]).isRequired,
    isFaded: import_prop_types.default.bool.isRequired,
    isHighlighted: import_prop_types.default.bool.isRequired
  }).isRequired,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: import_prop_types.default.bool
} : void 0;

// node_modules/@mui/x-charts/esm/LineChart/AreaElement.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded2 = ["id", "classes", "color", "gradientId", "slots", "slotProps", "onClick"];
function getAreaElementUtilityClass(slot) {
  return generateUtilityClass("MuiAreaElement", slot);
}
var areaElementClasses = generateUtilityClasses("MuiAreaElement", ["root", "highlighted", "faded"]);
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    id,
    isFaded,
    isHighlighted
  } = ownerState;
  const slots = {
    root: ["root", `series-${id}`, isHighlighted && "highlighted", isFaded && "faded"]
  };
  return composeClasses(slots, getAreaElementUtilityClass, classes);
};
function AreaElement(props) {
  const {
    id,
    classes: innerClasses,
    color: color2,
    gradientId,
    slots,
    slotProps,
    onClick
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const getInteractionItemProps = useInteractionItemProps();
  const {
    isFaded,
    isHighlighted
  } = useItemHighlighted({
    seriesId: id
  });
  const ownerState = {
    id,
    classes: innerClasses,
    color: color2,
    gradientId,
    isFaded,
    isHighlighted
  };
  const classes = useUtilityClasses(ownerState);
  const Area = (slots == null ? void 0 : slots.area) ?? AnimatedArea;
  const areaProps = useSlotProps({
    elementType: Area,
    externalSlotProps: slotProps == null ? void 0 : slotProps.area,
    additionalProps: _extends({}, getInteractionItemProps({
      type: "line",
      seriesId: id
    }), {
      onClick,
      cursor: onClick ? "pointer" : "unset"
    }),
    className: classes.root,
    ownerState
  });
  return (0, import_jsx_runtime2.jsx)(Area, _extends({}, other, areaProps));
}
true ? AreaElement.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: import_prop_types2.default.object,
  color: import_prop_types2.default.string.isRequired,
  d: import_prop_types2.default.string.isRequired,
  gradientId: import_prop_types2.default.string,
  id: import_prop_types2.default.oneOfType([import_prop_types2.default.number, import_prop_types2.default.string]).isRequired,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: import_prop_types2.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types2.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types2.default.object
} : void 0;

// node_modules/@mui/x-charts/esm/internals/getCurve.js
function getCurveFactory(curveType) {
  switch (curveType) {
    case "catmullRom": {
      return catmullRom_default.alpha(0.5);
    }
    case "linear": {
      return linear_default;
    }
    case "monotoneX": {
      return monotoneX;
    }
    case "monotoneY": {
      return monotoneY;
    }
    case "natural": {
      return natural_default;
    }
    case "step": {
      return step_default;
    }
    case "stepBefore": {
      return stepBefore;
    }
    case "stepAfter": {
      return stepAfter;
    }
    default:
      return monotoneX;
  }
}

// node_modules/@mui/x-charts/esm/LineChart/AreaPlot.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var _excluded3 = ["slots", "slotProps", "onItemClick", "skipAnimation"];
var useAggregatedData = () => {
  const seriesData = useLineSeries();
  const axisData = React4.useContext(CartesianContext);
  if (seriesData === void 0) {
    return [];
  }
  const {
    series,
    stackingGroups
  } = seriesData;
  const {
    xAxis,
    yAxis,
    xAxisIds,
    yAxisIds
  } = axisData;
  const defaultXAxisId = xAxisIds[0];
  const defaultYAxisId = yAxisIds[0];
  return stackingGroups.flatMap(({
    ids: groupIds
  }) => {
    return [...groupIds].reverse().map((seriesId) => {
      const {
        xAxisKey = defaultXAxisId,
        yAxisKey = defaultYAxisId,
        stackedData,
        data,
        connectNulls
      } = series[seriesId];
      const xScale = getValueToPositionMapper(xAxis[xAxisKey].scale);
      const yScale = yAxis[yAxisKey].scale;
      const xData = xAxis[xAxisKey].data;
      const gradientUsed = yAxis[yAxisKey].colorScale && [yAxisKey, "y"] || xAxis[xAxisKey].colorScale && [xAxisKey, "x"] || void 0;
      if (true) {
        if (xData === void 0) {
          throw new Error(`MUI X Charts: ${xAxisKey === DEFAULT_X_AXIS_KEY ? "The first `xAxis`" : `The x-axis with id "${xAxisKey}"`} should have data property to be able to display a line plot.`);
        }
        if (xData.length < stackedData.length) {
          throw new Error(`MUI X Charts: The data length of the x axis (${xData.length} items) is lower than the length of series (${stackedData.length} items).`);
        }
      }
      const areaPath = area_default().x((d2) => xScale(d2.x)).defined((_, i) => connectNulls || data[i] != null).y0((d2) => d2.y && yScale(d2.y[0])).y1((d2) => d2.y && yScale(d2.y[1]));
      const curve = getCurveFactory(series[seriesId].curve);
      const formattedData = (xData == null ? void 0 : xData.map((x, index) => ({
        x,
        y: stackedData[index]
      }))) ?? [];
      const d3Data = connectNulls ? formattedData.filter((_, i) => data[i] != null) : formattedData;
      const d = areaPath.curve(curve)(d3Data) || "";
      return _extends({}, series[seriesId], {
        gradientUsed,
        d,
        seriesId
      });
    });
  });
};
function AreaPlot(props) {
  const {
    slots,
    slotProps,
    onItemClick,
    skipAnimation
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  const getGradientId = useChartGradient();
  const completedData = useAggregatedData();
  return (0, import_jsx_runtime3.jsx)("g", _extends({}, other, {
    children: completedData.map(({
      d,
      seriesId,
      color: color2,
      area,
      gradientUsed
    }) => !!area && (0, import_jsx_runtime3.jsx)(AreaElement, {
      id: seriesId,
      d,
      color: color2,
      gradientId: gradientUsed && getGradientId(...gradientUsed),
      slots,
      slotProps,
      onClick: onItemClick && ((event) => onItemClick(event, {
        type: "line",
        seriesId
      })),
      skipAnimation
    }, seriesId))
  }));
}
true ? AreaPlot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Callback fired when a line area item is clicked.
   * @param {React.MouseEvent<SVGPathElement, MouseEvent>} event The event source of the callback.
   * @param {LineItemIdentifier} lineItemIdentifier The line item identifier.
   */
  onItemClick: import_prop_types3.default.func,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: import_prop_types3.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types3.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types3.default.object
} : void 0;

// node_modules/@mui/x-charts/esm/LineChart/LinePlot.js
init_extends();
var React7 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());

// node_modules/@mui/x-charts/esm/LineChart/LineElement.js
init_extends();
var React6 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());

// node_modules/@mui/x-charts/esm/LineChart/AnimatedLine.js
init_extends();
var React5 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var _excluded4 = ["d", "skipAnimation", "ownerState"];
var LineElementPath = styled_default(animated.path, {
  name: "MuiLineElement",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  ownerState
}) => ({
  strokeWidth: 2,
  strokeLinejoin: "round",
  fill: "none",
  stroke: ownerState.gradientId && `url(#${ownerState.gradientId})` || ownerState.isHighlighted && color(ownerState.color).brighter(0.5).formatHex() || ownerState.color,
  transition: "opacity 0.2s ease-in, stroke 0.2s ease-in",
  opacity: ownerState.isFaded ? 0.3 : 1
}));
function AnimatedLine(props) {
  const {
    d,
    skipAnimation,
    ownerState
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  const {
    left,
    top,
    bottom,
    width,
    height,
    right
  } = useDrawingArea();
  const chartId = useChartId();
  const path = useAnimatedPath(d, skipAnimation);
  const {
    animatedWidth
  } = useSpring({
    from: {
      animatedWidth: left
    },
    to: {
      animatedWidth: width + left + right
    },
    reset: false,
    immediate: skipAnimation
  });
  const clipId = cleanId(`${chartId}-${ownerState.id}-line-clip`);
  return (0, import_jsx_runtime4.jsxs)(React5.Fragment, {
    children: [(0, import_jsx_runtime4.jsx)("clipPath", {
      id: clipId,
      children: (0, import_jsx_runtime4.jsx)(animated.rect, {
        x: 0,
        y: 0,
        width: animatedWidth,
        height: top + height + bottom
      })
    }), (0, import_jsx_runtime4.jsx)("g", {
      clipPath: `url(#${clipId})`,
      children: (0, import_jsx_runtime4.jsx)(LineElementPath, _extends({}, other, {
        ownerState,
        d: path
      }))
    })]
  });
}
true ? AnimatedLine.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  d: import_prop_types4.default.string.isRequired,
  ownerState: import_prop_types4.default.shape({
    classes: import_prop_types4.default.object,
    color: import_prop_types4.default.string.isRequired,
    gradientId: import_prop_types4.default.string,
    id: import_prop_types4.default.oneOfType([import_prop_types4.default.number, import_prop_types4.default.string]).isRequired,
    isFaded: import_prop_types4.default.bool.isRequired,
    isHighlighted: import_prop_types4.default.bool.isRequired
  }).isRequired,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: import_prop_types4.default.bool
} : void 0;

// node_modules/@mui/x-charts/esm/LineChart/LineElement.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var _excluded5 = ["id", "classes", "color", "gradientId", "slots", "slotProps", "onClick"];
function getLineElementUtilityClass(slot) {
  return generateUtilityClass("MuiLineElement", slot);
}
var lineElementClasses = generateUtilityClasses("MuiLineElement", ["root", "highlighted", "faded"]);
var useUtilityClasses2 = (ownerState) => {
  const {
    classes,
    id,
    isFaded,
    isHighlighted
  } = ownerState;
  const slots = {
    root: ["root", `series-${id}`, isHighlighted && "highlighted", isFaded && "faded"]
  };
  return composeClasses(slots, getLineElementUtilityClass, classes);
};
function LineElement(props) {
  const {
    id,
    classes: innerClasses,
    color: color2,
    gradientId,
    slots,
    slotProps,
    onClick
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
  const getInteractionItemProps = useInteractionItemProps();
  const {
    isFaded,
    isHighlighted
  } = useItemHighlighted({
    seriesId: id
  });
  const ownerState = {
    id,
    classes: innerClasses,
    color: color2,
    gradientId,
    isFaded,
    isHighlighted
  };
  const classes = useUtilityClasses2(ownerState);
  const Line = (slots == null ? void 0 : slots.line) ?? AnimatedLine;
  const lineProps = useSlotProps({
    elementType: Line,
    externalSlotProps: slotProps == null ? void 0 : slotProps.line,
    additionalProps: _extends({}, getInteractionItemProps({
      type: "line",
      seriesId: id
    }), {
      onClick,
      cursor: onClick ? "pointer" : "unset"
    }),
    className: classes.root,
    ownerState
  });
  return (0, import_jsx_runtime5.jsx)(Line, _extends({}, other, lineProps));
}
true ? LineElement.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: import_prop_types5.default.object,
  color: import_prop_types5.default.string.isRequired,
  d: import_prop_types5.default.string.isRequired,
  gradientId: import_prop_types5.default.string,
  id: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]).isRequired,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: import_prop_types5.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types5.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types5.default.object
} : void 0;

// node_modules/@mui/x-charts/esm/LineChart/LinePlot.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var _excluded6 = ["slots", "slotProps", "skipAnimation", "onItemClick"];
var useAggregatedData2 = () => {
  const seriesData = useLineSeries();
  const axisData = React7.useContext(CartesianContext);
  if (seriesData === void 0) {
    return [];
  }
  const {
    series,
    stackingGroups
  } = seriesData;
  const {
    xAxis,
    yAxis,
    xAxisIds,
    yAxisIds
  } = axisData;
  const defaultXAxisId = xAxisIds[0];
  const defaultYAxisId = yAxisIds[0];
  return stackingGroups.flatMap(({
    ids: groupIds
  }) => {
    return groupIds.flatMap((seriesId) => {
      const {
        xAxisKey = defaultXAxisId,
        yAxisKey = defaultYAxisId,
        stackedData,
        data,
        connectNulls
      } = series[seriesId];
      const xScale = getValueToPositionMapper(xAxis[xAxisKey].scale);
      const yScale = yAxis[yAxisKey].scale;
      const xData = xAxis[xAxisKey].data;
      const gradientUsed = yAxis[yAxisKey].colorScale && [yAxisKey, "y"] || xAxis[xAxisKey].colorScale && [xAxisKey, "x"] || void 0;
      if (true) {
        if (xData === void 0) {
          throw new Error(`MUI X Charts: ${xAxisKey === DEFAULT_X_AXIS_KEY ? "The first `xAxis`" : `The x-axis with id "${xAxisKey}"`} should have data property to be able to display a line plot.`);
        }
        if (xData.length < stackedData.length) {
          throw new Error(`MUI X Charts: The data length of the x axis (${xData.length} items) is lower than the length of series (${stackedData.length} items).`);
        }
      }
      const linePath = line_default().x((d2) => xScale(d2.x)).defined((_, i) => connectNulls || data[i] != null).y((d2) => yScale(d2.y[1]));
      const formattedData = (xData == null ? void 0 : xData.map((x, index) => ({
        x,
        y: stackedData[index]
      }))) ?? [];
      const d3Data = connectNulls ? formattedData.filter((_, i) => data[i] != null) : formattedData;
      const d = linePath.curve(getCurveFactory(series[seriesId].curve))(d3Data) || "";
      return _extends({}, series[seriesId], {
        gradientUsed,
        d,
        seriesId
      });
    });
  });
};
function LinePlot(props) {
  const {
    slots,
    slotProps,
    skipAnimation,
    onItemClick
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded6);
  const getGradientId = useChartGradient();
  const completedData = useAggregatedData2();
  return (0, import_jsx_runtime6.jsx)("g", _extends({}, other, {
    children: completedData.map(({
      d,
      seriesId,
      color: color2,
      gradientUsed
    }) => {
      return (0, import_jsx_runtime6.jsx)(LineElement, {
        id: seriesId,
        d,
        color: color2,
        gradientId: gradientUsed && getGradientId(...gradientUsed),
        skipAnimation,
        slots,
        slotProps,
        onClick: onItemClick && ((event) => onItemClick(event, {
          type: "line",
          seriesId
        }))
      }, seriesId);
    })
  }));
}
true ? LinePlot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Callback fired when a line item is clicked.
   * @param {React.MouseEvent<SVGPathElement, MouseEvent>} event The event source of the callback.
   * @param {LineItemIdentifier} lineItemIdentifier The line item identifier.
   */
  onItemClick: import_prop_types6.default.func,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: import_prop_types6.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types6.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types6.default.object
} : void 0;

// node_modules/@mui/x-charts/esm/LineChart/MarkPlot.js
init_extends();
var React9 = __toESM(require_react());
var import_prop_types8 = __toESM(require_prop_types());

// node_modules/@mui/x-charts/esm/LineChart/MarkElement.js
init_extends();
var React8 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var _excluded7 = ["x", "y", "id", "classes", "color", "shape", "dataIndex", "onClick", "skipAnimation"];
function getMarkElementUtilityClass(slot) {
  return generateUtilityClass("MuiMarkElement", slot);
}
var markElementClasses = generateUtilityClasses("MuiMarkElement", ["root", "highlighted", "faded"]);
var useUtilityClasses3 = (ownerState) => {
  const {
    classes,
    id,
    isFaded,
    isHighlighted
  } = ownerState;
  const slots = {
    root: ["root", `series-${id}`, isHighlighted && "highlighted", isFaded && "faded"]
  };
  return composeClasses(slots, getMarkElementUtilityClass, classes);
};
var MarkElementPath = styled_default(animated.path, {
  name: "MuiMarkElement",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  ownerState,
  theme
}) => ({
  fill: (theme.vars || theme).palette.background.paper,
  stroke: ownerState.color,
  strokeWidth: 2
}));
function MarkElement(props) {
  var _a;
  const {
    x,
    y,
    id,
    classes: innerClasses,
    color: color2,
    shape,
    dataIndex,
    onClick,
    skipAnimation
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded7);
  const getInteractionItemProps = useInteractionItemProps();
  const {
    isFaded,
    isHighlighted
  } = useItemHighlighted({
    seriesId: id
  });
  const {
    axis
  } = React8.useContext(InteractionContext);
  const position = useSpring({
    x,
    y,
    immediate: skipAnimation
  });
  const ownerState = {
    id,
    classes: innerClasses,
    isHighlighted: ((_a = axis.x) == null ? void 0 : _a.index) === dataIndex || isHighlighted,
    isFaded,
    color: color2
  };
  const classes = useUtilityClasses3(ownerState);
  return (0, import_jsx_runtime7.jsx)(MarkElementPath, _extends({}, other, {
    style: {
      transform: to([position.x, position.y], (pX, pY) => `translate(${pX}px, ${pY}px)`),
      transformOrigin: to([position.x, position.y], (pX, pY) => `${pX}px ${pY}px`)
    },
    ownerState,
    className: classes.root,
    d: Symbol(symbolsFill[getSymbol(shape)])(),
    onClick,
    cursor: onClick ? "pointer" : "unset"
  }, getInteractionItemProps({
    type: "line",
    seriesId: id,
    dataIndex
  })));
}
true ? MarkElement.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: import_prop_types7.default.object,
  /**
   * The index to the element in the series' data array.
   */
  dataIndex: import_prop_types7.default.number.isRequired,
  id: import_prop_types7.default.oneOfType([import_prop_types7.default.number, import_prop_types7.default.string]).isRequired,
  /**
   * The shape of the marker.
   */
  shape: import_prop_types7.default.oneOf(["circle", "cross", "diamond", "square", "star", "triangle", "wye"]).isRequired,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: import_prop_types7.default.bool
} : void 0;

// node_modules/@mui/x-charts/esm/LineChart/MarkPlot.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var _excluded8 = ["slots", "slotProps", "skipAnimation", "onItemClick"];
function MarkPlot(props) {
  const {
    slots,
    slotProps,
    skipAnimation,
    onItemClick
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded8);
  const seriesData = useLineSeries();
  const axisData = React9.useContext(CartesianContext);
  const chartId = useChartId();
  const Mark = (slots == null ? void 0 : slots.mark) ?? MarkElement;
  if (seriesData === void 0) {
    return null;
  }
  const {
    series,
    stackingGroups
  } = seriesData;
  const {
    xAxis,
    yAxis,
    xAxisIds,
    yAxisIds
  } = axisData;
  const defaultXAxisId = xAxisIds[0];
  const defaultYAxisId = yAxisIds[0];
  return (0, import_jsx_runtime8.jsx)("g", _extends({}, other, {
    children: stackingGroups.flatMap(({
      ids: groupIds
    }) => {
      return groupIds.map((seriesId) => {
        const {
          xAxisKey = defaultXAxisId,
          yAxisKey = defaultYAxisId,
          stackedData,
          data,
          showMark = true
        } = series[seriesId];
        if (showMark === false) {
          return null;
        }
        const xScale = getValueToPositionMapper(xAxis[xAxisKey].scale);
        const yScale = yAxis[yAxisKey].scale;
        const xData = xAxis[xAxisKey].data;
        const xRange = xAxis[xAxisKey].scale.range();
        const yRange = yScale.range();
        const isInRange = ({
          x,
          y
        }) => {
          if (x < Math.min(...xRange) || x > Math.max(...xRange)) {
            return false;
          }
          if (y < Math.min(...yRange) || y > Math.max(...yRange)) {
            return false;
          }
          return true;
        };
        if (xData === void 0) {
          throw new Error(`MUI X Charts: ${xAxisKey === DEFAULT_X_AXIS_KEY ? "The first `xAxis`" : `The x-axis with id "${xAxisKey}"`} should have data property to be able to display a line plot.`);
        }
        const clipId = cleanId(`${chartId}-${seriesId}-line-clip`);
        const colorGetter = getColor(series[seriesId], xAxis[xAxisKey], yAxis[yAxisKey]);
        return (0, import_jsx_runtime8.jsx)("g", {
          clipPath: `url(#${clipId})`,
          children: xData == null ? void 0 : xData.map((x, index) => {
            const value = data[index] == null ? null : stackedData[index][1];
            return {
              x: xScale(x),
              y: value === null ? null : yScale(value),
              position: x,
              value,
              index
            };
          }).filter(({
            x,
            y,
            index,
            position,
            value
          }) => {
            if (value === null || y === null) {
              return false;
            }
            if (!isInRange({
              x,
              y
            })) {
              return false;
            }
            if (showMark === true) {
              return true;
            }
            return showMark({
              x,
              y,
              index,
              position,
              value
            });
          }).map(({
            x,
            y,
            index
          }) => {
            return (0, import_jsx_runtime8.jsx)(Mark, _extends({
              id: seriesId,
              dataIndex: index,
              shape: "circle",
              color: colorGetter(index),
              x,
              y,
              skipAnimation,
              onClick: onItemClick && ((event) => onItemClick(event, {
                type: "line",
                seriesId,
                dataIndex: index
              }))
            }, slotProps == null ? void 0 : slotProps.mark), `${seriesId}-${index}`);
          })
        }, seriesId);
      });
    })
  }));
}
true ? MarkPlot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Callback fired when a line mark item is clicked.
   * @param {React.MouseEvent<SVGPathElement, MouseEvent>} event The event source of the callback.
   * @param {LineItemIdentifier} lineItemIdentifier The line mark item identifier.
   */
  onItemClick: import_prop_types8.default.func,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: import_prop_types8.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types8.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types8.default.object
} : void 0;

// node_modules/@mui/x-charts/esm/ChartsClipPath/ChartsClipPath.js
init_extends();
var React10 = __toESM(require_react());
var import_prop_types9 = __toESM(require_prop_types());
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
function ChartsClipPath(props) {
  const {
    id,
    offset: offsetProps
  } = props;
  const {
    left,
    top,
    width,
    height
  } = useDrawingArea();
  const offset = _extends({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, offsetProps);
  return (0, import_jsx_runtime9.jsx)("clipPath", {
    id,
    children: (0, import_jsx_runtime9.jsx)("rect", {
      x: left - offset.left,
      y: top - offset.top,
      width: width + offset.left + offset.right,
      height: height + offset.top + offset.bottom
    })
  });
}
true ? ChartsClipPath.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  id: import_prop_types9.default.string.isRequired,
  offset: import_prop_types9.default.shape({
    bottom: import_prop_types9.default.number,
    left: import_prop_types9.default.number,
    right: import_prop_types9.default.number,
    top: import_prop_types9.default.number
  })
} : void 0;

// node_modules/@mui/x-charts/esm/LineChart/LineHighlightPlot.js
init_extends();
var React12 = __toESM(require_react());
var import_prop_types11 = __toESM(require_prop_types());

// node_modules/@mui/x-charts/esm/LineChart/LineHighlightElement.js
init_extends();
var React11 = __toESM(require_react());
var import_prop_types10 = __toESM(require_prop_types());
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var _excluded9 = ["x", "y", "id", "classes", "color"];
function getHighlightElementUtilityClass(slot) {
  return generateUtilityClass("MuiHighlightElement", slot);
}
var lineHighlightElementClasses = generateUtilityClasses("MuiHighlightElement", ["root"]);
var useUtilityClasses4 = (ownerState) => {
  const {
    classes,
    id
  } = ownerState;
  const slots = {
    root: ["root", `series-${id}`]
  };
  return composeClasses(slots, getHighlightElementUtilityClass, classes);
};
var HighlightElement = styled_default("circle", {
  name: "MuiHighlightElement",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  ownerState
}) => ({
  transform: `translate(${ownerState.x}px, ${ownerState.y}px)`,
  transformOrigin: `${ownerState.x}px ${ownerState.y}px`,
  fill: ownerState.color
}));
function LineHighlightElement(props) {
  const {
    x,
    y,
    id,
    classes: innerClasses,
    color: color2
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded9);
  const ownerState = {
    id,
    classes: innerClasses,
    color: color2,
    x,
    y
  };
  const classes = useUtilityClasses4(ownerState);
  return (0, import_jsx_runtime10.jsx)(HighlightElement, _extends({
    pointerEvents: "none",
    ownerState,
    className: classes.root,
    cx: 0,
    cy: 0,
    r: other.r === void 0 ? 5 : other.r
  }, other));
}
true ? LineHighlightElement.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: import_prop_types10.default.object,
  id: import_prop_types10.default.oneOfType([import_prop_types10.default.number, import_prop_types10.default.string]).isRequired
} : void 0;

// node_modules/@mui/x-charts/esm/LineChart/LineHighlightPlot.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var _excluded10 = ["slots", "slotProps"];
function LineHighlightPlot(props) {
  var _a;
  const {
    slots,
    slotProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded10);
  const seriesData = useLineSeries();
  const axisData = React12.useContext(CartesianContext);
  const {
    axis
  } = React12.useContext(InteractionContext);
  const highlightedIndex = (_a = axis.x) == null ? void 0 : _a.index;
  if (highlightedIndex === void 0) {
    return null;
  }
  if (seriesData === void 0) {
    return null;
  }
  const {
    series,
    stackingGroups
  } = seriesData;
  const {
    xAxis,
    yAxis,
    xAxisIds,
    yAxisIds
  } = axisData;
  const defaultXAxisId = xAxisIds[0];
  const defaultYAxisId = yAxisIds[0];
  const Element = (slots == null ? void 0 : slots.lineHighlight) ?? LineHighlightElement;
  return (0, import_jsx_runtime11.jsx)("g", _extends({}, other, {
    children: stackingGroups.flatMap(({
      ids: groupIds
    }) => {
      return groupIds.flatMap((seriesId) => {
        const {
          xAxisKey = defaultXAxisId,
          yAxisKey = defaultYAxisId,
          stackedData,
          data,
          disableHighlight
        } = series[seriesId];
        if (disableHighlight || data[highlightedIndex] == null) {
          return null;
        }
        const xScale = getValueToPositionMapper(xAxis[xAxisKey].scale);
        const yScale = yAxis[yAxisKey].scale;
        const xData = xAxis[xAxisKey].data;
        if (xData === void 0) {
          throw new Error(`MUI X Charts: ${xAxisKey === DEFAULT_X_AXIS_KEY ? "The first `xAxis`" : `The x-axis with id "${xAxisKey}"`} should have data property to be able to display a line plot.`);
        }
        const x = xScale(xData[highlightedIndex]);
        const y = yScale(stackedData[highlightedIndex][1]);
        const colorGetter = getColor(series[seriesId], xAxis[xAxisKey], yAxis[yAxisKey]);
        return (0, import_jsx_runtime11.jsx)(Element, _extends({
          id: seriesId,
          color: colorGetter(highlightedIndex),
          x,
          y
        }, slotProps == null ? void 0 : slotProps.lineHighlight), `${seriesId}`);
      });
    })
  }));
}
true ? LineHighlightPlot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types11.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types11.default.object
} : void 0;

// node_modules/@mui/x-charts/esm/ChartsGrid/ChartsGrid.js
init_extends();
var React13 = __toESM(require_react());
var import_prop_types12 = __toESM(require_prop_types());

// node_modules/@mui/x-charts/esm/ChartsGrid/chartsGridClasses.js
function getChartsGridUtilityClass(slot) {
  return generateUtilityClass("MuiChartsGrid", slot);
}
var chartsGridClasses = generateUtilityClasses("MuiChartsGrid", ["root", "line", "horizontalLine", "verticalLine"]);

// node_modules/@mui/x-charts/esm/ChartsGrid/ChartsGrid.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var _excluded11 = ["vertical", "horizontal"];
var GridRoot = styled_default("g", {
  name: "MuiChartsGrid",
  slot: "Root",
  overridesResolver: (props, styles) => [{
    [`&.${chartsGridClasses.verticalLine}`]: styles.verticalLine
  }, {
    [`&.${chartsGridClasses.horizontalLine}`]: styles.horizontalLine
  }, styles.root]
})({});
var GridLine = styled_default("line", {
  name: "MuiChartsGrid",
  slot: "Line",
  overridesResolver: (props, styles) => styles.line
})(({
  theme
}) => ({
  stroke: (theme.vars || theme).palette.divider,
  shapeRendering: "crispEdges",
  strokeWidth: 1
}));
var useUtilityClasses5 = ({
  classes
}) => {
  const slots = {
    root: ["root"],
    verticalLine: ["line", "verticalLine"],
    horizontalLine: ["line", "horizontalLine"]
  };
  return composeClasses(slots, getChartsGridUtilityClass, classes);
};
function ChartsGrid(props) {
  const themeProps = useThemeProps({
    props,
    name: "MuiChartsGrid"
  });
  const {
    vertical,
    horizontal
  } = themeProps, other = _objectWithoutPropertiesLoose(themeProps, _excluded11);
  const {
    xAxis,
    xAxisIds,
    yAxis,
    yAxisIds
  } = React13.useContext(CartesianContext);
  const classes = useUtilityClasses5(themeProps);
  const horizontalAxisId = yAxisIds[0];
  const verticalAxisId = xAxisIds[0];
  const {
    scale: xScale,
    tickNumber: xTickNumber,
    tickInterval: xTickInterval
  } = xAxis[verticalAxisId];
  const {
    scale: yScale,
    tickNumber: yTickNumber,
    tickInterval: yTickInterval
  } = yAxis[horizontalAxisId];
  const xTicks = useTicks({
    scale: xScale,
    tickNumber: xTickNumber,
    tickInterval: xTickInterval
  });
  const yTicks = useTicks({
    scale: yScale,
    tickNumber: yTickNumber,
    tickInterval: yTickInterval
  });
  return (0, import_jsx_runtime12.jsxs)(GridRoot, _extends({}, other, {
    className: classes.root,
    children: [vertical && xTicks.map(({
      formattedValue,
      offset
    }) => (0, import_jsx_runtime12.jsx)(GridLine, {
      y1: yScale.range()[0],
      y2: yScale.range()[1],
      x1: offset,
      x2: offset,
      className: classes.verticalLine
    }, `vertical-${formattedValue}`)), horizontal && yTicks.map(({
      formattedValue,
      offset
    }) => (0, import_jsx_runtime12.jsx)(GridLine, {
      y1: offset,
      y2: offset,
      x1: xScale.range()[0],
      x2: xScale.range()[1],
      className: classes.horizontalLine
    }, `horizontal-${formattedValue}`))]
  }));
}
true ? ChartsGrid.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types12.default.object,
  /**
   * Displays horizontal grid.
   */
  horizontal: import_prop_types12.default.bool,
  /**
   * Displays vertical grid.
   */
  vertical: import_prop_types12.default.bool
} : void 0;

// node_modules/@mui/x-charts/esm/ChartsOnAxisClickHandler/ChartsOnAxisClickHandler.js
var React14 = __toESM(require_react());
var import_prop_types13 = __toESM(require_prop_types());
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
function ChartsOnAxisClickHandler(props) {
  const {
    onAxisClick
  } = props;
  const svgRef = useSvgRef();
  const series = useSeries();
  const {
    axis
  } = React14.useContext(InteractionContext);
  const {
    xAxisIds,
    xAxis,
    yAxisIds,
    yAxis
  } = React14.useContext(CartesianContext);
  React14.useEffect(() => {
    const element = svgRef.current;
    if (element === null || !onAxisClick) {
      return () => {
      };
    }
    const handleMouseClick = (event) => {
      var _a;
      event.preventDefault();
      const isXaxis = (axis.x && axis.x.index) !== void 0;
      const USED_AXIS_ID = isXaxis ? xAxisIds[0] : yAxisIds[0];
      const dataIndex = isXaxis ? axis.x && axis.x.index : axis.y && axis.y.index;
      if (dataIndex == null) {
        return;
      }
      const seriesValues = {};
      Object.keys(series).filter((seriesType) => ["bar", "line"].includes(seriesType)).forEach((seriesType) => {
        var _a2;
        (_a2 = series[seriesType]) == null ? void 0 : _a2.seriesOrder.forEach((seriesId) => {
          const seriesItem = series[seriesType].series[seriesId];
          const axisKey = isXaxis ? seriesItem.xAxisKey : seriesItem.yAxisKey;
          if (axisKey === void 0 || axisKey === USED_AXIS_ID) {
            seriesValues[seriesId] = seriesItem.data[dataIndex];
          }
        });
      });
      const axisValue = (_a = (isXaxis ? xAxis : yAxis)[USED_AXIS_ID].data) == null ? void 0 : _a[dataIndex];
      onAxisClick(event, {
        dataIndex,
        axisValue,
        seriesValues
      });
    };
    element.addEventListener("click", handleMouseClick);
    return () => {
      element.removeEventListener("click", handleMouseClick);
    };
  }, [axis.x, axis.y, onAxisClick, series, svgRef, xAxis, xAxisIds, yAxis, yAxisIds]);
  return (0, import_jsx_runtime13.jsx)(React14.Fragment, {});
}
true ? ChartsOnAxisClickHandler.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The function called for onClick events.
   * The second argument contains information about all line/bar elements at the current mouse position.
   * @param {MouseEvent} event The mouse event recorded on the `<svg/>` element.
   * @param {null | AxisData} data The data about the clicked axis and items associated with it.
   */
  onAxisClick: import_prop_types13.default.func
} : void 0;

// node_modules/@mui/x-charts/esm/LineChart/LineChart.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var LineChart = React15.forwardRef(function LineChart2(props, ref) {
  const {
    xAxis,
    yAxis,
    series,
    width,
    height,
    margin,
    colors,
    dataset,
    sx,
    tooltip,
    onAxisClick,
    onAreaClick,
    onLineClick,
    onMarkClick,
    axisHighlight = {
      x: "line"
    },
    disableLineItemHighlight,
    legend,
    grid,
    topAxis,
    leftAxis,
    rightAxis,
    bottomAxis,
    children,
    slots,
    slotProps,
    skipAnimation,
    loading,
    highlightedItem,
    onHighlightChange
  } = props;
  const id = useId();
  const clipPathId = `${id}-clip-path`;
  return (0, import_jsx_runtime14.jsxs)(ResponsiveChartContainer, {
    ref,
    series: series.map((s) => _extends({
      disableHighlight: !!disableLineItemHighlight,
      type: "line"
    }, s)),
    width,
    height,
    margin,
    xAxis: xAxis ?? [{
      id: DEFAULT_X_AXIS_KEY,
      scaleType: "point",
      data: Array.from({
        length: Math.max(...series.map((s) => (s.data ?? dataset ?? []).length))
      }, (_, index) => index)
    }],
    yAxis,
    colors,
    dataset,
    sx,
    disableAxisListener: (tooltip == null ? void 0 : tooltip.trigger) !== "axis" && (axisHighlight == null ? void 0 : axisHighlight.x) === "none" && (axisHighlight == null ? void 0 : axisHighlight.y) === "none" && !onAxisClick,
    highlightedItem,
    onHighlightChange,
    children: [onAxisClick && (0, import_jsx_runtime14.jsx)(ChartsOnAxisClickHandler, {
      onAxisClick
    }), grid && (0, import_jsx_runtime14.jsx)(ChartsGrid, {
      vertical: grid.vertical,
      horizontal: grid.horizontal
    }), (0, import_jsx_runtime14.jsxs)("g", {
      clipPath: `url(#${clipPathId})`,
      children: [(0, import_jsx_runtime14.jsx)(AreaPlot, {
        slots,
        slotProps,
        onItemClick: onAreaClick,
        skipAnimation
      }), (0, import_jsx_runtime14.jsx)(LinePlot, {
        slots,
        slotProps,
        onItemClick: onLineClick,
        skipAnimation
      }), (0, import_jsx_runtime14.jsx)(ChartsOverlay, {
        loading,
        slots,
        slotProps
      })]
    }), (0, import_jsx_runtime14.jsx)(ChartsAxis, {
      topAxis,
      leftAxis,
      rightAxis,
      bottomAxis,
      slots,
      slotProps
    }), (0, import_jsx_runtime14.jsx)(ChartsAxisHighlight, _extends({}, axisHighlight)), (0, import_jsx_runtime14.jsx)(MarkPlot, {
      slots,
      slotProps,
      onItemClick: onMarkClick,
      skipAnimation
    }), (0, import_jsx_runtime14.jsx)(LineHighlightPlot, {
      slots,
      slotProps
    }), (0, import_jsx_runtime14.jsx)(ChartsLegend, _extends({}, legend, {
      slots,
      slotProps
    })), !loading && (0, import_jsx_runtime14.jsx)(ChartsTooltip, _extends({}, tooltip, {
      slots,
      slotProps
    })), (0, import_jsx_runtime14.jsx)(ChartsClipPath, {
      id: clipPathId
    }), children]
  });
});
true ? LineChart.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The configuration of axes highlight.
   * @see See {@link https://mui.com/x/react-charts/tooltip/#highlights highlight docs} for more details.
   * @default { x: 'line' }
   */
  axisHighlight: import_prop_types14.default.shape({
    x: import_prop_types14.default.oneOf(["band", "line", "none"]),
    y: import_prop_types14.default.oneOf(["band", "line", "none"])
  }),
  /**
   * Indicate which axis to display the bottom of the charts.
   * Can be a string (the id of the axis) or an object `ChartsXAxisProps`.
   * @default xAxisIds[0] The id of the first provided axis
   */
  bottomAxis: import_prop_types14.default.oneOfType([import_prop_types14.default.object, import_prop_types14.default.string]),
  children: import_prop_types14.default.node,
  className: import_prop_types14.default.string,
  /**
   * Color palette used to colorize multiple series.
   * @default blueberryTwilightPalette
   */
  colors: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.string), import_prop_types14.default.func]),
  /**
   * An array of objects that can be used to populate series and axes data using their `dataKey` property.
   */
  dataset: import_prop_types14.default.arrayOf(import_prop_types14.default.object),
  desc: import_prop_types14.default.string,
  /**
   * If `true`, the charts will not listen to the mouse move event.
   * It might break interactive features, but will improve performance.
   * @default false
   */
  disableAxisListener: import_prop_types14.default.bool,
  /**
   * If `true`, render the line highlight item.
   */
  disableLineItemHighlight: import_prop_types14.default.bool,
  /**
   * Option to display a cartesian grid in the background.
   */
  grid: import_prop_types14.default.shape({
    horizontal: import_prop_types14.default.bool,
    vertical: import_prop_types14.default.bool
  }),
  /**
   * The height of the chart in px. If not defined, it takes the height of the parent element.
   */
  height: import_prop_types14.default.number,
  /**
   * The item currently highlighted. Turns highlighting into a controlled prop.
   */
  highlightedItem: import_prop_types14.default.shape({
    dataIndex: import_prop_types14.default.number,
    seriesId: import_prop_types14.default.oneOfType([import_prop_types14.default.number, import_prop_types14.default.string])
  }),
  /**
   * Indicate which axis to display the left of the charts.
   * Can be a string (the id of the axis) or an object `ChartsYAxisProps`.
   * @default yAxisIds[0] The id of the first provided axis
   */
  leftAxis: import_prop_types14.default.oneOfType([import_prop_types14.default.object, import_prop_types14.default.string]),
  /**
   * @deprecated Consider using `slotProps.legend` instead.
   */
  legend: import_prop_types14.default.shape({
    classes: import_prop_types14.default.object,
    direction: import_prop_types14.default.oneOf(["column", "row"]),
    hidden: import_prop_types14.default.bool,
    position: import_prop_types14.default.shape({
      horizontal: import_prop_types14.default.oneOf(["left", "middle", "right"]).isRequired,
      vertical: import_prop_types14.default.oneOf(["bottom", "middle", "top"]).isRequired
    }),
    slotProps: import_prop_types14.default.object,
    slots: import_prop_types14.default.object
  }),
  /**
   * If `true`, a loading overlay is displayed.
   * @default false
   */
  loading: import_prop_types14.default.bool,
  /**
   * The margin between the SVG and the drawing area.
   * It's used for leaving some space for extra information such as the x- and y-axis or legend.
   * Accepts an object with the optional properties: `top`, `bottom`, `left`, and `right`.
   * @default object Depends on the charts type.
   */
  margin: import_prop_types14.default.shape({
    bottom: import_prop_types14.default.number,
    left: import_prop_types14.default.number,
    right: import_prop_types14.default.number,
    top: import_prop_types14.default.number
  }),
  /**
   * Callback fired when an area element is clicked.
   */
  onAreaClick: import_prop_types14.default.func,
  /**
   * The function called for onClick events.
   * The second argument contains information about all line/bar elements at the current mouse position.
   * @param {MouseEvent} event The mouse event recorded on the `<svg/>` element.
   * @param {null | AxisData} data The data about the clicked axis and items associated with it.
   */
  onAxisClick: import_prop_types14.default.func,
  /**
   * The callback fired when the highlighted item changes.
   *
   * @param {HighlightItemData | null} highlightedItem  The newly highlighted item.
   */
  onHighlightChange: import_prop_types14.default.func,
  /**
   * Callback fired when a line element is clicked.
   */
  onLineClick: import_prop_types14.default.func,
  /**
   * Callback fired when a mark element is clicked.
   */
  onMarkClick: import_prop_types14.default.func,
  /**
   * Indicate which axis to display the right of the charts.
   * Can be a string (the id of the axis) or an object `ChartsYAxisProps`.
   * @default null
   */
  rightAxis: import_prop_types14.default.oneOfType([import_prop_types14.default.object, import_prop_types14.default.string]),
  /**
   * The series to display in the line chart.
   * An array of [[LineSeriesType]] objects.
   */
  series: import_prop_types14.default.arrayOf(import_prop_types14.default.object).isRequired,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: import_prop_types14.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types14.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types14.default.object,
  sx: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object, import_prop_types14.default.bool])), import_prop_types14.default.func, import_prop_types14.default.object]),
  title: import_prop_types14.default.string,
  /**
   * The configuration of the tooltip.
   * @see See {@link https://mui.com/x/react-charts/tooltip/ tooltip docs} for more details.
   * @default { trigger: 'item' }
   */
  tooltip: import_prop_types14.default.shape({
    axisContent: import_prop_types14.default.elementType,
    classes: import_prop_types14.default.object,
    itemContent: import_prop_types14.default.elementType,
    slotProps: import_prop_types14.default.object,
    slots: import_prop_types14.default.object,
    trigger: import_prop_types14.default.oneOf(["axis", "item", "none"])
  }),
  /**
   * Indicate which axis to display the top of the charts.
   * Can be a string (the id of the axis) or an object `ChartsXAxisProps`.
   * @default null
   */
  topAxis: import_prop_types14.default.oneOfType([import_prop_types14.default.object, import_prop_types14.default.string]),
  viewBox: import_prop_types14.default.shape({
    height: import_prop_types14.default.number,
    width: import_prop_types14.default.number,
    x: import_prop_types14.default.number,
    y: import_prop_types14.default.number
  }),
  /**
   * The width of the chart in px. If not defined, it takes the width of the parent element.
   */
  width: import_prop_types14.default.number,
  /**
   * The configuration of the x-axes.
   * If not provided, a default axis config is used.
   * An array of [[AxisConfig]] objects.
   */
  xAxis: import_prop_types14.default.arrayOf(import_prop_types14.default.shape({
    axisId: import_prop_types14.default.oneOfType([import_prop_types14.default.number, import_prop_types14.default.string]),
    classes: import_prop_types14.default.object,
    colorMap: import_prop_types14.default.oneOfType([import_prop_types14.default.shape({
      colors: import_prop_types14.default.arrayOf(import_prop_types14.default.string).isRequired,
      type: import_prop_types14.default.oneOf(["ordinal"]).isRequired,
      unknownColor: import_prop_types14.default.string,
      values: import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.instanceOf(Date), import_prop_types14.default.number, import_prop_types14.default.string]).isRequired)
    }), import_prop_types14.default.shape({
      color: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.string.isRequired), import_prop_types14.default.func]).isRequired,
      max: import_prop_types14.default.oneOfType([import_prop_types14.default.instanceOf(Date), import_prop_types14.default.number]),
      min: import_prop_types14.default.oneOfType([import_prop_types14.default.instanceOf(Date), import_prop_types14.default.number]),
      type: import_prop_types14.default.oneOf(["continuous"]).isRequired
    }), import_prop_types14.default.shape({
      colors: import_prop_types14.default.arrayOf(import_prop_types14.default.string).isRequired,
      thresholds: import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.instanceOf(Date), import_prop_types14.default.number]).isRequired).isRequired,
      type: import_prop_types14.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types14.default.array,
    dataKey: import_prop_types14.default.string,
    disableLine: import_prop_types14.default.bool,
    disableTicks: import_prop_types14.default.bool,
    fill: import_prop_types14.default.string,
    hideTooltip: import_prop_types14.default.bool,
    id: import_prop_types14.default.oneOfType([import_prop_types14.default.number, import_prop_types14.default.string]),
    label: import_prop_types14.default.string,
    labelFontSize: import_prop_types14.default.number,
    labelStyle: import_prop_types14.default.object,
    max: import_prop_types14.default.oneOfType([import_prop_types14.default.instanceOf(Date), import_prop_types14.default.number]),
    min: import_prop_types14.default.oneOfType([import_prop_types14.default.instanceOf(Date), import_prop_types14.default.number]),
    position: import_prop_types14.default.oneOf(["bottom", "top"]),
    reverse: import_prop_types14.default.bool,
    scaleType: import_prop_types14.default.oneOf(["band", "linear", "log", "point", "pow", "sqrt", "time", "utc"]),
    slotProps: import_prop_types14.default.object,
    slots: import_prop_types14.default.object,
    stroke: import_prop_types14.default.string,
    tickFontSize: import_prop_types14.default.number,
    tickInterval: import_prop_types14.default.oneOfType([import_prop_types14.default.oneOf(["auto"]), import_prop_types14.default.array, import_prop_types14.default.func]),
    tickLabelInterval: import_prop_types14.default.oneOfType([import_prop_types14.default.oneOf(["auto"]), import_prop_types14.default.func]),
    tickLabelPlacement: import_prop_types14.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types14.default.object,
    tickMaxStep: import_prop_types14.default.number,
    tickMinStep: import_prop_types14.default.number,
    tickNumber: import_prop_types14.default.number,
    tickPlacement: import_prop_types14.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types14.default.number,
    valueFormatter: import_prop_types14.default.func
  })),
  /**
   * The configuration of the y-axes.
   * If not provided, a default axis config is used.
   * An array of [[AxisConfig]] objects.
   */
  yAxis: import_prop_types14.default.arrayOf(import_prop_types14.default.shape({
    axisId: import_prop_types14.default.oneOfType([import_prop_types14.default.number, import_prop_types14.default.string]),
    classes: import_prop_types14.default.object,
    colorMap: import_prop_types14.default.oneOfType([import_prop_types14.default.shape({
      colors: import_prop_types14.default.arrayOf(import_prop_types14.default.string).isRequired,
      type: import_prop_types14.default.oneOf(["ordinal"]).isRequired,
      unknownColor: import_prop_types14.default.string,
      values: import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.instanceOf(Date), import_prop_types14.default.number, import_prop_types14.default.string]).isRequired)
    }), import_prop_types14.default.shape({
      color: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.string.isRequired), import_prop_types14.default.func]).isRequired,
      max: import_prop_types14.default.oneOfType([import_prop_types14.default.instanceOf(Date), import_prop_types14.default.number]),
      min: import_prop_types14.default.oneOfType([import_prop_types14.default.instanceOf(Date), import_prop_types14.default.number]),
      type: import_prop_types14.default.oneOf(["continuous"]).isRequired
    }), import_prop_types14.default.shape({
      colors: import_prop_types14.default.arrayOf(import_prop_types14.default.string).isRequired,
      thresholds: import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.instanceOf(Date), import_prop_types14.default.number]).isRequired).isRequired,
      type: import_prop_types14.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types14.default.array,
    dataKey: import_prop_types14.default.string,
    disableLine: import_prop_types14.default.bool,
    disableTicks: import_prop_types14.default.bool,
    fill: import_prop_types14.default.string,
    hideTooltip: import_prop_types14.default.bool,
    id: import_prop_types14.default.oneOfType([import_prop_types14.default.number, import_prop_types14.default.string]),
    label: import_prop_types14.default.string,
    labelFontSize: import_prop_types14.default.number,
    labelStyle: import_prop_types14.default.object,
    max: import_prop_types14.default.oneOfType([import_prop_types14.default.instanceOf(Date), import_prop_types14.default.number]),
    min: import_prop_types14.default.oneOfType([import_prop_types14.default.instanceOf(Date), import_prop_types14.default.number]),
    position: import_prop_types14.default.oneOf(["left", "right"]),
    reverse: import_prop_types14.default.bool,
    scaleType: import_prop_types14.default.oneOf(["band", "linear", "log", "point", "pow", "sqrt", "time", "utc"]),
    slotProps: import_prop_types14.default.object,
    slots: import_prop_types14.default.object,
    stroke: import_prop_types14.default.string,
    tickFontSize: import_prop_types14.default.number,
    tickInterval: import_prop_types14.default.oneOfType([import_prop_types14.default.oneOf(["auto"]), import_prop_types14.default.array, import_prop_types14.default.func]),
    tickLabelInterval: import_prop_types14.default.oneOfType([import_prop_types14.default.oneOf(["auto"]), import_prop_types14.default.func]),
    tickLabelPlacement: import_prop_types14.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types14.default.object,
    tickMaxStep: import_prop_types14.default.number,
    tickMinStep: import_prop_types14.default.number,
    tickNumber: import_prop_types14.default.number,
    tickPlacement: import_prop_types14.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types14.default.number,
    valueFormatter: import_prop_types14.default.func
  }))
} : void 0;
export {
  AnimatedArea,
  AnimatedLine,
  AreaElement,
  AreaElementPath,
  AreaPlot,
  LineChart,
  LineElement,
  LineElementPath,
  LineHighlightElement,
  LineHighlightPlot,
  LinePlot,
  MarkElement,
  MarkPlot,
  areaElementClasses,
  getAreaElementUtilityClass,
  getHighlightElementUtilityClass,
  getLineElementUtilityClass,
  getMarkElementUtilityClass,
  lineElementClasses,
  lineHighlightElementClasses,
  markElementClasses
};
//# sourceMappingURL=@mui_x-charts_LineChart.js.map
