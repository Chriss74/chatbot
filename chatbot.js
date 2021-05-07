var synth = window.speechSynthesis;
const voice = document.querySelector(".voice");
const stop = document.querySelector(".stop");
const voice2text = document.querySelector(".voice2text");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition;
const recorder = new SpeechRecognition();
var voices=[];

var count=0;

//TI THA LEEI ARXH
const ti = new SpeechSynthesisUtterance()
ti.text= 'Σύμφωνα με τα άρθρα 276 και επόμενα του Κώδικα Διοικητικής Δικονομίας, ο πολίτης που επιθυμεί να προσφύγει στη διοικητική δικαιοσύνη και αντιμετωπίζει σοβαρά οικονομικά προβλήματα δύναται, κατόπιν αίτησής του, πρώτον, να απαλλαγεί από την προκαταβολή των εξόδων της δίκης (ευεργέτημα πενίας) και δεύτερον, να διορισθεί από το Δικαστήριο δικηγόρος ή/και συμβολαιογράφος ή/και δικαστικός επιμελητής προκειμένου να τον βοηθήσουν δωρεάν (νομική βοήθεια).'
const poios = new SpeechSynthesisUtterance()
poios.text='Ας δούμε τις προϋποθέσεις για να λάβει κανείς ευεργέτημα πενίας και δωρεάν νομική βοήθεια. Το ευεργέτημα πενίας και η νομική βοήθεια παρέχονται με βάση εισοδηματικά κριτήρια σε ορισμένες κατηγορίες ατόμων. Σύμφωνα με το άρθρο 276 του Κώδικα Διοικητικής Δικονομίας, ο διάδικος μπορεί να απαλλαγεί από την προκαταβολή του τέλους του δικαστικού ενσήμου και του παραβόλου, αν αποδείξει ότι η προκαταβολή αυτή δημιουργεί κίνδυνο περιορισμού των απαραίτητων μέσων για την διατροφή του ίδιου και της οικογένειάς του. Η βοήθεια αυτή, κατά κανόνα δεν χορηγείται σε νομικά πρόσωπα. Μπορεί όμως να χορηγηθεί σε νομικά πρόσωπα που δεν επιδιώκουν κερδοσκοπικό σκοπό, καθώς και σε ενώσεις προσώπων που έχουν την ικανότητα να είναι διάδικοι. Στην περίπτωση αυτή, πρέπει να αποδείξουν ότι με την προκαταβολή του πιο πάνω ποσού, καθίσταται αδύνατη ή ιδιαιτέρως προβληματική η εκπλήρωση του σκοπού τους. Με τις ίδιες προϋποθέσεις χορηγείται και η δωρεάν νομική βοήθεια'
const pou = new SpeechSynthesisUtterance()
pou.text= 'Το Διοικητικό Πρωτοδικείο Θεσσαλονίκης βρίσκεται επί της οδού Φράγκων 3-6. Για να καταθέσετε αίτηση για χορήγηση ευεργετήματος πενίας και παροχής νομικής βοήθειας, πρέπει να ανεβείτε στον δεύτερο όροφο, στο γραφείο 23, δηλαδή στο γραφείο κατάθεσης ένδικων μέσων. Αν επιθυμείτε να βρείτε κάποιο άλλο Δικαστήριο, παρακαλώ επισκεφθείτε την σχετική ιστοσελίδα'
const pws = new SpeechSynthesisUtterance()
pws.text= 'Ο διάδικος δύναται να ολοκληρώσει τη διαδικασία ο ίδιος καθώς δεν είναι υποχρεωτική η παράσταση με δικηγόρο. Προκειμένου να λάβει κανείς ευεργέτημα πενίας ή νομική βοήθεια πρέπει να καταθέσει αίτηση όπου θα αναφέρει τους λόγους.  Η υποβολή της αίτησης διακόπτει την προθεσμία άσκησης των ενδίκων βοηθημάτων. Εάν ήδη εκκρεμεί ένδικο βοήθημα, η αίτηση πρέπει να υποβληθεί τουλάχιστον είκοσι ημέρες πριν από τη συζήτηση της υπόθεσης. Επί της αιτήσεως αποφασίζει ο Πρόεδρος που διευθύνει το Δικαστήριο ή άλλος Πρόεδρος που θα ορισθεί από αυτόν. Η πράξη με την οποία αποφασίζει ο Πρόεδρος κοινοποιείται στον αιτούντα από το Δικαστήριο. Μπορείτε να δείτε την πορεία της αίτησής σας ακολουθώντας τον σύνδεσμο www.adjustice.gr βάζοντας τον αριθμό κατάθεσης που έλαβε η αίτησή σας '
const eggrafa = new SpeechSynthesisUtterance()
eggrafa.text='Ας δούμε τι έγγραφα χρειάζεται να καταθέσει κάποιος για να λάβει ευεργέτημα πενίας ή/και νομική βοήθεια. Τα έγγραφα που πρέπει να κατατεθούν είναι τα εξής: 1) αίτηση με τα αιτήματα για ευεργέτημα πενίας ή/και για νομική βοήθεια και τους λόγους που επικαλείται, 2) τα έγγραφα που αποδεικνύουν τους ισχυρισμούς του σχετικά με την οικονομική του κατάσταση (εκκαθαριστικά, δηλώσεις Ε9 για την ακίνητη περιουσία του, δηλώσεις φορολογίας εισοδήματος, στοιχεία οικογενειακής κατάστασης, στοιχεία προσωπικών/οικογενειακών δαπανών κλπ)'

