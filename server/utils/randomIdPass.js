export const randomTempId = (name) => {
    const baseName = name.slice(0,4).toLowerCase()
    const randomNumber = Math.floor(Math.random()*10000)
    const customTempId = `${baseName}confirm${randomNumber}`
    return customTempId
}

export const randomId = (name) => {
    const baseName = name.split(" ")[0].toLowerCase()
    const randomNumber = Math.floor(Math.random()*100)
    const customUserId = `${baseName}${randomNumber}`
    return customUserId
}

export const randomPassword = (name) => {
    const baseName = name.slice(0,4).toLowerCase()
    const randomNumber = Math.floor(Math.random()*1000000)
    const customPassword = `${baseName}${randomNumber}`
    return customPassword
}