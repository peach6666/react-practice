import React from 'react';

//class component繼承
class Ren extends React.Component{
    //render為渲染前最後一個階段
    render(){
      return(
        <div>
          helloworld
        </div>
      )
    }
}

//class建構式
class Student{
    constructor(id,name,age){
        this.id=id
        this.name=name
        this.age=age
    }
}



export const peach=new Student(0,"peach",25)

export default Ren