//TI THA LEEI-SYXNES ERWTHSEIS
//ti
//poios
//pou
//pws
//eggrafa


  //LEKSEIS KLEIDIA
  //hello
  var hello=['γεια σου', 'γεια σας', 'γεια', 'καλημέρα', 'καλησπερα', 'γεια χαρά']
  var fine=[ 'είμαι καλά', 'πολύ ωραία', 'καλά είμαι', 'όλα καλά']
  var bad=['δεν είμαι καλά', 'προβλήματα', 'όχι και τόσο καλά', 'δεν είμαι και τόσο καλά', 'καθόλου καλά', 'όχι καλά', 'απαίσια', 'χάλια', 'στεναχωριέμαι', 'στεναχωρημένος', 'στεναχωρημένη']
  //arxh
  var find=['έρθω στο δικαστήριο', 'έρθω στα δικαστήρια','βρω στο δικαστήριο', 'βρω τα δικαστήρια','φθάσω στο δικαστηριο','φθάσω στα δικαστήρια', 'πού πρέπει να πάω', 'πού να πάω', 'πού είναι το δικαστήριο', 'πού είναι τα δικαστήρια', 'πού βρίσκεται το δικαστήριο', 'πού βρίσκονται τα δικαστήρια', 'πού καταθέτω', 'πού θα καταθέσω', 'πού μπορώ να καταθέσω', 'πού να καταθέσω', 'πώς πάω στο δικαστήριο', 'πώς πάω στα δικαστηρια', 'πώς θα πάω στο δικαστήριο', 'πώς θα πάω στα δικαστήρια', 'πώς να πάω στο δικαστήριο', 'πώς να πάω στα δικαστηρια', 'που θα καταθέσω']
  var entitled1=['δικαιούμαι', 'δικαιούται', 'μπορώ να', 'μπορεί να', 'προϋποθέσεις']
  var entitled2=['να λάβω', 'να λάβει', 'να πάρει', 'να πάρω', 'να μου δώσουν']
  var entitled3=['δικαιούμαι νομική βοήθεια', 'δικαιούμαι νομική προστασία', 'δικαιούμαι ευεργέτημα πενίας']
  var what1=['τι είναι', 'τι περιλαμβάνει', 'σε τι συνίσταται']
  var what2=['νομική βοήθεια', 'νομική προστασία', 'ευεργέτημα πενίας']
  var what3=['τι δικαιούμαι', 'τι ακριβώς δικαιούμαι']
  var application=['διαδικασία', 'διαδικασίες'] 
  var application1=['με ποιον τρόπο', 'πώς']
  var application2=['αίτηση', 'ζητήσω', 'αιτηθώ']
  var documents=['τι είδους έγγραφα', 'τι έγγραφα', 'τι χαρτιά', 'ποια έγγραφα', 'τι δικαιολογητικά', 'τι είδους δικαιολογητικά', 'ποια δικαιολογητικά' ]  

//syxnes erwthseis
//ti
//poios
//pou
//pws
//eggrafa



