import express from 'express'
import dotenv from 'dotenv'
import useragent from "express-useragent";
import cors from 'cors'
import { Configuration, OpenAIApi } from 'openai'
import  fs from 'fs';
import connectDB from "./config/db.js";
import morgan from "morgan";


// Load environment variables via config.env if in development
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});


const openai = new OpenAIApi(configuration);

const PORT = process.env.PORT || 2000;
// Connect to database
// connectDB();
const app = express()
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true, limit: "5mb" }));

app.use(cors({ allowedHeaders: "*" }));
app.options("*", cors());
app.use(useragent.express());

app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Hello from CodeX!'
  })
  console.log(process.env.OPENAI_API_KEY)
})

app.post('/upload-post' , async (req, res) => { 
    try {
      const { body } = req.body;
      console.log(body)
      fs.readFile('./content/post.json', function readFileCallback(err, data) {

        if (err) {
          console.log(err);
        } else {
            const obj = JSON.parse(data);
            obj.table.push(body)

            let json = JSON.stringify(obj);
            fs.writeFile('./content/post.json', json, function(err) {
              if (err) throw err;
                console.log('complete');
                res.status(200).send({
                  bot: 'Success'
                });
              }
            );
        }
    });
    //   var obj = {
    //     table: []
    //   };
    //  obj.table.push(body);
    //  var json = JSON.stringify(obj);
    //   fs.writeFile('./content/post.json', json , function(err) {
    //     if (err) throw err;
    //     console.log('complete');
    //     }
    //  );
    } catch (error) {
      console.error(error)
      res.status(500).send(error || 'Something went wrong');
    }
})

app.post('/', async (req, res) => {
  try {
    const { prompt } = req.body;
    const question = `places to eat in ${prompt} all in JSON format with their details , Description , Price in Dollars , Location ,Hotline, Region,and Website`;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${question}`,
      temperature: 0, // Higher values means the model will take more risks.
      max_tokens: 4000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
      top_p: 1, // alternative to sampling with temperature, called nucleus sampling
      frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
      presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
    });

    console.log(response.data.choices.slice())
    res.status(200).send({
      bot: response.data.choices[0].text
    });

  } catch (error) {
    console.error(error)
    res.status(500).send(error || 'Something went wrong');
  }
})

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));