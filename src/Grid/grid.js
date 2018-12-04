import React, { Component } from 'react';
import { ReactTabulator } from 'react-tabulator'
import 'react-tabulator/lib/styles.css';

const columns = [
  { title: "Name", field: "name", width: 150, editor:"input" },
  { title: "Age", field: "age", align: "left", formatter: "progress" },
  { title: "Favourite Color", field: "col" },
  { title: "Date Of Birth", field: "dob", align: "center" },
  { title: "Rating", field: "rating", align: "center", formatter: "star", formatterParams:{stars:8} },
  { title: "Passed?", field: "passed", align: "center", formatter: "tickCross" }
];

var data = [
  {id:1, name:"Oli Bob", age:"12", col:"red", dob:"", rating:3, passed: true},
  {id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982", rating:4, passed: false},
  {id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982", rating:7, passed: true},
  {id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980", rating:1},
  {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999", rating:4},
  {id:1, name:"Oli Bob", age:"12", col:"red", dob:"", rating:3, passed: true},
  {id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982", rating:4, passed: false},
  {id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982", rating:7, passed: true},
  {id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980", rating:1},
  {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999", rating:4},
  {id:6, name:"Oli Bob", age:"12", col:"red", dob:"", rating:3, passed: true},
  {id:7, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982", rating:4, passed: false},
  {id:8, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982", rating:7, passed: true},
  {id:9, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980", rating:1},
  {id:10, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999", rating:4},
  {id:11, name:"Oli Bob", age:"12", col:"red", dob:"", rating:3, passed: true},
  {id:12, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982", rating:4, passed: false},
  {id:13, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982", rating:7, passed: true},
  {id:14, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980", rating:1},
  {id:15, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999", rating:4},
  {id:16, name:"Oli Bob", age:"12", col:"red", dob:"", rating:3, passed: true},
  {id:17, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982", rating:4, passed: false},
  {id:18, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982", rating:7, passed: true},
  {id:19, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980", rating:1},
  {id:20, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999", rating:4},
];

export default class Grid extends Component {
  render() {
    return (
      <ReactTabulator
        data={data}
        columns={columns}
        tooltips={true}
        layout="fitColumns"
        height="400px"
        pagination="local"
        paginationSize={6}
      />
    );
  }
}
