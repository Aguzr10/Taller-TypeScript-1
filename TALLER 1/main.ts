import { series } from './data.js';

const seriesTbody: HTMLElement = document.getElementById("series")!;

renderSeriesInTable(series);

function renderSeriesInTable(series: any[]): void {
  
  series.forEach(s => {
    const trElement = document.createElement("tr");
    trElement.innerHTML = `
      <td>${s.id}</td>
      <td><a href="${s.link}" target="_blank" style="color: #007bff; text-decoration: none;">${s.name}</a></td>
      <td>${s.channel}</td>
      <td>${s.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });

  
  const average = getAverageSeasons(series);
  const trAvg = document.createElement("tr");
  trAvg.style.backgroundColor = "white";
  trAvg.innerHTML = `
    <td colspan="4" style="text-align: left; font-weight: normal;">
      Seasons average: ${Math.round(average)}
    </td>`;
  seriesTbody.appendChild(trAvg);
}

function getAverageSeasons(series: any[]): number {
  const totalSeasons = series.reduce((total, s) => total + s.seasons, 0);
  return totalSeasons / series.length;
}
