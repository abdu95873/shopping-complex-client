
import { floorTemplates } from "./floorTemplates";


export const floors = [
  {
    floorId: -1,
    name: "Basement",
    template: floorTemplates.basement,
    flats: [101, 102, 103, 104, 105, 106, 107, 108],
  },
  {
    floorId: 0,
    name: "Ground",
    template: floorTemplates.groundFloor,
    flats: [101, 102, 103, 104, 105, 106, 107, 108],
  },
  {
    floorId: 1,
    name: "1st Floor",
    template: floorTemplates.firstFloor,
    flats: [101, 102, 103, 104, 105, 106, 107, 108],
  },
  {
    floorId: 2,
    name: "2nd Floor",
    template: floorTemplates.secondFloor,
    flats: [201, 202, 203, 204],
  },
  {
    floorId: 3,
    name: "3rd Floor",
    template: floorTemplates.thirdToNineFloor,
    flats: [301, 302, 303, 304],

  },
  {
    floorId: 4,
    name: "4th Floor",
    template: floorTemplates.thirdToNineFloor,
    flats: [401, 402, 403, 404],
  },
  {
    floorId: 5,
    name: "5th Floor",
    template: floorTemplates.thirdToNineFloor,
    lats: [501, 502, 503, 504],

  },
  {
    floorId: 6,
    name: "6th Floor",
    template: floorTemplates.thirdToNineFloor,
    flats: [601, 602, 603, 604],

  },
  {
    floorId: 7,
    name: "7th Floor",
    template: floorTemplates.thirdToNineFloor,
    flats: [701, 702, 703, 704],

  },
  {
    floorId: 8,
    name: "8th Floor",
    template: floorTemplates.thirdToNineFloor,
    flats: [901, 902, 903, 904],

  },
  {
    floorId: 9,
    name: "9th Floor",
    template: floorTemplates.thirdToNineFloor,
    flats: [801, 802, 803, 804],
  }

];

