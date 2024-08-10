import localforage from 'localforage'

interface Iconfig {
  title: string
  localstoragePrefix: string
}

export const config: Iconfig = {
  title: 'My website',
  localstoragePrefix: 'my_website',
}

export const settingsStore = localforage.createInstance({
  name: `${config.localstoragePrefix}_settings`,
  description: `${config.title} Settings database`,
  driver: localforage.INDEXEDDB,
  storeName: `${config.localstoragePrefix}_store`,
})
