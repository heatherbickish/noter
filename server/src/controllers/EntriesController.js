import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { entriesService } from "../services/EntriesService.js";

export class EntriesController extends BaseController {
  constructor() {
    super('api/entries')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createEntry)
      .get('', this.getMyEntries)
      .put('/:entryId', this.editEntry)
      .delete('/:entryId', this.deleteEntry)
  }

  async createEntry(request, response, next) {
    try {
      const entryData = request.body
      entryData.creatorId = request.userInfo.id
      // const userId = request.userInfo.id
      const entry = await entriesService.createEntry(entryData)
      response.send(entry)
    } catch (error) {
      next(error)
    }
  }

  async getMyEntries(request, response, next) {
    try {
      const userId = request.userInfo.id
      const entries = await entriesService.getMyEntries(userId)
      response.send(entries)
    } catch (error) {
      next(error)
    }
  }

  async editEntry(request, response, next) {
    try {
      const entryId = request.params.entryId
      const userId = request.userInfo.id
      const updataData = request.body
      const updatedEntry = await entriesService.editEntry(entryId, userId, updataData)
      response.send(updatedEntry)
    } catch (error) {
      next(error)
    }
  }

  async deleteEntry(request, response, next) {
    try {
      const entryId = request.params.entryId
      const userId = request.userInfo.id
      const message = await entriesService.deleteEntry(entryId, userId)
      response.send(message)
    } catch (error) {
      next(error)
    }
  }

}