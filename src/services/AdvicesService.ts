import axios from "axios";

class AdviceService{
  async getAdvice(){
    const response = await axios.get('https://api.adviceslip.com/advice');
    const data = await response.data;
    return data;
  }
}

export default new AdviceService();
