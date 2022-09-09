import { Router, Request, Response } from "express";
import { returnCSVFileAsArray } from "./read";

const cors = require("cors");
const path = require("path");
const coursesByTimeFelizFilePath = path.resolve(
  __dirname,
  "./csv-data/courses-by-time.csv"
);

const router = Router();

router.get("/courses-by-time-feliz", async (req: Request, res: Response) => {
  let arr: any[] = await returnCSVFileAsArray(coursesByTimeFelizFilePath);
  arr = arr.filter((element) => element["Munic�pio"] == "Feliz");
  return res.send(arr);
});

export { router };
