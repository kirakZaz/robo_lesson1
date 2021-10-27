const express = require('express');
const dotenv = require('dotenv');
const log4js = require('log4js');
const data = require('../data.json');
dotenv.config();
const app = express();
const logger = log4js.getLogger();
logger.level = process.env.LOG_LEVEL;
logger.info('log4js log info');
logger.debug('log4js log debug');
logger.error('log4js log error');
app.use(express.static('public'));
const port = 3000;
app.get('/', (req, res) => {
    res.send('Acerbitas ulscendi maleficii bene atque caute vivendi disciplina est!');
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
function main(data) {
    console.time('global time');
    const dataArr = data.map((item) => `Name: ${item.name} - price: ${item.price}`);
    console.time('time element 50');
    console.log('product N:50: ', dataArr[50]);
    console.log('------------------');
    console.timeEnd('time element 50');
    console.timeEnd('global time');
    console.log('length of elements: ', dataArr.length);
    console.log('------------------');
}
main(data);
//# sourceMappingURL=app.js.map