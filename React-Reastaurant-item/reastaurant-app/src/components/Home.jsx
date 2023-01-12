import React,{useState} from 'react'
import {Container} from "./Container"
import "./Home.css"
const Home = () => {
    const [state,setState] = useState(Container)
    console.log(state)
  return (
    <>
        <h1>Number of food items {state.length}</h1>
        <div id= "container">
            {
                state.map((ele)=>{
                    return(
                        <>
                            <div>
                                <img src={ele.strCategoryThumb} alt="" />
                                <h3>{ele.strCategory}</h3>
                            </div>
                        </>
                    )
                })
            }
        </div>
    </>
  )
}

export default Home