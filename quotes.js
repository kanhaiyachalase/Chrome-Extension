fetch("https://icanhazdadjoke.com/slack")
  .then((data) => data.json())
  .then((motivationData) => {
    const motivationText = motivationData.attachments[0].text;
    const motivationElement = document.getElementById("motivationElement");

    motivationElement.innerHTML = motivationText;
  });
