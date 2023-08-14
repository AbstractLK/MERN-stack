const express = require('express');
const {MongoClient} = require("mongodb");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json({extended : false}));

const withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect("mongodb://localhost:27017");
        const db = client.db('mernstack');
        await operations(db);
        await client.close();
    } catch (e) {
        res.status(500).json({message: "Error connecting to database", e});
    }
};

//route
app.post("/api/products/:name/comments", (req, res) => {
    const { username, text } = req.body;
    const productName = req.params.name;
    withDB(async (db) => {
        const productInfo = await db.collection("products").findOne({name: productName});
        await db.collection("products").updateOne({name: productName},{
            $set: { comments: productInfo.comments.concat({username, text}) }
            }
        );
        const updateProductInfo = await db.collection("products").findOne({name: productName});
        res.status(200).json(updateProductInfo);
    },res);
});

// app.post("/api/products/:name/comments", (req, res) => {
//     const {username, text} = req.body;
//     const productName = req.params.name;
//     productsInfo[productName].comments.push({username,text});
//     res.status(200).send(productsInfo[productName]);
// });

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));