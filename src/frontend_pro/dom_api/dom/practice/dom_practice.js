//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    const text = document.body.innerHTML.trim();
    const phrases = text.split('\n');
    const phrase = phrases.map((sentence) => `<p>${sentence}</p>`);
    document.body.innerHTML = phrase.join('\n');
}

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
{
    const text = document.body.innerHTML.trim();
    const lines = text.split('\n');
    const tags = lines.map((line) => `<p>${line}</p>`);
    document.body.innerHTML = tags.join('\n')
}