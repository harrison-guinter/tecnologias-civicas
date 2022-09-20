const delimiter: string = ",";

export const createRowEachLineBreak = (str: string): string[] =>
  str.slice(str.indexOf("\n") + 1).split("\n");

export const separateHeaders = (strFile: string): string[] =>
  strFile.slice(0, strFile.indexOf("\n")).split(delimiter);

export const mapHeaders = (headers: string[]): string[] =>
  headers.map((element: string) => {
    element = String(element);

    if (headers.indexOf(element) > 3)
      return element.substring(
        element.indexOf("20"),
        element.indexOf("20") + 4
      );

    return element.slice(1, -1);
  });

export const formatRows = (rows: string[], headers: string[]): Object[] => {
  return rows.map(function (row) {
    const values = row.split(delimiter);

    const el = headers.reduce(function (object, header, index) {
      object[header] = values[index] ? values[index].slice(1, -1) : "";
      if (object[header].includes("...")) object[header] = 0;

      if (isNaN(object[header])) {
        if (String(object[header]).endsWith('"')) {
          object[header] = object[header].slice(0, object[header].length - 1);
        }
      }

      return object;
    }, {});

    return el;
  });
};