//fones se polles glosses
function populateVoiceList() {
    voices = synth.getVoices().sort(function (a, b) {
        const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
        if ( aname < bname ) return -1;
        else if ( aname == bname ) return 0;
        else return +1;
    });
    
    var selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
    voiceSelect.innerHTML = '';
    for(i = 0; i < voices.length ; i++){
    var option = document.createElement('option');
    if(voices[i].name.includes('Greek')) {
    var option = document.createElement('option');
    option.textContent = 'Default-Greek  Male';
    
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
    }}
    for(i = 0; i < voices.length ; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      
      if(voices[i].name.includes('Greek')) {
        option.textContent += ' -- DEFAULT';
      }

      
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
    voiceSelect.selectedIndex = selectedIndex;
  }
  
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  
//grafei auto pou leei o xrhsths
function addHumanText(text) {
  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container");
  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");
  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);
  chatContainer.appendChild(chatBox);
  return chatContainer;
}

//grafei auta pou tha pei to chatbot kai prosthetei koumpia epiloghs
function addBotText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");
  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");
  const chatText1 = document.createTextNode(text);
  
  const chatButton1=document.createElement("div");
  chatButton1.innerHTML="<span class=myA onclick='speakToMe(ti, 1)'>Τί περιλαμβάνει η δωρεάν νομική βοήθεια και το ευεργέτημα πενίας? </span>"
  chatButton1.setAttribute("class", "chatButton")

  const chatButton2=document.createElement("div");
  chatButton2.innerHTML="<span class=myA onclick='speakToMe(poios, 2)'>Δικαιούμαι νομική βοήθεια και ευεργέτημα πενίας? </span>"
  chatButton2.setAttribute("class", "chatButton")

  const chatButton3=document.createElement("div");
  chatButton3.setAttribute("class", "chatButton")
  chatButton3.innerHTML="<span class=myA onclick='speakToMe(pou, 3)'>Πού θα καταθέσω την αίτησή μου για δωρεάν νομική βοήθεια και ευεργέτημα πενίας </p>"
  
  const chatButton4=document.createElement("div");
  chatButton4.innerHTML="<span class=myA onclick='speakToMe(pws, 4)'>Ποιά είναι η διαδικασία για να λάβω δωρεάν νομική βοήθεια και ευεργέτημα πενίας? </span>"
  chatButton4.setAttribute("class", "chatButton")
  
  const chatButton5=document.createElement("div");
  chatButton5.innerHTML="<span class=myA onclick='speakToMe(eggrafa, 5)'>Τί έγγραφα πρέπει να προσκομίσω για να λάβω δωρεάν νομική βοήθεια? </span>"
  chatButton5.setAttribute("class", "chatButton")

  chatBox1.appendChild(chatText1);
  chatContainer1.appendChild(chatBox1);
  chatContainer1.appendChild(chatButton1);
  chatContainer1.appendChild(chatButton2);
  chatContainer1.appendChild(chatButton3);
  chatContainer1.appendChild(chatButton4);
  chatContainer1.appendChild(chatButton5);
  return chatContainer1;
}

function addBotText1(text){
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");
  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");
  const chatText1 = document.createTextNode(text);
  const chatButton1=document.createElement("div");
  chatButton1.setAttribute("class", "chatButton")
  chatButton1.innerHTML='Συχνές ερωτήσεις'
  chatBox1.appendChild(chatText1);
  chatContainer1.appendChild(chatBox1);
  chatContainer1.appendChild(chatButton1);
  return chatContainer1;
}


function addBotText2(text){
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");
  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");
  const chatText1 = document.createTextNode(text);
  const chatButton1=document.createElement("div");
  chatButton1.setAttribute("class", "chatButton")
  chatButton1.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.611999270754!2d22.932461951537444!3d40.638437949947026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839a0c4e43d43%3A0xfced74d178779191!2zzpTOuc6_zrnOus63z4TOuc66zqwgzpTOuc66zrHPg8-Ezq7Pgc65zrEgzpjOtc-Dz4POsc67zr_Ovc6vzrrOt8-C!5e0!3m2!1sel!2sgr!4v1618607493019!5m2!1sel!2sgr" width="90%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  chatBox1.appendChild(chatText1);
  chatContainer1.appendChild(chatBox1);
  chatContainer1.appendChild(chatButton1);
  return chatContainer1;

}

//Psaxnei lekseis kleidia se auta pou tha pei o xrhsths kai analoga dialegei ti tha pei to chatbot. Prepei na metaferw kapoia keimena sto kommati tou programmatos 'ti tha leei arxh'

