import React, {useState} from 'react'

export default function Tastes () {

    const [selectedTastes, setSelectedTastes] = useState([]);

    return <React.Fragment>
      <input type="checkbox" value='spicy' /><label>Spicy</label>
      <input type="checkbox" value='sour' /><label>Sour</label>
      <input type="checkbox" value="Sweet" /><label>Sweet</label>

      <div>
        <button>Spicy</button>
        <button>Sour</button>
        <button>Sweet</button>
      </div>
    </React.Fragment>
}


