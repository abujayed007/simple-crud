import { useLoaderData } from "react-router-dom";


const Update = () => {
    const user = useLoaderData()
    const handleUpdateUser = e =>{
        e.preventDefault()
        const form = e.target 
        const name = form.name.value
        const email = form.email.value
        console.log(name, email);
        const updatedUser = {
            email, name
        }
        fetch(`http://localhost:5000/users/${user._id}`,{
            method:'PUT',
            headers:{
                'Content-type' : 'application/json'
            },
            body:JSON.stringify(updatedUser)

        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0 ){
                form.reset()
                alert(`User Updated Successfullly ${user?.name}`)
            }
        })
    }
    return (
        <div>
            <h2>Update Section {user.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="email" name="email" defaultValue={user?.email} id="" />
                <br />
                <input type="text" name="name" defaultValue={user?.name} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;