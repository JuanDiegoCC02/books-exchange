import ReactApexChart from "react-apexcharts";
import React, { useEffect, useState } from "react";
import { getUsers } from "../Services/llamados";

const AdminUsersChart = () => {
        const [chartData, setChartData] = useState({
          
            series: [{
                name: "Users Log", data: [],}],
            options: {
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight',
                colors: ['#f0fd3aff'], 
              },
              title: {
                text: 'Users Log Chart for Month',
                align: 'center',
                style: {color: "white", fonSize: "15px"},
              },
              grid: {
                row: {
                  colors: ['#3d3d3dff', 'transparent'], 
                  opacity: 0.5
                },
              },
              xaxis: {
                categories: [],
              }
            },
        });
      
        useEffect (()=> {
          async function loadUsers() {
            try {
              const users = await getUsers();
              const countsByMonth = {};

              users.forEach((user) => {
                const date = new Date(user.userCreateDate);
                const month = date.toLocaleDateString("en", {month: "short"});
                countsByMonth[month] = (countsByMonth[month] || 0) +1;
              })

              const categories = Object.keys(countsByMonth);
              const data = Object.values(countsByMonth);

              setChartData((prev) => ({
                ...prev,
                series: [{name: "Users Log", data}],
                options: { ... prev.options,
                  xaxis:{categories},
                },
              }));


            } catch (error) {
              console.error("Error fetching users", error);
            }
          }
          loadUsers();
        })
        

        return (
        <div>
          <h3 style={{ color: "White" }}>Users Log Chart</h3>
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="line"
            height={350}
          />
     </div>
        );
      }
      
export default AdminUsersChart;
