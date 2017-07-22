//import 'serviceworker-cache-polyfill';

var CACHE_NAME = "app_page_pwa_study_index_v1.0",
    PRECACHE_LIST = [],
    SUCCESS_RESPONSE_REGEXP = /^0|([123]\d\d)|(40[14567])|410$/,
    strategies = function() {

        /**
         * 从缓存中取出指定请求对应的响应
         * @param {*} request 
         */
        function getDataFromCache(request) { 
            return caches.match(request).then(function(response) {
                if (response) return response;
                throw new Error("cache missed")
            })
        }

        /**
         * 发起网络请求，并缓存响应
         * @param {*} request 
         */
        function getDataFromNetwork(request) {
            return fetch(request.clone()).then(function(response) {
                if ("GET" === request.method && SUCCESS_RESPONSE_REGEXP.test(response.status))
                    setDataToCache(request, response.clone());
                return response
            })
        }

        /**
         * 将request和对应的response存储到cache中
         * @param {*} request 
         * @param {*} response 
         */
        function setDataToCache(request, response) {
            return caches.open(CACHE_NAME).then(function(cache) {
                return cache.put(request, response)
            })
        }

        /**
         * 向servicework发送通知
         */
        function sendMessageToSW(content) {
            self.clients.matchAll().then(function(clientList) {
                if (clientList && clientList.length) {
                    var client = clientList[0];
                    setTimeout(function() {
                        client.postMessage(content)
                    }, 200)
                }
            })
        }

        return {

            /**
             * 网络优先：首先查看网络，当网络失败时应用本地缓存。这一策略适合实时数据，比如获取天气信息的 AJAX 请求。这样每次页面刷新都可以获得最新的天气信息，当离线时会降级到使用本地缓存。并给出离线的提示。
             */
            networkFallbackToCache: function(request) {
                return getDataFromNetwork(request)["catch"](function() {
                    if ("navigate" === request.mode) {
                        sendMessageToSW("您的设备未连接到互联网，正在使用缓存数据");
                    }
                    return caches.match(request)
                })
            },
            /**
             * 网络获取
             */
            onlyNetwork: function(request) {
                return fetch(request.clone()).then(function(response) {
                    return response
                })
            },
            /**
             * 缓存优先：首先查看缓存，当缓存失效时再去访问网络。这一策略适用于资源文件，如字体、样式、图片等。
             */
            cacheFallbackToNetwork: function(n) {
                return getDataFromCache(n)["catch"](function() {
                    return getDataFromNetwork(n)
                })
            }
        }
    }();

// 安装阶段跳过等待，直接进入 active
self.addEventListener('install', function (e) {
    e.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function (e) {
    e.waitUntil(
        Promise.all([

            // 更新客户端
            self.clients.claim(),

            // 清理旧版本
            caches.keys().then(function (cacheList) {
                return Promise.all(
                    cacheList.map(function (cacheName) {
                        if (cacheName !== CACHE_NAME) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
        ])
    );
});

self.addEventListener("fetch", function(e) {
    var request = e.request,
        url = new URL(request.url);
        if (url.href.match(/.*\.(png|jpg|jpeg|gif|woff|tff)(\?.*)?/)){
            return e.respondWith(strategies.cacheFallbackToNetwork(request));
        } else {
            return e.respondWith(strategies.onlyNetwork(request))
        }

});

self.addEventListener('message', function(event) {
    console.log(event);
    function deleteCache() {
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                    if (key !== CACHE_NAME) {
                        console.log("[ServiceWorker] Removing old cache", key);
                        return caches.delete(key);
                    }
                }));
        });
    }
    // delete all cache
    if (event.data === 'deletecache') {
        deleteCache();
    }
    // unregister the current sw
    if (event.data === 'unregister') {
        deleteCache();
        self.registration.unregister().then(function(unregister) {
            console.log('unregister: ' + unregister);
        }).catch(function(error) {
            console.log('unregister: false' + error);
        });
    }

})
