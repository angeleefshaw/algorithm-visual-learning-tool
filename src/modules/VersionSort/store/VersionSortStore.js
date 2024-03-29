import { defineStore } from 'pinia'

export const useVersionSort = defineStore('VersionSort', {
    state: () => ({ 
        versions:[
            {
              id: '1.32.3'
            },
            {
              id: '1.2.11'
            },
            {
              id: '3.2.1'
            },
            {
              id: '1.9.11'
            },
            {
              id: '2.32.0'
            },
            {
              id: '1.2.2'
            },
            {
              id: '2.9.11'
            },
            {
              id: '3.0.1'
            }
          ]
     }),
    getters: {
        getVersions() {
            return this.versions
        }
    },
    actions: {
        setVersions (array) {
            this.$patch(() => {
                for(let i in array) {
                    this.versions[i].id = array[i]
                }
            })
        },
        shuffleVersions () {
            this.$patch(() => {
                this.versions.sort((a, b) => 0.5 - Math.random());
            })
        }
    },
  })