const express = require('express');

const app = express();

app.listen(8080, () =>
    console.log('Example app listening on port 3000!'),
);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/feature/version', (req, res) => {
    const featureVersion = process.env.FEATURE_VERSION;
    console.log(featureVersion);
    res.send(!!featureVersion ? featureVersion : 'UNDEFINED')
});
