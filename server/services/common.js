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
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjMxMGVmZmUyNjE5YTAzODZmZDBiZiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwNjIzNDE2Mn0.TeiEMiwqp-dj1h9BZEsQP58KpiSVdBUW_SKKSqhhHTo";

  return token;
};
