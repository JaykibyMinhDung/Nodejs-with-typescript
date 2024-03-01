// const { Response, Request, NextFunction } = require("express");

exports.exampleFunc = (_req, res, _next) => {
  return res.json({
    message: "Chúc Dũng ngủ ngon!",
    statusCode: 200,
  });
};

module.exports = function testModuleExport(req, res) {
  return res.json({
    message: "func is active",
    statusCode: 200,
  });
};