function botVoice(message) {
    
    const speech = new SpeechSynthesisUtterance();
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

    for(i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        speech.voice = voices[i];
        break;
      }
    }
    if (containsOR(message.toLowerCase(), hello)) {
        speech.text = "Γεια σας. Τι κάνετε?";
        speakToMe(speech, 0)
        count=0;
    }else if (containsOR(message.toLowerCase(),bad)) {
      speech.text = "Ίσως μπορώ να σας βοηθήσω να λύσετε το πρόβλημά σας. Μπορώ να σας βοηθήσω να βρείτε πληροφορίες προκειμένου να λάβετε δωρεάν νομική βοήθεια και ευεργέτημα πενίας από το Δικαστήριο. Παρακαλώ ρωτήστε με τι θέλετε να μάθετε";
      speakToMe(speech, 0)
      count=0;
    }else if (containsOR(message.toLowerCase(),fine)) {
      speech.text = "Πολύ ωραία! Μπορώ να σας βοηθήσω να βρείτε πληροφορίες προκειμένου να λάβετε δωρεάν νομική βοήθεια και ευεργέτημα πενίας από το Δικαστήριο. Παρακαλώ ρωτήστε με τι θέλετε να μάθετε";
      speakToMe(speech, 0)
      count=0;
    
    }else if ((containsOR(message.toLowerCase(),what1) && containsOR(message.toLowerCase(),what2)) || containsOR(message.toLowerCase(),what3) ){
      count=0;
        speech.text = ti.text
        speakToMe(speech, 1)
        count=0;

    }else if ((containsOR(message.toLowerCase(),entitled1) && containsOR(message.toLowerCase(),entitled2)) || containsOR(message.toLowerCase(),entitled3)){
      count=0;
      speech.text = poios.text
      speakToMe(speech, 2)

    }else if (containsOR(message.toLowerCase(),find)){
      count=0;
        speech.text = pou.text
        speakToMe(speech, 3)
  
      
    }else if ((containsOR(message.toLowerCase(),application)) || (containsOR(message.toLowerCase(),application1) && containsOR(message.toLowerCase(),application2))){
      count=0;
        speech.text = pws.text
        speakToMe(speech, 4)

    }else if (containsOR(message.toLowerCase(),documents)){
        count=0;
        speech.text = eggrafa.text
        speakToMe(speech, 5)

      }else{
        if (count>=4 && count%4==0){
        speech.text = "Βλέπω ότι δυσκολεύεστε στην έρευνά σας. Μπορώ να σας ενημερώσω για τα εξής θέματα: 1) Τι περιλαμβάνει το ευεργέτημα πενίας και η δωρεάν νομική βοήθεια, 2) Ποιοι τα δικαιούνται, 3) Πού μπορείτε να καταθέσετε την αίτηση, 4) Ποια είναι η διαδικασία και 5) Τι έγγραφα πρέπει να προσκομίσετε. Μπορείτε να έχετε πρόσβαση στις απαντήσεις που θέλετε επιλέγοντας από το μενού στην οθόνη σας.";
        count=count+1;
      }else{ speech.text = "Μπορώ να σας βοηθήσω να βρείτε πληροφορίες για να λάβετε δωρεάν νομική βοήθεια και ευεργέτημα πενίας από το Δικαστήριο. Παρακαλώ ρωτήστε με τι θέλετε να μάθετε.";
      count=count+1;
    }
          speakToMe(speech, 0)
      }
    
}

//ftiaxnei fwnh
    function speakToMe(speech, select){
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    var element = document.getElementById("container");
    if (select==0){
    element.appendChild(addBotText(speech.text));
    }else if(select==1 || select==2 || select==4 || select==5){
    element.appendChild(addBotText1(speech.text)) 
    }else if (select==3){
    element.appendChild(addBotText2(speech.text))  

}
    }

//psaxnei lekseis kleidia me or
function containsOR(target, pattern){
  console.log(target)
  var value = 0;
  pattern.forEach(function(word){
    value = value + target.includes(word);
  });
  if (value>0){
    value=1
  }
  console.log(value)
  return value;
  //return (value === 1)
}

recorder.onstart = () => {
  console.log('Voice activated');
};

//trexei olo to script otan stamathsei o xrhsths na milaei. Katevazei th selida sto telos
recorder.onresult = (event) => {
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  var element = document.getElementById("container");
  element.appendChild(addHumanText(transcript));
  botVoice(transcript);
  window.scrollTo(0,document.body.scrollHeight);
};

//koumpi gia fwnh
voice.addEventListener('click', () =>{
  recorder.start();
  setTimeout(function(){ recorder.stop(); }, 60000);
});

//koumpi gia na stamataei na milaei
stop.addEventListener('click', () =>{
  synth.cancel();

});

  
