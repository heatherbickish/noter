export class Entry {
  constructor(data) {
    this.id = data.id
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.description = data.description
    this.img = data.img
    this.creatorId = data.creatorId
    this.notebookId = data.notebookId
  }
}