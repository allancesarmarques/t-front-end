let host = process.env.REACT_APP_T_BACK_END_HOST
if (!host) {
    host = "localhost"
}

let port = process.env.REACT_APP_T_BACK_END_PORT
if (!port) {
    port = "8081"
}

function Constants() {
    return {
        host: host,
        port: port
    }
}

export default Constants
export { host, port }
