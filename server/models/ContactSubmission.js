import mongoose from 'mongoose';

const contactSubmissionSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 120
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    maxlength: 40
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    maxlength: 254,
    default: ''
  },
  program: {
    type: String,
    required: true,
    enum: ['dmit', 'child', 'elite', 'business', 'manas-360', 'team', 'general']
  },
  message: {
    type: String,
    trim: true,
    maxlength: 3000,
    default: ''
  },
  companyName: {
    type: String,
    trim: true,
    maxlength: 160,
    default: ''
  },
  teamSize: {
    type: Number,
    min: 1,
    default: null
  },
  consent: {
    type: Boolean,
    required: true,
    validate: {
      validator: value => value === true,
      message: 'Consent is required'
    }
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const ContactSubmission = mongoose.model('ContactSubmission', contactSubmissionSchema);

export default ContactSubmission;
