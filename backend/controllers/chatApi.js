async function getFitnessResponse(query) {

    const openaiApiKey = process.env.OPENAI_API_KEY;
    
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: `You are a fitness expert. Answer the following question: ${query}`,
          max_tokens: 150,
          temperature: 0.7,
        },
        {
          headers: {
            'Authorization': `Bearer ${openaiApiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error('Error fetching response from OpenAI API:', error);
      return 'I am sorry, but I am unable to provide an answer at the moment.';
    }
  }