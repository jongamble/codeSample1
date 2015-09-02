(function(window, document, $) {
	// "use strict";
	var videoEl = document.getElementById("video-container"),
	currentFeature = '',
	endOfSegment = false,
	thePathContent = {
		"corporate": {
			title: 'One of the world&rsquo;s leading tax authorities has been alerted to a potential case of corporate tax evasion &mdash; the company under investigation is <em>&lsquo;Sustainable Homes&rsquo;</em>.',
			overview: [
				'It is suspected that <em>Sustainable Homes</em> has been making charitable donations to obtain corporate tax relief. ',
				'The money is allegedly moving through a number of third parties before ultimately making its way back into one of the Sustainable Homes&rsquo; R&amp;D projects, generating unwarranted tax credit.',
				'Our analyst has just collected financial transactions from multiple disparate sources and now needs to analyze the data to identify if there is any truth to these allegations. He needs your help.'
			],
			videoFile: 'lib/video/FinancialCrimesScenario.mp4',
			callback: ""
		},
		"terrorist": {
			title: 'A coordinated terrorist attack involving multiple individuals has taken place. Our intelligence analyst has been urgently tasked with identifying potential key participants through cellular call data collected from the area and time of attack.',
			overview: [
				'Our analyst has been made aware of two individuals&rsquo; phone numbers: one individual who is suspected of being involved and one individual who was apprehended during the attack.',
				'Our analyst&rsquo;s task is to identify other potential individuals involved in the attack and establish a possible &ldquo;chain-of-command&rdquo; to help identify those whom may have planned or ordered the attacks.',
				'After going through the process of approvals to get the necessary cellular call data, our analyst has imported the data into i2 Analyst&rsquo;s Notebook and filtered out the &ldquo;background noise&rdquo; in the data to highlight a smaller calls-of-interest list.',
				'Our analyst begins making sense of the data by searching for the two phones identified by previous intelligence tasks.'
			],
			videoFile: 'lib/video/IntelligenceScenario.mp4',
			callback: ""
		}
	},
	theSidebarContent = {
		'corporate' :  {
			'feature1': '<p>The financial analyst has been drawn to the unconnected transactions in the top right hand corner of the chart. As the request was for all related activity, it seems strange that there is this unconnected set of transaction information. This is where we start questioning the data.</p>',
			'feature2': '<p>One of the underlying analytics that infotips can access is analysis attributes, these are pre-calculated values based on the structure of the chart.</p><p>The infotips for the financial transaction links in this chart show three Entity Sum Links analysis attributes.</p><p>i. Entity Sum Links to &ndash; money coming in (credits)</p><p>ii. Entity Sum Links from &ndash; money going out (debits)</p><p>iii. Entity Sum Links flow &ndash; net difference between credits and debits</p><p>Two of these accounts have a zero Entity Sum Link flow, which is interesting as no other accounts demonstrate this behavior. Our analyst suspects that they may have been set up as &ldquo;burner&rdquo; accounts.</p>',
			'feature3' : '<p>After finding a few matching entities and merging them, the analyst is now trying to uncover financial networks that are connected to Sustainable Homes and the suspected burner accounts.</p>',
			'feature4' : '<p>To pinpoint potential interconnectivity between the company under investigation, our analyst is locating the suspected burner accounts through i2 Analyst&rsquo;s Notebook&rsquo;s Search feature.</p>',
			'feature6' : '<p>Clicking on &ldquo;Find Connecting Network&rdquo; uncovers possible networks that connect Sustainable Homes charitable donations account, the suspected burner accounts, and the research and development project account. These networks also establish financial transactions that might have been made between these entities.</p>',
			'feature7' : '<p>After discovering the potential networks of financial transactions between the accounts of interest our analyst wants to view just these transactions in a new timeline chart to view the same data from a different perspective.</p>',
			'feature8' : '<p>Next our analyst will review a timeline of all possible connections between the target accounts.</p><p>After that, the analyst will use <em>Find Path</em> to identify the exact flow of financial transactions relating to the allegation that connects the source (Sustainable Homes) and destination (R&amp;D Project) banking accounts.</p>',
			'final' : '<p>Thanks to your mastery of the smart analytics in i2 Analyst&rsquo;s Notebook, our analyst was able to quickly &lsquo;follow the money&rsquo; in just a few clicks and clearly present his findings despite those involved in this suspected fraud case adding addition &lsquo;noise&rsquo; into the system.</p><a href="#" class="sidebar-continue-button">Continue</a>',
			// start before feature messages
			'feature10' : '<p>To pinpoint potential interconnectivity between the company under investigation, our analyst is locating accounts owned by Sustainable Homes through the i2 Analyst&rsquo;s Notebook&rsquo;s Search feature.</p><a href="#" class="sidebar-next-button">Continue</a>',
			'feature11' : '<p>i2 Analyst&rsquo;s Notebook features smart analytics that help analysts overcome the challenges typically associated with aligning and organizing data that comes from disparate systems, such as different data modeling techniques and data entry mistakes.</p><p>For example, &ldquo;Find Matching Entities&rdquo; intelligently scores potential matches that help analysts identify duplication.</p><a href="#" class="sidebar-next-button">Continue</a>',
			'feature12' : '<p>After finding a few matching entities and merging them, the analyst is now trying to uncover financial networks that are connected to Sustainable Homes and the suspected burner accounts.</p><a href="#" class="sidebar-next-button">Continue</a>',
			'feature13' : '<p>Not resolving potential duplication can lead to a broken series of events or networks. In this next step the analyst will &ldquo;Find&rdquo; and &ldquo;Merge&rdquo; matching entities.</p>',
		},
		'terrorist': {
			'feature1': '<p>To identify the other potential participants and chain of command in this terrorist attack, the analyst starts his analysis by focusing on the two known phone numbers.</p>',
			'feature2': '<p>In this case, the analyst will highlight the associated phones of the previously identified suspects by making them larger and putting them in red text.</p><p>Once this modification is made, you will notice how the associated phones will stand out on the chart, making them easy to track as further analysis is performed.</p>',
			'feature3': '<p>Pay attention here, because as the two previously identified suspects&rsquo; phones are highlighted in red, it becomes clear they are not directly linked to each other. After this, the analyst will need to dig deeper to determine if they are indirectly connected to each other.</p>',
			'feature4': '<p>The Analyze ribbon features a capability called &ldquo;Find Connecting Network&rdquo; that will help our analyst uncover intermediary connections between target entities via telephone communications.</p><p>In this instance, the analyst will detect six other individuals that form a path of communication. Discovering these pathways by analyzing communication connections will help identify others that also may have been involved in the attack.</p>',
			'feature5': '<p>After the connecting networks are highlighted, our analyst will then be able to easily narrow the scope of the data by selecting the entities that are directly connected to the 6 interconnected individuals, alongside the original two suspects to highlight a targeted network.</p><p>After selecting this data, the analyst will then copy it to a new chart.</p>',
			'feature6': '<p>Using the &ldquo;betweenness&rdquo; algorithm, the Social Network Analysis process will highlight three entities&ndash;over and above the two suspects previously identified&ndash;that are in a strong position in the network to control the communication flow. Apprehending these individuals could have the greatest impact in breaking up this network&rsquo;s future activities.</p>',
			'feature7': '<p>The <em>Filters and Histograms</em> capability allows analysts to view the distribution of items based on item properties.  Our analyst is using the Filters and Histograms capability to understand the temporal spread of key phone calls. This process helps identify calls that were made prior to the attack that may have given approval to initiate the terrorist operation, and calls during the attack between individuals involved in coordinating the operation.</p>',
			'feature8': '<p>The timeline will help identify: </p><p>i. the two phones that were involved earlier in the timeline as the individuals that planned and initiated the attack (this will be highlighted in red in the final briefing chart)</p><p>ii. The phone of the suspected &lsquo;on-the ground commander&rsquo; who primed the attack teams (this will be highlighted in green)</p><p>iii. The other two phones that became involved later as those individuals who made up part of the attack teams (this will be highlighted in blue)</p>',
			'final' : '<p>Starting with just two suspects&rsquo; known phone numbers, i2 Analyst&rsquo;s Notebook helped our analyst identify critical insights about both the chain of command timeline and how these terrorist attacks were carried out.</p><a href="#" class="sidebar-continue-button">Continue</a>',
			'feature9' : '<p>The new capabilities under the &ldquo;Style&rdquo; ribbon help analysts highlight specific entities on a chart by enabling them to change the visual appearance of the icons or text.</p><a href="#" class="sidebar-next-button">Continue</a>',
			'feature10' : '<p>Social Network Analysis is helpful for identifying entities that may act as &ldquo;brokers&rdquo; or &ldquo;gatekeepers&rdquo; to enable the flow of information between different parts of an organization. Our analyst is utilizing the Social Network Analysis capability to surface insights about those who may be controlling the flow of communication across the group, and highlight individuals who were potentially directing the activities of the group during the attack.</p><a href="#" class="sidebar-next-button">Continue</a>',
			'feature11' : '<p>Next, our analyst has imported all of the individual calls made between the 5 phones previously identified and is going to use the <em>Filters and Histograms</em> capability to understand the temporal spread of key phone calls.</p><p>This process helps identify calls that were made prior to the attack that may have given approval to initiate the terrorist operation, and calls during the attack between individuals involved in coordinating the operation.</p><a href="#" class="sidebar-next-button">Continue</a>',
			'feature12' : '<p>Now our analyst wants to understand any likely &ldquo;chain-of-command&rdquo; to identify individuals that may have planned, ordered, and coordinated the attack.</p><p>Our analyst utilizes the Copy to New Timeline feature to create a timeline chart that shows the temporal sequence of calls.</p><a href="#" class="sidebar-next-button">Continue</a>'
		}
	},
	theTooltipContent = {
		'corporate1' : {
			'headline' : 'Select the &ldquo;View&rdquo; ribbon',
			'subcopy' : 'so the analyst can begin uncovering contextual insights about the data.'
		},
		'corporate2' : {
			'headline' : 'Check &ldquo;Infotips&rdquo;',
			'subcopy' : 'to access underlying information that&rsquo;s key to assisting the analyst&rsquo;s thought process and next steps.'
		},
		'corporate3' : {
			'headline' : 'Select the &ldquo;Analyze&rdquo; ribbon.',
			'subcopy' : 'This ribbon provides analysts with a variety of ways to visualize data and find connections.'
		},
		'corporate4' : {
			'headline' : 'Click &ldquo;Find Matching Entity&rdquo;',
			'subcopy' : 'to enable algorithms and establish connections between potentially matching items that have been imported from disparate data sources.'
		},
		'corporate5' : {
			'headline' : 'Click &ldquo;Search&rdquo;',
			'subcopy' : 'to easily discover items of interest in the chart data.'
		},
		'corporate6' : {
			'headline' : 'Click &ldquo;Find Connecting Network&rdquo;',
			'subcopy' : 'to discover how several entities of interest are connected through their relationships.'
		},
		'corporate7' : {
			'headline' : 'Click &ldquo;Copy to New Chart.&rdquo;',
			'subcopy' : ''
		},
		'corporate8' : {
			'headline' : 'Click &ldquo;Copy to New Timeline Chart&rdquo;',
			'subcopy' : 'to translate the network into a timeline chart with pre-set analytics.'
		},
		'terrorist1' : {
			'headline' : 'Click &ldquo;Style&rdquo;',
			'subcopy' : 'to begin formatting the data&rsquo;s visual appearance.'
		},
		'terrorist2' : {
			'headline' : 'Click &ldquo;Increase Size&rdquo;',
			'subcopy' : 'to make the selected entities larger.'
		},
		'terrorist3' : {
			'headline' : 'Select the &ldquo;Analyze&rdquo; ribbon',
			'subcopy' : 'to help the analyst dig deeper.'
		},
		'terrorist4' : {
			'headline' : 'Click &ldquo;Find Connecting Network&rdquo;',
			'subcopy' : 'to analyze the data our analyst has selected and identify a network where the entities interconnect.'
		},
		'terrorist5' : {
			'headline' : 'Click &ldquo;Social Network Analysis&rdquo;',
			'subcopy' : 'to identify potential key entities.'
		},
		'terrorist6' : {
			'headline' : 'Click &ldquo;Filters and Histograms&rdquo;',
			'subcopy' : 'to visualize different ways the data can be distributed.'
		},
		'terrorist7' : {
			'headline' : 'Click &ldquo;Copy to New Chart.&rdquo;',
			'subcopy' : ''
		},
		'terrorist8' : {
			'headline' : 'Click &ldquo;Copy to New Timeline Chart&rdquo;',
			'subcopy' : 'to translate the network into a timeline chart with pre-set analytics.'
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