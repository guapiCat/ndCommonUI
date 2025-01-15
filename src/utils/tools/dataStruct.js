import { joinArrayToString } from './arrayUtils';

/**
 * 栈结构（先进后出）
 */
class Stack {
    /**
     * 无参构造
     */
    constructor() {
        this.items = [];
    }

    /**
     * 入栈
     * @param item
     */
    push(item) {
        this.items.push(item);
    }

    /**
     * 弹出栈顶元素，并且栈元素-1
     * @returns {*}
     */
    pop() {
        return this.items.pop();
    }

    /**
     * 取出栈顶元素，元素数量不变
     * @returns {*}
     */
    peek() {
        return this.items[this.items.length - 1];
    }

    /**
     * 栈是否为空
     * @returns {boolean}
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * 栈容量
     * @returns {number}
     */
    size() {
        return this.items.length;
    }

    /**
     * 清空栈
     */
    clear() {
        this.items = [];
    }

    toString() {
        let result = '';
        result = joinArrayToString(this.items, '', '-')
        return result;
    }
}


/**
 * 队列 先进先出
 */
class Queue {
    constructor() {
        this.items = [];
    }

    /**
     * 入列
     * @param item
     */
    push(item) {
        return this.items.push(item);
    }

    /**
     * 弹出对列头 队列元素-1
     */
    dequeue() {
        return this.items.shift();
    }

    /**
     * 取队列头 队列元素不变
     * @returns {*}
     */
    front() {
        return this.items[0];
    }

    /**
     * 清空队列
     */
    clear() {
        this.items = [];
    }

    /**
     * 队列容量
     * @returns {number}
     */
    size() {
        return this.items.length;
    }

    /**
     * 队列是否为空
     * @returns {boolean}
     */
    isEmpty() {
        return this.items.length === 0;
    }

    toString() {
        let result = '';
        result = joinArrayToString(this.items, '', '-')
        return result;
    }
}

/**
 * 优先队列
 */
class PriorityQueue {
    constructor() {
        this.items = [];
    }

    /**
     * 是否为空
     * @returns {boolean}
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * 队列容量
     * @returns {number}
     */
    size() {
        return this.items.length;
    }

    /**
     * 入队
     * @param item 元素
     * @param priority 级别
     */
    push(item, priority) {
        let queueItem = {item, priority};
        if (this.isEmpty()) {
            this.items.push(queueItem);
        } else {
            // 获取所有比当前code码高的元素
            let preIndex = this.items.findIndex(item => queueItem.priority < item.priority);
            if (preIndex > -1) {
                this.items.splice(preIndex, 0, queueItem);
            } else {
                this.items.push(queueItem);
            }
        }
    }

    /**
     * 弹出队列头 队列元素-1
     * @returns {*}
     */
    dequeue() {
        return this.items.shift();
    }

    /**
     * 取队列头 队列元素不变
     * @returns {*}
     */
    front() {
        return this.items[0];
    }

    /**
     * 清空队列
     */
    clear() {
        this.items = [];
    }

    toString() {
        let result = '';
        result = joinArrayToString(this.items, '', '-')
        return result;
    }
}

export {
    Stack,
    Queue,
    PriorityQueue
}
