export class DefaultDataSet {
  2010: number;
  2011: number;
  2012: number;
  2013: number;
  2014: number;
  2015: number;
  2016: number;
  2017: number;
  2018: number;
  2019: number;
  2020: number;
  municipio: string;
  ibge?: number;
  latitude?: string | number;
  longitude?: string | number;
  constructor(data: any) {
    this["2010"] = Number(data[2010]);
    this[2011] = Number(data[2011]);
    this[2012] = Number(data[2012]);
    this[2013] = Number(data[2013]);
    this[2014] = Number(data[2014]);
    this[2015] = Number(data[2015]);
    this[2016] = Number(data[2016]);
    this[2017] = Number(data[2017]);
    this[2018] = Number(data[2018]);
    this[2019] = Number(data[2019]);
    this[2020] = Number(data[2020]);
    this.municipio = data["Município"];
  }
}
