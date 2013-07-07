<?php
/**
 * @file
 * private_work.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function private_work_user_default_permissions() {
  $permissions = array();

  // Exported permission: create private_work content.
  $permissions['create private_work content'] = array(
    'name' => 'create private_work content',
    'roles' => array(
      'developer' => 'developer',
      'team' => 'team',
    ),
    'module' => 'node',
  );

  // Exported permission: delete any private_work content.
  $permissions['delete any private_work content'] = array(
    'name' => 'delete any private_work content',
    'roles' => array(
      'developer' => 'developer',
      'team' => 'team',
    ),
    'module' => 'node',
  );

  // Exported permission: delete own private_work content.
  $permissions['delete own private_work content'] = array(
    'name' => 'delete own private_work content',
    'roles' => array(
      'developer' => 'developer',
      'team' => 'team',
    ),
    'module' => 'node',
  );

  // Exported permission: edit any private_work content.
  $permissions['edit any private_work content'] = array(
    'name' => 'edit any private_work content',
    'roles' => array(
      'developer' => 'developer',
      'team' => 'team',
    ),
    'module' => 'node',
  );

  // Exported permission: edit own private_work content.
  $permissions['edit own private_work content'] = array(
    'name' => 'edit own private_work content',
    'roles' => array(
      'developer' => 'developer',
      'team' => 'team',
    ),
    'module' => 'node',
  );

  return $permissions;
}
