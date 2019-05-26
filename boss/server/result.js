const SUCCESS_STATUS = "1";
const FAIL_STATUS = "0";

const RESULT = {
  code: SUCCESS_STATUS,
  msg: null,
  data: null
};

module.exports = {
  buildSuccessResult: function(data) {
    return { ...RESULT, code: SUCCESS_STATUS, data: data };
  },
  buildFailResult: function(msg) {
    return { ...RESULT, code: FAIL_STATUS, msg: msg };
  }
};
