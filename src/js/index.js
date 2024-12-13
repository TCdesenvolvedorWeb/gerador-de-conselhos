let title = document.getElementById('title');
let advice = document.getElementById('conselho');   
const bntGerar = document.getElementById('bnt-gerar').addEventListener('click', () => generateAdvice()); 

async function generateAdvice() {
    try {
        const response = await fetch ("https://api.adviceslip.com/advice");
                 
        if (!response.ok){
            throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
        }

        const adviceContent = await response.json();      
        const adviceId = `Adivice #${adviceContent.slip.id}`;
        const adviceText = `"${adviceContent.slip.advice}"`;
        console.log(adviceContent);

        title.innerText = adviceId;
        advice.innerText = adviceText;

    } catch (error) {
        alert("Ocorreu um erro ao tentar buscar as informações da API" , error);
    } finally {
        console.log('Deu tudo certo');
    }
}
generateAdvice()