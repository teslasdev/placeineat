import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function Handler(req, res) {
   const data = req.body
   const promptFromSystem = data.system;
   const preference = "[Preferences]"
   const cuisine = "[Cuisine]"
   const search = "[Search City by User]"

 

   var prompt = "";
   if(data.system.includes(search)) {
     prompt = promptFromSystem.replace(search , data.prompt.toString())

     if(prompt.includes(preference)) {
       prompt = prompt.replace(preference , data.preference.toString())
       if(prompt.includes(cuisine)) {
         prompt = prompt.replace(cuisine , data.cuisine.toString())
       } 
     }  
   }

   const shape ={
     attributes : ['data']
   }

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: `${prompt + "all with their details , Description , Price in Dollars , Location ,Hotline, Region,and Website "}. Return the response as a JSON object with a shape of ${JSON.stringify(shape)}.`
      }
    ]
  });

  const result = JSON.parse(completion.data.choices[0].message.content)

   res.status(200).json({
    result
   })
}