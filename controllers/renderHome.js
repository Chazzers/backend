const data = [
	{
		name: "Chazz"
	},{
		name: "Johan"
	},{
		name: "Jamie"
	}
]

function renderHome(req, res) {
    return res.render('home', { title: 'Yolo', data: data});
}

module.exports = renderHome;