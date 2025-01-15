import {isArray} from "./commonUtils";

/**
 * 数组转化为树形结构
 * @param list 集合
 * @param id 唯一id
 * @param pid 关联id
 * @param pidValue 第一级节点id
 * @param children 递归节点
 * @returns {*[]}
 */
const convertArrayToTree = (list, id = 'id', pid = 'pid', pidValue = '0', children = 'children') => {
    const trees = []
    if (!isArray(list)) {
        return []
    }
    // 分组slice集合
    let tempParent = []
    let tempSon = []
    list.forEach(item => {
        item[pid] === pidValue ? tempParent.push(item) : tempSon.push(item);
    })
    let tempList = JSON.parse(JSON.stringify(tempParent.concat(tempSon)))
    // 缓存所有的id与值
    const idMap = new Map()
    tempList.forEach(item => {
        item[children] = !isArray(item[children]) ? [] : item[children]
        idMap.set(item[id], item)
        if (!idMap.has(item[pid])) {
            trees.push(item)
        } else {
            findChild(trees, item[pid], item, id, children)
        }
    })
    return trees
}

/**
 * 排序
 * @param list 待处理数据
 * @param sortName 排序名称
 * @param children 递归节点
 * @param desc 是否降序
 * @returns {*[]}
 */
const sort = (list, sortName = 'sort', children = 'children', desc = true) => {
    if (!isArray(list)) {
        return []
    }
    const tempList = JSON.parse(JSON.stringify(list))
    sortChildren(tempList, sortName, children, desc)
    return [...tempList]
}
const sortChildren = (list, sortName, children, desc) => {
    list.sort((item1, item2) => {
        return desc ? item1[sortName] - item2[sortName] : item2[sortName] - item1[sortName]
    })
    list.forEach(item => {
        if (isArray(item[children])) {
            sortChildren(item.children, sortName, children, desc)
        }
    })
}

/**
 * 反向查找节点路径
 * @param tree 树形结构
 * @param path 开始路径（数组形式）
 * @param callBack 回调函数，插件会传递一个当前节点数据，并且调用函数。需要写一个函数返回true false
 * @param children 递归节点
 * @returns {*[]|*}
 */
const findPath = (list, callback, children = 'children') => {
    if (!isArray(list)) {
        return []
    }
    return findPathChildren(list, [], children, callback)
}
const findPathChildren = (tree, path, children, callBack) => {
    for (let i = 0; i < tree.length; i++) {
        const tempPath = [...path];
        tempPath.push(tree[i])
        if (callBack(tree[i])) {
            return tempPath
        }
        if (isArray(tree[i][children])) {
            const result = findPathChildren(tree[i][children], tempPath, children, callBack)
            if (result) {
                return result
            }
        }
    }
}
/**
 * 根据条件搜索树形结构相关联属性,组成数组，主要用于搜索树形结构数据，或者删除某些不需要的数组元素等用处很多。
 * @param list 待处理数据
 * @param callback 回调函数，工具包主动调用，并且传递每个list中的对象，业务端需要根据item判断返回true false。
 * @param children 递归节点
 * @returns {*[]}
 */
const filterList = (list, callback, children = 'children') => {
    if (!isArray(list)) {
        return []
    }
    let localList = JSON.parse(JSON.stringify(list))
    let tempList = []
    filterChildren(localList, callback, children, tempList)
    return tempList
}
const filterChildren = (list, callback, children, tempList) => {
    list.forEach(item => {
        if (callback && callback(item)) {
            tempList.push(item)
        }
        if (isArray(item[children])) {
            filterChildren(item[children], callback, children, tempList)
        }
    })
}
/**
 * 自定义操作树形结构，用于处理树形结构每个参数
 * @param list 待处理数据
 * @param callback 回调函数，工具包主动调用，并且传递每个list中的对象，业务端自己处理逻辑。
 * @param children 递归节点。
 */
const operateTree = (list, callback, children = 'children') => {
    if (!isArray(list)) {
        return []
    }
    let localList = JSON.parse(JSON.stringify(list))
    operateListChildren(localList, callback, children)
    return localList;
}
const operateListChildren = (list, callback, children) => {
    list.forEach(item => {
        callback && callback(item)
        if (isArray(item[children])) {
            operateListChildren(item[children], callback, children)
        }
    })
}
/**
 * 递归获取树形结构满足条件的数据。
 * @param list 待处理数据
 * @param callback 回调函数，工具包主动调用，并且传递每个list中的对象，业务端需要根据item判断返回true false。
 * @param finalList 最终的list
 */
const findTree = (list, callback, finalList) => {
    list.forEach(item => {
        if (callback(item)) {
            finalList.push(item)
        }
        if (item.children && item.children.length) {
            findTree(item.children, callback, finalList)
        }
    })
}
const findChild = (list, pid, data, id, children) => {
    list.forEach(item => {
        if (item[id] === pid) {
            item[children].push(data)
        } else {
            if (isArray(item[children])) {
                findChild(item[children], pid, data, id, children)
            }
        }
    })
}
export {
    convertArrayToTree,
    findPath,
    filterList,
    operateTree,
    sort
};
