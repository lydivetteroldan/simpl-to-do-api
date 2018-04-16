'use strict'

const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  done: {
    type: Boolean
  },
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function (doc, ret, options) {
      const userId = (options.user && options.user._id) || false
      ret.editable = userId && userId.equals(doc._owner)
      return ret
    }
  }
})

// todoSchema.virtual('length').get(function length () {
//   return this.text.length
// })

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
