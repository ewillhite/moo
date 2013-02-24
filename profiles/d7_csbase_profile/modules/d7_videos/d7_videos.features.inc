<?php
/**
 * @file
 * d7_videos.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function d7_videos_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function d7_videos_views_api() {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function d7_videos_node_info() {
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
