import { VChartProps } from "@visactor/react-vchart";

const data = [
    { date: "2018-01", type: "16-24岁人口", value: 11.2 },
  
    { date: "2018-02", type: "16-24岁人口", value: 11 },
    { date: "2018-03", type: "16-24岁人口", value: 10.4 },
    { date: "2018-04", type: "16-24岁人口", value: 10.1 },
    { date: "2018-05", type: "16-24岁人口", value: 9.6 },
    { date: "2018-06", type: "16-24岁人口", value: 10 },
    { date: "2018-07", type: "16-24岁人口", value: 13.3 },
    { date: "2018-08", type: "16-24岁人口", value: 13.1 },
    { date: "2018-09", type: "16-24岁人口", value: 11.2 },
    { date: "2018-10", type: "16-24岁人口", value: 9.8 },
    { date: "2018-11", type: "16-24岁人口", value: 10 },
    { date: "2018-12", type: "16-24岁人口", value: 10.1 },
  
    { date: "2019-01", type: "16-24岁人口", value: 11.2 },
    { date: "2019-02", type: "16-24岁人口", value: 11 },
    { date: "2019-03", type: "16-24岁人口", value: 11.3 },
    { date: "2019-04", type: "16-24岁人口", value: 9.9 },
    { date: "2019-05", type: "16-24岁人口", value: 10.5 },
    { date: "2019-06", type: "16-24岁人口", value: 11.6 },
    { date: "2019-07", type: "16-24岁人口", value: 13.9 },
    { date: "2019-08", type: "16-24岁人口", value: 13.1 },
    { date: "2019-09", type: "16-24岁人口", value: 13 },
    { date: "2019-10", type: "16-24岁人口", value: 12.4 },
    { date: "2019-11", type: "16-24岁人口", value: 12.5 },
    { date: "2019-12", type: "16-24岁人口", value: 12.2 },
    { date: "2020-01", type: "16-24岁人口", value: 12.5 },
    { date: "2020-02", type: "16-24岁人口", value: 13.6 },
    { date: "2020-03", type: "16-24岁人口", value: 13.3 },
    { date: "2020-04", type: "16-24岁人口", value: 13.8 },
    { date: "2020-05", type: "16-24岁人口", value: 14.8 },
    { date: "2020-06", type: "16-24岁人口", value: 15.4 },
    { date: "2020-07", type: "16-24岁人口", value: 16.8 },
    { date: "2020-08", type: "16-24岁人口", value: 16.8 },
    { date: "2020-09", type: "16-24岁人口", value: 15 },
    { date: "2020-10", type: "16-24岁人口", value: 13.2 },
    { date: "2020-11", type: "16-24岁人口", value: 12.8 },
    { date: "2020-12", type: "16-24岁人口", value: 12.3 },
    { date: "2021-01", type: "16-24岁人口", value: 12.7 },
    { date: "2021-02", type: "16-24岁人口", value: 13.1 },
    { date: "2021-03", type: "16-24岁人口", value: 13.6 },
    { date: "2021-04", type: "16-24岁人口", value: 13.6 },
    { date: "2021-05", type: "16-24岁人口", value: 13.8 },
    { date: "2021-06", type: "16-24岁人口", value: 15.4 },
    { date: "2021-07", type: "16-24岁人口", value: 16.2 },
    { date: "2021-08", type: "16-24岁人口", value: 15.3 },
    { date: "2021-09", type: "16-24岁人口", value: 14.6 },
    { date: "2021-10", type: "16-24岁人口", value: 14.2 },
    { date: "2021-11", type: "16-24岁人口", value: 14.3 },
    { date: "2021-12", type: "16-24岁人口", value: 14.3 },
    { date: "2022-01", type: "16-24岁人口", value: 15.3 },
    { date: "2022-02", type: "16-24岁人口", value: 15.3 },
    { date: "2022-03", type: "16-24岁人口", value: 16 },
    { date: "2022-04", type: "16-24岁人口", value: 18.2 },
    { date: "2022-05", type: "16-24岁人口", value: 18.4 },
    { date: "2022-06", type: "16-24岁人口", value: 19.3 },
    { date: "2022-07", type: "16-24岁人口", value: 19.9 },
    { date: "2022-08", type: "16-24岁人口", value: 18.7 },
    { date: "2022-09", type: "16-24岁人口", value: 17.9 },
    { date: "2022-10", type: "16-24岁人口", value: 17.9 },
    { date: "2022-11", type: "16-24岁人口", value: 17.1 },
    { date: "2022-12", type: "16-24岁人口", value: 16.7 },
    { date: "2023-01", type: "16-24岁人口", value: 17.3 },
    { date: "2023-02", type: "16-24岁人口", value: 18.1 },
    { date: "2023-03", type: "16-24岁人口", value: 19.6 },
    { date: "2023-04", type: "16-24岁人口", value: 20.4 },
    // { date: '2023-05', type: '16-24岁人口', value: 4.9 },
    // { date: '2023-06', type: '16-24岁人口', value: 4.9 },
    // { date: '2023-07', type: '16-24岁人口', value: 4.9 },
  
    { date: "2018-01", type: "25-59岁人口", value: 4.4 },
    { date: "2018-02", type: "25-59岁人口", value: 4.5 },
    { date: "2018-03", type: "25-59岁人口", value: 4.6 },
    { date: "2018-04", type: "25-59岁人口", value: 4.4 },
    { date: "2018-05", type: "25-59岁人口", value: 4.4 },
    { date: "2018-06", type: "25-59岁人口", value: 4.4 },
    { date: "2018-07", type: "25-59岁人口", value: 4.4 },
    { date: "2018-08", type: "25-59岁人口", value: 4.3 },
    { date: "2018-09", type: "25-59岁人口", value: 4.3 },
    { date: "2018-10", type: "25-59岁人口", value: 4.4 },
    { date: "2018-11", type: "25-59岁人口", value: 4.4 },
    { date: "2018-12", type: "25-59岁人口", value: 4.4 },
  
    { date: "2019-01", type: "25-59岁人口", value: 4.6 },
    { date: "2019-02", type: "25-59岁人口", value: 4.9 },
    { date: "2019-03", type: "25-59岁人口", value: 4.8 },
    { date: "2019-04", type: "25-59岁人口", value: 4.7 },
    { date: "2019-05", type: "25-59岁人口", value: 4.5 },
    { date: "2019-06", type: "25-59岁人口", value: 4.6 },
    { date: "2019-07", type: "25-59岁人口", value: 4.6 },
    { date: "2019-08", type: "25-59岁人口", value: 4.5 },
    { date: "2019-09", type: "25-59岁人口", value: 4.6 },
    { date: "2019-10", type: "25-59岁人口", value: 4.6 },
    { date: "2019-11", type: "25-59岁人口", value: 4.6 },
    { date: "2019-12", type: "25-59岁人口", value: 4.7 },
    { date: "2020-01", type: "25-59岁人口", value: 4.7 },
    { date: "2020-02", type: "25-59岁人口", value: 5.6 },
    { date: "2020-03", type: "25-59岁人口", value: 5.4 },
    { date: "2020-04", type: "25-59岁人口", value: 5.5 },
    { date: "2020-05", type: "25-59岁人口", value: 5.4 },
    { date: "2020-06", type: "25-59岁人口", value: 5.2 },
    { date: "2020-07", type: "25-59岁人口", value: 5 },
    { date: "2020-08", type: "25-59岁人口", value: 4.8 },
    { date: "2020-09", type: "25-59岁人口", value: 4.8 },
    { date: "2020-10", type: "25-59岁人口", value: 4.8 },
    { date: "2020-11", type: "25-59岁人口", value: 4.7 },
    { date: "2020-12", type: "25-59岁人口", value: 4.7 },
    { date: "2021-01", type: "25-59岁人口", value: 4.9 },
    { date: "2021-02", type: "25-59岁人口", value: 5 },
    { date: "2021-03", type: "25-59岁人口", value: 4.8 },
    { date: "2021-04", type: "25-59岁人口", value: 4.6 },
    { date: "2021-05", type: "25-59岁人口", value: 4.4 },
    { date: "2021-06", type: "25-59岁人口", value: 4.2 },
    { date: "2021-07", type: "25-59岁人口", value: 4.2 },
    { date: "2021-08", type: "25-59岁人口", value: 4.3 },
    { date: "2021-09", type: "25-59岁人口", value: 4.2 },
    { date: "2021-10", type: "25-59岁人口", value: 4.2 },
    { date: "2021-11", type: "25-59岁人口", value: 4.3 },
    { date: "2021-12", type: "25-59岁人口", value: 4.4 },
    { date: "2022-01", type: "25-59岁人口", value: 4.6 },
    { date: "2022-02", type: "25-59岁人口", value: 4.8 },
    { date: "2022-03", type: "25-59岁人口", value: 5.2 },
    { date: "2022-04", type: "25-59岁人口", value: 5.3 },
    { date: "2022-05", type: "25-59岁人口", value: 5.1 },
    { date: "2022-06", type: "25-59岁人口", value: 4.5 },
    { date: "2022-07", type: "25-59岁人口", value: 4.3 },
    { date: "2022-08", type: "25-59岁人口", value: 4.3 },
    { date: "2022-09", type: "25-59岁人口", value: 4.7 },
    { date: "2022-10", type: "25-59岁人口", value: 4.7 },
    { date: "2022-11", type: "25-59岁人口", value: 5 },
    { date: "2022-12", type: "25-59岁人口", value: 4.8 },
    { date: "2023-01", type: "25-59岁人口", value: 4.7 },
    { date: "2023-02", type: "25-59岁人口", value: 4.8 },
    { date: "2023-03", type: "25-59岁人口", value: 4.3 },
    { date: "2023-04", type: "25-59岁人口", value: 4.2 },
    // { date: '2023-05', type: '25-59岁人口', value: 4.9 },
    // { date: '2023-06', type: '25-59岁人口', value: 4.9 },
    // { date: '2023-07', type: '25-59岁人口', value: 4.9 },
    { date: "2018-01", type: "all", value: 5 },
    { date: "2018-02", type: "all", value: 5 },
    { date: "2018-03", type: "all", value: 5.1 },
    { date: "2018-04", type: "all", value: 4.9 },
    { date: "2018-05", type: "all", value: 4.8 },
    { date: "2018-06", type: "all", value: 4.8 },
    { date: "2018-07", type: "all", value: 5.1 },
    { date: "2018-08", type: "all", value: 5 },
    { date: "2018-09", type: "all", value: 4.9 },
    { date: "2018-10", type: "all", value: 4.9 },
    { date: "2018-11", type: "all", value: 4.8 },
    { date: "2018-12", type: "all", value: 4.9 },
  
    { date: "2019-01", type: "all", value: 5.1 },
    { date: "2019-02", type: "all", value: 5.3 },
    { date: "2019-03", type: "all", value: 5.2 },
    { date: "2019-04", type: "all", value: 5 },
  
    { date: "2019-05", type: "all", value: 5 },
    { date: "2019-06", type: "all", value: 5.1 },
    { date: "2019-07", type: "all", value: 5.3 },
    { date: "2019-08", type: "all", value: 5.2 },
  
    { date: "2019-09", type: "all", value: 5.2 },
    { date: "2019-10", type: "all", value: 5.1 },
    { date: "2019-11", type: "all", value: 5.1 },
    { date: "2019-12", type: "all", value: 5.2 },
  
    { date: "2020-01", type: "all", value: 5.3 },
    { date: "2020-02", type: "all", value: 6.2 },
    { date: "2020-03", type: "all", value: 5.9 },
    { date: "2020-04", type: "all", value: 6 },
  
    { date: "2020-05", type: "all", value: 5.9 },
    { date: "2020-06", type: "all", value: 5.7 },
    { date: "2020-07", type: "all", value: 5.7 },
    { date: "2020-08", type: "all", value: 5.6 },
  
    { date: "2020-09", type: "all", value: 5.4 },
    { date: "2020-10", type: "all", value: 5.3 },
    { date: "2020-11", type: "all", value: 5.2 },
    { date: "2020-12", type: "all", value: 5.2 },
  
    { date: "2021-01", type: "all", value: 5.4 },
    { date: "2021-02", type: "all", value: 5.5 },
    { date: "2021-03", type: "all", value: 5.3 },
    { date: "2021-04", type: "all", value: 5.1 },
    { date: "2021-05", type: "all", value: 5 },
    { date: "2021-06", type: "all", value: 5 },
    { date: "2021-07", type: "all", value: 5.1 },
    { date: "2021-08", type: "all", value: 5.1 },
    { date: "2021-09", type: "all", value: 4.9 },
    { date: "2021-10", type: "all", value: 4.9 },
    { date: "2021-11", type: "all", value: 5 },
    { date: "2021-12", type: "all", value: 5.1 },
  
    { date: "2022-01", type: "all", value: 5.3 },
    { date: "2022-02", type: "all", value: 5.5 },
    { date: "2022-03", type: "all", value: 5.8 },
    { date: "2022-04", type: "all", value: 6.1 },
    { date: "2022-05", type: "all", value: 5.9 },
    { date: "2022-06", type: "all", value: 5.5 },
    { date: "2022-07", type: "all", value: 5.4 },
    { date: "2022-08", type: "all", value: 5.3 },
    { date: "2022-09", type: "all", value: 5.5 },
    { date: "2022-10", type: "all", value: 5.5 },
    { date: "2022-11", type: "all", value: 5.7 },
    { date: "2022-12", type: "all", value: 5.5 },
  
    { date: "2023-01", type: "all", value: 5.5 },
    { date: "2023-02", type: "all", value: 5.6 },
    { date: "2023-03", type: "all", value: 5.3 },
    { date: "2023-04", type: "all", value: 5.2 },
  ];
  
  const young = data.filter((x) => x.type == "16-24岁人口");
  const m = young.map((it) => {
    return {
      x: it.date,
      y: it.value,
    };
  });
  export const spec = 
