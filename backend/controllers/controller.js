
//http://localhost:3000/api/blinji/gettingListReq <--　extensionを使わずにapi通信をデバッグする時はこれをブラウザで実行

const { ReturnDocument } = require('mongodb');
const client = require('../config/db')


const gettingListReq = async (req,res) => {  //全ての難語をリクエストされたときの動作

    //mongodbのサイトからコピペ
    try {
        await client.connect()
        const database = client.db("blinji");
        const words = database.collection("words");
      
        //const hardWordArray = await words.find({},{ projection: { _id: 0, homonym: 1 }}).toArray();
        const hardWordArray = await words.distinct("homonym") //英語で同音異義語はhomonym
        
        console.log(hardWordArray);
        return  res.send( hardWordArray )   //extensionに送る
      
      } finally {
        await client.close();
      }
    //response 

    }

    //htmlSendingReq
const easyWordReq = async (req,res) => {    //難語に対応する平易語をリクエストされた時の動作

  console.log("6:receiving easyWordReq, extension=>api")
  const hardword = req.params.word    //URLの後ろに付いてる難語を変数に格納
  console.log(hardword)
  try {
    await client.connect()
    const database = client.db("blinji");
    const words = database.collection("words");
  
    const query = { homonym: hardword };
    const options = {
      // Include only the `title` and `imdb` fields in the returned document
      projection: { _id: 0, easyword: 1 },   //idはいらないよってしてる
    };
    const word = await words.findOne(query, options);  //検索
    // since this method returns the matched document, not a cursor, print it directly
    console.log(word);
    return res.send(word)    //extensionに送る
  } finally {
    await client.close();
  }



  
}




const getWords= async (req,res) => {   //テスト用
    //get hardwords 
    const hardword = req.params.word
    //find easywords from db
    try {
        await client.connect()
        const database = client.db("blinji");
        const words = database.collection("words");
        // Query for a movie that has the title 'The Room'
        const query = { homonym: hardword };
        const options = {
          // Include only the `title` and `imdb` fields in the returned document
          projection: { _id: 0, easyword: 1 },
        };
        const word = await words.findOne(query, options);
        // since this method returns the matched document, not a cursor, print it directly
        console.log(word);
       
      } finally {
        await client.close();
      }
    //response 



    return res.json({ message: 'Get words' }
        )
}

const setWords = (req,res) => {
    return res.json({ message: 'Set words' }
        )
}

const updateWords = (req,res) => {
    return res.json({ message: 'Update words ${req.params.id}' }
        )
}

const deleteWords = (req,res) => {
    return res.json({ message: 'Delete words ${req.params.id}' }
        )
}




module.exports = {
    gettingListReq,
    easyWordReq,
    getWords
}