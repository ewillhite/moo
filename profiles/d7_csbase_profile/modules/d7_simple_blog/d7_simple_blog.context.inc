<?php
/**
 * @file
 * d7_simple_blog.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function d7_simple_blog_context_default_contexts() {
  $export = array();

  $context = new stdClass;
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'blog_block';
  $context->description = 'Places sidebar blog block';
  $context->tag = 'default layout';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        '*' => '*',
        '~blog' => '~blog',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'views-blog-blog_sidebar' => array(
          'module' => 'views',
          'delta' => 'blog-blog_sidebar',
          'region' => 'sidebar_first',
          'weight' => '-4',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('Places sidebar blog block');
  t('default layout');
  $export['blog_block'] = $context;

  return $export;
}
