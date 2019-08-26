var pieChart01 = echarts.init(document.getElementById('m-graph-wraper-b-r'));
var stackedChart01 = echarts.init(document.getElementById('m-graph-wraper-b-l'));

pieChart01.setOption({
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data: [
                { value: 2.35, name: 'Direct Visiting' },
                { value: 2.74, name: 'Alliance AD' },
                { value: 3.1, name: 'DEM' },
                { value: 3.35, name: 'VEM' },
                { value: 4.0, name: 'Search Engine' }
            ]
        }
    ]
});

stackedChart01.setOption({title: {
    text: ''
},
tooltip : {
    trigger: 'axis',
    axisPointer: {
        type: 'cross',
        label: {
            backgroundColor: '#6a7985'
        }
    }
},
legend: {
    data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
},
toolbox: {
    feature: {
        saveAsImage: {}
    }
},
grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
},
xAxis : [
    {
        type : 'category',
        boundaryGap : false,
        data : ['Mon','Tus','Wed','Thu','Fri','Sat','Sun']
    }
],
yAxis : [
    {
        type : 'value'
    }
],
series : [
    {
        name:'DEM',
        type:'line',
        stack: '总量',
        areaStyle: {},
        data:[120, 132, 101, 134, 90, 230, 210]
    },
    {
        name:'Alliance AD',
        type:'line',
        stack: '总量',
        areaStyle: {},
        data:[220, 182, 191, 234, 290, 330, 310]
    },
    {
        name:'VEM',
        type:'line',
        stack: '总量',
        areaStyle: {},
        data:[150, 232, 201, 154, 190, 330, 410]
    },
    {
        name:'Direct Visiting',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[320, 332, 301, 334, 390, 330, 320]
    },
    {
        name:'Search Engine',
        type:'line',
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        areaStyle: {normal: {}},
        data:[820, 932, 901, 934, 1290, 1330, 1320]
    }
]
});