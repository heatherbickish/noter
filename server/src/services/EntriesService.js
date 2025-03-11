import { dbContext } from "../db/DbContext.js"

class EntriesService {
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