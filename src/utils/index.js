const isType = (type, val) =>
  val.constructor.name.toLowerCase() === type.toLowerCase();
export { isType };
