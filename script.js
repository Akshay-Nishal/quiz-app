var x = new XMLHttpRequest()
var url = 'https://5d76bf96515d1a0014085cf9.mockapi.io/quiz';
var data 
x.open("GET", url, true);
x.send();
x.onreadystatechange = (e) =>{
    data = (JSON.parse(e.target.response));
    if (e.target.readyState===4 && e.target.status ===200){
        document.getElementById('quiz').style.display='block'
        document.getElementById('loading').style.display='none'
        for (let i = 0; i < data.length; i++) {
            let q = document.createElement('div')
            q.className='quizque'
            q.innerHTML=`
            <h3>Q${i+1}. ${data[i].question}</h3>
            <label><input type="radio" id="${1}" name="id${i}">${data[i].options[0]}</label>
            <label><input type="radio" id="${2}" name="id${i}">${data[i].options[1]}</label>
            <label><input type="radio" id="${3}" name="id${i}">${data[i].options[2]}</label>
            <label><input type="radio" id="${4}" name="id${i}">${data[i].options[3]}</label>
            <br>
            <div class="yellow-line">
                <span></span>
            </div>`
            document.getElementById('questions').append(q)
        }
    }
}


var calc = document.getElementById('calc')
calc.addEventListener('click', () =>{
    let score = 0
    for (let i = 0; i <5; i++) {
        let sel = `input[name="id${i}"]:checked`
        let selected = +document.querySelector(sel).id
        if(selected == data[i].answer){
            score++;
        }
    }
    document.getElementById('fin-score').innerHTML=`${score}/5`
})


