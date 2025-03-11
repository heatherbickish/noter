import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { NotebookSchema } from "../models/Notebook.js";
import { EntrySchema } from "../models/Entry.js";

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  NoteBooks = mongoose.model('Notebook', NotebookSchema);
  Entries = mongoose.model('Entry', EntrySchema);
}

export const dbContext = new DbContext()
