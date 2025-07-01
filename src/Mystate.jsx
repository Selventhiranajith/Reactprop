import { useState } from "react";

function Mystate(){
    const[number,SetNumber]=useState(0)
    const [email,setEmail]=useState("")

    const handleSubmit = () => {
    alert(`current email : ${email}`);
  };

    const handleChange = (event) => {
    setEmail(event.target.value);
  };
    return(
        <> 
        <h1>Value{number}</h1>

        <button onClick={()=>SetNumber(number+1)}>Value Button </button>

        <br />
       <label>Enter Your Email </label>
        <input type="text" placeholder="Email" value={email} onChange={handleChange}/>

        <button onClick={handleSubmit}>Submit Button</button>
        </>
    )
}

export default Mystate;