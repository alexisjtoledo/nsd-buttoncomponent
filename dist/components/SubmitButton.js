"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _check = require("./check.svg");

require("./SubmitButton.sass");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SubmitButton = _ref => {
  let {
    type,
    size,
    disabled,
    onButtonClick
  } = _ref;
  const [variant, setVariant] = (0, _react.useState)("default");
  const [buttonSize, setButtonSize] = (0, _react.useState)("medium");

  const getVariant = () => {
    switch (type) {
      case "default":
        setVariant("default");
        break;

      case "inverted":
        setVariant("inverted");
        break;

      default:
        setVariant("default");
    }
  };

  const getButtonSize = () => {
    switch (size) {
      case "small":
        setButtonSize("small");
        break;

      case "large":
        setButtonSize("large");
        break;

      default:
        setButtonSize("medium");
    }
  };

  const triggerButton = e => {
    if (e.keyCode === 83) {
      onButtonClick();
    }
  };

  (0, _react.useEffect)(() => {
    getVariant();
    getButtonSize();
    window.addEventListener("keyup", triggerButton);
    return () => window.removeEventListener("keyup", triggerButton);
  });
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "btn ".concat(disabled ? "disabled" : "", " ").concat(buttonSize, " ").concat(variant),
    onClick: onButtonClick,
    disabled: disabled,
    "aria-label": "Submit"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "btn-label"
  }, /*#__PURE__*/_react.default.createElement(_check.ReactComponent, {
    className: "icon"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "text"
  }, "Submit")));
};

var _default = SubmitButton;
exports.default = _default;