(function(window, document, $) {
	// "use strict";
	var videoEl = document.getElementById("video-container"),
	currentFeature = '',
	endOfSegment = false,
	thePathContent = {
		"corporate": {
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. ',
			overview: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue.',
				'Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.',
				'Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere.'
			],
			videoFile: 'lib/video/FinancialCrimesScenario.mp4',
			callback: ""
		},
		"terrorist": {
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque',
			overview: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id',
				'neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere.',
				' tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla.',
				'Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.'
			],
			videoFile: 'lib/video/IntelligenceScenario.mp4',
			callback: ""
		}
	},
	theSidebarContent = {
		'corporate' :  {
			'feature1': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.</p>',
			'feature2': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.</p>',
			'feature3' : '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.</p>',
			'feature4' : '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.</p>',
			'feature5' : '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.</p>',
			'feature6' : '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.</p>',
			'feature7' : '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.</p>',
			'feature8' : '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.</p>',
			
			'final' : '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.</p><a href="#" class="sidebar-continue-button">Continue</a>',
			// start before feature messages
			'feature10' : '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.</p><a href="#" class="sidebar-next-button">Continue</a>',
			'feature11' : '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.</p><a href="#" class="sidebar-next-button">Continue</a>',
			'feature12' : '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.</p><a href="#" class="sidebar-next-button">Continue</a>',
			'feature13' : '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.</p>',
		},
		'terrorist': {
			'feature1': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.</p>',
			'feature2': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.</p>',
			'feature3' : '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.</p>',
			'feature4' : '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.</p>',
			'feature5' : '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.</p>',
			'feature6' : '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.</p>',
			'feature7' : '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.</p>',
			'feature8' : '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.</p>',
			
			'final' : '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.</p><a href="#" class="sidebar-continue-button">Continue</a>',
			// start before feature messages
			'feature10' : '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.</p><a href="#" class="sidebar-next-button">Continue</a>',
			'feature11' : '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.</p><a href="#" class="sidebar-next-button">Continue</a>',
			'feature12' : '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.</p><a href="#" class="sidebar-next-button">Continue</a>',
			'feature13' : '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia ullamcorper. Cras faucibus tortor ac venenatis tempor. Nullam bibendum auctor sapien in posuere. Sed pharetra consequat nunc vel fringilla. Nullam malesuada lorem non augue hendrerit dignissim. Fusce vel turpis ac augue fermentum aliquet.</p>',
		}
	},
	theTooltipContent = {
		'corporate1' : {
			'headline' : 'Lorem ipsum dolor sit amet, consectetur adipiscing',
			'subcopy' : 'elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia'
		},
		'corporate2' : {
			'headline' : 'Lorem ipsum dolor sit amet, consectetur adipiscing',
			'subcopy' : 'elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia'
		},
		'corporate3' : {
			'headline' : 'Lorem ipsum dolor sit amet, consectetur adipiscing',
			'subcopy' : 'elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia'
		},
		'corporate4' : {
			'headline' : 'Lorem ipsum dolor sit amet, consectetur adipiscing',
			'subcopy' : 'elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia'
		},
		'corporate5' : {
			'headline' : 'Lorem ipsum dolor sit amet, consectetur adipiscing',
			'subcopy' : 'elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia'
		},
		'corporate6' : {
			'headline' : 'Lorem ipsum dolor sit amet, consectetur adipiscing',
			'subcopy' : 'elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia'
		},
		'corporate7' : {
			'headline' : 'Lorem ipsum dolor sit amet, consectetur adipiscing',
			'subcopy' : 'elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia'
		},
		'corporate8' : {
			'headline' : 'Lorem ipsum dolor sit amet, consectetur adipiscing',
			'subcopy' : 'elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia'
		},
		'terrorist1' : {
			'headline' : 'Lorem ipsum dolor sit amet, consectetur adipiscing',
			'subcopy' : 'elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia'
		},
		'terrorist2' : {
			'headline' : 'Lorem ipsum dolor sit amet, consectetur adipiscing',
			'subcopy' : 'elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia'
		},
		'terrorist3' : {
			'headline' : 'Lorem ipsum dolor sit amet, consectetur adipiscing',
			'subcopy' : 'elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia'
		},
		'terrorist4' : {
			'headline' : 'Lorem ipsum dolor sit amet, consectetur adipiscing',
			'subcopy' : 'elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia'
		},
		'terrorist5' : {
			'headline' : 'Lorem ipsum dolor sit amet, consectetur adipiscing',
			'subcopy' : 'elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia'
		},
		'terrorist6' : {
			'headline' : 'Lorem ipsum dolor sit amet, consectetur adipiscing',
			'subcopy' : 'elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia'
		},
		'terrorist7' : {
			'headline' : 'Lorem ipsum dolor sit amet, consectetur adipiscing',
			'subcopy' : 'elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia'
		},
		'terrorist8' : {
			'headline' : 'Lorem ipsum dolor sit amet, consectetur adipiscing',
			'subcopy' : 'elit. Cras porttitor justo a aliquet tristique. Aenean aliquam quis quam sit amet congue. Integer nec tortor id neque lacinia'
		}
	},
	theVideoContent = {
		'corporate' : {
			'feature1' : {
				'tooltip' : 'corporate1',
				'startTime' : 0,
				'endTime' : 3,
				'nextClip' : 'feature2',
				'toolButton' : '.view-tab',
				'sidebarContent' : 1,
				'toolbar' : 'view'
			},
			'feature2' : {
				'tooltip' : 'corporate2',
				'startTime' : 3,
				'endTime' : 6,
				'nextClip' : 'feature3',
				'toolButton' : '.infotips-button',
				'sidebarContent' : false,
				'toolbar' : ''
			},
			'feature3' : {
				'tooltip' : 'corporate3',
				'startTime' : 6,
				'endTime' : 21,
				'nextClip' : 'before4',
				// 'nextClip' : 'feature4',
				'toolButton' : '.analyze-tab',
				'sidebarContent' : 2,
				'toolbar' : 'analyze'
			},
			'before4' : {
				'tooltip' : '',
				'startTime' : 21,
				'endTime' : 24,
				'nextClip' : 'feature4',
				'toolButton' : '',
				'sidebarContent' : false,
				'beforeSidebarContent' : 11,
				'toolbar' : ''
			},
			'feature4' : {
				'tooltip' : 'corporate4',
				'startTime' : 24,
				'endTime' : 25,
				'nextClip' : 'before5',
				'toolButton' : '.find-match-button',
				'sidebarContent' : 11,
				'toolbar' : ''
			},
			'before5' : {
				'tooltip' : '',
				'startTime' : 25,
				'endTime' : 71,
				'nextClip' : 'feature5',
				'toolButton' : '',
				'sidebarContent' : 13,
				'beforeSidebarContent' : 10,
				'toolbar' : ''
			},
			'feature5' : {
				'tooltip' : 'corporate5',
				'startTime' : 71,
				'endTime' : 72,
				'nextClip' : 'before6',
				'toolButton' : '.search-button',
				'sidebarContent' : 10,
				'toolbar' : ''
			},
			'before6' : {
				'tooltip' : '',
				'startTime' : 72,
				'endTime' : 101,
				'nextClip' : 'feature6',
				'toolButton' : '',
				'sidebarContent' : false,
				'beforeSidebarContent' : 12,
				'toolbar' : ''
			},
			'feature6' : {
				'tooltip' : 'corporate6',
				'startTime' : 101,
				'endTime' : 102,
				'nextClip' : 'feature7',
				'toolButton' : '.find-networks-button',
				'sidebarContent' : 5,
				'toolbar' : ''
			},
			'feature7' : {
				'tooltip' : 'corporate7',
				'startTime' : 102,
				'endTime' : 126,
				'nextClip' : 'dropdown',
				'toolButton' : '.copy-new-button',
				'sidebarContent' : 6,
				'toolbar' : ''
			},
			'end' : {
				'tooltip' : 'corporate8',
				'startTime' : 126,
				'endTime' : 127,
				'nextClip' : 'end',
				'toolButton' : '.new-timeline-button',
				'sidebarContent' : 7,
				'toolbar' : ''
			},
			'finish' : {
				'tooltip' : '',
				'startTime' : 127,
				'endTime' : 186,
				'nextClip' : 'finish',
				'toolButton' : '',
				'sidebarContent' : 8,
				'toolbar' : ''
			}
		},
		'terrorist' : {
			'feature1' : {
				'tooltip' : '',
				'startTime' : 0,
				'endTime' : 11,
				'nextClip' : 'feature2',
				'toolButton' : '',
				'sidebarContent' : 1,
				'beforeSidebarContent' : 9,
				'toolbar' : ''
			},
			'feature2' : {
				'tooltip' : 'terrorist1',
				'startTime' : 11,
				'endTime' : 12,
				'nextClip' : 'feature3',
				'toolButton' : '.style-tab',
				'sidebarContent' : 1,
				'toolbar' : 'style'
			},
			'feature3' : {
				'tooltip' : 'terrorist2',
				'startTime' : 12,
				'endTime' : 22,
				'nextClip' : 'feature4',
				'toolButton' : '.increase-size-button',
				'sidebarContent' : 2,
				'toolbar' : ''
			},
			'feature4' : {
				'tooltip' : 'terrorist3',
				'startTime' : 22,
				'endTime' : 34,
				'nextClip' : 'feature5',
				'toolButton' : '.analyze-tab',
				'sidebarContent' : 3,
				'toolbar' : 'analyze'
			},
			'feature5' : {
				'tooltip' : 'terrorist4',
				'startTime' : 34,
				'endTime' : 39,
				'nextClip' : 'before6',
				'toolButton' : '.find-networks-button',
				'sidebarContent' : 4,
				'toolbar' : ''
			},
			'before6' : {
				'tooltip' : '',
				'startTime' : 39,
				'endTime' : 81,
				'nextClip' : 'feature6',
				'toolButton' : '',
				'sidebarContent' : 5,
				'beforeSidebarContent' : 10,
				'toolbar' : ''
			},
			'feature6' : {
				'tooltip' : 'terrorist5',
				'startTime' : 81,
				'endTime' : 82,
				'nextClip' : 'before7',
				'toolButton' : '.social-analysis-button',
				'sidebarContent' : 5,
				'toolbar' : ''
			},
			'before7' : {
				'tooltip' : '',
				'startTime' : 82,
				'endTime' : 136,
				'nextClip' : 'feature7',
				'toolButton' : '',
				'sidebarContent' : 6,
				'beforeSidebarContent' : 11,
				'toolbar' : ''
			},
			'feature7' : {
				'tooltip' : 'terrorist6',
				'startTime' : 136,
				'endTime' : 137,
				'nextClip' : 'before8',
				'toolButton' : '.filters-button',
				'sidebarContent' : 7,
				'toolbar' : ''
			},
			'before8' : {
				'tooltip' : '',
				'startTime' : 137,
				'endTime' : 168,
				'nextClip' : 'feature8',
				'toolButton' : '',
				'sidebarContent' : false,
				'beforeSidebarContent' : 12,
				'toolbar' : ''
			},
			'feature8' : {
				'tooltip' : 'terrorist7',
				'startTime' : 168,
				'endTime' : 170,
				'nextClip' : 'dropdown',
				'toolButton' : '.copy-new-button',
				'sidebarContent' : false,
				'toolbar' : ''
			},
			'end' : {
				'tooltip' : 'terrorist8',
				'startTime' : 170,
				'endTime' : 173,
				'nextClip' : 'end',
				'toolButton' : '.new-timeline-button',
				'sidebarContent' : false,
				'toolbar' : ''
			},
			'finish' : {
				'tooltip' : '',
				'startTime' : 173,
				'endTime' : 236,
				'nextClip' : 'finish',
				'toolButton' : '',
				'sidebarContent' : 8,
				'toolbar' : ''
			}
		}
	},
	theFinalSceneContent = {
		'corporate' : {
			'buttonHeader' : '<strong>Investigate</strong> a Terrorist Attack',
			'buttonOther' : 'terrorist'
		},
		'terrorist' : {
			'buttonHeader' : '<strong>Investigate</strong> Corporate Tax Evasion',
			'buttonOther' : 'corporate'
		}
	},
	theApp = {
		init: function() {
			$('.scene1').fadeIn('slow');

			$('.start-button').on('click', function(){
				var pathSelect = $(this).data('start-button');
				theModal.populateModal(pathSelect);
				theApp.changeScene(1, 1, pathSelect);
				theToolbar.init(pathSelect);
				return false;
			});
		},
		changeScene: function(current, i, pathSelect) {
			$('.scene'+i).removeClass('active').fadeOut(function(){
				$('.scene'+(i+1)).fadeIn().addClass('active');
				if(i == 1){
					theVideo.init(pathSelect);
					theToolbar.loadToolbar('home');
					setTimeout(function(){
						theModal.init(pathSelect);
					}, 200);
				}else{
					finalScene.init(pathSelect);
				}
			});
		},
		reset: function(next){
			theApp.clearScenario(function(next){
				theApp.changeScene(3, 1, next);
				theModal.populateModal(next);
				theToolbar.init(next);
				finalScene.destroy();	
			})
		},
		clearScenario: function(theCallback){
			theSidebar.destroySidebarContent();
			theTooltip.destroy();
			theVideo.reset();
			setTimeout(function(){
				if (theCallback) {
					theCallback();
				}
			}, 300);
		}
	},
	finalScene = {
		init: function(pathSelect){
			finalScene.populateScene(pathSelect);

			$('.final-button').on('click', function(){
				var next = $(this).data('final-button');
				// console.log(next);
				// return false;
				if(next){
					theApp.changeScene(3, 1, next);
					theModal.populateModal(next);
					theToolbar.init(next);
					finalScene.destroy();
				}else{
					theApp.init();
					finalScene.destroy();
				}
			});
		},
		populateScene : function(pathSelect){
			var source   = $("#finalScene").html();
	            var template = Handlebars.compile(source);
	            var context = {
	            	buttonTitle: theFinalSceneContent[pathSelect]['buttonHeader'],
	            	buttonOther: theFinalSceneContent[pathSelect]['buttonOther']
	            };
	            var theHTML = template(context);

	            var $theFinalScene = $(document.createElement('div'));
	            $theFinalScene.attr("class", "scene scene3 active");
	            $theFinalScene.html(theHTML);

	            $theFinalScene.appendTo("body .container");
		},
		destroy: function(theCallback){
			$('.scene3').fadeOut(400, function() {
				$(this).remove();
				if (theCallback) {
					theCallback();
				}
			});
		},
	}
	theModal = {
		init: function(pathSelect){
			theModal.changeSlide(1);
			$('.slide-change').on('click', function(){
				var nextSlide = $(this).data('instruction-slide');
				if(!$(this).hasClass('active')){
					theModal.changeSlide(nextSlide);
				}
				return false;
			});
			$('.instruction-begin-button').on('click', function(){
				theModal.destroy(theVideo.playSegment(pathSelect, 'feature1', true));
				return false;
			});
		},
		populateModal: function(pathSelect){
			/**
	             * Populate the modal with the content that corresponds with the
	             * selected option on the starting scene
	             * @param {String} pathSelect - the selected content path option
	             */
			
			var source   = $("#instructions").html();
	            var template = Handlebars.compile(source);
	            var context = {
	            	title: thePathContent[pathSelect]["title"],
	            	overview: thePathContent[pathSelect]["overview"]
	            };
	            var theHTML = template(context);

	            var $theFullOverlay = $(document.createElement('div'));
	            $theFullOverlay.attr("class", "instruction-overlay");

	            var $theContentOverlay = $(document.createElement('div'));
	            $theContentOverlay.attr("class", "instruction-modal ");
	            $theContentOverlay.html(theHTML);

	            $theContentOverlay.appendTo(".container");
	            $theFullOverlay.appendTo(".container").fadeIn(300);
		},
		changeSlide: function(slideNum){
			 /**
	             * Update the active slide on the modal carousel
	             * @param {Integer} slideNum - the slide currently being triggered
	             */
			var activeSlide = $('.slide-container .slide.active').data('instruction-slide');

			if(activeSlide){
				if(activeSlide > slideNum){
					$('.slide-container .slide'+activeSlide).animate({left:'120%'}, 400).removeClass('active');
				}else{
					$('.slide-container .slide'+activeSlide).animate({left:'-120%'}, 400).removeClass('active');
				}
			}
			$('.slide-container .slide'+slideNum).animate({left:'0'}, 500).addClass('active');
			theModal.changeDots(slideNum);
		},
		changeDots: function(slideNum) {
			 /**
	             * Update the active slide dot on the modal carousel
	             * @param {Integer} slideNum - the slide dot currently being triggered
	             */
	             $('.slide-dots .dot').each(function(){
	             	if(slideNum == $(this).data('instruction-slide')){
	             		$(this).addClass('active');
	             	}else{
	             		$(this).removeClass('active');
	             	}
	             })
		},
		destroy: function(theCallback){
			$('.instruction-overlay').fadeOut(400, function() {
				$(this).remove();
			});
			$('.instruction-modal').fadeOut(400, function() {
				$(this).remove();
				if (theCallback) {
					eval(theCallback);
				}
			});
		}
	},
	theSidebar = {
		init: function(pathSelect){
			$('body').on('click', '.context-sidebar-button', function(){
				theSidebar.toggleSidebar(pathSelect);
				return false;
			});
			$('body').on('click', '.sidebar-next-button', function(){
				var next = theSidebar.returnNext();
				if(next == 'end'){
					theTooltip.destroy(
						theToolbar.hideDropdown(
							theVideo.play()
						)
					);
				}else if(next=='dropdown'){
					theTooltip.destroy(
						theToolbar.showDropdown(
							theVideo.playSegment(pathSelect, 'end', true)
						)
					);
				}else{
					theSidebar.closeSidebar(function(){
						theVideo.playSegment(pathSelect, next, false)
					});
				}
				console.log(next);
				return false;
			});
			// theSidebar.destroySidebarContent(theSidebar.populateSidebar(1, pathSelect));
		},
		toggleSidebar: function(pathSelect){
			$('.context-sidebar').toggleClass('active');
			if(endOfSegment === false){
				if(videoEl.paused !== false){
					theVideo.playSegment(pathSelect, currentFeature, false);
				}else{
					theVideo.pause();
				}
			}
		},
		openSidebar: function(){
			$('.context-sidebar').addClass('active');
			setTimeout(function(){
				theVideo.pause();
			}, 200);
			
		},
		closeSidebar: function(theCallback){
			$('.context-sidebar').removeClass('active');
			theCallback();
		},
		bounceSidebar: function(){
			$('.context-sidebar-button').animate({ right: -60 }, {duration: 100}).delay(1500).animate({ right: -30 }, {duration: 100});
		},
		populateSidebar: function(i, pathSelect, next){
			
			var source   = $("#sidebarContent").html();
	            var template = Handlebars.compile(source);
	            if(i == 'final'){
	            	var context = {
		            	content: theSidebarContent[pathSelect][i],
		            };
	            }else{
		            var context = {
		            	content: theSidebarContent[pathSelect]['feature'+i],
		            };
	            }
	            var theHTML = template(context);


	            var $theSidebarContainer = $(document.createElement('div'));
	            $theSidebarContainer.attr("class", "context-sidebar-content").attr('data-next', next);
	            $theSidebarContainer.html(theHTML);

	            if($('.context-sidebar-content')){
	            	theSidebar.destroySidebarContent();
	            }
          		$theSidebarContainer.appendTo(".context-sidebar");
          		theSidebar.openSidebar();
		},
		destroySidebarContent: function(theCallback){
			$('.context-sidebar-content').fadeOut(0, function() {
				$(this).remove();
				if (theCallback) {
					theCallback();
				}
			});
		},
		returnNext: function(){
			var next = $('.context-sidebar-content').attr('data-next');
			return next;
		}
	},
	theVideo = {
		init: function(pathSelect) {
			theSidebar.init(pathSelect);
			theVideo.loadVideo(pathSelect);
			$(document).on('click', '.sidebar-continue-button', function(){
				theApp.changeScene(2, 2, pathSelect);
			})
			function endVideoHandler() {
				theSidebar.populateSidebar('final',pathSelect);
				theSidebar.openSidebar();
			}
			videoEl.addEventListener('ended',endVideoHandler,false);
		},
		play: function(){
			videoEl.play();
		},
		playSegment: function(pathSelect, feature, hasSidebar){
			// clearInterval(videoInterval);
			currentFeature = feature;
			endOfSegment = false;
			
			if(hasSidebar && theVideoContent[pathSelect][feature]['sidebarContent'] !== false){
				theSidebar.populateSidebar(
					theVideoContent[pathSelect][feature]['sidebarContent'], pathSelect
				);
			}

			videoEl.currentTime = theVideoContent[pathSelect][feature]['startTime'];
			videoEl.play();
			
			if(theVideoContent[pathSelect][feature]['endTime']){
				var videoInterval = setInterval(function() {
					// $('.frameCounter').text('Time: '+videoEl.currentTime+ ' seconds');
					if( videoEl.currentTime > theVideoContent[pathSelect][feature]['endTime']){
						theVideo.pause(function(){
							if(theVideoContent[pathSelect][feature]['toolButton']){
								theTooltip.populateTooltip(
									theVideoContent[pathSelect][feature]['tooltip'],
									theVideoContent[pathSelect][feature]['nextClip'],
									theVideoContent[pathSelect][feature]['toolButton']
								);
								theToolbar.activateButton(
									theVideoContent[pathSelect][feature]['toolButton'],
									theVideoContent[pathSelect][feature]['toolbar']
								);
							}else {
								theSidebar.populateSidebar(
									theVideoContent[pathSelect][feature]['beforeSidebarContent'], 
									pathSelect, 
									theVideoContent[pathSelect][feature]['nextClip']
								);
							}
							endOfSegment = true;
							clearInterval(videoInterval);
						});
					} 
				},100);	
			}
		},
		pause: function(theCallback){
			videoEl.pause();
			if (theCallback) {
				theCallback();
			}
		},
		loadVideo: function(pathSelect) {
			videoEl.src = thePathContent[pathSelect]['videoFile'];
			videoEl.load();
			// theVideo.playVideo(videoEl);
		},
		endingMessage: function(){

		},
		reset: function(){
			videoEl.src = '';
		}
	},
	theTooltip = {
		init: function(){
			
		},
		populateTooltip: function(feature, next, button){
			var source   = $("#tooltipTemplate").html();
	            var template = Handlebars.compile(source);
	            var context = {
	            	headline: theTooltipContent[feature]['headline'],
	            	subcopy: theTooltipContent[feature]['subcopy']
	            };
	            var theHTML = template(context);

	            var $theTooltipContainer = $(document.createElement('div'));
	            $theTooltipContainer.attr("class", "scene-tooltip").attr('data-next', next);
	            $theTooltipContainer.html(theHTML);

	            $theTooltipContainer.appendTo(".scene2");
	            setTimeout(function(){
		            theTooltip.positionTooltip(
		            	$theTooltipContainer,
		            	button
				);
		       }, 200);
		},
		destroy: function(theCallback){
			$('.scene-tooltip').fadeOut(400, function() {
				$(this).remove();
				if (theCallback) {
					theCallback();
				}
			});
		},
		positionTooltip: function(tooltip, button){
			var p = $('.toolbar.active '+button);
			var position = p.offset();
			var top = (position.top - $('.container').offset().top);
			var originalLeft = (position.left - $('.container').offset().left);
			var left = (originalLeft - (parseInt(tooltip.css("width")) /2) + (p.width()/2));
			if (left >= 0) {
				var newLeft = left;
			}else {
				var newLeft = 10;
				$('.tooltip-arrow').css('left', left);
			}
			tooltip.css({"left": newLeft, 'top': (top + p.height() +10 )});
		},
		returnNext: function(){
			var next = $('.scene-tooltip').attr('data-next');
			return next;
		}
	},
	theToolbar = {
		init: function(pathSelect){
			$('.toolbar > .disabled').on('click', function(){
				return false;
			});
			$('.scene-header a').on('click', function(){
				var next = theTooltip.returnNext();
				if(next == 'end'){
					theTooltip.destroy(
						theToolbar.hideDropdown(
							theVideo.playSegment(pathSelect, 'finish', true)
						)
					);
				}else if(next=='finish'){	
					theTooltip.destroy(
						theToolbar.hideDropdown(
							theVideo.play()
						)
					);
				}else if(next=='dropdown'){
					theTooltip.destroy(
						theToolbar.showDropdown(
							theVideo.playSegment(pathSelect, 'end', true)
						)
					);
				}else{
					theTooltip.destroy(
						theVideo.playSegment(pathSelect, next, true)
					);
				}
			});
		},
		loadToolbar: function(barName){

			$('.toolbar.active').each(function(){
				$(this).removeClass('active').fadeOut(0);
			}).queue(function(){
				$('.toolbar.'+barName).fadeIn(100).addClass('active').dequeue();
			});
		},
		activateButton: function(button, toolbar) {
			$('.toolbar.active '+button).removeClass('disabled').on('click', function(){
				if(toolbar.length){
					theToolbar.loadToolbar(toolbar);
				}
				$('.toolbar.active > a').each(function(){
					$(this).removeClass('active');
				}).queue(function(){
					$('.toolbar.active '+button).addClass('active').addClass('disabled').dequeue();
				});
			});
		},
		showDropdown: function(callback){
			$('.toolbar-dropdown').slideDown(function(){
				eval(callback);
			});
		},
		hideDropdown: function(callback){
			$('.toolbar-dropdown').slideUp(function(){
				eval(callback);
			});
		}
	}

	theApp.init();
	// theApp.changeScene(2, 2, 'corporate');
	// theModal.init();
	// theSidebar.init();
	// theVideo.init('corporate')	;
	// theToolbar.init();

}(this, this.document, this.jQuery));