import React, { Component } from 'react';
import axios from 'axios'
export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      num: '',
      time: 0
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3004/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent."); 
        this.resetForm()
      } else if(response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  render() {
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
                Fill the form for the megic to start
              </p>
            </div>
          </div>
          <div className="App">
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
              <label className="App">Send to instegram user name </label>
              <input type="text" className="form-control" id="user" value={this.state.name} onChange={this.onUserChange.bind(this)} />
          </div>
          <div className="form-group">
              <label>The megic massage </label>
              <input type="text" className="form-control" id="num" value={this.state.email} onChange={this.onNummailChange.bind(this)} />
          </div>
          <div className="form-group">
              <label>How much time to wait (in seconds)</label>
              <input type="text" className="form-control" id="time" value={this.state.message} onChange={this.onTimeChange.bind(this)} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
        </section>
        ); 
  }
  onUserChange(event) {
    this.setState({user: event.target.value})
  }

  onNummailChange(event) {
    this.setState({num: event.target.value})
  }

  onTimeChange(event) {
    this.setState({time: event.target.value})
  }

}