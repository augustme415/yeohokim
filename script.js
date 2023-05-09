/*

[color]
0: background color
1: article font color
2: a tag font color
3: divider line color

*/
const colorCount = 4;
const colorTH0 = ['#1A1A19', '#FFFFFF', '#45FF00', '#FFFFFF'],
    colorTH1 = ['#602147', '#FFFFFF', '#EF8D72', '#FFFFFF'],
    colorTH2 = ['#EAD5E0', '#000000', '#EAD5E0', '#000000'],
    colorTH3 = ['#2A2833', '#FFFFFF', '#C60A0A', '#FFFFFF'],
    colorArr = [];

colorSys();

function colorSys(){
    for (let i = 0; i < colorCount; i++) {
        colorArr.push(eval(`colorTH${i}`))
    }
    let colorRandom = Math.floor(Math.random()*colorCount);
    document.documentElement.style.setProperty('--backgroundColor', colorArr[colorRandom][0]);
    document.documentElement.style.setProperty('--articleFontColor', colorArr[colorRandom][1]);
    document.documentElement.style.setProperty('--aTagFontColor', colorArr[colorRandom][2]);
    document.documentElement.style.setProperty('--dividerLineColor', colorArr[colorRandom][3]);
}