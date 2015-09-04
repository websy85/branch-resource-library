var mongoose = require('mongoose');
var Schema = mongoose.Schema;

console.log(Schema);

var commentSchema = new Schema({
  content: Buffer,
  pagetext: Buffer,
  createdate: {
    type: Date,
    default: Date.now
  },
  entityId: Schema.ObjectId,
  userid: {
    type: Schema.ObjectId,
    ref: 'users'
  },
  edituser: {
    type: Schema.ObjectId,
    ref: 'users'
  },
  createuser: {
    type: Schema.ObjectId,
    ref: 'user'
  },
  approved:{
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('comment', commentSchema)