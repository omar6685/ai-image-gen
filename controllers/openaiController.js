const { Configuration, OpenAIApi } = require('openai');
const OpenAI = require('openai');

const client = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
  });
const generateImage = async (req, res) => {
    try {
        const response = await openai.createImage({
            prompt: 'Polar bear on ice skates',
            n: 1,
            size: '512x512',
        });
        const imageUrl = response.data.images[0].url;
        res.status(200).json({ 
            success: true,
            data: imageUrl
        });
    } catch (error) {
         if (error.response) {
            console.error(error.response.data);
            console.error(error.response.status);
            console.error(error.response.headers);
        } else {
            console.error(error.message);
        }
        res.status(500).json({ 
            success: false,
            error: 'The Image could not be generated'
        });
    }
}

module.exports = { generateImage }; 