<?php
/**
 * @file
 * private_work.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function private_work_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "field_group" && $api == "field_group") {
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
function private_work_views_api() {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function private_work_node_info() {
  $items = array(
    'private_work' => array(
      'name' => t('Private Work'),
      'base' => 'node_content',
      'description' => t('Add <em>Private Work</em> to the site and give access to a specific user or users to access.'),
      'has_title' => '1',
      'title_label' => t('Work Title'),
      'help' => '',
    ),
  );
  return $items;
}
