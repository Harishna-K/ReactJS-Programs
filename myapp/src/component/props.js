import React from "react";
function Parent(props)
{
    return(
        <div>
    <div>Name:{props.name}<br/>
    Id:{props.id}<br/>
    AGE:{props.age}

    </div>
  </div>
    )
}
export default Parent