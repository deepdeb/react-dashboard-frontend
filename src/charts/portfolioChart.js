export const chartData = {
  labels: ["2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"],
  datasets: [
    {
      data: [6200, 7500, 8200, 9500, 8400, 9100, 9800],
      borderColor: "#6366f1",
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "rgba(99, 102, 241, 0.2)");
        gradient.addColorStop(1, "rgba(99, 102, 241, 0)");
        return gradient;
      },
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      pointBackgroundColor: "#6366f1",
      borderWidth: 3,
    },
  ],
};

export const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    x: { grid: { display: false }, ticks: { color: "#64748b", font: { size: 10 } } },
    y: { display: false },
  },
};