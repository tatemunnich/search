import Fuse from "fuse.js";

const createFuse = (data) => {
    const options = {
        keys: ['name'],
        ignoreLocation: true,
        threshold: 0.3
    };

    return (
        new Fuse(data, options)
    )
}

export default createFuse
