import Fuse from "fuse.js";


const options = {
    keys: ['name'],
    ignoreLocation: true,
    threshold: 0.3
};

const createFuse = (data) => {
    return (
        new Fuse(data, options)
    )
}

const android_fuse = createFuse([])
const _android_fuse = android_fuse;
export {_android_fuse as android_fuse}

const ios_fuse = createFuse([])
const _ios_fuse = ios_fuse;
export {_ios_fuse as ios_fuse}

export default createFuse
