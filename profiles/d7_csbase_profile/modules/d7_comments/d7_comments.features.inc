<?php
/**
 * @file
 * d7_comments.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function d7_comments_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}
