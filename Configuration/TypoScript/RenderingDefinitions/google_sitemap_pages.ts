tt_content {
    google_sitemap =< lib.fluidContent
    google_sitemap {
        templateName = GoogleSitemap
        dataProcessing {
            10 = TYPO3\CMS\Frontend\DataProcessing\DatabaseQueryProcessor
            10 {
                table = pages
                pidInList.field = pages
                recursive.field = recursive
                selectFields = pages.*
                where = NOT hidden AND NOT nav_hide AND doktype NOT IN ({$plugin.tx_justsitemap.doktypesToIgnore})
                where.insertData = 1
                languageField = sys_language_uid
                orderBy = sorting
                as = pages
            }
        }
    }
}

google_sitemap = PAGE
google_sitemap.typeNum = 711
google_sitemap.10 < styles.content.get
google_sitemap {
    config.absRefPrefix = /
    config.disableAllHeaderCode = 1
    config.doctype = none
    config.additionalHeaders.10.header = Content-type:text/xml
}