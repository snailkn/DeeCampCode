import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';

class Pie extends Component {
    getOption() {
        let dataStyle = {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 0,
                shadowColor: '#203665'
            }
        };
        return {
             series: [
            //     {name: '第一个圆环',
            //     type: 'pie',
            //     clockWise: false,
            //     radius: [70, 80],
            //     itemStyle: dataStyle,
            //     hoverAnimation: false,
            //     center: ['15%', '50%'],
            //     data: [{
            //         value: 0.5,
            //         label: {
            //             normal: {
            //                 rich: {
            //                     a: {
            //                         color: '#3a7ad5',
            //                         align: 'center',
            //                         fontSize: 20,
            //                         fontWeight: "bold"
            //                     },
            //                     b: {
            //                         color: '#fff',
            //                         align: 'center',
            //                         fontSize: 16
            //                     }
            //                 },
            //                 formatter: function (params) {
            //                     return "{b|在线统计}\n\n" + "{a|" + params.value + "个}" + "\n\n{b|增长2%}";
            //                 },
            //                 position: 'center',
            //                 show: true,
            //                 textStyle: {
            //                     fontSize: '14',
            //                     fontWeight: 'normal',
            //                     color: '#fff'
            //                 }
            //             }
            //         },
            //         itemStyle: {
            //             normal: {
            //                 color: '#2c6cc4',
            //                 shadowColor: '#2c6cc4',
            //                 shadowBlur: 0
            //             }
            //         }
            //     }, {
            //         value: 0.5,
            //         name: 'invisible',
            //         itemStyle: {
            //             normal: {
            //                 color: '#24375c'
            //             },
            //             emphasis: {
            //                 color: '#24375c'
            //             }
            //         }
            //     }]
            // }, 
            {
                name: '第二个圆环',
                type: 'pie',
                clockWise: false,
                radius: [70, 80],
                itemStyle: dataStyle,
                hoverAnimation: false,
                center: ['50%', '50%'],
                data: [{
                    value: parseInt(JSON.parse(localStorage.getItem("statistic"))[0]["orRatio"] * 100),
                    label: {
                        normal: {
                            rich: {
                                a: {
                                    color: '#d03e93',
                                    align: 'center',
                                    fontSize: 20,
                                    fontWeight: "bold"
                                },
                                b: {
                                    color: '#fff',
                                    align: 'center',
                                    fontSize: 16
                                }
                            },
                            formatter: function (params) {
                                return "\n{b|手术室整体利用率}\n\n" + "{a|" + params.value + "%}";
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '14',
                                fontWeight: 'normal',
                                color: '#fff'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#ef45ac',
                            shadowColor: '#ef45ac',
                            shadowBlur: 0
                        }
                    }
                }, {
                    value: 100-parseInt(JSON.parse(localStorage.getItem("statistic"))[0]["orRatio"] * 100),
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: '#412a4e'
                        },
                        emphasis: {
                            color: '#412a4e'
                        }
                    }
                }]
            }, {
                name: '第三个圆环',
                type: 'pie',
                clockWise: false,
                radius: [70, 80],
                itemStyle: dataStyle,
                hoverAnimation: false,
                center: ['85%', '50%'],
                data: [{
                    value: parseInt(JSON.parse(localStorage.getItem("statistic"))[0]["recoverRoomRatio"] * 100),
                    label: {
                        normal: {
                            rich: {
                                a: {
                                    color: '#603dd0',
                                    align: 'center',
                                    fontSize: 20,
                                    fontWeight: "bold"
                                },
                                b: {
                                    color: '#fff',
                                    align: 'center',
                                    fontSize: 16
                                }
                            },
                            formatter: function (params) {
                                return "\n{b|手术室内复苏比率}\n\n" + "{a|" + params.value + "%}";
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '14',
                                fontWeight: 'normal',
                                color: '#fff'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#613fd1',
                            shadowColor: '#613fd1',
                            shadowBlur: 0
                        }
                    }
                }, {
                    value: 100-parseInt(JSON.parse(localStorage.getItem("statistic"))[0]["recoverRoomRatio"] * 100),
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: '#453284'
                        },
                        emphasis: {
                            color: '#453284'
                        }
                    }
                }]
            }]
        }
    }

    render() {
        return (
            <div>
                <ReactEcharts
                    option={this.getOption()}
                    notMerge={true}
                    lazyUpdate={true}
                />
            </div>
        )
    }
}

class LineChart extends Component {

    componentDidMount() { }

    getOption() {
        let data = JSON.parse(localStorage.getItem("statistic"))[0]["extraHourRatio"];
        console.log(data);
        let dataAxis = [];
        let yMax = 1;
        let dataShadow = [];

        for (let i = 0; i < data.length; i++) {
            dataShadow.push(yMax);
            dataAxis.push(i + 1);
        }
        return {
            title: {
                text: '手术室利用率',
                textStyle: {
                    color: '#fff'
                }
            },
            xAxis: {
                data: dataAxis,
                axisLabel: {
                    inside: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                z: 10
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#999'
                    }
                }
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: [
                { // For shadow
                    type: 'bar',
                    itemStyle: {
                        normal: { color: 'rgba(0,0,0,0.05)' }
                    },
                    barGap: '-100%',
                    barCategoryGap: '40%',
                    data: dataShadow,
                    animation: false
                },
                {
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    { offset: 0, color: '#a871ea' },
                                    { offset: 1, color: '#ea38bf' }
                                ]
                            )
                        },
                        // emphasis: {
                        //     color: new echarts.graphic.LinearGradient(
                        //         0, 0, 0, 1,
                        //         [
                        //             { offset: 0, color: '#a871ea' },
                        //             { offset: 1, color: '#ea38bf' }
                        //         ]
                        //     )
                        // }
                    },
                    data: data
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <ReactEcharts
                    option={this.getOption()}
                    notMerge={true}
                    lazyUpdate={true}
                />
            </div>
        )
    }
}

class PredictChart extends Component {

    componentDidMount() { }

    getOption() {
        let labelRight = {
            normal: {
                position: 'right'
            }
        };

        let labelLeft = {
            normal: {
                position: 'left'
            }
        }
        return {
            title: {
                text: '交错正负轴标签'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                top: 80,
                bottom: 30
            },
            xAxis: {
                type: 'value',
                position: 'top',
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
            },
            yAxis: {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                data: ['ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']
            },
            series: [{
                name: '生活费',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        formatter: '{b}'
                    }
                },
                data: [{
                    value: -0.07,
                    label: labelRight
                },
                {
                    value: -0.09,
                    label: labelRight
                },
                    0.2, 0.44,
                {
                    value: -0.23,
                    label: labelRight
                },
                    0.08,
                {
                    value: -0.17,
                    label: labelRight
                },
                    0.47,
                {
                    value: -0.36,
                    label: labelRight
                },
                    0.18
                ]
            }]
        }

    };

    render() {
        return (
            <div>
                <ReactEcharts
                    option={this.getOption()}
                    notMerge={true}
                    lazyUpdate={true}
                />
            </div>
        )
    }
}

export { PredictChart, LineChart, Pie };