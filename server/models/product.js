const { Schema, model } = require(`mongoose`);

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    additionalInfo: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
    },
    fabric: {
      type: String,
      required: true,
      trim: true,
    },
    color: {
      type: String,
      required: true,
      trim: true,
    },
    origin: {
      type: String,
      reqiured: true,
      trim: true,
    },
    fabricCode: {
      type: String,
      reqiured: true,
      trim: true,
    },
    season: {
      type: String,
      requiede: true,
      trim: true,
    },
    pattern: {
      type: String,
      required: true,
      trim: true,
    },
    types: {
      type: [String],
      reqiured: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const product = model("product", productSchema);

module.exports = product;
