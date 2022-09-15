---
permalink: false
---
# green-cleaning-products
11ty Setup for green cleaning product list. It has a real home now! https://online2.ogs.ny.gov/greencleaning/

This list / site requires a few things:
1. Every product in the csv & and converted json *requires a unique product ID* 
2. the csv must be converted to json using something like https://csvjson.com/csv2json 
3. Additions and deletions to the site require an eleventy rebuild from the command line and a complete rebuild of site assets. Because 11ty is awesome, this takes like 4.36 seconds. You'll then need to package the _site files to send over to ITS to put back on the server.
4. Since this is a json & csv impersonating a database, one off additions & deletions will need to be managed without automatic methods or checks. 
5. If you reassign totally new product IDs to everything, all links people have bookmarked will break. See #4 above
6. Keep backups of both the csv and masterproductlist.json in the _dataarchive folder in case we need to roll back.
7. 11ty doesn't purge unused pages that are no longer in the csv (or at least I haven't set it up to) so before rebuild make sure to delete the entire _site --> green-products folder so that all new pages are generated. 

Location in v:drive V:\InfoResMgmnt\Staging\GreenCleaning_Drupal\2022 


