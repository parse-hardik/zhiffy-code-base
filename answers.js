const attribs=[
	{
		attrib_id:'a258',
		ques:'Is your screen working fine?',
		attribs:
		[
			{
				sides_not_working:
					{
						id:'sides',
						value:0.23
					},
				lines_are_there:
					{
						id:'lines',
						value:0.58
					}
			}
		]
	},
	{
		ques_id:'a147',
		ques:'Is your camera responsive?',
		attribs:
		[
			{
				front_not_working:
					{
						id:'front',
						value:0.35
					},
				rear_not_working:
					{
						id:'rear',
						value:0.67
					}
			}
		]
	}
];

module.exports={attribs:attribs};