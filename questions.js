export const qeus=[
//Audio Receiver not working
//Original Charger of Device
//Box with same IMEI
//Bill with same IMEI
//ye nai kare
//abhi ke liye ye bas h
					{
						ques_id:'q001',
						ques:'Is your Front Camera Working',
						type:1,
						typeOfWeightage:'absolute',
						weightage:500
						answer:0,
						
					},
					{
						ques_id:'q002',
						ques:'Is your Back Camera  Working',
						type:1,
						typeOfWeightage:'absolute',
						weightage:800
						answer:1,
						
					},
					{
						ques_id:'q003',
						ques:'Is your Volume Button working',
						type:1,
						typeOfWeightage:'absolute',
						weightage:300
						answer:1,
						
					},
					{
						ques_id:'q004',
						ques:'Is your Back Camera Working',
						type:1,
						typeOfWeightage:'absolute',
						weightage:800
						answer:1,
						
					},
					{
						ques_id:'q005',
						ques:'Is your Finger Touch working',
						type:1,
						typeOfWeightage:'absolute',
						weightage:1000
						answer:0,
						
					},
					{
						ques_id:'q006',
						ques:'Is your WiFi  working',
						type:1,
						typeOfWeightage:'absolute',
						weightage:1000
						answer:0,
						
					},
					{
						ques_id:'q007',
						ques:'Is your Battery working',
						type:1,
						typeOfWeightage:'absolute',
						weightage:1000
						answer:0,
						
					},
					{
						ques_id:'q008',
						ques:'Is your Speaker working',
						type:1,
						typeOfWeightage:'absolute',
						weightage:1000
						answer:0,
						
					},
					{
						ques_id:'q009',
						ques:'Is your Power Button working',
						type:1,
						typeOfWeightage:'absolute',
						weightage:1000
						answer:0,
						
					},
					{
						ques_id:'q010',
						ques:'Is your Power Button working',
						type:1,
						typeOfWeightage:'absolute',
						weightage:1000
						answer:0,
						
					},
					{
						ques_id:'q009',
						ques:'Is your Charging POrt working',
						type:1,
						typeOfWeightage:'absolute',
						weightage:1000
						answer:0,
						
					},
					{
						ques_id:'q011',
						ques:'Is your Face Sensor working',
						type:1,
						typeOfWeightage:'absolute',
						weightage:1000
						answer:0,
						
					},
					{
						ques_id:'q012',
						ques:'Is your Touch Screen working',
						type:1,
						typeOfWeightage:'absolute',
						weightage:1000
						answer:0,
						
					},
					{
						ques_id:'q013',
						ques:'Does it have dents?',
						type:2,						
						noOfSubAttributes:2,
						typeOfWeightage:'percent',
						answer:1,
						subAttributes:
						[
								
								{
									ques:'2 or less minor body dents'
									id:'01',
									answer:0
									weightage:0.2
								},
								{
									ques:'Multiple/heavy visible body dents'
									id:'02',
									answer:1
									weightage:0.4
								},
							
						]
					}
					{
						ques_id:'q014',
						ques:'Does it have Dead Pixels/Spots on screen',
						type:2,						
						noOfSubAttributes:3,
						typeOfWeightage:'percent',
						answer:1,
						subAttributes:
						[
								
								{
									ques:'Does it have Minor discoloration or small spots on screen'
									id:'02',
									answer:0
									weightage:0.2
								},
								{
									ques:'Does it have Multiple visible spots on screen'
									id:'02',
									answer:1
									weightage:0.4
								},
								{
									ques:'Does it have Large/ heavy visible spots on screen'
									id:'02',
									answer:1
									weightage:0.4
								},
							
						]
					}
					{
						ques_id:'q015',
						ques:'Does it have visible lines on screen/display is faded?',
						type:2,						
						noOfSubAttributes:2,
						typeOfWeightage:'percent',
						answer:1,
						subAttributes:
						[
								
								{
									ques:'Multiple visible line(s) on Display'
									id:'02',
									answer:0
									weightage:0.2
								},
								{
									ques:'Display faded along corners'
									id:'02',
									answer:1
									weightage:0.4
								},
							
						]
					}
					{
						ques_id:'q016',
						ques:'Is the screens(not phone body) physical condition as good as new?',
						type:2,						
						noOfSubAttributes:4,
						typeOfWeightage:'percent',
						answer:1,
						subAttributes:
						[
								
								{
									ques:'1-2 scratches on screen'
									id:'01',
									answer:0
									weightage:0.2
								},
								{
									ques:'Heavy scratches on screen'
									id:'02',
									answer:0
									weightage:0.2
								},
								{
									ques:'Damaged/ Torn screen on edges'
									id:'03',
									answer:0
									weightage:0.2
								},
								{
									ques:'Screen cracked/ glass broken'
									id:'04',
									answer:1
									weightage:0.4
								},
							
						]
					}
					{
						ques_id:'q017',
						ques:'Does it have scratches on phone body(not screen)?',
						type:2,						
						noOfSubAttributes:2,
						typeOfWeightage:'percent',
						answer:1,
						subAttributes:
						[
								
								{
									ques:'2 or less minor scratches'
									id:'02',
									answer:0
									weightage:0.2
								},
								{
									ques:'Major scratches'
									id:'02',
									answer:1
									weightage:0.4
								},
							
						]
					}
					{
						ques_id:'q018',
						ques:'Does it have dents?',
						type:2,						
						noOfSubAttributes:2,
						typeOfWeightage:'percent',
						answer:1,
						subAttributes:
						[
								
								{
									ques:'2 or less minor body dents'
									id:'02',
									answer:0
									weightage:0.2
								},
								{
									ques:'Multiple/heavy visible body dents'
									id:'02',
									answer:1
									weightage:0.4
								},
							
						]
					}
					{
						ques_id:'q019',
						ques:'is the back/side panel defected?',
						type:2,						
						noOfSubAttributes:2,
						typeOfWeightage:'percent',
						answer:1,
						subAttributes:
						[
								
								{
									ques:'Missing side or back panel'
									id:'02',
									answer:0
									weightage:0.2
								},
								{
									ques:'Cracked/ broken side or back panel'
									id:'02',
									answer:1
									weightage:0.4
								},
							
						]
					}
					{
						ques_id:'q020',
						ques:'is the phone bent or there is a loose screen?',
						type:2,						
						noOfSubAttributes:2,
						typeOfWeightage:'percent',
						answer:1,
						subAttributes:
						[
								
								{
									ques:'Bent/ curved panel'
									id:'02',
									answer:0
									weightage:0.2
								},
								{
									ques:'Loose screen (Gap in screen and body)'
									id:'02',
									answer:1
									weightage:0.4
								},
							
						]
					}
];