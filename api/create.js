const MongoClient = require('mongodb').MongoClient;
const request = require('request');
const regex = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/; // validate url


module.exports = async(req, res) => {
    const url = req.query.u;
    if (url == undefined) { // no url
        res.json({
            status: false,
            msg: "Url is missing"
        })
    } else if (!regex.test(url)) { // validate url
        res.json({
            status: false,
            msg: "Bad URL kindly recheck url and send again"
        })
    } else { // url is ok 
        MongoClient.connect(process.env.DB_URL, function(err, db) { // connect with db
            if (err) {
                res.json({
                    status: false,
                    msg: "Cannot connect with Database"
                })
            } else {
                //getting time
                var options = {
                    'method': 'GET',
                    'url': 'https://time.akamai.com/'
                };
                request(options, function(error, response) {
                    if (error) { // if error fetching time
                        res.json({
                            status: false,
                            msg: "Failed to get time data"
                        })
                    } else {
                        //generate random string
                        function randomString(length, chars) {
                            var result = '';
                            for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
                            return result;
                        }
                        var rString = randomString(6, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
                        var timestamp = Number(response.body) + Number('19800'); // gmt to ist
                        var tidd = timestamp + rString; //added generated string 

                        //saving data into db
                        var dbo = db.db("shortner"); // db name
                        var obj = {
                            tid: tidd,
                            ist: timestamp,
                            url: url
                        };
                        dbo.collection("data").insertOne(obj, function(errorr, result) {
                            if (errorr) { // if error while writing
                                res.json({
                                    status: false,
                                    msg: "Error while write on database"
                                })
                            } else {
                                var link = process.env.APP_URL + "/?i=" + result.ops[0].tid;
                                res.json({ //if everything goes correct
                                    status: true,
                                    link: link,
                                    unique_id: result.ops[0].tid,
                                    timestamp: result.ops[0].ist
                                })
                            };
                            db.close();
                        });
                    };
                });
            };
        });
    };
};
