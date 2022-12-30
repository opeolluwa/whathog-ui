const outputYou = document.querySelector('.output-you') as unknown as HTMLElement;
const outputBot = document.querySelector('.output-bot') as unknown as HTMLElement;

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


if ('SpeechRecognition' in window) {
  const recognition = new SpeechRecognition();

  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  const trigger = document.querySelector("#speak__button") as unknown as HTMLElement
  trigger.addEventListener('click', () => {
    recognition.start();
  });

  recognition.addEventListener('speechstart', () => {
    alert("speech detected")
    console.log('Speech has been detected.');
  });

  recognition.addEventListener('result', (e: { results: string | any[]; }) => {
    console.log('Result has been detected.');
    alert('Result has been detected.');


    let last = e.results.length - 1;
    let text = e.results[last][0].transcript;

    outputYou.textContent = text;
    console.log('Confidence: ' + e.results[0][0].confidence);

    //   socket.emit('chat message', text);
    alert(text)
  });

  recognition.addEventListener('speechend', () => {
    recognition.stop();
  });

  recognition.addEventListener('error', (e: { error: string; }) => {
    outputBot.textContent = 'Error: ' + e.error;
  });

  function synthVoice(text: string) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    synth.speak(utterance);
  }

  // socket.on('bot reply', function(replyText) {
  //   synthVoice(replyText);

  //   if(replyText == '') replyText = '(No answer...)';
  //   outputBot.textContent = replyText;
  // });
}

export { }