 /*
	Кратко о работе с функциями:
	1) Значения в скобках - это аргументы, которые мы получаем в момент вызова функции. Их и надо присваивать требуемым в заданиях переменным.
	2) После ключевого слова return вместо комментария необходимо написать переменную либо выражение с ответом.
	3) console.log() прописывать не обязательно, т.к. команда return уже означает вывод результата работы функции.
 */

function averageMark(a, g, p) {
	
    // реализуйте здесь задание №1
	const algebra = a;
	const geography = g;
	const physics = p;

	const averageRating = (algebra + geography + physics) / 3;
	return averageRating;
}

function sayHello(userName) {
	
    // реализуйте здесь задание №2
	const myName = userName;
	const message = `Привет, мир! Меня зовут ${myName}`
	return message;
}

function calculateFormula() {
    
	// реализуйте здесь задание №3
	const x = 2;
	const y = 22;
	const z = 0;
	const result =  x * y + 5 * z + x - 1;
    return result;
}
