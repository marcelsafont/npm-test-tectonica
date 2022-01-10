"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TitleText = props => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, props.title), /*#__PURE__*/_react.default.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: props.text
    }
  }));
};

var _default = TitleText;
exports.default = _default;