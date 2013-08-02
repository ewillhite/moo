<?php
/**
 * @file
 * moo_team.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function moo_team_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_right|node|team|default';
  $field_group->group_name = 'group_right';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'team';
  $field_group->mode = 'default';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Right side',
    'weight' => '1',
    'children' => array(
      0 => 'body',
      1 => 'field_title',
      2 => 'title_field',
    ),
    'format_type' => 'div',
    'format_settings' => array(
      'label' => 'Right side',
      'instance_settings' => array(
        'classes' => '',
        'description' => '',
        'show_label' => '0',
        'label_element' => 'h3',
        'effect' => 'none',
        'speed' => 'fast',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_right|node|team|default'] = $field_group;

  return $export;
}
