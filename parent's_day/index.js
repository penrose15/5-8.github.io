var quote = document.getElementById('quote');
var btn = document.getElementById('btnn');

var arr = [
	{
		quote: "엄마 사랑합니다."
	},
	{
		quote: "아빠 사랑합니다."
	},
	{
		quote: "꽃길만 걷자."
	},
	{
		quote: "아버지 술 좀 줄이세요."
	},
	{
		quote: "어머니 야식 줄이세요."
	},
    {
		quote: "건강하세요."
	},
    {
		quote: "홍성연 바보."
	},
    {
		quote: "행복하세요."
	},
];

btn.addEventListener('click', function(){

	var random = Math.floor(Math.random() * arr.length);

	quote.textContent = arr[random].quote;
});