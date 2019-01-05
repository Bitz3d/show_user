import React, { Component } from 'react';
import './App.css';
import ReactTable from 'react-table'
import "react-table/react-table.css"

class App extends Component {
  constructor(){
    super()
    this.state={
      data:[],
      loading:false
    }
}

  async componentDidMount(){
    // const url ='http://localhost:8081/api';
    // const response = await fetch(url);
    // const data = await response.json();
    // console.log(data[0].email)
    // this.setState({
    //   data:data,
    //   loading:true
    // })
    const url ='http://localhost:8081/api';
    fetch(url,{
      method: "GET"
    }).then(response => response.json())
    .then(users => {
      console.log(users[0].roles[0].role)
      this.setState({
        data:users,
        loading:true
      })
    })


  }

  render() {
    const columns =[{
      Header: "User Id",
      accessor:"id"
    },
    {
      Header: "Email",
      accessor:"email"
    },
    {
      Header: "User Name",
      accessor:"name"
    },
    {
      Header: "User Last Name",
      accessor:"lastName"
    },
    {
      id:'role',
      Header: "User Role",
      accessor: 'roles[0].role'
    }
  ]

    return (
      
      <div className="App">
           {this.state.loading? <ReactTable
                                  columns={columns}
                                  data={this.state.data}  
                                ></ReactTable> : 'Loading...'}
      </div>
    );
  }
}

export default App;
