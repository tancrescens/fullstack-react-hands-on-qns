import React, {useState} from 'react'

export default function Numbers () {
  
    const [allNumbers, setAllNumbers] = useState([1,3,5,7]);
  

    const addRandom = ()=> {
        // 1. clone the allNumbers array in the state

        // 2. add a random number to the back of the clone
        let randomNumber = Math.floor(Math.random() * 10 + 1)

        // 3. set the cloned array back into the state
    }

    const addNumber = () => {
        
    }


    return <React.Fragment>
        <ul>
            {allNumbers? allNumbers.map(number=><li>{number}</li>) 
                        : <p>Loading...</p>}
        </ul>
        <div>
            <button onClick={addRandom}>Add Random</button>
        </div>
        <div>
            <input type="text" name="newNumber"/>
            <button>Add</button>
        </div>
    </React.Fragment>

}