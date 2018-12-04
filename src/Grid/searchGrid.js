import React from "react";
import { Row, Col } from "react-bootstrap";
import Select from 'react-select'

var divStyle = {
  padding: "10px",
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export default class SearchGrid extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: 'coconut'};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  render(){
    return(
      <div style={divStyle}>
        <button onClick={this.props.searchBtn}>
          Search
        </button>
        <Row className="show-grid">
          <Col sm={6} md={4}>
            <label>Hub:</label>
            <Select options={options} />
          </Col>
          <Col sm={6} md={4}>
            <label>Market:</label>
            <Select options={options} />
          </Col>
          <Col sm={6} md={4}>
            <label>Make:</label>
            <Select options={options} />
          </Col>
          <Col sm={6} md={4}>
            <label>Model Group:</label>
            <input type="text" className="form-control" id="usr"/>
          </Col>
          <Col sm={6} md={4}>
            <label>Model Variant:</label>
            <input type="text" className="form-control" id="usr"/>
          </Col>
          <Col sm={6} md={4}>
            <label>Order Number start:</label>
            <input type="text" className="form-control" id="usr"/>
          </Col>
          <Col sm={6} md={4}>
            <label>Order Number end:</label>
            <input type="text" className="form-control" id="usr"/>
          </Col>
          <Col sm={6} md={4}>
            <label>Order Number:</label>
            <input type="text" className="form-control" id="usr"/>
          </Col>
          <Col sm={6} md={4}>
            <label>invoice date start:</label>
            <input type="text" className="form-control" id="usr"/>
          </Col>
          <Col sm={6} md={4}>
            <label>invoice date end:</label>
            <input type="text" className="form-control" id="usr"/>
          </Col>
        </Row>
      </div>
    )
  }
}
