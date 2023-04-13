const { validationResult } = require('express-validator')
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const Perjadin = require('../models/perjadin');
// const Perjadin = require('../models/Perjadin');

exports.delete = async (req, res, next) => {
    const id = req.params.id || 0;
    if (id == 0) {
        return res.status(400).json({
            message: "invalid value id",
            data: null
        })
        next()
    }

    const data = {
        _id: id
    }

    try {
        const perjadin = await Perjadin.findOne(data);
        await perjadin.remove();
        return res.status(200).json({
            message: "Data dengan id= " + id + " berhasil di hapus",
            data: true
        });
    } catch {
        return res.status(404).json({
            message: "data Perjadin not found",
            eror: "not found"
        });
    }
}
exports.update = async (req, res, next) => {
    const errors = validationResult(req);

    const data = {
        _id: req.body._id
    }

    // cek error validasi
    if (!errors.isEmpty()) {
        const err = new Error("invalid value")
        err.errorStatus = 400;
        err.data = errors.array();
        return res.status(err.errorStatus).json({
            message: "Invalid Value!",
            data: err
        })
    }

    await Perjadin.findOne(data)
        .then(result => {
            // console.log("id: ", id)
            // console.log("result: ", result)

            if (result) {
                const Perjadin = Object.assign(result, req.body);
                Perjadin.save().then(result => {
                    res.status(200).json({
                        message: "Update Data Success",
                        data: result
                    });
                }).catch(err => {
                    console.log("err: ", err);
                    res.status(400).json({
                        message: "invalid value",
                        eror: err
                    });
                });

            } else {
                return res.status(400).json({
                    message: "data not found",
                    data: null,
                })
            }
        })
        .catch(err => {
            return res.status(404).json({
                message: "data with id = '" + err.value + "' not found",
                eror: err
            });
            next();
        })


}
exports.insert = async (req, res, next) => {
    // inisiasi error validasi
    const errors = validationResult(req);

    // cek error validasi
    if (!errors.isEmpty()) {
        const err = new Error("invalid value")
        err.errorStatus = 400;
        err.data = errors.array();
        return res.status(err.errorStatus).json({
            message: "Invalid Value!",
            data: err
        })
        next()
    }

    // definisi input
    const perihal = req.body.perihal;
    const lokasi = req.body.lokasi;
    const alamat = req.body.alamat;
    const tanggal_berangkat = req.body.tanggal_berangkat;
    const tanggal_kembali = req.body.tanggal_kembali;
    const tahun = req.body.tahun;
    const jenis_perjadin = req.body.jenis_perjadin;
    // const author = req.body.golongan;

    const image = "user.jpg"

    const insertPerjadin = new Perjadin({
        perihal: perihal,
        lokasi: lokasi,
        alamat: alamat,
        tanggal_berangkat: tanggal_berangkat,
        tanggal_kembali: tanggal_kembali,
        tahun: tahun,
        jenis_perjadin: jenis_perjadin,
        image: image,
        author: {
            id: 1,
            level: "admin"
        },
    });

    insertPerjadin.save()
        .then(result => {
            res.status(201).json({
                message: "Input Perjalanan Dinas Success",
                data: result
            });
        }).catch(err => {
            console.log("err: ", err);
            res.status(400).json({
                message: "invalid value",
                eror: err
            });
        });
}

const getsort = (sort, sortvalue) => {
    if (sort == "perihal") {
        return { perihal: sortvalue }
    } else if (sort == "lokasi") {
        return { lokasi: sortvalue }
    } else if (sort == "berangkat") {
        return { berangkat: sortvalue }
    } else if (sort == "lama perjalanan") {
        return { lama_perjalanan: sortvalue }
    } else if (sort == "jenis perjalanan") {
        return { jenis_perjalanan: sortvalue }
    } else if (sort == "jenis perjalanan") {
        return { jenis_erjalanan: sortvalue }
    } else if (sort == "tahun") {
        return { tahun: sortvalue }
    }
}


exports.getAll = (req, res, next) => {
    const search = req.query.search || '';
    const sort = req.query.sort || 'createdAt';
    const sortval = req.query.sortval || 'desc';
    const srt = getsort(sort, sortval)
    const currentPage = req.query.page || 1;
    const perPage = req.query.perPage || 5;
    let totalItem;
    const currentPageInt = parseInt(currentPage);
    const perPageInt = parseInt(perPage);

    Perjadin.find().countDocuments()
        .then(count => {
            totalItem = count;
            return Perjadin.find().skip((currentPageInt - 1) * perPageInt).limit(perPageInt)
        })
        .then(result => {
            if (totalItem == 0) {
                res.status(400).json({
                    message: "data masih kosong",
                    data: result,
                })
            } else {
                res.status(200).json({
                    message: "Data berhasil ditampilkan",
                    data: result,
                    total_data: totalItem,
                    current_page: currentPageInt,
                    per_page: perPageInt
                })
            }
        })
        .catch(err => {
            return res.status(400).json({
                message: "invalid value",
                eror: err
            });
            next();
        })
}

exports.getById = async (req, res, next) => {
    const id = req.params.id || 0;
    if (id == 0) {
        return res.status(400).json({
            message: "invalid value id",
            data: null
        })
        next()
    }

    const data = {
        _id: id
    }

    await Perjadin.findOne(data)
        .then(result => {
            // console.log("id: ", id)
            // console.log("result: ", result)
            if (result) {
                return res.status(200).json({
                    message: "Data berhasil ditampilkan",
                    data: result,
                })
            } else {
                return res.status(400).json({
                    message: "data not found",
                    data: null,
                })
            }
        })
        .catch(err => {
            return res.status(404).json({
                message: "data with id = '" + err.value + "' not found",
                eror: err
            });
            next();
        })

}