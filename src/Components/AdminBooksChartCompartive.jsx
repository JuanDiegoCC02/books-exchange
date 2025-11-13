import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { getBooks } from "../Services/llamadosBooks";

const AdminBooksChartComparative = () => {
  const [chartData, setChartData] = useState({
    series: [0, 0], 
    options: {
      chart: {
        type: "pie",
        width: 380,
      },
      labels: ["Available Books", "Exchanged Books"], 
      colors: ["#065753ff", "#f1ff27ff"], 
      legend: {
        position: "bottom",
        labels: {
          colors: "#f3ff4dff",
        },
      },
      title: {
        text: "Book Exchange Status",
        align: "center",
        style: {
          fontSize: "18px",
          color: "#f2ff7eff",
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: { width: 250 },
            legend: { position: "bottom" },
          },
        },
      ],
    },
  });

  useEffect(() => {
    async function fetchBooks() {
      try {
        const books = await getBooks();
        const exchangedCount = books.filter((book) => book.statusChanged === true).length;
        const availableCount = books.filter((book) => book.statusChanged === false).length;

        setChartData((prev) => ({...prev, series: [availableCount, exchangedCount],}));

      } catch (error) {
        console.error("Error al cargar libros:", error);
      }
    }
    fetchBooks();
  }, []);

  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="pie"
        width={380}
      />
    </div>
  );
};

export default AdminBooksChartComparative;
