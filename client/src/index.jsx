import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

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
      this.setState({list:data})
    })
  }
  create(term){
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
    return (
      <div>
        <h1>Cows app</h1>
        {this.state.list}
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));