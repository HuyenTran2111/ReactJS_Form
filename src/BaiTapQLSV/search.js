import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actGetKeyword } from '../store/action';

class Search extends Component {
    handleOnchange = (e) => {
      this.props.getKeyword(e.target.value);
    }
    render() {
        
      return (
        <div className='container'>
            <input type="text" className="form-control my-3 w-50"
       onChange={this.handleOnchange} 
       />
        </div>
      )
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getKeyword: (keyWord) => {
      //   const action = {
      //     type: "GET_KEYWORD",
      //     payload: keyword,
         
      // }
      dispatch(actGetKeyword(keyWord));
    }
  } }
  export default connect(null, mapDispatchToProps) (Search);
