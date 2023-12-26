import { useState } from "react"
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {

    const rout = useNavigate();
    const [counter , setCounter] = useState(3);

    if(counter > 0){
        setTimeout(()=> {
            setCounter(counter - 1)
        }, 1000)
    }else{
        rout("/")
    }

    return (
        <div>
              <h1>Page Not Found,Redirecting you to HomePage in {counter} Sec</h1>
        </div>
    )
}

export default PageNotFound