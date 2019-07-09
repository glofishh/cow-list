import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AddCow from './components/AddCow.jsx';
import CowsList from './components/CowsList.jsx';


class App extends React.Component {
  constructor(props){
    super(props)

    this.state={
      list:[],

    }
  }

  componentDidMount(){
    this.getList();
  }

  getList(){
    $.get('/api/cows',(data)=>{
      console.log(data);
      this.setState({list:data});
      console.log(this.state.list);
    })
  }
  create(term){
    console.log(term);
    $.ajax({
      url:'/api/cows',
      type:'POST',
      data:term,

      success:function(data){
        console.log('made a post request ');
        console.log(data)
        this.getList();
      }
    })
  }

  render() {
    console.log(this.state.list);
    return (
      <div>
        <h1>cow list</h1>
        <AddCow addCow={this.create.bind(this)}/>
        {this.state.list.map((list,index)=>{
          return<CowsList key={index} id={index} list={list}  />
        })}

      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));