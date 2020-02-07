// Code your solution here
function findMatching (array, string) {
    return array.filter ( driver => {
        return driver.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch (array, string) {
    return array.filter ( driver => {
        return driver.substring(0, 1) === string.substring(0, 1)
    })
}

function matchName (array, string) {
    return array.filter ( driver => {
        return driver.name === string
    })
}