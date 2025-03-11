import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"

class EntriesService {
  async deleteEntry(entryId, userId) {
    const entryToDelete = await dbContext.Entries.findById(entryId)

    if (entryToDelete == null) throw new Error(`Invalid entry id: ${entryId}`)
    if (entryToDelete.creatorId != userId) throw new Forbidden("YOU CANT DELETE THAT ENTRY ITS NOT YOURS, HONEY PIE")

    await entryToDelete.deleteOne()
    return 'Entry has been deleted!'
  }
  async editEntry(entryId, userId, updataData) {
    const originalEntry = await dbContext.Entries.findById(entryId)

    if (!originalEntry) throw new Error(`Invalid entry id: ${entryId}`)
    if (userId != originalEntry.creatorId) throw new Forbidden("YOU CANT EDIT THAT ENTRY, DONT BELOONG TO YOU")
    if (updataData.description) originalEntry.description = updataData.description
    if (updataData.img) originalEntry.img = updataData.img || ''
    if (updataData.notebookId) originalEntry.notebookId = updataData.notebookId

    await originalEntry.save()
    return originalEntry
  }
  async getNotebookEntries(notebookId) {
    const entries = await dbContext.Entries.find({ notebookId: notebookId })
    return entries
  }
  async getMyEntries(userId) {
    const entries = await dbContext.Entries.find({ creatorId: userId }).populate('notebook')
    return entries
  }

  async createEntry(entryData) {
    const entry = await dbContext.Entries.create(entryData)
    await entry.populate('notebook')
    return entry
  }

}

export const entriesService = new EntriesService()