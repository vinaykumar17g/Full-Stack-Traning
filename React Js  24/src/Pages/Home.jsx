import { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function Home()
{
    let [name,setName]=useState("Vinay Kumar")
    let handleUpdate=()=>
    {
        setName("vinay")
    }
    return (
        <>
        {/* <Link to={"/about"}>Home</Link> */}
        <Navbar/>
        <h1>home</h1>
        <h1>{name}</h1>
        <button onClick={()=>handleUpdate()}>Click</button>
        <Footer/>
        </>
    )
}
export default Home;