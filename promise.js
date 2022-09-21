const { promiseTheaterIXX, promiseTheaterVGC} = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (keyword) => {
  

  let jumlahMarah = 0;
  let jumlahTidakMarah = 0;
  const filmTheaterIXX = await promiseTheaterIXX();
  const filmTheaterVGC = await promiseTheaterVGC();
 
  filmTheaterIXX.forEach(element => {
    if (element.hasil == 'marah'){
      jumlahMarah += 1;
    }
    else if (element.hasil == 'tidak marah'){
      jumlahTidakMarah += 1;
    } 
  });

  filmTheaterVGC.forEach(element => {
    if (element.hasil == 'marah'){
      jumlahMarah += 1;
    }
    else if (element.hasil == 'tidak marah'){
      jumlahTidakMarah += 1;
    } 
  });

  // console.log(`${jumlahMarah}, ${jumlahTidakMarah}`)

  if (keyword == 'marah') {
    return jumlahMarah;
  } else if (keyword == 'tidak marah') {
    return jumlahTidakMarah;
  } else {
    return null;
  }

 
};


module.exports = {
  promiseOutput,
}
