import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    booking_id: { type: String, required: true, unique: true },
    booking_date: { type: Date, default: Date.now },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
    payment_reference: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

export default mongoose.model('Booking', bookingSchema);
