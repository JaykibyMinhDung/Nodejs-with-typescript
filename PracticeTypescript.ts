import { Response, Request, NextFunction } from "express";

exports.exampleFunc = (req: Request, res: Response, next: NextFunction) => {
  return res.json({
    message: "Chúc Dũng ngủ ngon!",
    statusCode: 200,
  });
};

module.exports = function testModuleExport(req: Request, res: Response) {
  return res.json({
    message: "func is active",
    statusCode: 200,
  });
};
