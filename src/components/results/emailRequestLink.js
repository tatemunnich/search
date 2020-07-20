const emailRequestLink = (query, platform) => {
    return (
        // https://mailtolink.me/ (put whatever you want here)
        `
        mailto:apprequest@betteryou.ai?subject=Request%20for%20Classification%20--%20${query}%20--%20${platform}&body=Hi%2C%0D%0A%0D%0AI'd%20like%20to%20be%20getting%20credit%20for%20using%20${query}.%0D%0A%0D%0A
        `
    )
}

export default emailRequestLink
