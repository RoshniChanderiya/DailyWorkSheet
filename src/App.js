import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);

const data = {
  datasets: [{
    data: [10, 20, 30],
    backgroundColor: [
      'red',
      'blue',
      'yellow'
    ]
  },
  ],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    'Red',
    'Yellow',
    'Blue'
  ],
}
const App = () => {
  const [data, setData] = useState({
    datasets: [{
      data: [10, 20, 30],
      backgroundColor: [
        'red',
        'blue',
        'yellow'
      ]
    },
    ],
    labels: [
      'Red',
      'Yellow',
      'Blue'
    ],
  })
  useEffect(() => {
    const getData = () => {
      fetch('https://jsonplaceholder.typicode.com/users').then((data) => {
        const res = data.json();
        return res
      }).then((res) => {
        console.log("resss", res)
        const label = [];
        const data = [];
        for (var i of res) {
          label.push(i.name);
          data.push(i.id)
        }
        setData(
          {
            datasets: [{
              data: data,
              backgroundColor: [
                'red',
                'blue',
                'yellow'
              ]
            },
            ],
            labels: label,
          }
        )
      }).catch(e => {
        console.log("error", e)
      })
    }
    getData();
  }, [])
  return (
    <div style={{ width: "30%", height: "30%" }}>
      <Pie data={data} />
    </div>
  );
}

export default App;
