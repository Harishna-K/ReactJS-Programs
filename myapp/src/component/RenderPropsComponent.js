import React from "react"
// Child component getting render props 
class RenderPropsComponent extends React.Component { 
    render() { 
        return ( 
        <div> 
            <h2>I am Child Component</h2> 
            {this.props.render()} 
        </div> 
        ) 
    } 
    } 
    
    // Parent component sending render props to the child 
    class SampleRenderProps extends React.Component { 
    render() { 
        return ( 
        <RenderPropsComponent 
            // Passing render props to the child component 
            render={() => { 
            return ( 
                <div> 
                <h3> 
                I am coming from render props 
                </h3> 
                </div> 
            ) 
            }} 
        /> 
        ) 
    } 
    } 
    export default SampleRenderProps