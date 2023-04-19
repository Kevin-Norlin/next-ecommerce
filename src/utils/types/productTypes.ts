
export interface ProductType {
    name: string,
    imgUrl: string,
    desc: string,
    stock: number,
    isShowcase: boolean,
    type: string,//"PC" | "Screen" | "Tablet" | "Laptop" | "Mobile" | "Mouse" | "Keyboard", //Might change to just string...
    typeSpecific: ProductSpec;
}

export type ProductSpec = ProductSpecType_Laptop | ProductSpecType_Mobile | ProductSpecType_PC | ProductSpecType_Tablet | ProductSpecType_Mouse | ProductSpecType_Keyboard;

interface ProductSpecType {

}

export interface ProductSpecType_Laptop extends ProductSpecType {
  screenSize: number,
  screenResolution: string,
  cpu: string,
  gpu: string,
  ram: string, // Amount, Architechture and speed.
  hdd: string,
  hddSize: number,
}
export interface ProductSpecType_Mobile extends ProductSpecType {
    screenSize: number,
    screenResolution: string,
    cpu: string,
    gpu: string,
    ram: string, // Amount, Architechture and speed.
    hdd: string,
    hddSize: number,
}

export interface ProductSpecType_Tablet extends ProductSpecType {
    screenSize: number,
    screenResolution: string,
    cpu: string,
    gpu: string,
    ram: string, // Amount, Architechture and speed.
    hdd: string,
    hddSize: number,
}

export interface ProductSpecType_PC extends ProductSpecType {
    cpu: string,
    gpu: string,
    ram: string, // Amount, Architechture and speed.
    hdd: string,
    hddSize: number,
    chassi: string,
    motherboard: string,
    psu: string
}
export interface ProductSpecType_Mouse extends ProductSpecType {
    resolution: number,
    connection: string,
    wireless: boolean
}

export interface ProductSpecType_Keyboard extends ProductSpecType {
    connection: string,
    wireless: boolean,
    switches: string,
}

type ProductCategory = "Laptop" | "Mobile" | "Tablet" | "PC" | "Mouse" | "Keyboard";

export const getDefaultTypeSpecific = (productCategory: ProductCategory): ProductSpec => {
  switch (productCategory) {
    case "Laptop":
    case "Mobile":
    case "Tablet":
      return {
        screenSize: 0,
        screenResolution: "",
        cpu: "",
        gpu: "",
        ram: "",
        hdd: "",
        hddSize: 0,
      };
    case "PC":
      return {
        cpu: "",
        gpu: "",
        ram: "",
        hdd: "",
        hddSize: 0,
        chassi: "",
        motherboard: "",
        psu: "",
      };
    case "Mouse":
      return {
        resolution: 0,
        connection: "",
        wireless: false,
      };
    case "Keyboard":
      return {
        connection: "",
        wireless: false,
        switches: "",
      };
    default:
      return {} as ProductSpec;
  }
};