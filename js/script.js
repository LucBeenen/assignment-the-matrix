let matrix = [
    [11975, 5871, 8916, 2868],
    [1951, 10048, 2060, 6171],
    [8010, 16145, 8090, 8045],
    [1013, 990, 940, 6907]
];

let tr = d3.select('body')
    .selectAll("tr")
    .data(matrix)
    .enter()
    .append("tr")
    .on("mouseover", function () {
        d3.select(this).style('background', 'pink')
    })

let td = tr.selectAll('td')
    .data(function (d) {return d; })
    .enter()
    .append('td')
    .text(function (d) {return d; })
    .on("mouseover", function () {
        d3.select(this).style('background', 'purple')
    })