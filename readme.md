# App-Arena.com App Module: Static pages
* **Github:** https://github.com/apparena/aa_app_mod_static
* **Docs:**   http://www.appalizr.com/index.php/docs.html

This is a module of the [aa_app_template](https://github.com/apparena/aa_app_template)

## Module job
Shows some basic pages like imprint, privacy and terms and additional 3 blank pages that can be handled over the app-manager configs.

### Dependencies
* [aa_app_mod_facebook](https://github.com/apparena/aa_app_mod_facebook)

### Page urls
* /#/mod/static/terms
* /#/mod/static/privacy
* /#/mod/static/imprint
* /#/mod/static/static/1 **(must be created at the app-manager under navigation_tab_1_link_intern, see below)**
* /#/mod/static/static/2 **(same notice, but with navigation_tab_2_link_intern)**
* /#/mod/static/static/3 **(same notice, but with navigation_tab_3_link_intern)**

### Example terms page
```javascript
define([
    'underscore',
    'modules/aa_app_mod_static/js/views/StaticPageView',
], function (_, StaticPageView) {
    'use strict';

    return function () {
        var backdrop = $('.modal-backdrop');

        // remove all modals
        if (backdrop.length > 0) {
            backdrop.remove();
        }
        // render terms layout and put them to .content-wrapper
        StaticPageView().init().showTerms();
    };
});
```

### Example static page
```javascript
define([
    'underscore',
    'modules/aa_app_mod_static/js/views/StaticPageView',
], function (_, StaticPageView) {
    'use strict';

    return function (id) {
        id = id || 1;

        var backdrop = $('.modal-backdrop');

        // remove all modals
        if (backdrop.length > 0) {
            backdrop.remove();
        }
        // render static page layout by ID and put them to .content-wrapper
        StaticPageView().init({id: id}).showStatic();
    };
});
```

### Load module with require
```
modules/aa_app_mod_static/js/views/StaticPageView
```

#### App-Manager config values
| config | default | description |
|--------|--------|--------|
| navigation_tab_**[1-3]**_link_intern | #/mod/static/page/**[1-3]** | internal link |
| navigation_tab_**[1-3]**_link_extern | &nbsp; | This can be used to open external links with the navigation. If this is not empty, the internal link will be disabled |
| navigation_tab_**[1-3]**_content | Some demo HTML | The content for the static page, like a pricelist, pictures or something else |
| navigation_tab_**[1-3]**_name | Menüpunkt **[1-3]** | THe name of the navigation link |
| navigation_pagetab_selector | "navigation_tab_1", "navigation_tab_2", "navigation_tab_3", "terms", "privacy", "imprint" | Selects all pages, that will be shown in the navigation. With this option, you can diable specific pages in your app |
