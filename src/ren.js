import React from 'react';

//class component繼承
class Ren extends React.Component{
    //render為渲染前最後一個階段
    render(){
      return(
        <button>hello,{this.props.name}</button>
      )
    }
}

//class component建構式
class Student{
    constructor(id,name,age){
        //class的member data，需加上this
        this.id=id
        this.name=name
        this.age=age
    }
}

//class component使用props
class Wade extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render(){
        return(
            <p>{this.props.age}</p>
        )
    }
}

export const peach=new Student(0,"peach",25)
//有定義名稱的class component +{}
export {Wade}
//default不用+{}
export default Ren