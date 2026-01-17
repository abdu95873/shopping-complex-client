// // src/data/room01.js
// const flats01 = [
//   { id: 1, name: "C. Bed", top: ".5%", left: "11.2%", width: "30%", height: "44%", realWidth: "12'", realHeight: "15'", flat: "Flat 101" },
//   { id: 2, name: "M. Bed", top: "46%", left: "11.2%", width: "30%", height: "51%", realWidth: "14'", realHeight: "16'", flat: "Flat 101" },
//   { id: 3, name: "Kitchen", top: ".5%", left: "51.5%", width: "15.5%", height: "28%", realWidth: "10'", realHeight: "8'", flat: "Flat 101" },
//   { id: 4, name: "Dining", top: "30%", left: "42.2%", width: "25%", height: "47%", realWidth: "12'", realHeight: "14'", flat: "Flat 101" },
//   { id: 5, name: "Drawing", top: ".5%", left: "68%", width: "30.5%", height: "49%", realWidth: "15'", realHeight: "18'", flat: "Flat 101" },
//   { id: 6, name: "G. Bed", top: "50%", left: "68%", width: "30.5%", height: "47%", realWidth: "13'", realHeight: "15'", flat: "Flat 101" },
//   { id: 7, name: "Common Toilet", top: "79%", left: "42.2%", width: "13.5%", height: "18%", realWidth: "6'", realHeight: "8'", flat: "Flat 101" },
//   { id: 8, name: "Attached Toilet", top: "20%", left: "1.5%", width: "9%", height: "21.5%", realWidth: "5'", realHeight: "7'", flat: "Flat 101" },
//   { id: 9, name: "Attached Toilet", top: "47%", left: "1.5%", width: "9%", height: "25.5%", realWidth: "5'", realHeight: "7'", flat: "Flat 101" },
//   { id: 10, name: "Ver.", top: "0.5%", left: "1.5%", width: "10%", height: "18%", realWidth: "6'", realHeight: "4'", flat: "Flat 101" },
//   { id: 11, name: "Ver.", top: "74.5%", left: "1.5%", width: "9%", height: "24.5%", realWidth: "6'", realHeight: "5'", flat: "Flat 101" },
//   { id: 12, name: "Ver.", top: "77%", left: "56.5%", width: "10.5%", height: "22%", realWidth: "6'", realHeight: "5'", flat: "Flat 101" },
//   { id: 13, name: "Void", top: ".5%", left: "42.2%", width: "8.5%", height: "28%", realWidth: "8'", realHeight: "10'", flat: "Flat 101" },
// ];

import { roomTemplates } from "./roomTemplates";

// export default flats01;



