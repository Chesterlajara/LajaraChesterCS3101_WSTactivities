document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("textInput");
    const wordCountDisplay = document.getElementById("word-count");
    const sentenceCountDisplay = document.getElementById("sentences-count");

    textInput.addEventListener("input", () => {
        const text = textInput.value.trim();

        const words = text.split(/\s+/).filter(word => word.length > 0);
        const wordCount = words.length;

        const sentences = text.split(/[.!?]+\s*/).filter(sentence => sentence.trim().length > 0);
        const sentenceCount = sentences.length;

        wordCountDisplay.textContent = wordCount;
        sentenceCountDisplay.textContent = sentenceCount;
    });
});
