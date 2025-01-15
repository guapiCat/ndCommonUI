// 自定义简易可扩展eventbus，根据map特性，不允许有多个相同的key
class EventBus {
    constructor() {
        this.eventBusMap = new Map()
    }

    /**
     * 创建一个监听
     * @param eventBusName 名称
     * @param callback 回调
     */
    on(eventBusName, callback) {
        this.eventBusMap.set(eventBusName, callback)
    }

    /**
     * 所有eventBus
     * @returns {*}
     */
    all() {
        return this.eventBusMap
    }

    /**
     * 发送eventBus
     * @param eventBusName 名称
     * @param args 省略参数
     */
    emit(eventBusName, args) {
        const callback = this.eventBusMap.get(eventBusName)
        if (callback) {
            callback(args)
        }
    }

    /**
     * 移除一个eventBus
     * @param eventBusName 名称
     */
    off(eventBusName) {
        this.eventBusMap.delete(eventBusName)
    }
}

export {
    EventBus
}
