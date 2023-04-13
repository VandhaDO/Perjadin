const express = require('express')

const { body } = require('express-validator')
const router = express.Router();

const perjadinController = require('../controllers/perjadin');

// [POST] : /v1/perjadin/insert
router.post('/insert', [
    body('perihal').notEmpty().withMessage("Perihal tidak boleh kosong"),
    body('lokasi').notEmpty().withMessage("Lokasi Email Tidak Sesuai"),
    body('alamat').notEmpty().withMessage("Alamat tidak boleh kosong"),
    body('tanggal_berangkat').notEmpty().withMessage("Tanggal Berangkat tidak boleh kosong"),
    body('tanggal_kembali').notEmpty().withMessage("Tanggal Pulang tidak boleh kosong"),
    body('tahun').notEmpty().withMessage("Tahun tidak boleh kosong"),
    body('jenis_perjadin').notEmpty().withMessage("Jenis Perjalanan Dinas tidak boleh kosong")],
    perjadinController.insert);


// [PATCH] : /v1/perjadin/edit
router.patch('/update', [
    body('_id').notEmpty().withMessage("Id tidak boleh kosong"),
    body('perihal').notEmpty().withMessage("Perihal tidak boleh kosong"),
    body('lokasi').notEmpty().withMessage("Lokasi Email Tidak Sesuai"),
    body('alamat').notEmpty().withMessage("Alamat tidak boleh kosong"),
    body('tanggal_berangkat').notEmpty().withMessage("Tanggal Berangkat tidak boleh kosong"),
    body('tanggal_kembali').notEmpty().withMessage("Tanggal Pulang tidak boleh kosong"),
    body('tahun').notEmpty().withMessage("Tahun tidak boleh kosong"),
    body('jenis_perjadin').notEmpty().withMessage("Jenis Perjalanan Dinas tidak boleh kosong")],
    perjadinController.update);

// [GET]: /v1/perjadin/ID
router.get('/:id', perjadinController.getById)

// [DELETE]: /v1/perjadin/ID
router.delete('/:id', perjadinController.delete)

// [GET]: /v1/perjadin
router.get('/', perjadinController.getAll)


module.exports = router;