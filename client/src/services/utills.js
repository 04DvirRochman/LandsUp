const organizeDate = (date) => {
	if (date.getMinutes() > 9) {
		return `${date.getHours()}:${date.getMinutes()} ${date.getDate()}.${date.getMonth()+1}`;
	} else {
		return `${date.getHours()}:0${date.getMinutes()} ${date.getDate()}.${date.getMonth()+1}`;
	}
};
export default organizeDate;
