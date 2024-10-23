import React, {useState} from 'react'

export default function Buffet() {

    const [items, setItems] = useState([]);

    const calculateTotal = () => {
        return 0;
    }

    return (
      <React.Fragment>
          <div>
            <input type="checkbox" name="orders" value="beef"/><label>Shabu Shabu Beef</label>
          </div>
          <div>
            <input type="checkbox" name="orders" value="chicken"/><label>Chicken Fillet</label>
          </div>
          <div>
            <input type="checkbox" name="orders" value="fish"/><label>Fish Fillet</label>
          </div>
          <div>
            <input type="checkbox" name="orders" value="mushrooms"/><label>Assorted mushhrooms</label>
          </div>
          <div>
            <input type="checkbox" name="orders" value="spinach"/><label>Spinach</label>
          </div>
          <h1>Total:{calculateTotal()}</h1>
      </React.Fragment>
    )
}
  
