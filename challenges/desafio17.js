db.resumoProdutos.insertOne({ franquia: "McDonalds",
 totalProdutos: db.produtos.find().countDocuments() });
db.resumoProdutos.find({}, { franquia: true, totalprodutos: true, _id: false });