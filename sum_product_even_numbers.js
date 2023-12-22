alert('Сумма и произведение четных чисел из данного набора');
var n=Number(prompt('Число N', ''));
if (!isNaN(n) && n>0 && n%1==0){
    var N=[2.4, 1.3, 0.8, 7.2, 4.3, 5.9, 10.11, 12.18];
    var sum=0;
    var product=1;
    for (let i=0; i<n; i++){
        if (Number(String(N[i]).slice(-1))%2==0){
            sum+=N[i];
            product*=N[i];
        }
    }
    alert('Сумма четных чисел = '+sum);
    alert('Произведение четных чисел = '+product);
}else{
    alert('Неверный ввод');
}