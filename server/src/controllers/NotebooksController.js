import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { notebooksService } from "../services/NotebooksService.js";
import { entriesService } from "../services/EntriesService.js";

export class NotebooksController extends BaseController {
  constructor() {
    super('api/notebooks')
    this.router
      .get('/:notebookId/entries', this.getNotebookEntries)
      .get('/:notebookId', this.getNotebookById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createNotebook)
      .get('', this.getAllMyNotebooks)
      .put('/:notebookId', this.editNotebook)
      .delete('/:notebookId', this.deleteNotebook)

  }


  async createNotebook(request, response, next) {
    try {
      const notebookData = request.body
      notebookData.creatorId = request.userInfo.id
      const notebook = await notebooksService.createNotebook(notebookData)
      response.send(notebook)
    } catch (error) {
      next(error)
    }
  }

  async getAllMyNotebooks(request, response, next) {
    try {
      const userId = request.userInfo.id
      const notebooks = await notebooksService.getAllMyNotebooks(userId)
      response.send(notebooks)
    } catch (error) {
      next(error)
    }
  }

  async getNotebookById(request, response, next) {
    try {
      const notebookId = request.params.notebookId
      const notebook = await notebooksService.getNotebookById(notebookId)
      response.send(notebook)
    } catch (error) {
      next(error)
    }
  }

  async editNotebook(request, response, next) {
    try {
      const notebookId = request.params.notebookId
      const updateData = request.body
      const userId = request.userInfo.id
      const updatedNotebook = await notebooksService.editNotebook(notebookId, userId, updateData)
      response.send(updatedNotebook)
    } catch (error) {
      next(error)
    }
  }

  async deleteNotebook(request, response, next) {
    try {
      const notebookId = request.params.notebookId
      const userId = request.userInfo.id
      const message = await notebooksService.deleteNotebook(notebookId, userId)
      response.send(message)
    } catch (error) {
      next(error)
    }
  }

  async getNotebookEntries(request, response, next) {
    try {
      const notebookId = request.params.notebookId
      const entries = await entriesService.getNotebookEntries(notebookId)
      response.send(entries)
    } catch (error) {
      next(error)
    }
  }

}