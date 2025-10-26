import { series } from './data.js';
var seriesTbody = document.getElementById("series");
renderSeriesInTable(series);
function renderSeriesInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n      <td>".concat(s.id, "</td>\n      <td><a href=\"").concat(s.link, "\" target=\"_blank\" style=\"color: #007bff; text-decoration: none;\">").concat(s.name, "</a></td>\n      <td>").concat(s.channel, "</td>\n      <td>").concat(s.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
    var average = getAverageSeasons(series);
    var trAvg = document.createElement("tr");
    trAvg.classList.add("avg-row");
    trAvg.innerHTML = "\n    <td colspan=\"4\" style=\"text-align: left; font-weight: normal;\">\n      Seasons average: ".concat(Math.round(average), "\n    </td>");
    seriesTbody.appendChild(trAvg);
}
function getAverageSeasons(series) {
    var totalSeasons = series.reduce(function (total, s) { return total + s.seasons; }, 0);
    return totalSeasons / series.length;
}
//# sourceMappingURL=main.js.map