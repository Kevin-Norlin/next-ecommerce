
export interface ProductType {
    name: string,
    imgUrl: string,
    desc: string,
    stock: number,
    isShowcase: boolean,
    type: "PC" | "Screen" | "Tablet" | "Laptop" | "Mobile" | "Mouse" | "Keyboard", //Might change to just string...
    typeSpecific: ProductType_Laptop | ProductType_Mobile | ProductType_PC | ProductType_Tablet | ProductType_Mouse | ProductType_Keyboard;
}

export interface ProductType_Laptop {
  screenSize: number,
  screenResolution: string,
  cpu: string,
  gpu: string,
  ram: string, // Amount, Architechture and speed.
  hdd: string,
  hddSize: number,
}
export interface ProductType_Mobile {
    screenSize: number,
    screenResolution: string,
    cpu: string,
    gpu: string,
    ram: string, // Amount, Architechture and speed.
    hdd: string,
    hddSize: number,
}

export interface ProductType_Tablet {
    screenSize: number,
    screenResolution: string,
    cpu: string,
    gpu: string,
    ram: string, // Amount, Architechture and speed.
    hdd: string,
    hddSize: number,
}

export interface ProductType_PC {
    cpu: string,
    gpu: string,
    ram: string, // Amount, Architechture and speed.
    hdd: string,
    hddSize: number,
    chassi: string,
    motherboard: string,
    psu: string
}
export interface ProductType_Mouse {
    resolution: number,
    connection: string,
    wireless: boolean
}

export interface ProductType_Keyboard {
    connection: string,
    wireless: boolean,
    switches: string,
}




