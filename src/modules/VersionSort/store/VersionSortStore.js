import { defineStore } from 'pinia'

export const useVersionSort = defineStore('VersionSort', {
    state: () => ({ 
        versions: []
     }),
    getters: {
        getVersions() {
            return this.versions
        }
    },
    actions: {
        setVersions (array) {
            this.versions = array
        }
    },
  })