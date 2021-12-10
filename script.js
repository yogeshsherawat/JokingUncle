
fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        console.log(jokeData);
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = jokeText;
    }).catch(err=>{
        console.log("Ran into some error")
    })

    /*

    const jokeElement = document.getElementById('jokeElement');
    let text = "You Suck";
    setInterval(()=>{
        
        
    jokeElement.innerHTML = text
    if(text=="You Suck")
    text = "Get Fucked";
    if(text == "Get Fucked")
    text = "You Suck";

    },1000)

    */