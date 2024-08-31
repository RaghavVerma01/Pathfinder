import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
    destination_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    description: { type: String },
    latitude: { type: Number },
    longitude: { type: Number },
    image_url: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

export default mongoose.model('Destination', destinationSchema);
