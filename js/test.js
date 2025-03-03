
const firstname = "karan";

let word = ''

for (let i = 0; i < firstname.length; i++) {
    if(i === 0){
        const temp = firstname[i].toUpperCase();
        word  +=temp
    }else{
        const temp = firstname[i];
        word += temp
    }
    
}

console.log(word)


/* const firstwordcapital  = firstname[0].toUpperCase() + firstname.slice(1);
console.log(firstwordcapital) */