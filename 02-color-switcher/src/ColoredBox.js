import React, {useState} from 'react'

function ColoredBox() {

    const [color, setColor] = useState(1);

    const getColor = () => {
        if (color === 1) {
            return 'red';
        }
        if (color === 2) {
            return 'blue';
        }
        if (color === 3) {
            return 'green';
        }
    }

    return <React.Fragment>
        <div style={{
            border:'1px black solid',
            width:'50px',
            height:'50px',
            backgroundColor: getColor()
        }}>
        </div>

        <button onClick={()=>{setColor(1)}}>Red</button>
        <button onClick={()=>{setColor(3)}}>Green</button>
        <button onClick={()=>{setColor(2)}}>Blue</button>
    </React.Fragment>
  
}

export default ColoredBox;