// const floor00 = [
//   {
//     id: 101,
//     name: "Flat 101",
//     top: "16.3%",
//     left: "13.2%",
//     width: "18.5%",
//     height: "15%",
//   },
//   {
//     id: 1011,
//     name: "Flat 101",
//     top: "31%",
//     left: "13.2%",
//     width: "16.7%",
//     height: "17%",
//   },
//   {
//     id: 102,
//     name: "Flat 102",
//     top: "16.3%",
//     left: "33.7%",
//     width: "9%",
//     height: "31.5%",
//   },
//   {
//     id: 1022,
//     name: "Flat 102",
//     top: "16.3%",
//     left: "42.5%",
//     width: "9.5%",
//     height: "31.5%",
//   },
//  {
//     id: 103,
//     name: "Flat 102",
//     top: "16.3%",
//     left: "55.3%",
//     width: "9.5%",
//     height: "31.5%",
//   },
//   {
//     id: 1033,
//     name: "Flat 102",
//     top: "16.3%",
//     left: "64.7%",
//     width: "8.9%",
//     height: "31.5%",
//   },
//   {
//     id: 104,
//     name: "Flat 102",
//     top: "16.3%",
//     left: "75.5%",
//     width: "18.5%",
//     height: "15%",
//   },

import { floorTemplates } from "./floorTemplates";

//   {
//     id: 1044,
//     name: "Flat 102",
//     top: "31%",
//     left: "77.4%",
//     width: "16.4%",
//     height: "17%",
//   },


//   {
//     id: 105,
//     name: "Flat 101",
//     top: "51%",
//     left: "13.2%",
//     width: "16.7%",
//     height: "17%",
//   },
//    {
//     id: 1055,
//     name: "Flat 101",
//     top: "68%",
//     left: "13.2%",
//     width: "18.5%",
//     height: "15%",
//   },
//   {
//     id: 106,
//     name: "Flat 102",
//     top: "51%",
//     left: "33.7%",
//     width: "18.5%",
//     height: "31.5%",
//   },
 
//  {
//     id: 107,
//     name: "Flat 102",
//     top: "51%",
//     left: "55.3%",
//     width: "18.5%",
//     height: "31.5%",
//   },
//   {
//     id: 108,
//     name: "Flat 102",
//     top: "51%",
//     left: "77.4%",
//     width: "15.9%",
//     height: "17%",
//   },
 
//   {
//     id: 1088,
//     name: "Flat 102",
//     top: "68%",
//     left: "75.5%",
//     width: "17.3%",
//     height: "14.7%",
//   },

  
// ];

// export default floor00;



export const floors = [
  {
    floorId: 1,
    name: "Under Ground",
    template: floorTemplates.undergroundFloor,
    flats: [101, 102, 103, 104,105,106,107,108],
  },
  {
    floorId: 2,
    name: "Ground Floor",
    template: floorTemplates.undergroundFloor,
    flats: [201, 202, 203, 204],
  },
  {
    floorId: 3,
    name: "Floor 1",
    template: floorTemplates.undergroundFloor,
    image: "../components/floor01.png",
    flats: [301, 302, 303, 304],
  },
  {
    floorId: 4,
    name: "Floor 2",
    image: "../components/floor01.png",
    flats: [401, 402, 403, 404],
  },
  {
    floorId: 5,
    name: "Floor 3",
    flats: [501, 502, 503, 504],
  },
  {
    floorId: 6,
    name: "Floor 4",
    flats: [601, 602, 603, 604],
  },
  {
    floorId: 7,
    name: "Floor 5",
    flats: [701, 702, 703, 704],
  },
  {
    floorId: 8,
    name: "Floor 6",
    flats: [801, 802, 803, 804],
  },
  {
    floorId: 9,
    name: "Floor 7",
    flats: [901, 902, 903, 904],
  },
  {
    floorId: 10,
    name: "Floor 8",
    flats: [1001, 1002, 1003, 1004],
  },
  {
    floorId: 11,
    name: "Floor 9",
    flats: [1101, 1102, 1103, 1104],
  },
  {
    floorId: 12,
    name: "Floor 10",
    flats: [1201, 1202, 1203, 1204],
  },
];