//    {
//     type: "line",
//     dataZoom: [{ orient: "bottom" }],
//     data: { values: data },
//     xField: "date",
//     yField: "value",
//     seriesField: "type",
    // point: {
    //   visible: false,
    // },
//     line: {
//       style: {
//         lineWidth: 2,
//       },
//     },
//     legends: { visible: true, orient: "top" },
    // markLine: [
    //   {
    //     y: "average",
    //     coordinates: young,
    //     process: {
    //       y: "regression",
    //     },
    //     label: {
    //       visible: true,
    //       position: "insideEndTop",
    //       text: "Average",
    //       style: {
    //         fill: "#000",
    //       },
    //       labelBackground: {
    //         visible: false,
    //       },
    //     },
    //   },
    // ],
    // markPoint: [
    //   {
    //     coordinate: {
    //       date: "2023-04",
    //       value: 20.4,
    //     },
    //     itemContent: {
    //       position: "insideTop",
    //       type: "text", //
    //       text: {
    //         text: "max 20.4%",
    //       },
    //     },
    //     itemLine: {
    //       type: "type-do",
    //     },
    //   },
    //   {
    //     coordinate: {
    //       date: "2018-05",
    //       value: 9.6,
    //     },
    //     itemContent: {
    //       position: "insideTop",
    //       type: "text", //
    //       text: {
    //         text: "min 9.6%",
    //       },
    //     },
    //     itemLine: {
    //       type: "type-do",
    //     },
    //   },
    // ],
