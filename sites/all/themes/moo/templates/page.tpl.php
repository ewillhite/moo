<?php
//kpr(get_defined_vars());
//kpr($theme_hook_suggestions);
//template naming
//page--[CONTENT TYPE].tpl.php
?>
<?php if( theme_get_setting('mothership_poorthemers_helper') ){ ?>
<!--page.tpl.php-->
<?php } ?>

<?php print $mothership_poorthemers_helper; ?>

<div class="bg-one"></div>
<div class="bg-two"></div>
<div class="wrap">
  <header role="banner">
    <figure>
      <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home">Home</a>
    </figure>

    <?php if($page['header']): ?>
      <div class="header-region">
        <?php print render($page['header']); ?>
      </div>
    <?php endif; ?>

  </header>

  <div class="page">

    <div role="main" id="main-content">
      <?php if (isset($tabs['#primary'][0]) || isset($tabs['#secondary'][0])): ?>
        <nav class="tabs"><?php print render($tabs); ?></nav>
      <?php endif; ?>

      <?php if($page['highlighted'] OR $messages){ ?>
        <div class="drupal-messages">
        <?php print render($page['highlighted']); ?>
        <?php print $messages; ?>
        </div>
      <?php } ?>
      <?php print render($title_prefix); ?>
      <?php if ($title): ?>
        <h1><?php print $title; ?></h1>
      <?php endif; ?>
      <?php print render($title_suffix); ?>

      <?php if ($action_links): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>


      <?php print render($page['content_pre']); ?>

      <?php print render($page['content']); ?>

      <?php print render($page['content_post']); ?>

    </div><!--/main-->

    <?php if ($page['sidebar']): ?>
      <div class="sidebar">
      <?php print render($page['sidebar']); ?>
      </div>
    <?php endif; ?>

    <?php if ($page['post_content']): ?>
      <div class="post-content">
      <?php print render($page['post_content']); ?>
      </div>
    <?php endif; ?>
  </div><!--/page-->
  <div class="push"></div>
</div><!--/wrap-->

<div class="footer-wrap">
  <div class="footer-container">
    <footer role="contentinfo">
      <?php print render($page['footer']); ?>
      <span class="mootv"></span>
    </footer>
  </div>
</div>

