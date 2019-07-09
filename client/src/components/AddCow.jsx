import React from 'react';

class AddCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''

    }

    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.addCow = this.addCow.bind(this);
  }

  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  addCow() {
    var input=this.state
    console.log(this.state);
    this.props.addCow(input);
  }

  render() {
    return (
      <div>
        <h4>upload your cow</h4>

        <input type="text" value={this.state.name}
        onChange={this.handleNameChange} />
        <br></br>
        <br></br>
        <input type="text" value={this.state.description}
        onChange={this.handleDescriptionChange} />
        <button id="add-cow" onClick={this.addCow} >add my cow!</button>
      </div>
    );
  }
}

export default AddCow;