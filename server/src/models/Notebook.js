import { Schema } from "mongoose";

export const NotebookSchema = new Schema({
  title: { type: String, minLength: 3, maxLength: 25, required: true },
  icon: { type: String, maxLength: 100, required: true },
  color: { type: String, required: true },
  coverImg: { type: String, maxLength: 1000, required: true },
  creatorId: { type: Schema.ObjectId, required: true }
},
  {
    timestamps: true,
    toJSON: { virtuals: true }
  })

NotebookSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

NotebookSchema.virtual('entryCount', {
  localField: '_id',
  ref: 'Entry',
  foreignField: 'notebookId',
  count: true
})