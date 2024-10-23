import React, {useState} from 'react'

export default function RegisterForm() {

    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
      <React.Fragment>
        <div>
            <label>Username:</label>
            <input type="text" name="username"/>
            <span class="error"></span>
        </div>
        <div>
            <label>Email:</label>
            <input type="text" name="email"/>
            <span class="error"></span>
        </div>
        <div>
            <label>Password:</label>
            <input type="text" name="password"/>
            <span class="error"></span>
        </div>
      </React.Fragment>
    )
}