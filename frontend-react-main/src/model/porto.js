import mongoose from "mongoose";

const Porto = () => {
    return (
        mongoose.model('Cobacol', {
            nama: {
                type: String,
                require: true
            },
            jurusan: {
                type: String,
            },
        })
    )

}

export default Porto