export const flats = [
  // ---------- Under Ground ----------
  { flatId: 101, name: "Flat 101", floorId: 1, image: "/images/flat01.png", rooms: roomTemplates.standardFlat },
  { flatId: 102, name: "Flat 102", floorId: 1, image: "/images/flat01.png", rooms: roomTemplates.standardFlat },
  { flatId: 103, name: "Flat 103", floorId: 1, image: "/images/flat01.png", rooms: roomTemplates.standardFlat },
  { flatId: 104, name: "Flat 104", floorId: 1, image: "/images/flat01.png", rooms: roomTemplates.standardFlat },

  // ---------- Ground Floor ----------
  { flatId: 201, name: "Flat 201", floorId: 2, image: "../components/flat01.png", rooms: roomTemplates.standardFlat },
  { flatId: 202, name: "Flat 202", floorId: 2, image: "../components/flat01.png", rooms: roomTemplates.standardFlat },
  { flatId: 203, name: "Flat 203", floorId: 2, image: "../components/flat01.png", rooms: roomTemplates.standardFlat },
  { flatId: 204, name: "Flat 204", floorId: 2, image: "../components/flat01.png", rooms: roomTemplates.standardFlat },

  // ---------- Floor 1 ----------
  { flatId: 301, name: "Flat 301", floorId: 3, image: "../components/flat01.png", rooms: roomTemplates.standardFlat },
  { flatId: 302, name: "Flat 302", floorId: 3, image: "../components/flat01.png", rooms: roomTemplates.standardFlat },
  { flatId: 303, name: "Flat 303", floorId: 3, image: "../components/flat01.png", rooms: roomTemplates.standardFlat },
  { flatId: 304, name: "Flat 304", floorId: 3, image: "../components/flat01.png", rooms: roomTemplates.standardFlat },

  // ---------- Floor 2 ----------
  { flatId: 401, name: "Flat 401", floorId: 4, image: "../components/flat01.png", rooms: [] },
  { flatId: 402, name: "Flat 402", floorId: 4, image: "../components/flat01.png", rooms: [] },
  { flatId: 403, name: "Flat 403", floorId: 4, image: "../components/flat01.png", rooms: [] },
  { flatId: 404, name: "Flat 404", floorId: 4, image: "../components/flat01.png", rooms: [] },

  // ---------- Floor 3 ----------
  { flatId: 501, name: "Flat 501", floorId: 5, image: "../components/flat01.png", rooms: [] },
  { flatId: 502, name: "Flat 502", floorId: 5, image: "../components/flat01.png", rooms: [] },
  { flatId: 503, name: "Flat 503", floorId: 5, image: "../components/flat01.png", rooms: [] },
  { flatId: 504, name: "Flat 504", floorId: 5, image: "../components/flat01.png", rooms: [] },

  // ---------- Floor 4 ----------
  { flatId: 601, name: "Flat 601", floorId: 6, image: "../components/flat01.png", rooms: [] },
  { flatId: 602, name: "Flat 602", floorId: 6, image: "../components/flat01.png", rooms: [] },
  { flatId: 603, name: "Flat 603", floorId: 6, image: "../components/flat01.png", rooms: [] },
  { flatId: 604, name: "Flat 604", floorId: 6, image: "../components/flat01.png", rooms: [] },

  // ---------- Floor 5 ----------
  { flatId: 701, name: "Flat 701", floorId: 7, image: "../components/flat01.png", rooms: [] },
  { flatId: 702, name: "Flat 702", floorId: 7, image: "../components/flat01.png", rooms: [] },
  { flatId: 703, name: "Flat 703", floorId: 7, image: "../components/flat01.png", rooms: [] },
  { flatId: 704, name: "Flat 704", floorId: 7, image: "../components/flat01.png", rooms: [] },

  // ---------- Floor 6 ----------
  { flatId: 801, name: "Flat 801", floorId: 8, image: "../components/flat01.png", rooms: [] },
  { flatId: 802, name: "Flat 802", floorId: 8, image: "../components/flat01.png", rooms: [] },
  { flatId: 803, name: "Flat 803", floorId: 8, image: "../components/flat01.png", rooms: [] },
  { flatId: 804, name: "Flat 804", floorId: 8, image: "../components/flat01.png", rooms: [] },

  // ---------- Floor 7 ----------
  { flatId: 901, name: "Flat 901", floorId: 9, image: "../components/flat01.png", rooms: [] },
  { flatId: 902, name: "Flat 902", floorId: 9, image: "../components/flat01.png", rooms: [] },
  { flatId: 903, name: "Flat 903", floorId: 9, image: "../components/flat01.png", rooms: [] },
  { flatId: 904, name: "Flat 904", floorId: 9, image: "../components/flat01.png", rooms: [] },

  // ---------- Floor 8 ----------
  { flatId: 1001, name: "Flat 1001", floorId: 10, image: "../components/flat01.png", rooms: [] },
  { flatId: 1002, name: "Flat 1002", floorId: 10, image: "../components/flat01.png", rooms: [] },
  { flatId: 1003, name: "Flat 1003", floorId: 10, image: "../components/flat01.png", rooms: [] },
  { flatId: 1004, name: "Flat 1004", floorId: 10, image: "../components/flat01.png", rooms: [] },

  // ---------- Floor 9 ----------
  { flatId: 1101, name: "Flat 1101", floorId: 11, image: "../components/flat01.png", rooms: [] },
  { flatId: 1102, name: "Flat 1102", floorId: 11, image: "../components/flat01.png", rooms: [] },
  { flatId: 1103, name: "Flat 1103", floorId: 11, image: "../components/flat01.png", rooms: [] },
  { flatId: 1104, name: "Flat 1104", floorId: 11, image: "../components/flat01.png", rooms: [] },

  // ---------- Floor 10 ----------
  { flatId: 1201, name: "Flat 1201", floorId: 12, image: "../components/flat01.png", rooms: [] },
  { flatId: 1202, name: "Flat 1202", floorId: 12, image: "../components/flat01.png", rooms: [] },
  { flatId: 1203, name: "Flat 1203", floorId: 12, image: "../components/flat01.png", rooms: [] },
  { flatId: 1204, name: "Flat 1204", floorId: 12, image: "../components/flat01.png", rooms: [] },
];
