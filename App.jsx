import React from 'react';
// import Members from './Members/Members.jsx';
// import {createBrowserHistory} from 'history';
// import {BrowserRouter,Route} from 'react-router-dom';
// import Root from './Members/Root.jsx';
//  // import ShowMembers from './Members/ShowMembers.jsx';
//  import Addnewmember from './Members/Addnewmeber.jsx';
//import AddMembers from './Members/AddMembers.jsx'
 import {connect} from 'react-redux';
// import Addtodo from './components/Todolist/Addtodo.jsx';
// import Todolist from './components/Todolist/Todolist.jsx';
// import {Todoactions} from './actions/Todoactions/Todoactions.js';
import {editdata,changeData,saveData} from './actions/edituser/edituser.js';


// class App extends React.Component {
//    render() {
//     const { dispatch, visibleTodos } = this.props

//       return (
//          <div>
//            <Addtodo addTodo={(text)=>dispatch(Todoactions(text))}/>
//            <Todolist todos = {visibleTodos}/>
//          </div>
//       );
//    }
// }

// function select(state) {
//   console.log(state.todos);
//   return {
   
//      visibleTodos: state.todos
//   }
// }

// export default connect(select)(App)





class App extends React.Component {
    constructor(props)
    {
        super();
        this.state={
            onchange:props.editsave.isData
        }
        //this.editdata1=this.editdata1.bind(this);
        this.textonChange=this.textonChange.bind(this);
        this.savedata=this.savedata.bind(this);
    }
    textonChange(e)
    {
        this.props.textonChange(e.target.value)
    }
    savedata()
    {
        this.props.savedataPassed(this.props.editsave.isData,this.props.editsave.isVisible)
    }
    render() {
        const data=this.props.editsave;
        if(this.props.editsave.isVisible){
            return (   
                <div className="Main-container" style={{backgroundColor:'red'}}>
                    <div className="text">
                    {this.props.editsave.isData}
                    </div>
                    <span></span>
                    <div>
                        <button onClick={this.props.editdata1.bind(this,data.isVisible)}>Click to edit</button>
                    </div>
                </div>
              );
        }
        else{
            return (   
                <div className="Main-container" style={{backgroundColor:'red'}}>
                    <div className="text">
                        <input type="text" onChange={this.textonChange} value={this.props.editsave.isData}/>
                    </div>
                    <div>
                        <button onClick={this.savedata}>Click to save</button>
                    </div>
                </div>
              );
        }
         
       }
    }
   function mapStateToProps(state)
   {
    return {
        editsave: state.editsave,
     }
   }

   function mapDispatchToProps(dispatch)
   {
    return { 
         editdata1: (data) => {
     
        dispatch(editdata(data));
      },
      textonChange:(data) =>{
        dispatch(changeData(data));
      },
      savedataPassed:(data,isVisible) =>{
        dispatch(saveData(data,isVisible));
      }
    }
   }

export default connect(mapStateToProps,mapDispatchToProps)(App);

//export default App;