import { XOA_SV } from "./constants.js";
import { SUA_SV } from "./constants.js";
import { THEM_SV } from "./constants.js";
import { GET_KEYWORD } from "./constants.js";

const actThemSV = (sinhVien) => {
    const action = {
        type: THEM_SV,
        payload: sinhVien,
      }
      return action;
}

const actXoaSV = (maSV) => {
    const action = {
        type: XOA_SV,
        payload: maSV,
    }
    return action;
};

const actSuaSV = (sinhVien) => {
    const action = {
        type: SUA_SV,
        payload: sinhVien,
    }
    return action;
};

const actGetKeyword = (keyWord) => {
    const action = {
        type: GET_KEYWORD,
        payload: keyWord,
    }
    return action;
}


export { actThemSV, actXoaSV, actSuaSV, actGetKeyword };