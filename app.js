const assert = require('assert');

// const actual = {
//     name: "rhafael bijaksana",
//     hobi: "playing music"
// }

// const expect = {
//     name: "rhafael bijaksana",
//     hobi: "playing musics"
// }

// const message = "The actual data not same"

// assert.deepEqual(actual, expect, message);

const tepat = false;
const janjiManis = new Promise((resolve, reject) => {
    let message = tepat ? "tepat" : "tidak tepat";

    // Jeda dulu
    setTimeout(() => {
        if (tepat) resolve(message);
        else reject(message)
    }, 1000);

});

// // Promises Handler
// janjiManis
//     .then(result => console.log(result))
//     .catch(error => console.log(error))

assert.doesNotReject(janjiManis, "gagal promises nya nolak")