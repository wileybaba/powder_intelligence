var mongoose = require('mongoose');

var ResortSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  pass: {
    type: String,
    required: false,
  trim: true,
  },
  location: {
    country: {
      type: String
    },
    state: {
      type: String
    },
    city: {
      type: String
    },
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      // required: true
    },
    coordinates: {
      type: [Number],
      // required: true
    },
    snowfall_24hr: {
      type: Number
    },
    snowfall_72hr: {
      type: Number
    }
  }
});

var Resort = mongoose.model('Resort', ResortSchema);
module.exports = Resort;

var vail = new Resort({ name: 'Vail',
                        pass: 'Epic',
                        location: {
                          country: "United States",
                          state: "Colorado",
                          city: "Vail"} });

vail.save(function (err, vail) {
  if (err) return console.error(err);
});
