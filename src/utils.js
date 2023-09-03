export function asyncTimeout(milliSecs) {
    return new Promise(res => {
        setTimeout(res, milliSecs);
    });
}