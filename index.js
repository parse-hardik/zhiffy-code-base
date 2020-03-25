const {database} = require('./Database.js');
// const {ques} = require('./questions.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var app = express();

app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/*
	Input format will be something like this.
	[
		{
			ques_id:'some random id',
			value:boolean(true/false)
		},
		{
			ques_id:'some random id',
			value:boolean(true/false)
		},
		{
			ques_id:'some random id',
			value:boolean(true/false)
		},
		{
			ques_id:'some random id',
			value:boolean(true/false)
		},
	]
*/



app.post('/giveInputs',(req,res)=>{
	var best_price=16150;
	var actual_price=39999;
	var answers = req.body.answers;
	for(let i=0;i<answers.length;i++)
	{
		if(answers[i].value===true)
		{
			for(let j=0;j<database.length;j++)
				{
					if(answers[i].ques_id===database[j].ques_id)
					{
						if(database[j].type===1)
							best_price-=database[j].weightage;
						console.log('best_price after')
						if(database[j].type===2)
							best_price-=(actual_price)*(database[j].weightage);
					}
				}
		}
		// console.log(true===answers[i].value);

	}
	res.send('Best Price for your phone will be '+best_price);
	// console.log(req);
	// res.send(database);
})

app.listen(3000,()=>{
	console.log('server working on 3000');
})