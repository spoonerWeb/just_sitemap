<?php
/**
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */

$EM_CONF[$_EXTKEY] = [
    'title' => 'Just Sitemap - Google sitemap',
    'description' => 'A Google sitemap for pages',
    'category' => 'plugin',
    'version' => '0.0.3',
    'state' => 'beta',
    'author' => 'Thomas Löffler',
    'constraints' => [
        'depends' => [
            'typo3' => '7.6.0-8.99.99',
            'fluid_styled_content' => '7.6.0'
        ],
        'conflicts' => [],
        'suggests' => []
    ]
];