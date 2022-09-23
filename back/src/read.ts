import { DefaultDataSet } from "./model/default-dataset.interface";
import {
  createRowEachLineBreak,
  formatRows,
  mapHeaders,
  separateHeaders,
} from "./utils/csv-utils";

const fs = require("fs");

function csvToArray(strFile: string): DefaultDataSet[] {
  const headers: string[] = mapHeaders(separateHeaders(strFile));
  const rows = createRowEachLineBreak(strFile);
  const arr: any[] = formatRows(rows, headers);

  return arr.map((element): DefaultDataSet => new DefaultDataSet(element));
}

export const getCSVFileAsArray = async (path: string) => {
  return csvToArray(fs.readFileSync(path, "UTF-8"));
};

export const filterByCity = (
  data: DefaultDataSet[],
  city: string
): DefaultDataSet[] => {
  return data.filter((element: DefaultDataSet) => element.municipio == city);
};
