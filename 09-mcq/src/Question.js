import React, {useState} from 'react';

export default function Question() {

    const [answer, setAnswer] = useState("");

    return (
        <section id="qns1">
        <h1>Question 1: Which island is Mount Faber, Singapore, located on?</h1>
        <ul>
          <li>
            <input name="qns1answer" type="radio" value="A"/><label>A. Palau Ubin</label>
          </li>
          <li>
            <input name="qns1answer" type="radio" value="B"/><label>B. Palau Ujong</label>
          </li>
          <li>
            <input name="qns1answer" type="radio" value="C"/><label>C. Palau Tekong</label>
          </li>
          <li>
            <input name="qns1answer" type="radio" value="D"/><label>D. Saint John Island</label>
          </li>
        </ul>
      </section>
    )
}
