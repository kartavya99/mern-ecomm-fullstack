const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  //TODO: this is temp token for testing without cookie
  // token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjMxMGVmZmUyNjE5YTAzODZmZDBiZiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwNjIzNDE2Mn0.TeiEMiwqp-dj1h9BZEsQP58KpiSVdBUW_SKKSqhhHTo";
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjIxOGFjMGY2MWUzOGU5NTJmOTdlYSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA2MzExNjU2fQ.ZEBqTPnxX6v8h9zwQ8tHvbHMtOp1aCv-qUIhZtrSQ2I";
  //   "s%3A44X1nPK6O7OEl-JRazQjcvoQ2gkFXya8.KUQD%2BzbR9DJeHdPaM4orovqGjxo%2F23M9L3LD2S8rLUU";

  return token;
};
