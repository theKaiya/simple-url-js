Examples.

site.com?search=jack&offset=30

let search = bar.get('search'); // jack <br>
let offset = bar.get('offset'); // 30

let object = bar.query(); // {search: 'jack', offset: 30}

let set = bar.set('language', 'EN'); <br>
// return a value EN
<br>
// and change url to site.com?search=jack&offset=30&language=EN

Also, You can set restrictions for a specific setting. For example.

let allow_parameters = ['friends', 'videos', 'photos'];

let section = bar.get('section', allow_parameters);

Now, if the parameter section will not coincide with the current parameter in the address string parameter in the address bar will be changed to the first array element would be returned.
