// The guage chart
  
function buildGauge(wfreq) {
var gaugeData = [
    {
    domain: { x: [0, 1], y: [0, 1] },
    value: parseFloat(wfreq),
    title: { text: `<b>Belly Button Washing Frequency</b> <br> Scrubs per Week` },
    type: "indicator",
    
    mode: "gauge+number",
    gauge: { axis: { range: [null, 10] },
             bar: { color: "black" },
             steps: [
              { range: [0, 2], color: "red" },
              { range: [2, 4], color: "orange" },
              { range: [4, 6], color: "yellow" },
              { range: [6, 8], color: "yellowgreen" },
              { range: [8, 10], color: "forestgreen" },
            ]}
        
    }
];
  
var gaugeLayout = { 
    width: 550, 
    height: 450, 
    margin: { t: 10, b: 40, l:100, r:100 } 
};
  
Plotly.newPlot("gauge", gaugeData, gaugeLayout);

}