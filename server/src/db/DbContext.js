import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { NotebookSchema } from "../models/Notebook.js";

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  NoteBooks = mongoose.model('Notebook', NotebookSchema);
}

export const dbContext = new DbContext()
