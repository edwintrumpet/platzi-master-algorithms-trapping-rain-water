const topographicMap = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
const topographicMap2 = [3, 0, 0, 2, 0, 4]
const topographicMap3 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2]

console.log(trappedWater(topographicMap))

function trappedWater(elevationData) {
    if(elevationData.length < 3){
        return 0
    }
    const sortedData = mergeSort(elevationData)
    const higherHeight = sortedData.shift()
    const nextHeight = sortedData.shift()
    let firstWall, lastWall
    let water = 0

    for(let i=0; i<elevationData.length; i++) {
        const elevation = elevationData[i]
        if(elevation === higherHeight || elevation === nextHeight) {
            firstWall = i
            break
        }
    }

    for(let i=elevationData.length-1; i>=0; i--) {
        const elevation = elevationData[i]
        if(elevation === higherHeight || elevation === nextHeight) {
            lastWall = i
            break
        }
    }

    for(let i=firstWall+1; i<lastWall; i++) {
        const dammedWater = nextHeight - elevationData[i]
        if(dammedWater > 0) {
            water += dammedWater
        }
    }

    elevationData.splice(firstWall, (lastWall - firstWall))

    return water + trappedWater(elevationData)
}

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
