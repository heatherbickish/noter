export class Notebook {
  constructor(data) {
    this.id = data.id
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.title = data.title
    this.icon = data.icon
    this.coverImg = data.coverImg
    this.creatorId = data.creatorId
    this.creator = data.creator
    this.entryCount = data.entryCount
  }
}