function getDayInfo (date) {
	let days = ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
	    prefixes = ['1', '2', '3', '4', '5'],
		months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
	
	let checkDate = new Date (date.replace(/[-,./]/g, '.').split('.').reverse().join('.')); // Валидация
	return `${days[checkDate.getDay()]},${prefixes[Math.floor(checkDate.getDate() / 7)]} неделя ${months[checkDate.getMonth()]} ${checkDate.getFullYear()} года`;
}

console.log(getDayInfo('08.03.2021'));