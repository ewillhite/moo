<?php
/**
 * @file
 * moo_team.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function moo_team_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'team_node';
  $context->description = 'Team Member Node Page';
  $context->tag = 'theme';
  $context->conditions = array(
    'node' => array(
      'values' => array(
        'team' => 'team',
      ),
      'options' => array(
        'node_form' => '0',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'views-videos-block_3' => array(
          'module' => 'views',
          'delta' => 'videos-block_3',
          'region' => 'post_content',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('Team Member Node Page');
  t('theme');
  $export['team_node'] = $context;

  return $export;
}
