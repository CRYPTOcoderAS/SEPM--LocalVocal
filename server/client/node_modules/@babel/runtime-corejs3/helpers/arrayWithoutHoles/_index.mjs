import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import arrayLikeToArray from "../arrayLikeToArray/_index.mjs";
export default function _arrayWithoutHoles(arr) {
  if (_Array$isArray(arr)) return arrayLikeToArray(arr);
}