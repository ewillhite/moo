<?php
/**
 * @file
 * moo_projects.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function moo_projects_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "file_entity" && $api == "file_default_displays") {
    return array("version" => "1");
  }
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function moo_projects_views_api() {
  return array("api" => "3.0");
}

/**
 * Implements hook_image_default_styles().
 */
function moo_projects_image_default_styles() {
  $styles = array();

  // Exported image style: 368x212_manual.
  $styles['368x212_manual'] = array(
    'name' => '368x212_manual',
    'effects' => array(
      3 => array(
        'label' => 'Crop and scale manually',
        'help' => 'Crop and scale a user-selected area, respecting the ratio of the destination width and height.',
        'effect callback' => 'manualcrop_crop_and_scale_effect',
        'dimensions callback' => 'image_resize_dimensions',
        'form callback' => 'manualcrop_crop_and_scale_form',
        'summary theme' => 'manualcrop_crop_and_scale_summary',
        'module' => 'manualcrop',
        'name' => 'manualcrop_crop_and_scale',
        'data' => array(
          'width' => 368,
          'height' => 212,
          'upscale' => 0,
          'respectminimum' => 1,
          'onlyscaleifcrop' => 1,
          'style_name' => '368x212_manual',
        ),
        'weight' => 0,
      ),
    ),
  );

  return $styles;
}

/**
 * Implements hook_node_info().
 */
function moo_projects_node_info() {
  $items = array(
    'video' => array(
      'name' => t('Project'),
      'base' => 'node_content',
      'description' => t('Add a new <em>Project</em> to your website to be displayed in Our Work sections.'),
      'has_title' => '1',
      'title_label' => t('Project Title'),
      'help' => '',
    ),
  );
  return $items;
}
