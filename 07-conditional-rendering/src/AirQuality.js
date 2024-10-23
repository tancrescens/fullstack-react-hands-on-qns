import React, {useState} from 'react'

export default function AirQuality(){

    const [psi, setPsi] = useState(0);

    const getAirQualityText = () => {
        return "undefined";
      }
    
    const getAirQualityColor = () => {
    
    }
    

    return (
      <React.Fragment>
        <div>
            <label>Enter the PSI:</label>
            <input  type="text" 
                    value={psi} 
                    onChange={(e)=>{setPsi(e.target.value)}}
            />
        </div>
        <h1>Air Quality</h1>
        <div id="air-quality" 
             style={{color:'black'}}
        >
            {getAirQualityText()}
        </div>
      </React.Fragment>
    )
    
}