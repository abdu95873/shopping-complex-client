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
  { flatId: 1201, name: "Flat 101", floorId: 1, image: "/images/flat01.png", rooms: roomTemplates.standardFlat },
  { flatId: 1202, name: "Flat 102", floorId: 1, image: "/images/flat01.png", rooms: roomTemplates.standardFlat },
  { flatId: 1203, name: "Flat 103", floorId: 1, image: "/images/flat01.png", rooms: roomTemplates.standardFlat },
  { flatId: 1204, name: "Flat 104", floorId: 1, image: "/images/flat01.png", rooms: roomTemplates.standardFlat },

  // ---------- Ground Floor ----------
  { flatId: 1101, name: "Flat 201", floorId: 2, image: "../components/flat01.png", rooms: roomTemplates.standardFlat },
  { flatId: 1102, name: "Flat 202", floorId: 2, image: "../components/flat01.png", rooms: roomTemplates.standardFlat },
  { flatId: 1103, name: "Flat 203", floorId: 2, image: "../components/flat01.png", rooms: roomTemplates.standardFlat },
  { flatId: 1104, name: "Flat 204", floorId: 2, image: "../components/flat01.png", rooms: roomTemplates.standardFlat },

  // ---------- Floor 1 ----------
  { flatId: 101, name: "Flat 101", floorId: 3, image: "/images/flat01.png", rooms: roomTemplates.standardFlat },
  { flatId: 102, name: "Flat 102", floorId: 3, image: "/images/flat02.png", rooms: roomTemplates.standardFlat },
  { flatId: 103, name: "Flat 103", floorId: 3, image: "/images/flat03.png", rooms: roomTemplates.standardFlat },
  { flatId: 104, name: "Flat 104", floorId: 3, image: "/images/flat04.png", rooms: roomTemplates.standardFlat },
  { flatId: 105, name: "Flat 104", floorId: 3, image: "/images/flat05.png", rooms: roomTemplates.standardFlat },
  { flatId: 106, name: "Flat 104", floorId: 3, image: "/images/flat06A.png", rooms: roomTemplates.standardFlat },
  { flatId: 107, name: "Flat 104", floorId: 3, image: "/images/flat06B.png", rooms: roomTemplates.standardFlat },
  { flatId: 108, name: "Flat 104", floorId: 3, image: "/images/flat07.png", rooms: roomTemplates.standardFlat },
  { flatId: 109, name: "Flat 104", floorId: 3, image: "/images/flat08A.png", rooms: roomTemplates.standardFlat },
  { flatId: 110, name: "Flat 104", floorId: 3, image: "/images/flat08B.png", rooms: roomTemplates.standardFlat },
  { flatId: 111, name: "Flat 104", floorId: 3, image: "/images/flat09.png", rooms: roomTemplates.standardFlat },
  { flatId: 112, name: "Flat 104", floorId: 3, image: "/images/flat10.png", rooms: roomTemplates.standardFlat },
  { flatId: 113, name: "Flat 104", floorId: 3, image: "/images/flat11.png", rooms: roomTemplates.standardFlat },
  { flatId: 114, name: "Flat 104", floorId: 3, image: "/images/flat12.png", rooms: roomTemplates.standardFlat },
  // ---------- Floor 2 ----------
  { flatId: 201, name: "Flat 401", floorId: 4, image: "/images/flat01.png", rooms: [] },
  { flatId: 202, name: "Flat 402", floorId: 4, image: "/images/flat02.png", rooms: [] },
  { flatId: 403, name: "Flat 403", floorId: 4, image: "/images/flat03.png", rooms: [] },
  { flatId: 404, name: "Flat 404", floorId: 4, image: "/images/flat04.png", rooms: [] },

  // ---------- Floor 3 ----------
  { flatId: 301, name: "Flat 301", floorId: 3, image: "/images/flat01.png", rooms: roomTemplates.standardFlatOne },
  { flatId: 302, name: "Flat 302", floorId: 3, image: "/images/flat02.png", rooms: roomTemplates.standardFlatTwo },
  { flatId: 309, name: "Flat 306A", floorId: 3, image: "/images/flat06A.png", rooms: roomTemplates.standardFlatSixA },
  { flatId: 310, name: "Flat 306B", floorId: 3, image: "/images/flat06B.png", rooms: roomTemplates.standardFlatSixB },
  { flatId: 312, name: "Flat 308B", floorId: 3, image: "/images/flat08B.png", rooms: roomTemplates.standardFlatEightB },
  { flatId: 313, name: "Flat 308A", floorId: 3, image: "/images/flat08A.png", rooms: roomTemplates.standardFlatEightA },
  { flatId: 314, name: "Flat 309", floorId: 3, image: "/images/flat09.png", rooms: roomTemplates.standardFlatNine },
  { flatId: 315, name: "Flat 310", floorId: 3, image: "/images/flat10.png", rooms: roomTemplates.standardFlatTen },
  { flatId: 303, name: "Flat 303", floorId: 3, image: "/images/flat03.png", rooms: roomTemplates.standardFlatThree },
  { flatId: 304, name: "Flat 304", floorId: 3, image: "/images/flat04.png", rooms: roomTemplates.standardFlatFour },
  { flatId: 305, name: "Flat 305", floorId: 3, image: "/images/flat05.png", rooms: roomTemplates.standardFlatFive },
  { flatId: 306, name: "Flat 307", floorId: 3, image: "/images/flat07.png", rooms: roomTemplates.standardFlatSeven },
  { flatId: 316, name: "Flat 311", floorId: 3, image: "/images/flat11.png", rooms: roomTemplates.standardFlatEleven },
  { flatId: 317, name: "Flat 312", floorId: 3, image: "/images/flat12.png", rooms: roomTemplates.standardFlatTwelve },


  // ---------- 4th Floor ----------
  { flatId: 401, name: "Flat 401", floorId: 4, image: "/images/flat01.png", rooms: roomTemplates.standardFlatOne },
  { flatId: 402, name: "Flat 402", floorId: 4, image: "/images/flat02.png", rooms: roomTemplates.standardFlat },
  { flatId: 409, name: "Flat 406A", floorId: 4, image: "/images/flat06A.png", rooms: roomTemplates.standardFlat },
  { flatId: 410, name: "Flat 406B", floorId: 4, image: "/images/flat06B.png", rooms: roomTemplates.standardFlat },
  { flatId: 412, name: "Flat 408B", floorId: 4, image: "/images/flat08B.png", rooms: roomTemplates.standardFlat },
  { flatId: 413, name: "Flat 408A", floorId: 4, image: "/images/flat08A.png", rooms: roomTemplates.standardFlat },
  { flatId: 414, name: "Flat 409", floorId: 4, image: "/images/flat09.png", rooms: roomTemplates.standardFlat },
  { flatId: 415, name: "Flat 410", floorId: 4, image: "/images/flat10.png", rooms: roomTemplates.standardFlat },
  { flatId: 403, name: "Flat 403", floorId: 4, image: "/images/flat03.png", rooms: roomTemplates.standardFlat },
  { flatId: 404, name: "Flat 404", floorId: 4, image: "/images/flat04.png", rooms: roomTemplates.standardFlat },
  { flatId: 405, name: "Flat 405", floorId: 4, image: "/images/flat05.png", rooms: roomTemplates.standardFlat },
  { flatId: 406, name: "Flat 407", floorId: 4, image: "/images/flat07.png", rooms: roomTemplates.standardFlat },
  { flatId: 416, name: "Flat 411", floorId: 4, image: "/images/flat11.png", rooms: roomTemplates.standardFlat },
  { flatId: 417, name: "Flat 412", floorId: 4, image: "/images/flat12.png", rooms: roomTemplates.standardFlat },

  // ---------- 5th Floor ----------
  { flatId: 501, name: "Flat 501", floorId: 5, image: "/images/flat01.png", rooms: roomTemplates.standardFlatOne },
  { flatId: 502, name: "Flat 502", floorId: 5, image: "/images/flat02.png", rooms: roomTemplates.standardFlat },
  { flatId: 509, name: "Flat 506A", floorId: 5, image: "/images/flat06A.png", rooms: roomTemplates.standardFlat },
  { flatId: 510, name: "Flat 506B", floorId: 5, image: "/images/flat06B.png", rooms: roomTemplates.standardFlat },
  { flatId: 512, name: "Flat 508B", floorId: 5, image: "/images/flat08B.png", rooms: roomTemplates.standardFlat },
  { flatId: 513, name: "Flat 508A", floorId: 5, image: "/images/flat08A.png", rooms: roomTemplates.standardFlat },
  { flatId: 514, name: "Flat 509", floorId: 5, image: "/images/flat09.png", rooms: roomTemplates.standardFlat },
  { flatId: 515, name: "Flat 510", floorId: 5, image: "/images/flat10.png", rooms: roomTemplates.standardFlat },
  { flatId: 503, name: "Flat 503", floorId: 5, image: "/images/flat03.png", rooms: roomTemplates.standardFlat },
  { flatId: 504, name: "Flat 504", floorId: 5, image: "/images/flat04.png", rooms: roomTemplates.standardFlat },
  { flatId: 505, name: "Flat 505", floorId: 5, image: "/images/flat05.png", rooms: roomTemplates.standardFlat },
  { flatId: 506, name: "Flat 507", floorId: 5, image: "/images/flat07.png", rooms: roomTemplates.standardFlat },
  { flatId: 516, name: "Flat 511", floorId: 5, image: "/images/flat11.png", rooms: roomTemplates.standardFlat },
  { flatId: 517, name: "Flat 512", floorId: 5, image: "/images/flat12.png", rooms: roomTemplates.standardFlat },

  // ---------- 6th Floor ----------
  { flatId: 601, name: "Flat 601", floorId: 6, image: "/images/flat01.png", rooms: roomTemplates.standardFlatOne },
  { flatId: 602, name: "Flat 602", floorId: 6, image: "/images/flat02.png", rooms: roomTemplates.standardFlat },
  { flatId: 609, name: "Flat 606A", floorId: 6, image: "/images/flat06A.png", rooms: roomTemplates.standardFlat },
  { flatId: 610, name: "Flat 606B", floorId: 6, image: "/images/flat06B.png", rooms: roomTemplates.standardFlat },
  { flatId: 612, name: "Flat 608B", floorId: 6, image: "/images/flat08B.png", rooms: roomTemplates.standardFlat },
  { flatId: 613, name: "Flat 608A", floorId: 6, image: "/images/flat08A.png", rooms: roomTemplates.standardFlat },
  { flatId: 614, name: "Flat 609", floorId: 6, image: "/images/flat09.png", rooms: roomTemplates.standardFlat },
  { flatId: 615, name: "Flat 610", floorId: 6, image: "/images/flat10.png", rooms: roomTemplates.standardFlat },
  { flatId: 603, name: "Flat 603", floorId: 6, image: "/images/flat03.png", rooms: roomTemplates.standardFlat },
  { flatId: 604, name: "Flat 604", floorId: 6, image: "/images/flat04.png", rooms: roomTemplates.standardFlat },
  { flatId: 605, name: "Flat 605", floorId: 6, image: "/images/flat05.png", rooms: roomTemplates.standardFlat },
  { flatId: 606, name: "Flat 607", floorId: 6, image: "/images/flat07.png", rooms: roomTemplates.standardFlat },
  { flatId: 616, name: "Flat 611", floorId: 6, image: "/images/flat11.png", rooms: roomTemplates.standardFlat },
  { flatId: 617, name: "Flat 612", floorId: 6, image: "/images/flat12.png", rooms: roomTemplates.standardFlat },

  // ---------- 7th Floor ----------
  { flatId: 701, name: "Flat 701", floorId: 7, image: "/images/flat01.png", rooms: roomTemplates.standardFlatOne },
  { flatId: 702, name: "Flat 702", floorId: 7, image: "/images/flat02.png", rooms: roomTemplates.standardFlat },
  { flatId: 709, name: "Flat 706A", floorId: 7, image: "/images/flat06A.png", rooms: roomTemplates.standardFlat },
  { flatId: 710, name: "Flat 706B", floorId: 7, image: "/images/flat06B.png", rooms: roomTemplates.standardFlat },
  { flatId: 712, name: "Flat 708B", floorId: 7, image: "/images/flat08B.png", rooms: roomTemplates.standardFlat },
  { flatId: 713, name: "Flat 708A", floorId: 7, image: "/images/flat08A.png", rooms: roomTemplates.standardFlat },
  { flatId: 714, name: "Flat 709", floorId: 7, image: "/images/flat09.png", rooms: roomTemplates.standardFlat },
  { flatId: 715, name: "Flat 710", floorId: 7, image: "/images/flat10.png", rooms: roomTemplates.standardFlat },
  { flatId: 703, name: "Flat 703", floorId: 7, image: "/images/flat03.png", rooms: roomTemplates.standardFlat },
  { flatId: 704, name: "Flat 704", floorId: 7, image: "/images/flat04.png", rooms: roomTemplates.standardFlat },
  { flatId: 705, name: "Flat 705", floorId: 7, image: "/images/flat05.png", rooms: roomTemplates.standardFlat },
  { flatId: 706, name: "Flat 707", floorId: 7, image: "/images/flat07.png", rooms: roomTemplates.standardFlat },
  { flatId: 716, name: "Flat 711", floorId: 7, image: "/images/flat11.png", rooms: roomTemplates.standardFlat },
  { flatId: 717, name: "Flat 712", floorId: 7, image: "/images/flat12.png", rooms: roomTemplates.standardFlat },

  // ---------- 8th Floor ----------
  { flatId: 801, name: "Flat 801", floorId: 8, image: "/images/flat01.png", rooms: roomTemplates.standardFlatOne },
  { flatId: 802, name: "Flat 802", floorId: 8, image: "/images/flat02.png", rooms: roomTemplates.standardFlat },
  { flatId: 809, name: "Flat 806A", floorId: 8, image: "/images/flat06A.png", rooms: roomTemplates.standardFlat },
  { flatId: 810, name: "Flat 806B", floorId: 8, image: "/images/flat06B.png", rooms: roomTemplates.standardFlat },
  { flatId: 812, name: "Flat 808B", floorId: 8, image: "/images/flat08B.png", rooms: roomTemplates.standardFlat },
  { flatId: 813, name: "Flat 808A", floorId: 8, image: "/images/flat08A.png", rooms: roomTemplates.standardFlat },
  { flatId: 814, name: "Flat 809", floorId: 8, image: "/images/flat09.png", rooms: roomTemplates.standardFlat },
  { flatId: 815, name: "Flat 810", floorId: 8, image: "/images/flat10.png", rooms: roomTemplates.standardFlat },
  { flatId: 803, name: "Flat 803", floorId: 8, image: "/images/flat03.png", rooms: roomTemplates.standardFlat },
  { flatId: 804, name: "Flat 804", floorId: 8, image: "/images/flat04.png", rooms: roomTemplates.standardFlat },
  { flatId: 805, name: "Flat 805", floorId: 8, image: "/images/flat05.png", rooms: roomTemplates.standardFlat },
  { flatId: 806, name: "Flat 807", floorId: 8, image: "/images/flat07.png", rooms: roomTemplates.standardFlat },
  { flatId: 816, name: "Flat 811", floorId: 8, image: "/images/flat11.png", rooms: roomTemplates.standardFlat },
  { flatId: 817, name: "Flat 812", floorId: 8, image: "/images/flat12.png", rooms: roomTemplates.standardFlat },

  // ---------- 9th Floor ----------
  { flatId: 901, name: "Flat 901", floorId: 9, image: "/images/flat01.png", rooms: roomTemplates.standardFlatOne },
  { flatId: 902, name: "Flat 902", floorId: 9, image: "/images/flat02.png", rooms: roomTemplates.standardFlat },
  { flatId: 909, name: "Flat 906A", floorId: 9, image: "/images/flat06A.png", rooms: roomTemplates.standardFlat },
  { flatId: 910, name: "Flat 906B", floorId: 9, image: "/images/flat06B.png", rooms: roomTemplates.standardFlat },
  { flatId: 912, name: "Flat 908B", floorId: 9, image: "/images/flat08B.png", rooms: roomTemplates.standardFlat },
  { flatId: 913, name: "Flat 908A", floorId: 9, image: "/images/flat08A.png", rooms: roomTemplates.standardFlat },
  { flatId: 914, name: "Flat 909", floorId: 9, image: "/images/flat09.png", rooms: roomTemplates.standardFlat },
  { flatId: 915, name: "Flat 910", floorId: 9, image: "/images/flat10.png", rooms: roomTemplates.standardFlat },
  { flatId: 903, name: "Flat 903", floorId: 9, image: "/images/flat03.png", rooms: roomTemplates.standardFlat },
  { flatId: 904, name: "Flat 904", floorId: 9, image: "/images/flat04.png", rooms: roomTemplates.standardFlat },
  { flatId: 905, name: "Flat 905", floorId: 9, image: "/images/flat05.png", rooms: roomTemplates.standardFlat },
  { flatId: 906, name: "Flat 907", floorId: 9, image: "/images/flat07.png", rooms: roomTemplates.standardFlat },
  { flatId: 916, name: "Flat 911", floorId: 9, image: "/images/flat11.png", rooms: roomTemplates.standardFlat },
  { flatId: 917, name: "Flat 912", floorId: 9, image: "/images/flat12.png", rooms: roomTemplates.standardFlat },



];
