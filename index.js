const topographicMap = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

function mergeSort(data) {
    const list = [...data]
    if(list.length > 1) {
        const chunkList = list.splice(0, Math.floor(list.length / 2))
        const startList = mergeSort(chunkList)
        const endList = mergeSort(list)
        const result = []
        while (startList.length > 0 && endList.length > 0) {
            const a = startList[0]
            const b = endList[0]
            if(a >= b){
                result.push(a)
                startList.shift()
            }else {
                result.push(b)
                endList.shift()
            }
        }
        return [...result, ...startList, ...endList]
    }else {
        return list
    }
}

console.log(mergeSort(topographicMap))

console.log(topographicMap)