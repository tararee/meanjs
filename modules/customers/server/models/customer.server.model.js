'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
     firstname: {
    type: String,
    default: '',
    required: 'Please fill customer first name',
    trim: true
  },
  lastname: {
    type: String,
    default: '',
    required: 'Please fill customer last name',
    trim: true
  },
  lastPurchase: {
    type: Date,
    default: ''
  }
  });

mongoose.model('Customer', CustomerSchema);
