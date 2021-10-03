let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));

let button = document.querySelector('button');
//Поле в котором все выводится
let input = document.querySelector('.input');
//Сохраненная часть выражения для возведения в степень
let power = "";
//Вставить символ
function insert(num) {
    if (input.textContent == 0) {
        input.textContent = "";
        input.textContent += num;
    } else
        input.textContent += num;
        
       console.log(input.textContent.toString()) 
}
//Очистить все поле
function clean() {
    input.textContent = "0";
    power = "";
}
//Удалить символ
function back() {
    let exp = input.textContent;
    input.textContent = exp.substring(0, exp.length - 1);
    if (input.textContent == 0) {
        input.textContent = "0";
    }
    console.log(input.textContent.toString())
}
//Посчитать выражение
function equal() {
    let exp = input.textContent;
    if (input.textContent.includes('^')) {
        let tmp = input.textContent.split('^')
        let num = eval(power);
        let pow = +tmp[1]
        input.textContent = Math.pow(num, pow);
        power = "";
        return;
    }
    if (exp) {
        input.textContent = eval(exp);
    }
    
    let result2 = (exp + ' = ' + input.textContent);
    console.log(result2.toString())
    itemsArray.push(result2.toString())
    localStorage.setItem('items', JSON.stringify(itemsArray))
    document.getElementById('result').innerHTML +=items[length-1].join('\n') + "\n";
    

    
   
}
//Вычислить проценты
function percent() {
    function insert(num) {
        if (input.textContent == 0) {
            input.textContent = "";
            input.textContent += num;
        } else
            input.textContent += num;
            
           console.log(input.textContent.toString()) 
    }
    resultate = input.textContent;
    input.textContent = eval(input.textContent) / 100;
    let result2 = (resultate + ' = ' + input.textContent);
    console.log(result2.toString())
    itemsArray.push(result2.toString())
    localStorage.setItem('items', JSON.stringify(itemsArray))
    
    
}


function operation(name) {
   
    if (name == "sqrt")
        input.textContent = Math.sqrt(eval(input.textContent));
    if (name == "^") {
        power = input.textContent;
        input.textContent += "^";
    }
    let result2 = (input.textContent + ' = ' + input);
    console.log(result2.toString())
    itemsArray.push(result2.toString())
    localStorage.setItem('items', JSON.stringify(itemsArray))
   
}


  

    let items = JSON.parse(localStorage.getItem('items'),
    (key, value) => (typeof value === 'object') && key !== '' ? new Article(value.id, value.title, value.body) : value);
    setTimeout(() => {
        document.getElementById('result').innerHTML +=items.join("\n") + "\n";
    }, 100);
    document.getElementById('result').innerHTML +=items.join("\n") + "\n";

  


  