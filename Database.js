//type means whether its a parent or a child.
// 1=nonreproductive.3=parent. 
//2=child.if parent ka child exists then the weightage of prent will b 0

const database=
	[

		{
			ques_id:'q001',
			ques:'Is your Front Camera Working',
			type:1,
			typeOfWeightage:'absolute',
			weightage:500
		},
		{
			ques_id:'q002',
			ques:'Is your Back Camera  Working',
			type:1,
			typeOfWeightage:'absolute',
			weightage:800,			
		},
		{
			ques_id:'q003',
			ques:'Is your Volume Button working',
			type:1,
			typeOfWeightage:'absolute',
			weightage:300,						
		},
		{
			ques_id:'q004',
			ques:'Is your Back Camera Working',
			type:1,
			typeOfWeightage:'absolute',
			weightage:800,						
		},
		{
			ques_id:'q005',
			ques:'Is your Finger Touch working',
			type:1,
			typeOfWeightage:'absolute',
			weightage:1000,					
		},
		{
			ques_id:'q006',
			ques:'Is your WiFi  working',
			type:1,
			typeOfWeightage:'absolute',
			weightage:1000,		
		},
		{
			ques_id:'q007',
			ques:'Is your Battery working',
			type:1,
			typeOfWeightage:'absolute',
			weightage:1000,		
		},
		{
			ques_id:'q008',
			ques:'Is your Speaker working',
			type:1,
			typeOfWeightage:'absolute',
			weightage:1000,		
		},
		{
			ques_id:'q009',
			ques:'Is your Power Button working',
			type:1,
			typeOfWeightage:'absolute',
			weightage:1000,					
		},
		{
			ques_id:'q010',
			ques:'Is your Power Button working',
			type:1,
			typeOfWeightage:'absolute',
			weightage:1000,					
		},
		{
			ques_id:'q009',
			ques:'Is your Charging POrt working',
			type:1,
			typeOfWeightage:'absolute',
			weightage:1000,					
		},
		{
			ques_id:'q011',
			ques:'Is your Face Sensor working',
			type:1,
			typeOfWeightage:'absolute',
			weightage:1000,			
		},
		{
			ques_id:'q012',
			ques:'Is your Touch Screen working',
			type:1,
			typeOfWeightage:'absolute',
			weightage:1000,					
		},
		{
			ques_id:'q013',
			ques:'Does the phone body have dents',
			type:3,
			typeOfWeightage:'absolute',
			weightage:0,					
		},
		{
			ques_id:'q014',
			ques:'Does the phone have spots or discoloration on screen?',
			type:3,
			typeOfWeightage:'absolute',
			weightage:0,					
		},	
		{
			
			ques_id:'q015',
			parent_ques_id:'q013',
			ques:'2 or less minor body dents',
			type:2,
			typeOfWeightage:'percent',
			weightage:0.2,					
		},
		{
			
			ques_id:'q016',
			parent_ques_id:'q013',
			ques:'Multiple/heavy visible body dents',
			type:2,
			typeOfWeightage:'percent',
			weightage:0.3,					
		},
		{
			ques_id:'q017',
			parent_ques_id:'q014',
			ques:' Minor discoloration or small spots on screen',
			type:2,
			typeOfWeightage:'percent',
			weightage:0.3,					
		},
		{
			ques_id:'q018',
			parent_ques_id:'q014',
			ques:'Does it have Multiple visible spots on screen',
			type:2,
			typeOfWeightage:'percent',
			weightage:0.3,					
		},
		{
			ques_id:'q019',
			parent_ques_id:'q014',
			ques:'Does it have Large/ heavy visible spots on screen',
			type:2,
			typeOfWeightage:'percent',
			weightage:0.5,					
		}					
	];

module.exports={database:database}