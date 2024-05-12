import './App.css'

function App() {

  const handleUser = e =>{
    e.preventDefault()
    const form = e.target 
    const email = form.email.value 
    const name = form.name.value
    const userInfo = {name , email}
    console.log(userInfo);

    fetch('http://localhost:5000/users', {
      method:"POST",
      headers:{
        "Content-type" : "application/json"
      },
      body:JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        alert("User Created Successfully")
        form.reset()
        console.log(data);
      }
    })
  }
 

  return (
    <>
      <h1>Simple Crud</h1>
      <form onSubmit={handleUser}>
        <input type="email" name="email" id="" />
        <br />
        <input type="text" name="name" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>
     
    </>
  )
}

export default App
