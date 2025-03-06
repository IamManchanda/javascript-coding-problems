import LRUCache from './LRUCache.js';

const cache = new LRUCache(3);
cache.put(1, 10);
cache.put(2, 20);
cache.get(1);
cache.put(3, 30);
cache.get(1);
cache.get(1);
cache.get(2);
cache.put(4, 40);
cache.put(4, 50);
cache.put(5, 60);
cache.put(6, 70);

console.log(cache.debug());
