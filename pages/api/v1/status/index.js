function Hello(request, response) {
  response.status(200).json({ resposta: "Hello" });
}

export default Hello;
