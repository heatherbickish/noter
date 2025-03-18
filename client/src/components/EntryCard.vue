<script setup>
import { AppState } from "@/AppState.js";
import { Entry } from "@/models/Entry.js";
import { entriesService } from "@/services/EntriesService.js";
import { logger } from "@/utils/Logger.js";
import { Pop } from "@/utils/Pop.js";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";


defineProps({
  entry: { type: Entry, required: true }
})

const editableEntryData = ref({
  description: '',
  img: '',
  notebookId: ''
})

const route = useRoute()
const editMode = ref(false)
const account = computed(() => AppState.account)
const myNotebooks = computed(() => AppState.notebooks)

async function editEntry(entryId) {
  try {
    await entriesService.editEntry(editableEntryData.value, entryId)
    editableEntryData.value = {
      description: '',
      img: '',
      notebookId: ''
    }
    editMode.value = false
  } catch (error) {
    logger.error(error)
  }
}

async function deleteEntry(entryId) {
  try {
    const yes = await Pop.confirm(`Are you sure you want to delete this entry??`)
    if (!yes) return
    await entriesService.deleteEntry(entryId)
  } catch (error) {
    logger.error(error)
  }
}

</script>


<template>
  <form>
    <div class="d-flex">
      <div class="card-img p-2 mt-2 ms-2">
        <img :src="entry.img" alt="" class="entry-img border border-dark rounded">
      </div>
      <div class="card-body" style="width: 100%;">
        <div class="border bg-white rounded p-2">
          <p>{{ entry.description }}</p>
        </div>
        <div>
          <textarea v-model="editableEntryData.description" v-if="editMode" id="description" class="form-control"
            maxlength="2000"></textarea>
        </div>
        <div class="mt-2">
          <select v-model="editableEntryData.notebookId" v-if="editMode" class="form-select" role="button"
            aria-label="Select notebook">
            <option selected value="" disabled>Move to notebook</option>
            <option v-for="notebook in myNotebooks" :key="notebook.id" :value="notebook.id" class="text-capitalize"
              role="button">{{ notebook.title }}</option>
          </select>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <div class="mt-2">
            <button @click="editMode = !editMode" v-if="editMode" class="btn btn-secondary" type="button"
              title="Cancel Changes">Cancel</button>
          </div>
          <div class="mt-2">
            <button @click="editEntry(entry.id)" v-if="editMode" class="btn btn-outline-success" type="button"
              title="Save Changes">Save
              Changes</button>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex align-items-baseline justify-content-between">
      <div class="ms-3">
        <input v-model="editableEntryData.img" v-if="editMode" type="url" id="img" placeholder="Image URl..."
          class="form-control ">
      </div>
      <div class="me-2">
        <p>last updated {{ entry.updatedAt.toLocaleDateString() }}</p>
      </div>
      <div v-if="entry.creatorId == account?.id" class="dot-button me-3 btn-group">
        <button class="btn btn-lg bg-white py-0 dropdown-toggle" type="button" title="Dropdown Menu"
          data-bs-toggle="dropdown">
          <i class="mdi mdi-dots-horizontal"></i>
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><button @click="editMode = !editMode" class="dropdown-item" type="submit" title="Edit Entry">Edit</button>
          </li>
          <li><button @click="deleteEntry(entry.id)" class="dropdown-item text-danger" type="button"
              title="Delete Entry">Delete</button></li>
        </ul>
      </div>
    </div>
  </form>
</template>


<style lang="scss" scoped>
.entry-img {
  height: 300px;
  width: 250px;
  object-fit: cover;
  object-position: center;
}
</style>