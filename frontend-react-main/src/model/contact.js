const mongoose = require('mongoose');

const contacts = mongoose.model('Contact', {
    nama: {
        type: String,
        required: true
    },
    nohp: {
        type: String,
        required: true,
    },
    email: String
});

// menambah 1 data
// const contact1 = new contact({
//     nama: 'jokoriyadi',
//     nohp: '082212122',
//     email: 'jokoriyadi@gmail.com'
// });

// simpan data
// contact1.save().then((contact) => console.log(contact));

module.exports = contacts;
