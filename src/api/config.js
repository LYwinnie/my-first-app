let SERVER_PATH = `http://10.210.160.152:8010`

if(process.env.POS_EVN == 'dev'){
    console.log(process.env.POS_EVN)
    SERVER_PATH = 'http://10.210.160.152:8000'
}
export default SERVER_PATH