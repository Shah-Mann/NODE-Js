const request = require("axios");
// const params = {
//   access_key: "e73595c2ca5149e73be6dc67f912a1ab",
//   query: "1600 Pennsylvania Ave NW",
// };

request
  .get(
    "https://us1.locationiq.com/v1/search?key=pk.2bbb0bfcb3a53c0fe8af915b5af84f38&q=ahmedabad&format=json&limit=1",
    {}
  )
  .then((response) => {
    console.log("The latitude is ", response.data[0].lat);
    console.log(" The longitude is", response.data[0].lon);
    console.log("The location is", response.data[0].display_name);
  })
  .catch((error) => {
    console.log(error);
  });
