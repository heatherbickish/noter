import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"

class NotebooksService {
  async editNotebook(notebookId, userId, updateData) {
    const originalNotebook = await dbContext.NoteBooks.findById(notebookId)

    if (!originalNotebook) { throw new Error(`Invalid notebook id: ${notebookId}`) }
    if (userId != originalNotebook.creatorId) { throw new Forbidden("YOU CANT EDIT THIS NOTEBOOK IT DOESNT BELONG TO YOU, BRAH") }
    if (updateData.title) originalNotebook.title = updateData.title
    if (updateData.icon) originalNotebook.icon = updateData.icon
    if (updateData.color) originalNotebook.color = updateData.color
    if (updateData.coverImg) originalNotebook.coverImg = updateData.coverImg

    await originalNotebook.save()
    return originalNotebook
  }
  async getNotebookById(notebookId) {
    const notebook = await dbContext.NoteBooks.findById(notebookId).populate('creator', 'name picture')
    return notebook
  }
  async getAllMyNotebooks(userId) {
    const notebooks = await dbContext.NoteBooks.find({ creatorId: userId })
    return notebooks
  }
  async createNotebook(notebookData) {
    const notebook = await dbContext.NoteBooks.create(notebookData)
    await notebook.populate('creator', 'name picture')
    return notebook
  }

}

export const notebooksService = new NotebooksService()