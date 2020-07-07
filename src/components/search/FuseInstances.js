import Fuse from "fuse.js";
import {Platform} from "../../reducers";


const options = {
    keys: ['name'],
    ignoreLocation: true,
    threshold: 0.3
};

const android_data = require('../../app_data/android_data.json')
const android_fuse = new Fuse(android_data, options)
const _android_fuse = android_fuse;

const ios_data = require('../../app_data/apple_data.json')
const ios_fuse = new Fuse(ios_data, options)
const _ios_fuse = ios_fuse;


const appSearch = (query, platform) => {
    let fuse;
    switch (platform) {
        case Platform.ANDROID:
            fuse = _android_fuse; break
        case Platform.IOS:
            fuse = _ios_fuse; break
        default:
            fuse = _android_fuse; break
    }

    if (query.length > 0) {
        const result = fuse.search(query, {limit: 25})
        return result.map(res => res.item)
    } else {
        return []
    }
}

export {appSearch}
