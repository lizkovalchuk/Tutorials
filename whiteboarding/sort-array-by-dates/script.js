myArray = [
    //group 1
    {id: 22, assetNumber: 22, title: "Title 22", fileName: "asset22.jpg", lastModified: "2019-08-12"},
    {id: 23, assetNumber: 23, title: "Title 23", fileName: "asset23.jpg", lastModified: "2019-08-12"},

    //group 2
    {id: 39, assetNumber: 39, title: "Title 39", fileName: "asset39.jpg", lastModified: "2019-08-13"},
    {id: 40, assetNumber: 40, title: "Title 40", fileName: "asset40.jpg", lastModified: "2019-08-13"}
];

stateMap = {};
stateArray = [];

stateMap = myArray.reduce((acc, asset ) => {
    const key = asset.lastModified;
    if (acc.hasOwnProperty(key)) {
       acc[key].push(asset);
    } else {
        acc[key] = [asset];
    }
    console.log(acc);
    return acc;
} , {} );

