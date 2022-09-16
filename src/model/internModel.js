const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId
const InternSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      unique: true,
    },
    mobile: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    collegeId: {
      type: objectId,
      ref: "College",
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: false }
);
module.exports = mongoose.model("Intern", InternSchema);
