import { model, Schema } from "mongoose";


const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date}
});



const userModel = model("User", userSchema);

export { userModel };