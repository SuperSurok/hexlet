//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
  const text: string = document.body.innerHTML.trim();
  const phrases: string[] = text.split('\n');
  const phrase: string[] = phrases.map((sentence) => `<p>${sentence}</p>`);
  document.body.innerHTML = phrase.join('\n');
}

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
{
  const text: string = document.body.innerHTML.trim();
  const lines: string[] = text.split('\n');
  const tags: string[] = lines.map((line) => `<p>${line}</p>`);
  document.body.innerHTML = tags.join('\n');
}
