const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async() => {
  promiseTheaterIXX = await promiseTheaterIXX();
  promiseTheaterVGC = await promiseTheaterVGC();

};

module.exports = {
  promiseOutput,
}