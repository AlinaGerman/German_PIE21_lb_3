alert('Квадраты целых чисел и их количество, расположенных между A и B (включая A и B)');
var a=(prompt('Число A', ''));
var b=(prompt('Число B', ''));
if (!isNaN(Number(a)) && !isNaN(Number(b)) && a!='' && b!=''){
    if (Number(a)<Number(b)){
        var count=Math.ceil(Number(b))-Math.floor(Number(a))-1;
        var squares=[];
        for (let i=Math.ceil(Number(a)); i<=Math.floor(Number(b)); i++){
            squares.push(i**2);
        }
        alert('Квадраты чисел: '+squares.join(' '));
        alert('Количество элементов между '+a+' и '+b+' = '+count);
    } else{
        alert('Обязательно A<B');
    }
} else{
    alert('Введено не число');
}