import React, { useState, useEffect } from 'react';
import {Line} from 'react-chartjs-2';

const Chart =()=>{
 const [flood, setFlood]=useState({
     jan:"",
     feb:"",
     mar:""
 })

 const [health, setHealth]=useState({
    jan:"",
    feb:"",
    mar:""
})

const [robbery, setRobbery]=useState({
    jan:"",
    feb:"",
    mar:""
})



    

    useEffect(() => {   
        // fetch(`http://localhost:3000/graphes/flood/jan`)
        // .then(res => res.json())
        // .then(result => { setFlood({...flood, jan:result})
        //   console.log(result)
        // })
        // .catch(err => {
        //   console.log(err.message);
        //  })

        //  fetch(`http://localhost:3000/graphes/flood/feb`)
        // .then(res => res.json())
        // .then(result => { setFlood({...flood, feb:result})
        //   console.log(result)
        // })
        // .catch(err => {
        //   console.log(err.message);
        //  })

        //  fetch(`http://localhost:3000/graphes/flood/mar`)
        // .then(res => res.json())
        // .then(result => { setFlood({...flood, mar:result})
        //   console.log(result)
        // })
        // .catch(err => {
        //   console.log(err.message);
        //  })
        



        //  fetch(`http://localhost:3000/graphes/health/jan`)
        // .then(res => res.json())
        // .then(result => { setHealth({...health, jan:result})
        //   console.log(result)
        // })
        // .catch(err => {
        //   console.log(err.message);
        //  })

        //  fetch(`http://localhost:3000/graphes/health/feb`)
        // .then(res => res.json())
        // .then(result => { setHealth({...health, feb:result})
        //   console.log(result)
        // })
        // .catch(err => {
        //   console.log(err.message);
        //  })

        //  fetch(`http://localhost:3000/graphes/health/mar`)
        // .then(res => res.json())
        // .then(result => { setHealth({...health, mar:result})
        //   console.log(result)
        // })
        // .catch(err => {
        //   console.log(err.message);
        //  })


        //  fetch(`http://localhost:3000/graphes/robbery/jan`)
        // .then(res => res.json())
        // .then(result => { setRobbery({...robbery, jan:result})
        //   console.log(result)
        // })
        // .catch(err => {
        //   console.log(err.message);
        //  })

        //  fetch(`http://localhost:3000/robbery/feb`)
        // .then(res => res.json())
        // .then(result => { setRobbery({...robbery, feb:result})
        //   console.log(result)
        // })
        // .catch(err => {
        //   console.log(err.message);
        //  })

        //  fetch(`http://localhost:3000/graphes/robbery/mar`)
        // .then(res => res.json())
        // .then(result => { setRobbery({...robbery, mar:result})
        //   console.log(result)
        // })
        // .catch(err => {
        //   console.log(err.message);
        //  })

















         fetch(`http://localhost:3000/graphes/flood/jan`)
         .then(res => res.json())
         .then(result => { setFlood({ jan:result})
           console.log(result)
         })
         .catch(err => {
           console.log(err.message);
          })
 
          fetch(`http://localhost:3000/graphes/flood/feb`)
         .then(res => res.json())
         .then(result => { setFlood({ feb:result})
           console.log(result)
         })
         .catch(err => {
           console.log(err.message);
          })
 
          fetch(`http://localhost:3000/graphes/flood/mar`)
         .then(res => res.json())
         .then(result => { setFlood({ mar:result})
           console.log(result)
         })
         .catch(err => {
           console.log(err.message);
          })
         
 
 
 
          fetch(`http://localhost:3000/graphes/health/jan`)
         .then(res => res.json())
         .then(result => { setHealth({ jan:result})
           console.log(result)
         })
         .catch(err => {
           console.log(err.message);
          })
 
          fetch(`http://localhost:3000/graphes/health/feb`)
         .then(res => res.json())
         .then(result => { setHealth({ feb:result})
           console.log(result)
         })
         .catch(err => {
           console.log(err.message);
          })
 
          fetch(`http://localhost:3000/graphes/health/mar`)
         .then(res => res.json())
         .then(result => { setHealth({ mar:result})
           console.log(result)
         })
         .catch(err => {
           console.log(err.message);
          })
 
 
          fetch(`http://localhost:3000/graphes/robbery/jan`)
         .then(res => res.json())
         .then(result => { setRobbery({ jan:result})
           console.log(result)
         })
         .catch(err => {
           console.log(err.message);
          })
 
          fetch(`http://localhost:3000/robbery/feb`)
         .then(res => res.json())
         .then(result => { setRobbery({ feb:result})
           console.log(result)
         })
         .catch(err => {
           console.log(err.message);
          })
 
          fetch(`http://localhost:3000/graphes/robbery/mar`)
         .then(res => res.json())
         .then(result => { setRobbery({ mar:result})
           console.log(result)
         })
         .catch(err => {
           console.log(err.message);
          })


},[]);    




const data ={
    labels:['Jan', 'Feb', 'Mar'],
    datasets:[
        {
            label:'Flood',
            // data:[2, 7, 1],
            data:[flood.jan, flood.feb, flood.mar],
            borderColor:['rgba(255,206,86,0.2)'],
            backgroundColor:['rgba(225,206, 86, 0.2)'],
            pointBackgroundColor:['rgba(255,206,86,0.2)'],
            pointBorderColor:['rgba(225,206, 86, 0.2)']
        },
        {
            label:'Health Emergency',
            // data:[5, 3, 9],
            data:[health.jan, health.feb, health.mar],
            borderColor:['rgba(54,162,235,0.2)'],
            backgroundColor:['rgba(54,162,235,0.2)'],
            pointBackgroundColor:['rgba(54,162,235,0.2)'],
            pointBorderColor:['rgba(54,162,235,0.2)']
        },
        {
            label:'Armed Robbery',
            // data:[4, 9, 7],
            data:[robbery.jan, robbery.feb, robbery.mar],
            borderColor:['rgba(90,168,54,0.2)'],
            backgroundColor:['rgba(90,168,54,0.2)'],
            pointBackgroundColor:['rgba(90,168,54,0.2)'],
            pointBorderColor:['rgba(90,168,54,0.2)']
        }
    ]
}


  const options = {
      title:{
          display: true,
          text:'E-report Stats'
      },
    //   scales:{
    //       yAxes:{
    //           ticks:{
    //               min:0,
    //               max:9,
    //               stepSize:1

    //           }
    //       }
    //   }
  }


    return(
     <Line data={data} options={options} />
    )
}


export default Chart;