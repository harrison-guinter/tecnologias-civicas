import { DefaultDataSet } from "./model/default-dataset.interface";
import {
  createRowEachLineBreak,
  formatRows,
  mapHeaders,
  separateHeaders,
} from "./utils/csv-utils";

const fs = require("fs");

function csvToArray(strFile: string): DefaultDataSet[] {
  let headers: string[] = separateHeaders(strFile);
  headers = mapHeaders(headers);
  const rows = createRowEachLineBreak(strFile);
  let arr: any[] = formatRows(rows, headers);

  return arr.map((element) => {
    element = new DefaultDataSet(element);

    return element;
  });
}

export const returnCSVFileAsArray = async (path: string) => {
  return csvToArray(fs.readFileSync(path, "UTF-8"));
};

export const filterByCity = (
  data: DefaultDataSet[],
  city: string
): DefaultDataSet[] => {
  return data.filter((element: DefaultDataSet) => element.municipio == city);
};
