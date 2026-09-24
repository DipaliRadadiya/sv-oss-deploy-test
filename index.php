<?php

// A deploy test: shows which commit is live, under which PHP, and
// whether `composer install` ran.
header('Content-Type: text/plain');

echo "sv-oss-deploy-test (PHP)\n";
echo 'version: '.trim((string) @file_get_contents(__DIR__.'/VERSION'))."\n";
echo 'php: '.PHP_VERSION."\n";
echo 'composer: '.(file_exists(__DIR__.'/vendor/autoload.php') ? 'installed' : 'missing')."\n";
