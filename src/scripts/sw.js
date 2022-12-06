import 'regenerator-runtime'
import CacheHelper from './utils/chaceHelper'

const { assets } = global.serviceWorkerOption
self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']))
})

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']))
})

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request))
})
