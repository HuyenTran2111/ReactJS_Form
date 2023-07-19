import React, { Component } from 'react'
import FormSV from './formSV.js';
import TableSV from './tableSV.js';
import Search from './search.js';

export default class BaiTapForm extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Bài Tập Form</h1>
        <FormSV />
        <Search />
        <TableSV />
      </div>
    )
  }
}
