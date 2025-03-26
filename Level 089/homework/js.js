async function fetchAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        document.getElementById('advice-number').innerText = `ADVICE #${data.slip.id}`;
        document.getElementById('quote').innerText = `“${data.slip.advice}”`;
    } catch (error) {
        console.error('Error fetching advice:', error);
    }
}