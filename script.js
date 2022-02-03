const quizdata=[
    {
        question:'how old is aashu?',
        a:'10',
        b:'17',
        c:'26',
        d:'30',
        correct:'c'
    },{
        question: 'what is your most use programing language in 2020?'
        a:'java',
        b:'c',
        c:'python',
        d:'javascipt',
        correct:'a'
    },{
        question:'who is the president of india?',
        a:'manmohan singh',
        b:'rahul gandhi',
        c:'narender modi',
        d:'ashok gehlot',
        correct:'c'
    },
    {
        question:'what dos html stand for?'
        a:'Hypertext Markup Language',
        b:'Cascading Style Sheet',
        c:'kackion and vacation',
        d:'tejaswini will ashwini',
        correct:'a'
    },{
        \
    
    question:'what Year was javascript launched?'
    a:'2020',
    b:'2018',
    c:'2022',
    d:'none of these',
    correct:'d'
    }
]
const questione1=document.getElementById('question');
const a_text=document.getElementById('a-text');
const b_text=document.getElementById('b-text');
const c_text=document.getElementById('c-text');
const d_text=document.getElementById('d-text');
const btnsubmit=document.getElementById('submit');
let currentquiz=0;

loadquiz();
function loadquiz(){
    const currentquizdata=quizdata[currentquiz];
questione1.innerText=currentquizdata.question;
a_text.innerText=currentquizdata.a;
b_text.innerText=currentquizdata.b;
c_text.innerText=currentquizdata.c;
d_text.innerText=currentquizdata.d;
   

}
btnsubmit.addEventListener('click',() =>{
    currentquiz++;
    if(currentquiz< quizdata.length){
        loadquiz(); 
        }
        else{
            alert('you finished you reach all question')
        }
})