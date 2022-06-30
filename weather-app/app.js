//const request = require("request");
const requests = require("axios");

// const url =
//   "http://api.weatherstack.com/current?access_key=c778c55713a4475463a298742e4ca207&query=23.014509,72.591759";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather Service");
//   } else if (response.body.error) {
//     console.log("Unable to find Location");
//   } else {
//     console.log(
//       "It is currently " +
//         response.body.current.temperature +
//         " but it feels likes " +
//         response.body.current.feelslike
//     );
//   }
//   //console.log(response.body.current);
//   // console.log(data.current);
// });

// requests
//   .get(
//     "https://us1.locationiq.com/v1/search?key=pk.2bbb0bfcb3a53c0fe8af915b5af84f38&q=ahmedabad&format=json&limit=1",
//     {}
//   )
//   .then((response) => {
//     console.log(
//       "The latitude is " + response.data[0].lat + " & the longitude is",
//       response.data[0].lon
//     );
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const geocode = (address, callback) => {
  const url =
    "https://us1.locationiq.com/v1/search?key=pk.2bbb0bfcb3a53c0fe8af915b5af84f38&q= + encodeURIComponent( address) +&format=json&limit=1";
  requests({ url: url, json: true }, (error, response) => {
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
};
geocode("Ahmedabad", (error, data) => {
  console.log("Error", error);
  console.log("data", data);
});

// console.log("Start");

// setTimeout(() => {
//   console.log("2 sec time");
// }, 2000);

// setTimeout(() => {
//   console.log("0 sec time");
// }, 2000);

// console.log("Stop");
