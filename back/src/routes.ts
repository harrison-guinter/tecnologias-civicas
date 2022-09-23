import { Router, Request, Response } from "express";
import { DefaultDataSet } from "./model/default-dataset.interface";
import { filterByCity, getCSVFileAsArray } from "./read";

const path = require("path");

const coursesFilePath = path.resolve(__dirname, "./csv-data/total-courses.csv");
const enteringStudentsFilePath = path.resolve(
  __dirname,
  "./csv-data/entering-students.csv"
);
const graduatingStudentsFilePath = path.resolve(
  __dirname,
  "./csv-data/graduating-students.csv"
);
const graduatingFemaleStudentsFilePath = path.resolve(
  __dirname,
  "./csv-data/graduating-female-students.csv"
);
const graduatingMaleStudentsFilePath = path.resolve(
  __dirname,
  "./csv-data/graduating-male-students.csv"
);

const enteringFemaleStudentsFilePath = path.resolve(
  __dirname,
  "./csv-data/entering-female-students.csv"
);
const enteringMaleStudentsFilePath = path.resolve(
  __dirname,
  "./csv-data/entering-male-students.csv"
);

const router = Router();

router.get("/courses-feliz", async (req: Request, res: Response) => {
  let arr: any[] = await getCSVFileAsArray(coursesFilePath);
  arr = arr.filter((element) => element.municipio == "Feliz");
  return res.send(arr);
});

router.get(
  "/entering-and-graduating-students-feliz",
  async (req: Request, res: Response) => {
    let enteringArr: any[] = await getCSVFileAsArray(
      enteringStudentsFilePath
    ).then((arr: DefaultDataSet[]) => filterByCity(arr, "Feliz"));

    let graduatingArr: any[] = await getCSVFileAsArray(
      graduatingStudentsFilePath
    ).then((arr: DefaultDataSet[]) => filterByCity(arr, "Feliz"));

    return res.send([...enteringArr, ...graduatingArr]);
  }
);

router.get(
  "/entering-students-by-genre-feliz",
  async (req: Request, res: Response) => {
    let maleArr: any[] = await getCSVFileAsArray(
      enteringMaleStudentsFilePath
    ).then((arr: DefaultDataSet[]) => filterByCity(arr, "Feliz"));

    let femaleArr: any[] = await getCSVFileAsArray(
      enteringFemaleStudentsFilePath
    ).then((arr: DefaultDataSet[]) => filterByCity(arr, "Feliz"));

    return res.send([...maleArr, ...femaleArr]);
  }
);

router.get(
  "/graduating-students-by-genre-feliz",
  async (req: Request, res: Response) => {
    let maleArr: any[] = await getCSVFileAsArray(
      graduatingMaleStudentsFilePath
    ).then((arr: DefaultDataSet[]) => filterByCity(arr, "Feliz"));

    let femaleArr: any[] = await getCSVFileAsArray(
      graduatingFemaleStudentsFilePath
    ).then((arr: DefaultDataSet[]) => filterByCity(arr, "Feliz"));

    return res.send([...maleArr, ...femaleArr]);
  }
);

export { router };
