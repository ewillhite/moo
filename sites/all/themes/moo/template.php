<?php

// If Front Page
if (drupal_is_front_page()) {
  drupal_add_css(drupal_get_path('theme', 'moo') .'/assets/css/front.css', array('group' => CSS_THEME));
  drupal_add_js(drupal_get_path('theme', 'moo') .'/assets/js/front.js', array('group' => JS_THEME));
}

// Views Pre-Render Function
function moo_views_pre_render(&$view) {
  if($view->name == 'videos') {
    if ($view->current_display == 'block_2' || $view->current_display == 'videos_page') {
      drupal_add_css(drupal_get_path('theme', 'moo') .'/assets/css/isotope.css', array('group' => CSS_THEME));
      drupal_add_js(drupal_get_path('theme', 'moo') .'/assets/js/jquery.isotope.min.js', array('group' => JS_THEME));
      drupal_add_js(drupal_get_path('theme', 'moo') .'/assets/js/isotope.js', array('group' => JS_THEME));
    }
  }
  if($view->name == 'team') {
    if ($view->current_display == 'page') {
      drupal_add_css(drupal_get_path('theme', 'moo') .'/assets/css/isotope.css', array('group' => CSS_THEME));
      drupal_add_js(drupal_get_path('theme', 'moo') .'/assets/js/jquery.isotope.min.js', array('group' => JS_THEME));
      drupal_add_js(drupal_get_path('theme', 'moo') .'/assets/js/isotope.js', array('group' => JS_THEME));
    }
  }
}

/*
  Preprocess
*/

/*
function moo_preprocess_html(&$vars) {
  //  kpr($vars['content']);
}

function moo_preprocess_page(&$vars,$hook) {
  //typekit
  //drupal_add_js('http://use.typekit.com/XXX.js', 'external');
  //drupal_add_js('try{Typekit.load();}catch(e){}', array('type' => 'inline'));

  //webfont
  //drupal_add_css('http://cloud.webtype.com/css/CXXXX.css','external');

  //googlefont
  //  drupal_add_css('http://fonts.googleapis.com/css?family=Bree+Serif','external');

}

function moo_preprocess_region(&$vars,$hook) {
  //  kpr($vars['content']);
}

function moo_preprocess_block(&$vars, $hook) {
  //  kpr($vars['content']);

  //lets look for unique block in a region $region-$blockcreator-$delta
   $block =
   $vars['elements']['#block']->region .'-'.
   $vars['elements']['#block']->module .'-'.
   $vars['elements']['#block']->delta;

  // print $block .' ';
   switch ($block) {
     case 'header-menu_block-2':
       $vars['classes_array'][] = '';
       break;
     case 'sidebar-system-navigation':
       $vars['classes_array'][] = '';
       break;
    default:

    break;

   }


  switch ($vars['elements']['#block']->region) {
    case 'header':
      $vars['classes_array'][] = '';
      break;
    case 'sidebar':
      $vars['classes_array'][] = '';
      $vars['classes_array'][] = '';
      break;
    default:

      break;
  }

}

function moo_preprocess_node(&$vars,$hook) {
  //  kpr($vars['content']);
}

function moo_preprocess_comment(&$vars,$hook) {
  //  kpr($vars['content']);
}

function moo_preprocess_field(&$vars,$hook) {
  //  kpr($vars['content']);
  //add class to a specific field
  switch ($vars['element']['#field_name']) {
    case 'field_ROCK':
      $vars['classes_array'][] = 'classname1';
    case 'field_ROLL':
      $vars['classes_array'][] = 'classname1';
      $vars['classes_array'][] = 'classname2';
      $vars['classes_array'][] = 'classname1';
    case 'field_FOO':
      $vars['classes_array'][] = 'classname1';
    case 'field_BAR':
      $vars['classes_array'][] = 'classname1';
    default:
      break;
  }

}

function moo_preprocess_maintenance_page(){
  //  kpr($vars['content']);
}
*/
