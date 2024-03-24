function algoritm(str){
    const stack = []
    const openColon = {
        '(':')',
        '{':'}',
        '[':']'
    }
    for (let char of str){
        if (char === '(' || char === '{' || char === '['){
            stack[stack.length] = char
        }
        else{
            let openC = stack[stack.length - 1];
            stack.length = stack.length - 1;
            if (openColon[openC] !== char){
                return false
            }

        }
    }
    if (stack.length === 0) {
        return true
    } else {
        return false
    }
}
console.log(algoritm('()'))
console.log(algoritm('(){}[]'))
console.log(algoritm('(]'))
console.log(algoritm('[})'))
console.log(algoritm('{)'))
