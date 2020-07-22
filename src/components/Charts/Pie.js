import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: "pie2d", 
    width: "40%", 
    height: "350",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Starred",
        captionFontColor: "#102a42",
        captionFontBold: 0,
        captionFontSize: 24,
        captionFont: "Ubuntu Mono",
        baseFont: "Ubuntu Mono",
        baseFontSize: 12,
        baseFontColor: "#102a42",
        smartLineColor: "#102a42",
        showShadow: 0,
        showPlotBorder: 0,
        paletteColors:
            "#709fb0, #6886c5, #f4f7c5, #aacdbe, #f5b971, #abc2e8, #726a95",
        use3DLighting: 0,
        useDataPlotColorForLabels: 0,
        bgColor: "#FFFFFF",
        showBorder: 0,
        decimals: 0,
        pieRadius: "60%",
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
