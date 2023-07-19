import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actSuaSV } from '../store/action';
import { actXoaSV } from '../store/action';

class TableSV extends Component {

    renderSV = () => {
        let { mangSV, xoaSV, suaSV, keyWord } = this.props;

        // filter listUser by keyword
    mangSV = mangSV?.filter((sinhVien) =>  sinhVien.hoTen.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1);

        return mangSV.map((sinhVien, index) => {
            return (
                <tr key={index}>
                    <td>{sinhVien.maSV}</td>
                    <td>{sinhVien.hoTen}</td>
                    <td>{sinhVien.soDT}</td>
                    <td>{sinhVien.email}</td>
                    <td>
                        <button className='btn btn-primary' onClick={() => {
                            suaSV(sinhVien);
                        }}>Sửa</button>
                    </td>
                    <td>
                        <button className='btn btn-danger' onClick={() => {
                            xoaSV(sinhVien.maSV);
                        }}>Xóa</button>
                    </td>
                </tr>
            )
        })
    }
    render() {
        // console.log(this.props.mangSV);
        return (
            <div className='container'>
                <table className='table'>
                    <thead>
                        <tr className='bg-dark text-white'>
                            <th>Mã SV</th>
                            <th>Họ tên</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSV()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangSV: state.QuanLySVReducer.mangSV,
        keyWord: state.QuanLySVReducer.keyWord,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        xoaSV: (maSV) => {
            // const action = {
            //     type: "XOA_SV",
            //     payload: maSV,
            // }
            dispatch(actXoaSV(maSV));
        },
        suaSV: (sinhVien) => {
            // const action = {
            //     type: "SUA_SV",
            //     payload: sinhVien,
            // }
            dispatch(actSuaSV(sinhVien));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TableSV);