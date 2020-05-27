import React,{Component} from "react"

class Welcome extends Component{
  constructor(){
  super()
    this.state={
      message:"hi " 
    }
  }

  change(){
    this.setState({
      message:"bye "
    })
  }

  render(){
    const {name}=this.props
  return(
    <div>
      <h1>{this.state.message} {name}</h1>
      <button onClick={()=>this.change()}>bye Button</button>
    </div>
  )
}
}

export default Welcome