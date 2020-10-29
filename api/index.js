const MongoClient = require('mongodb').MongoClient;

module.exports = async(req, res) => {
    const id = req.query.i;
    if (id == undefined) { // no id
        res.json({
            status: false,
            msg: "Id is required"
        })
    } else if (id == "") { // empty id
        res.json({
            status: false,
            msg: "Id is required"
        })
    } else { // id is ok 
        MongoClient.connect(process.env.DB_URL, function(err, db) { // connect with db
            if (err) {
                res.json({
                    status: false,
                    msg: "Cannot connect with Database"
                })
            } else {
                const search = { tid: id };
                var dbo = db.db("shortner"); // db name
                dbo.collection("data").find(search).toArray(function(errorr, result) {
                    if (errorr) { // if error while fetching
                        res.json({
                            status: false,
                            msg: "Error while fetch database"
                        })
                    } else {
                        if (result[0] == undefined) {
                            res.json({
                                status: false,
                                msg: "Cannot find a Url with the ID"
                            })
                        } else {
                            res.json({ //if everything goes correct
                                status: true,
                                main_link: result[0].url,
                                created_at: result[0].ist
                            })
                        };
                    };
                    db.close();
                });
            };
        });
    };
};