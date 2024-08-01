import mongoose from 'mongoose';
const MONGO_URL=process.env.MONGO_URL
mongoose.connect(MONGO_URL)
// Avoid re-defining the model
const menjeansSchema = new mongoose.Schema({
  title:{type:String,required:true},
  size:{type:String,required:true},
  condition:{type:String,required:true},
  price: {type:String,required:true},
  purchased: { type: Boolean, default: false },
});

// Use a model name that is less likely to conflict
const MenJeansModel = mongoose.models.MenJeans || mongoose.model('MenJeans', menjeansSchema);

export const menjeans = MenJeansModel;
``