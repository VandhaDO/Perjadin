import mongoose from "mongoose";

const Dbcon = () => {
    return (
        mongoose.connect('mongodb://127.0.0.1:27017/portojoe')
    )
}

export default Dbcon

