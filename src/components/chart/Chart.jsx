import { 
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
 } from "chart.js";

  ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    Bar
 )

 import {Bar} from 'react-chartjs-2'

 import React from 'react'
 
 const Chart = () => {
    const data = {
        labels : [
            "Sun",
            "Sun",
            "Sun",
            "Sun",
            "Sun"
        ],
        datasets :[
            {
                label : "Bruto",
                borderRadius : 30,
                data : [0, 1, 2, 2, 3, 23, 3],
                backgroundColor : 'rgba(32, 214, 155, 1)',
                barThickness : 30
            },
            {
                label : "Netto",
                borderRadius : 30,
                data : [0, 1, 2, 2, 3, 23, 3],
                backgroundColor : 'rgba(32, 214, 155, 1)',
                barThickness : 30
            }
        ]
    }
    const options = {
        plugins : {
            legend : {
                position : 'top',
                aligne : 'start',
                labels : {
                    boxWidth : 7,
                    usePoinstStyle : true,
                    pointStyle : 'circle'
                },
                title : {
                    text : 'Sales report',
                    display : true,
                    color : '#000',
                    font : {
                        size : 18,
                    }
                }
            }
        },
        scales : {
            xAxis : {
                display : false,
            },
            yAxis : {
                max : 1,
            },
        },
        elements : {
            bar : {
                barPercentage : 0.3,
                categoryPercentage : 1,
            }
        }
    }
   return (
     <>
     <Bar data={data} height={300} options={options}/>
     </>
   )
 }
 
 export default Chart