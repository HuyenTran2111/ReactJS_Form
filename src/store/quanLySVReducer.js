import { THEM_SV, SUA_SV, XOA_SV, GET_KEYWORD } from "./constants";



const initialState = {
    mangSV: [
        { maSV: 1111, hoTen: "Nguyễn Văn A", soDT: "0938111111", email: "nguyenvana@gmail.com" },
        { maSV: 2222, hoTen: "Nguyễn Văn B", soDT: "0938223232", email: "nguyenvanb@gmail.com" },
    ],
    chonSV: null,
    keyWord: "",
};

const QuanLySVReducer = (state = initialState, action) => {
    switch (action.type) {
        case THEM_SV: {
            const sinhVien = action.payload;
            const mangSVClone = [...state.mangSV];

            let isAdd = true;
            for (let i = 0; i < mangSVClone.length; i++) {
                if (mangSVClone[i].maSV === sinhVien.values.maSV) {
                    isAdd = false;
                    break;
                }
            }

            if (isAdd) {
                //them
                const sinhVienClone = { ...sinhVien.values };
                mangSVClone.push(sinhVienClone);

            } else {
                //update
                const index = mangSVClone.findIndex((item) => item.maSV === sinhVien.values.maSV);
                if (index !== -1) {
                    mangSVClone[index] = sinhVien.values;
                }
            }

            state.mangSV = mangSVClone;

            return { ...state };

        };

        case XOA_SV: {
            let mangSVClone = [...state.mangSV];
            const index = mangSVClone.findIndex((sinhVien) => sinhVien.maSV === action.payload);
            if (index !== -1) {
                mangSVClone.splice(index, 1);
                state.mangSV = mangSVClone;
            }
            return { ...state };
        }

        case SUA_SV: {
            state.chonSV = action.payload;
            return { ...state };
        }

        case GET_KEYWORD: {
            state.keyWord = action.payload;
            return { ...state };
        }
        default:
            return { ...state };
    }

}

export default QuanLySVReducer;