var pieChartContainer01 = document.getElementById('m-graph-wraper-b-r');
//创建舞台
var stage = new Konva.Stage({
    container:'#m-graph-wraper-b-r',
    width: pieChartContainer01.offsetWidth,
    height: pieChartContainer01.offsetHeight
});

//创建层
var layer = new Konva.Layer();
stage.add(layer);

//中心点坐标
var cenX = stage.width() / 2;
var cenY = stage.height() / 2;

//data of the PieChart
var data = [
    { name: 'Direct-Visit', value: ".15", color: '#9a2e30' },
    { name: 'From DEM', value: ".15", color: '#263849' },
    { name: 'AD', value: ".07", color: '#4a808c' },
    { name: 'VD', value: ".03", color: '#aa6756' },
    { name: 'Search', value: ".6", color: '#70a291' },
];

//create pieChart-01
var p = new PieChart({
    x: cenX,
    y: cenY,
    r: 100,
    data: data,
});

p.addToGroupOrLayer(layer);

layer.draw();

p.playAniamte();