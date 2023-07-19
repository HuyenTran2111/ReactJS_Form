import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actThemSV } from '../store/action';

class FormSV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        maSV: '',
        hoTen: '',
        soDT: '',
        email: '',
      },
      errors: {
        maSV: '',
        hoTen: '',
        soDT: '',
        email: '',
      },
      maSVValid: false,
      hoTenValid: false,
      soDTValid: false,
      emailValid: false,

      formValid: false,
      isAdd: true,
    };
  }


  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      values: { ...this.state.values, [name]: value },
    },
      () => {
        console.log(this.state);
      })
    let mess = value.trim() ? "" : `${name} không được bỏ trống!`;

    let { maSVValid, hoTenValid, soDTValid, emailValid } = this.state;

    switch (name) {
      case "maSV":
        maSVValid = mess === "" ? true : false;

        if (value && value.trim().length < 4) {
          mess = "Kí tự từ 4 trở lên";
          maSVValid = false;
        }
        break;

      case "hoTen":
        hoTenValid = mess === "" ? true : false;
        break;

      case "soDT":
        soDTValid = mess === "" ? true : false;
        if (value && !value.match("^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$")) {
          mess = "Vui lòng nhập đúng số điện thoại! ";
          soDTValid = false;
        }
        break;
      case "email":
        emailValid = mess === "" ? true : false;
        if (value && !value.match("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")) {
          mess = "Vui lòng nhập đúng email";
          emailValid = false;
        }
        break;

      default:
        break;
    }

    this.setState({
      errors: { ...this.state.errors, [name]: mess },
      maSVValid,
      hoTenValid,
      soDTValid,
      emailValid,
      formValid: maSVValid && hoTenValid && soDTValid && emailValid,
    },
      () => {
        console.log(this.state);
      }
    )
  };

  // handleValidation = (e) => {
  //   const { name, value } = e.target;

  //   let mess = value.trim() ? "" : `${name} không được bỏ trống!`;

  //   let { maSVValid, hoTenValid, soDTValid, emailValid } = this.state;

  //   switch (name) {
  //     case "maSV":
  //       maSVValid = mess === "" ? true : false;

  //       if (value && value.trim().length < 4) {
  //         mess = "Kí tự từ 4 trở lên";
  //         maSVValid = false;
  //       }
  //       break;

  //     case "hoTen":
  //       hoTenValid = mess === "" ? true : false;
  //       break;

  //     case "soDT":
  //       soDTValid = mess === "" ? true : false;
  //       if (value && !value.match("^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$")) {
  //         mess = "Vui lòng nhập đúng số điện thoại! ";
  //         soDTValid = false;
  //       }
  //       break;
  //       case "email":
  //         emailValid = mess === "" ? true : false;
  //         if(value && !value.match("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")) {
  //             mess = "Vui lòng nhập đúng email";
  //             emailValid = false;
  //         }
  //         break;

  //     default:
  //       break;
  //   }

  //   this.setState({
  //     errors: { ...this.state.errors, [name]: mess },
  //     maSVValid,
  //     hoTenValid,
  //     soDTValid,
  //     emailValid,
  //     formValid: maSVValid && hoTenValid && soDTValid && emailValid,
  // },
  //     () => {
  //         console.log(this.state);
  //     }
  // )

  // }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.themSV(this.state);
    this.setState({
      values: {
        maSV: "",
        hoTen: "",
        soDT: "",
        email: "",
      },
      formValid: false,
      isAdd: true,
      
    })
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("this.componentWillReceiveProps", nextProps);

    if (nextProps && nextProps.chonSV) {
      // Cap nhat lai state
      this.setState({
        values: {
          maSV: nextProps.chonSV.maSV,
          hoTen: nextProps.chonSV.hoTen,
          soDT: nextProps.chonSV.soDT,
          email: nextProps.chonSV.email,
        },

        maSVValid: true,
        hoTenValid: true,
        soDTValid: true,
        emailValid: true,

        formValid: true,
        isAdd: false,
      })
    }
    // }else {
    //   // reset state
    //   this.setState ({
    //     maSV: "",
    //   hoTen: "",
    //   soDT: "",
    //   email: "",
    //   maSVValid: false,
    //   hoTenValid: false,
    //   soDTValid: false,
    //   emailValid: false,

    //   formValid: false,
    //   isAdd: true,
    //   })

    // };
  };

  handleReset = () => {

    this.setState({
      values: {
        maSV: '',
        hoTen: '',
        soDT: '',
        email: '',
      },
      errors: {
        maSV: '',
        hoTen: '',
        soDT: '',
        email: '',
      },
      maSVValid: false,
      hoTenValid: false,
      soDTValid: false,
      emailValid: false,

      formValid: false,
      isAdd: true,
    })
  }


  render() {
    return (
      <div className='container'>
        <div className="card text-left">
          <div className="card-header bg-dark text-white">
            <h3>Thông tin sinh viên</h3>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className='row'>
                <div className='form-group col-6'>
                  <span>Mã SV</span>
                  <input type='number' className='form-control' name='maSV' value={this.state.values.maSV} onChange={this.handleChange}
                  // onBlur={this.handleValidation}
                  />
                  <span className='text-danger'>
                    {this.state.errors.maSV}
                  </span>
                </div>
                <div className='form-group col-6'>
                  <span>Họ tên</span>
                  <input className='form-control' name='hoTen' value={this.state.values.hoTen} onChange={this.handleChange}
                  // onBlur={this.handleValidation}
                  />
                  <span className='text-danger'>
                    {this.state.errors.hoTen}
                  </span>
                </div>
                <div className='form-group col-6'>
                  <span>Số điện thoại</span>
                  <input className='form-control' name='soDT' value={this.state.values.soDT} onChange={this.handleChange}
                  // onBlur={this.handleValidation}
                  />
                  <span className='text-danger'>
                    {this.state.errors.soDT}
                  </span>
                </div>
                <div className='form-group col-6'>
                  <span>Email</span>
                  <input className='form-control' name='email' value={this.state.values.email} onChange={this.handleChange}
                  //  onBlur={this.handleValidation}
                  />
                  <span className='text-danger'>
                    {this.state.errors.email}
                  </span>
                </div>
                <div className='form-group col-12'>
                  <button type='submit' className='btn btn-success' disabled={!this.state.formValid}>{this.state.isAdd ? 'Thêm' : "Cập nhật"} sinh viên</button>
                  <button className='btn btn-danger ml-3' type='reset'
                    onClick={this.handleReset}>Reset</button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    chonSV: state.QuanLySVReducer.chonSV,
   
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    themSV: (sinhVien) => {
      // const action = {
      //   type: "THEM_SV",
      //   payload: sinhVien,
      // }
      dispatch(actThemSV(sinhVien));
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(FormSV);