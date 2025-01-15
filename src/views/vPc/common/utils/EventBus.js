// 自定义简易可扩展eventbus
export class EventBus {
  constructor () {
    this.eventBusMap = new Map()
  }

  on (eventBusName, callback) {
    this.eventBusMap.set(eventBusName, callback)
  }

  all () {
    return this.eventBusMap
  }

  emit (eventBusName) {
    const callback = this.eventBusMap.get(eventBusName)
    callback()
  }

  off (eventBusName) {
    this.eventBusMap.delete(eventBusName)
  }
}
