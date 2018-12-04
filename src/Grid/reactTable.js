import React from "react";
import Icon from 'react-icons-kit';
import { edit } from 'react-icons-kit/fa';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class ReactTableGrid extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {firstName:"", lastName:"", age:0, visits:0, status:"", edit:""},
        {firstName:"Sam", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam1", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam2", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam3", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam4", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam5", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam6", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam7", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam8", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam9", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam10", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam11", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam12", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam13", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam14", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam15", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam16", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam17", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam18", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam19", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam20", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam21", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam22", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam23", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam24", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam25", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam26", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
        {firstName:"Sam27", lastName:"Daniel", age:23, visits:21, status:"pass", edit:""},
      ],
      edited_column: [],
      edit_index: 0,
      editColor: "",
      scriptString: ''
    };
    this.renderEditable = this.renderEditable.bind(this);
  }

  ApplyAll = () => {
    var table_data = this.state.data;
    const edited_columns =  this.state.edited_column;
    for(var j=0; j<edited_columns.length; j++){
      const edited_value = edited_columns[j];
      for(var i=0; i<table_data.length; i++){
        if(table_data[0][edited_value].length > 0){
            table_data[i][edited_value] = table_data[0][edited_value];
        }
      }
    }
    this.setState({data: table_data});
  }

  renderEditable(cellInfo) {
    var edited_column = [];
    var data = [...this.state.data];
    if(cellInfo.row._index === 0 || (this.state.edit_index === cellInfo.row._index)){
      return (
        <div
          style={{ backgroundColor: "#fafafa" }}
          contentEditable={true}
          suppressContentEditableWarning
          onInput = {e => {
            //console.log('text of div', e.currentTarget.textContent);
            data[cellInfo.index]['visits'] = e.currentTarget.textContent;
            this.setState({data: data });
          }}
          onBlur={e => {
            data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
            data[cellInfo.index]['visits'] = data[cellInfo.index]['age'];
            this.setState({ data });
            edited_column.push(cellInfo.column.id);
            this.setState({edited_column: Object.keys(cellInfo.original)})
          }}
          dangerouslySetInnerHTML={{
            __html: this.state.data[cellInfo.index][cellInfo.column.id]
          }}
        />
      );
    }else{
      return (
        <div
          style={{ backgroundColor: "#fafafa", borderColor: 'red', borderWidth: 1}}
          contentEditable={false}
          dangerouslySetInnerHTML={{
            __html: this.state.data[cellInfo.index][cellInfo.column.id]
          }}
        />
      );
    }
 }

 editAction = (rowInfo) => {
   this.renderEditable(rowInfo);
   this.setState({edit_index: rowInfo.row._index, editColor: 'red'});
 }

 saveData = () => {
   //var table_data = this.state.data;
   console.log("saved Data: ", this.state.data);
 }

  render() {
    const { data } = this.state;
    return (
      <div>
        <button onClick={() => this.ApplyAll()}>
          Apply All
        </button>
        <button onClick={() => this.saveData()}>
          Save
        </button>
        <ReactTable
          data={data}
          columns={[
              {
                Header: "First Name",
                accessor: "firstName",
                Cell: this.renderEditable
              },
              {
                Header: "Last Name",
                accessor: "lastName",
                Cell: this.renderEditable
              },
              {
                Header: "Age",
                accessor: "age",
                Cell: this.renderEditable
              },
              {
                Header: "Status",
                accessor: "status",
                Cell: this.renderEditable
              },
              {
                Header: "Visits",
                accessor: "visits",
                Cell: this.renderEditable
              },{
                Header: "Edit",
                accessor: "edit",
                Cell: row => (
                  <button align="center" onClick={() => this.editAction(row)} style={{ color: (this.state.edit_index === row.index || row.index === 0) ? 'green' : 'red'}}>
                    <div align="center">
                      <Icon icon={edit}/>
                    </div>
                  </button>
                )
              }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}
