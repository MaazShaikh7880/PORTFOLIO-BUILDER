import React from "react";
import { useState } from "react";

const Test = () => {

    const [log, setlog] = useState(true)
    return <div>
        {
            log ?(<div>Log
                <a onClick={()=>{setlog(false)}}>set</a>
            </div>) 
            :(<div>Setlog
                <a onClick={()=>{setlog(true)}}>set</a>
            </div>)
        }
    </div>
}

export default Test