//   }
  
{
    type: "line",
    dataZoom: [{ orient: "bottom" }],
    data: {
        values: data
    },
    title: {
        visible: true,
        text: "Stacked line chart"
    },
    xField: "date",
    yField: "value",
    seriesField: "type",
    point: {
        visible: false,
    },
    markLine:[
        {
            y: "average",
            coordinates: young,
            // label: {
            //     visible: true,
            //     position: "insideEndTop",
            //     text: "Average",
            //     style: {
            //       fill: "#000",
            //     },
            //     labelBackground: {
            //       visible: false,
            //     },
            //   }
        }
    ],
    legends: { visible: true, orient: "top" },
    // markPoint: [
    //     {
    //       coordinates: {
    //         date: "2023-04",
    //         value: 20.4,
    //       },
    //       itemContent: {
    //         position: "insideTop",
    //         type: "text", //
    //         text: {
    //           text: "max 20.4%",
    //         },
    //       },
    //       itemLine: {
    //         type: "type-do",
    //       },
    //     },
    //     {
    //       coordinates: {
    //         date: "2018-05",
    //         value: 9.6,
    //       },
    //       itemContent: {
    //         position: "insideTop",
    //         type: "text", //
    //         text: {
    //           text: "min 9.6%",
    //         },
    //       },
    //       itemLine: {
    //         type: "type-do",
    //       },
    //     },
    //   ],
} as VChartProps["spec"];
  export default {};
  // export default { data, young, m, spec };
  