const f = () => "bloop";

module.exports = async function(x) {
  switch (x) {
    case "a":
      return "A";
    case "b":
      return "B";
    default:
      return ":)";
  }
};
