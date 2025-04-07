import Han from './han.js'

const hanInstance = Han.getInstance()

// 蘿蔔
console.log(hanInstance.toTraditional('萝卜'))

// 胡卜
console.log(hanInstance.toTraditional('胡卜'))

// 胡蔔
hanInstance.addRule('卜,蔔,-1|0|胡')
console.log(hanInstance.toTraditional('胡卜'))

const han = new Han()

// 頭髮
console.log(han.toTraditional('头发'))