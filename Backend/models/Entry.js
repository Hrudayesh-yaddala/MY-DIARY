const mongoose = require("mongoose");
const EntrySchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: [true, "Date is required"],
    },
    comment: {
      type: String,
      required: [true, "Comment is required"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = new mongoose.model("DiaryEntry", EntrySchema);
// const DiaryEntry = mongoose.model("DiaryEntry", EntrySchema);
// module.exports = { DiaryEntry };
