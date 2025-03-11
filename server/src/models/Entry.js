import { Schema } from "mongoose";

export const EntrySchema = new Schema({
  description: { type: String, maxLength: 2000, required: true },
  creatorId: { type: Schema.ObjectId, required: true },
  img: { type: String, maxLength: 500 },
  notebookId: { type: Schema.ObjectId }
},
  {
    timestamps: true,
    toJSON: { virtuals: true }
  })

EntrySchema.virtual('notebook', {
  localField: 'notebookId',
  ref: 'Notebook',
  foreignField: '_id',
  justOne: true
})