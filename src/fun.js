import React ,{Component} from "react";

export default class ChangeState extends Component{
state={name:""}

change=(e)=>{this.setState({name:e.target.value})}
render()
{
    return(
        <div className="design">
            <h1>{this.state.name}</h1>
            <input type="text" onChange={this.change}/>
            <h1>{this.statement.name}</h1>
        </div>
    )
}
}