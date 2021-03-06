import React, {Component} from 'react'
import {Col, Form, FormGroup, Input, Label, Button} from 'reactstrap'
import axios from 'axios'

class EmailRequest extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('got here')
    const {name, email, message} = this.state
    axios.post('/api/form', {
      name,
      email,
      message
    })
    this.props.history.push('/thankyou')
  }

  render() {
    return (
      <div>
        <div className="title">Custom Jewelry Submission</div>
        <Form onSubmit={this.handleSubmit} className="form-email">
          <FormGroup row>
            <Label sm={2} for="name">
              Name:
            </Label>
            <Col sm={10}>
              <Input type="text" name="name" onChange={this.handleChange} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2} for="email">
              Email:
            </Label>
            <Col sm={10}>
              <Input type="email" name="email" onChange={this.handleChange} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2} for="message">
              Message:
            </Label>
            <Col sm={10}>
              <Input
                type="textarea"
                name="message"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default EmailRequest
