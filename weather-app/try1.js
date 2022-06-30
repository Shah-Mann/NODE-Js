const request = require("axios");
// const params = {
//   access_key: "e73595c2ca5149e73be6dc67f912a1ab",
//   query: "1600 Pennsylvania Ave NW",
// };
const geocode = (address, callback) => {
  const url = 
    "https://us1.locationiq.com/v1/search?key=pk.2bbb0bfcb3a53c0fe8af915b5af84f38&q= + encodeURIComponent( address) +&format=json&limit=1",
   
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to find");
    } else if (response.body.features.length === 0) {
      callback("Unable to find");
    } else {
      callback(undefined, {
        latitude: response.data[0].lat,
        longitude: response.data[0].lon,
        location: response.data[0].display_name,
      });
    }
  });
  // .then((response) => {
  //   console.log("The latitude is ", response.data[0].lat);
  //   console.log(" The longitude is", response.data[0].lon);
  //   console.log("The location is", response.data[0].display_name);
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
};
geocode("Ahmedabad", (error, data) => {
  console.log("Error", error);
  console.log("data", data);
});
// const geocode = (address, callback) => {
//   const url =
//     "https://us1.locationiq.com/v1/search?key=pk.2bbb0bfcb3a53c0fe8af915b5af84f38&q= + encodeURIComponent( address) +&format=json&limit=1";
//   requests({ url: url, json: true }, (error, response) => {
//     if (error) {
//       callback("Unable to find");
//     } else if (response.body.features.length === 0) {
//       callback("Unable to find");
//     } else {
//       callback(undefined, {
//         latitude: response.data[0].lat,
//         longitude: response.data[0].lon,
//         location: response.data[0].display_name,
//       });
//     }
//   });
// };
// geocode("Ahmedabad", (error, data) => {
//   console.log("Error", error);
//   console.log("data", data);
// });
