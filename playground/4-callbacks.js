// setTimeout(() => {
//     console.log('Two seconds are up')
// }, 2000)

// const names = ['Mann', 'Vraj', 'Shlok']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }

//         callback(data)
//     }, 2000)
// }

// geocode('Ahmedabad ', (data) => {
//     console.log(data)
// })

const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});
