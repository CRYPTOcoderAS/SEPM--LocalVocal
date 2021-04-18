import React,{useState,useContext} from 'react'
import { Link,useHistory} from 'react-router-dom'
import { UserContext} from '../../App'
import M from 'materialize-css'

const SignIn=()=>{
    const {state,dispatch}= useContext(UserContext)
    const history=useHistory()

    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const PostData = () => {
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
               
                password,
                email
                
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               localStorage.setItem("jwt",data.token)
               localStorage.setItem("user",JSON.stringify(data.user))
               dispatch({type:"USER",payload:data.user})
               M.toast({html:"signing successful",classes:"#43a047 green darken-1"})
               history.push('/')
            }
        })

    }
    return (
        <div>
        < slider className = "slider-size" >
            <slide className="slides"><h1></h1></slide> 
            <slide className="slides"><h1></h1></slide>
            <slide className="slides"><h1></h1></slide> 
            <slide className="slides"><h1></h1></slide>
        </slider>

            <div className=" auth-card ">

                 < h3 >
                     Welcome Back !
                 </h3>
                 <input
                 type="text"
                 placeholder="Email"
                 value={email}
                 onChange={(e)=> setEmail(e.target.value)}
                 />       
                 <input
                 type="password"
                 placeholder="Password"
                 value={password}
                 onChange={(e)=> setPassword(e.target.value)}
                 />

                < div className="buttons">
                 < button className = "btn waves-effect waves-light buttons-left"
                 onClick={()=>PostData()}
                 >Login</button>
                 <h5>
                  < Link to = "/signup"
                  className = "btn waves-effect waves-light buttons-right" > Register </Link>
                </h5>
                </div>  

            </div>
        </div>  
    )
}


export default SignIn