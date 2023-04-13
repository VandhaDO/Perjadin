const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Perjadin = new Schema({
    nomor_sppd: {
        type: String,
        require: false
    },
    perihal: {
        type: String,
        require: true
    },
    lokasi: {
        type: String,
        require: true
    },
    alamat: {
        type: String,
        require: true
    },
    lama_perjalanan: {
        type: String,
        require: false
    },
    tanggal_berangkat: {
        type: Date,
        require: true
    },
    tanggal_kembali: {
        type: Date,
        require: true
    },
    image: {
        type: String,
        require: false
    },
    tahun: {
        type: String,
        require: true
    },
    jenis_perjadin: {
        type: String,
        require: true
    },
    author: {
        type: Object,
        require: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Perjadin', Perjadin)