// Split string by the first occurrence of separator

Parseip = i => {
    a = []
    if (i == '' ) return 0 //Если строка с ip пустая, возвращаем 0
    B = i.split('.') //Делим строку с ip на отдельные цифры
    if (B.length != 4) return 0 //Отсеиваем ненастоящие/неполные ip
    B.forEach(b => a.push(parseInt(b))) //Запускаем цикл foreach (Асинхронный цикл) | Добавляем каждый элемент в выходной массив
    return a; //Возвращаем массив с числами
}
console.log(Parseip('127.0.0.1')) //Выводим в выход функции в консоль
