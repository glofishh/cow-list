import React from 'react';
import ReactDOM from 'react-dom';

import ListDetail from './ListDetail.jsx';
class CowsList extends React.Component{



  constructor(props){
    super(props)

    this.state={
      details:false,
    }

  }


  SetDisplay(){
    console.log(this.state)
    var showOrNot=this.state.details?!this.state.details:true;
    this.setState({
      details:showOrNot,
    })
  }


  render(){
    //this.props, not props!!
    //console.log list.length
    console.log(this.props);
    const {list}=this.props;

    return(
      <div>

      <h4>listItem of ID {list.id}</h4>


          <table>
            <thead>
            <tr>

              <th>Name</th>



            </tr>
            </thead>
            <tbody>

                <tr key={list.id}>

                  <td onClick={this.SetDisplay.bind(this)}>{list.title}</td>





                </tr>
                <tr>
                {this.state.details&&<ListDetail list={list} />}
                </tr>



          </tbody>
          </table>
    </div>

    )
  }
}

export default CowsList