
//http://localhost:3000/api/blinji/gettingListReq

const { ReturnDocument } = require('mongodb');

const gettingListReq = async (req,res) => {

    //find easywords from db
    try {
        await client.connect()
        const database = client.db("blinji");
        const words = database.collection("words");
      
        //const hardWordArray = await words.find({},{ projection: { _id: 0, homonym: 1 }}).toArray();
        const hardWordArray = await words.distinct("homonym")
        
        // since this method returns the matched document, not a cursor, print it directly
        console.log(hardWordArray);
        return  res.send( hardWordArray )
      
      } finally {
        await client.close();
      }
    //response 

    }

    //htmlSendingReq
const easyWordReq = async (req,res) => {

  console.log("6:receiving easyWordReq, extension=>api")
  const hardword = req.params.word
  console.log(hardword)
  try {
    await client.connect()
    const database = client.db("blinji");
    const words = database.collection("words");
    // Query for a movie that has the title 'The Room'
    const query = { homonym: hardword };
    const options = {
      // Include only the `title` and `imdb` fields in the returned document
      projection: { _id: 0, easywords: 1 },
    };
    const word = await words.findOne(query, options);
    // since this method returns the matched document, not a cursor, print it directly
    console.log(word);
    return res.send(word)
  } finally {
    await client.close();
  }



  
}




 




 const client = require('../config/db')

const getWords= async (req,res) => {
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
          projection: { _id: 0, easywords: 1 },
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