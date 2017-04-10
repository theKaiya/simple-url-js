let bar = {
    get: function (name, states = [])
    {
        if(! states.length) {
            return bar.query[name];
        }

        let section = bar.query()[name];

        if(states.indexOf(section) === -1) {
            bar.update({[name]: states[0]});
        }

        if(section) {
            return bar.query()[name];
        }else {
            return states[0];
        }
    },
    query: function ()
    {
        let search =  window.location.search;

        let newQuery = {};

        search.split('&').map(function (url) {
            let u = url.replace('?', '').split('=');

            newQuery[u[0]] = u[1];
        });

        return newQuery;
    },
    update: function (object)
    {
        // store previous get parameters.
        for(let index in bar.query())
        {
            if(!object.hasOwnProperty(index)) {
                object[index] = bar.query()[index];
            }
        }

        let url = '';

        // create a url.
        for(let index in object)
        {
            if(object.hasOwnProperty(index)) {
                url += '&' + index + '=' + object[index];
            }
        }

        url = url.replace('&', '?');

        history.replaceState(object, null, url);

    },
    set: function (name, value)
    {
        if(typeof name === 'object') {
            bar.update(name);
        }else {
            bar.update({
                [name]: value
            });
        }

        return value;
    }
};