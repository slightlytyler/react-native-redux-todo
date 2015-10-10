String.prototype.capitalize = function() {
  return this.replace(/(^|\/)([a-z])/g, (match) => match.toUpperCase());
}

export default String;