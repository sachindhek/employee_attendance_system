import { Request, Response } from "express";
const jwt = require("jsonwebtoken");

// const config = process.env;

// const token = require("crypto").randomBytes(64).toString("hex");

const verifyToken = (req: Request, res: Response, next: any) => {
  // const authHeader = req.headers["authorization"];
  // const token = authHeader && authHeader.split(" ")[1];
  const token = jwt.sign({}, process.env.JWT_ACCESS_SECRET, {
    expiresIn: "5m",
  });

  if (token == null) return res.sendStatus(401);

  jwt.verify(
    token,
    process.env.TOKEN_SECRET as string,
    (err: any, user: any) => {
      console.log(err);

      if (err) return res.sendStatus(403);
      // req.user = user
      next();
    }
  );
};

module.exports = { verifyToken };
