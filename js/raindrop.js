var width = Math.min(700, innerWidth),
    height = Math.min(400, innerHeight);

var svg = d3.select("#svg-area").append("svg")
            .attr("width", width)
            .attr("height", height);

function drop() {
  var r1 = Math.random();
  var r2 = Math.random();
  var m = [Math.floor(r1 * width),
           Math.floor(r2 * height)];
  svg.insert("circle")
    .attr("cx", m[0])
    .attr("cy", m[1])
    .attr("r", 1e-6)
    .attr("stroke-width", (0.5 + r1) + "px")
    .style("stroke", d3.hsl(Math.random() * 360, 1, .7))
    .style("stroke-opacity", 1)
    .transition()
      .duration(2000)
      .ease(Math.sqrt)
      .attr("r", 10 + r1 * 30)
      .style("stroke-opacity", 1e-6)
      .remove();
}

function multiple(f, cnt) {
    return function() {
      for (var i = 0; i < cnt; i++) f();
    }
}

setInterval(multiple(drop, 10), 200);
