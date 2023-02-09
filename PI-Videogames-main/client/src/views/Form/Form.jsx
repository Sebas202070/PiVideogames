import React, { useState } from 'react'

const Form = () => {
const [form, setForm] = useState({
  Name: "",
  Description: "",
  Released_date: "",
  Rating: "",

})

const changeHandler = (e) => {
const property = e.target.name
const value = e.target.value
setForm({...form, [property]: value})
validate(form)
}

const validate = (form) => {
  if((form.Released_date) ===Number){
    console.log("too bienn")
  }
  else{
    console.log("Error")
  }
}
 

  return (
    <form>
      <h1>Form</h1>
      <div>
        <label>Name: </label>
          <input type="text" value={form.Name} onChange={changeHandler} name="Name"/>
          </div>
          <div>
        <label>Description: </label>
          <input type="text" value={form.Description} onChange={changeHandler}  name="Description"/>
          </div>
          <div>
        <label>Released_date: </label>
          <input type="text" value={form.Released_date} onChange={changeHandler}  name="Released_date"/>
          </div>
          <div>
        <label>Rating: </label>
          <input type="text" value={form.Rating} onChange={changeHandler}  name="Rating"/>
          </div>

      
    </form>
  )
}

export default Form