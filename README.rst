==============================================
Documentation for TYPO3 extension just_sitemap
==============================================

Installation
============

Install via composer
--------------------

.. code-block:: shell

   composer require spooner-web/just_sitemap

Install via Extension Manager
-----------------------------

1. Open Extension Manager in TYPO3 backend
2. Search for ``just_sitemap``
3. Download and install it

Integrators Guide
=================

Integrate extension
-------------------

1. Create page for the sitemap
2. Hide page in menus
3. Add a template record and include static template
4. Add a content element and select ``Google Sitemap``
5. Select the root page(s) and the recursive level to get all pages
6. Go to the page ``[yourdomain]/index.php?id=[page_with_sitemap]&type=711

Add doktype to pages not shown
------------------------------

By default the doktypes ``3,4,6,199,254,255`` are not shown in the sitemap.
You can add more doktypes, e.g. doktype 12 with:

.. code-block:: typoscript

    plugin.tx_justsitemap.doktypesToIgnore := addToList(12)


Enhancing extension
-------------------

By adding template, partial and layout paths to ``lib.fluidContent`` with their
subsections ``templateRootPaths``, ``partialRootPaths`` and ``layoutRootPaths`` you can
create own templates and override the original ones.

To change the markup of the news listing you can add this code into TypoScript:

.. code-block:: typoscript

    lib.fluidContent {
        templateRootPaths {
            40 = EXT:my_ext/Resources/Private/Templates
        }
        partialRootPaths {
            40 = EXT:my_ext/Resources/Private/Partials
        }
        layoutRootPaths {
            40 = EXT:my_ext/Resources/Private/Layouts
        }
    }

ToDo list
=========

* Add priority into sitemap (would be best by handling it by the tree level)
* Add records (like news or other) to the sitemap
* Add frequency into sitemap (own field in page?)

Contribute
==========

Feel free to contribute or test the extension!
Here you can get in contact:

* `GitLab project`_
* `GitHub project (just a mirror)`_
* `Slack channel`_

.. _GitLab project: https://git.spooner.io/spooner/just_sitemap
.. _GitHub project (just a mirror): https://github.com/spoonerWeb/just_sitemap
.. _Slack channel: https://typo3.slack.com/messages/ext-just_sitemap/
