const path = require("path");
const fs = require("fs");

function csvToArray(str, delimiter = ",") {
  let headers: string[] = str.slice(0, str.indexOf("\n")).split(delimiter);
  headers = headers.map((element: string) => {
    element = String(element);

    if (headers.indexOf(element) > 3)
      return element.substring(
        element.indexOf("20"),
        element.indexOf("20") + 4
      );

    return element.slice(1, -1);
  });

  const rows = str.slice(str.indexOf("\n") + 1).split("\n");

  let arr = rows.map(function (row) {
    const values = row.split(delimiter);

    const el = headers.reduce(function (object, header, index) {
      object[header] = values[index] ? values[index].slice(1, -1) : "";
      if (object[header].includes("...")) object[header] = 0;

      return object;
    }, {});

    return el;
  });

  return arr;
}

export const returnCSVFileAsArray = async (path: string) => {
  return csvToArray(fs.readFileSync(path, "UTF-8"));
};
