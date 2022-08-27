import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://buchbuchwanko:B2cpf2015@cluster-wc-app.q8fpi.mongodb.net/mernapp?retryWrites=true&w=majority')
        console.log('MongoDB Connected');
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

export default connectDB;