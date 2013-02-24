;****************************************
; D7 Base CS Platform
;****************************************

 api  = 2
 core = 7.x

 projects[drupal][type]                     = core
 projects[drupal][version]                   = 7

;****************************************
; Features
;****************************************
 projects[d7_advertisement_banners][type]           = module
 projects[d7_advertisement_banners][download][type] = git
 projects[d7_advertisement_banners][download][url]  = git@github.com:centresource/d7_advertisement_banners.git

 projects[d7_basic_page][type]                  		 = module
 projects[d7_basic_page][download][type]        		 = git
 projects[d7_basic_page][download][url]         		 = git@github.com:centresource/d7_basic_page.git

 projects[d7_comments][type]                    		 = module
 projects[d7_comments][download][type]          		 = git
 projects[d7_comments][download][url]           		 = git@github.com:centresource/d7_comments.git

 projects[d7_events][type]                      		 = module
 projects[d7_events][download][type]            		 = git
 projects[d7_events][download][url]             		 = git@github.com:centresource/d7_events.git

 projects[d7_base_feature][type]            				 = module
 projects[d7_base_feature][download][type]  				 = git
 projects[d7_base_feature][download][url]   				 = git@github.com:centresource/d7_base_feature.git

 projects[d7_base_wysiwyg][type]                 	 = module
 projects[d7_base_wysiwyg][download][type]       	 = git
 projects[d7_base_wysiwyg][download][url]        	 = git@github.com:centresource/d7_base_wysiwyg.git

 projects[d7_news][type]                        		 = module
 projects[d7_news][download][type]              		 = git
 projects[d7_news][download][url]               		 = git@github.com:centresource/d7_news.git

 projects[d7_photos][type]                      		 = module
 projects[d7_photos][download][type]            		 = git
 projects[d7_photos][download][url]             		 = git@github.com:centresource/d7_photos.git

 projects[d7_simple_blog][type]                 		 = module
 projects[d7_simple_blog][download][type]       		 = git
 projects[d7_simple_blog][download][url]        		 = git@github.com:centresource/d7_simple_blog.git

 projects[d7_videos][type]                      		 = module
 projects[d7_videos][download][type]            		 = git
 projects[d7_videos][download][url]             		 = git@github.com:centresource/d7_videos.git

 projects[d7_views_feature][type]               		 = module
 projects[d7_views_feature][download][type]     		 = git
 projects[d7_views_feature][download][url]      		 = git@github.com:centresource/d7_views_feature.git


;****************************************
; Modules
;****************************************

; contrib
;
 projects[]																= addressfield
 projects[]																= admin_menu
 projects[]																= auto_entitylabel
 projects[]																= backup_migrate
 projects[]																= backup_migrate_files
 projects[]																= better_formats
 projects[]																= calendar
 projects[captcha][version]								= 1.0-beta2
 projects[]																= ckeditor_link
 projects[]																= colorbox
 projects[]																= comment_notify
 projects[]																= context
 projects[]																= ctools
 projects[]																= date
 projects[]																= demo
 projects[]																= devel
 projects[]																= email
 projects[]																= entity
 projects[]																= entity_autocomplete
 projects[eva][version]										= 1.x-dev
 projects[]																= features
 projects[]																= features_override
 projects[]																= fences
 projects[]																= field_collection
 projects[]																= field_collection_table
 projects[]																= file_entity
 projects[]																= field_group
 projects[]																= fontyourface
 projects[]																= geofield
 projects[]																= geophp
 projects[]																= geocoder
 projects[]																= globalredirect
 projects[]																= google_analytics
 projects[]																= image_resize_filter
 projects[]																= jplayer
 projects[]																= libraries
 projects[]																= link
 projects[]																= location
 projects[media][version]									= 2.0-unstable7
 projects[]																= media_vimeo
 projects[media_youtube][version]					= 2.x-dev
 projects[]																= mediaelement
 projects[]																= menu_attributes
 projects[]																= menu_block
 projects[]																= module_filter
 projects[]																= mollom
 projects[]																= multiform
 projects[]																= multiselect
 projects[]																= nodequeue
 projects[]																= nodereference_url
 projects[]																= openlayers
 projects[openlayers_proximity][version]	= 2.x-dev
 projects[]																= pathauto
 projects[]																= plupload
 projects[]																= quicktabs
 projects[]																= recaptcha
 projects[]																= references
 projects[]																= rules
 projects[]																= scheduler
 projects[]																= security_review
 projects[]																= speedy
 projects[]																= storage_api
 projects[]																= strongarm
 projects[]																= styles
 projects[]																= superfish
 projects[]																= token
 projects[]																= transliteration
 projects[]																= twitter
 projects[]																= views
 projects[]																= views_slideshow
 projects[]																= webform
 projects[]																= wysiwyg

;****************************************
; Themes
;****************************************

 projects[]	= mothership

;****************************************
; Libraries in sites/all/libraries
;****************************************

; CKEditor library for modules CKEditor (ckeditor) and Wysiwyg API (wysiwyg).
 libraries[ckeditor][directory_name]        = ckeditor
 libraries[ckeditor][download][type]         = get
 libraries[ckeditor][download][url]          = http://download.cksource.com/CKEditor/CKEditor/CKEditor%203.6.4/ckeditor_3.6.4.tar.gz

; Colorbox plugin library for module Colorbox (colorbox).
 libraries[colorbox][directory_name]        = colorbox
 libraries[colorbox][download][type]         = get
 libraries[colorbox][download][url]          = http://jacklmoore.com/colorbox/colorbox.zip

; JPlayer Audio Player library for module JPlayer (jplayer).
 libraries[jplayer][directory_name]         = jplayer
 libraries[jplayer][download][type]          = get
 libraries[jplayer][download][url]           = http://www.jplayer.org/latest/jQuery.jPlayer.2.2.0.zip

; Jquery.cycle library
 libraries[jquery.cycle][directory_name]    = jquery.cycle
 libraries[jquery.cycle][download][type]     = get
 libraries[jquery.cycle][download][url]      = https://raw.github.com/malsup/cycle/master/jquery.cycle.all.js
 libraries[jquery.cycle][download][filename] = jquery.cycle.all.min.js

; Plupload plugin library for module Plupload (plupload).
 libraries[plupload][directory_name]        = plupload
 libraries[plupload][download][type]         = get
 libraries[plupload][download][url]          = https://github.com/downloads/moxiecode/plupload/plupload_1_5_4.zip

; Superfish plugin library for module Superfish (superfish).
 libraries[superfish][directory_name]       = superfish
 libraries[superfish][download][type]        = get
 libraries[superfish][download][url]         = https://github.com/mehrpadin/Superfish-for-Drupal/zipball/master

; MediaElement library
 libraries[media.element][directory_name]    = mediaelement
 libraries[media.element][download][type]     = get
 libraries[media.element][download][url]      = https://github.com/johndyer/mediaelement/zipball/master
