import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { getBooks } from "../Services/llamadosBooks";

const AdminBooksChart = () => {
  const [chartData, setChartData] = useState({
    series: [{ name: "Books Published", data: [] }],
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: { enabled: false },
        toolbar: { show: false },
      foreColor: "rgb(255, 255, 255)",     
        
      },
      dataLabels: { enabled: false },
      markers: { size: 3 },
         stroke: {
      curve: "straight", 
      width: 3,        
      colors: ["rgb(243, 255, 68)"], 
      
    },
      title: { text: "Books Publication Timeline", align: "left" },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
         colorStops: [
          {
            offset: 0,
            color: "#fbff00ff",    
            opacity: 0.4,
          },
          {
            offset: 100,
            color: "#fff9c6ff",    
            opacity: 0,
          },
        ],
          
        },
      },
      yaxis: {
        labels: {
          formatter: (val) => val.toFixed(0),
            style: { colors: "#e7ff10ff" }
        },
        title: { text: "Books" },
        
      },
      xaxis: {
        type: "datetime",
        labels: { rotate: -45 },
      },
      tooltip: {
        shared: false,
        y: {
          formatter: (val) => `${val} book${val !== 1 ? "s" : ""}`,
        },
      },
    },
  });

  useEffect(() => {
    async function fetchBooks() {
      try {
        const books = await getBooks();

        
        const sortedBooks = books
          .filter((book) => book.bookCreateDate)
          .sort( (a, b) => new Date(a.bookCreateDate) - new Date(b.bookCreateDate) );

       
        const countsByDate = sortedBooks.reduce((acc, book) => {
          const date = new Date(book.bookCreateDate)
            .toISOString()
            .split("T")[0]; // yyyy-mm-dd
          acc[date] = (acc[date] || 0) + 1;
          return acc;
        }, {});

        // Convertir a puntos del gráfico
        const dataPoints = Object.entries(countsByDate).map(
          ([date, count]) => ({
            x: new Date(date).toISOString(),
            y: count,
          })
        );

        setChartData((prev) => ({
          ...prev,
          series: [{ name: "Books Published", data: dataPoints }],
        }));
      } catch (error) {
        console.error("Error al cargar libros:", error);
      }
    }

    fetchBooks();
  }, []);

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default AdminBooksChart;
