let popup = {
    _f: {},
    data: {
        todo: [],
        count: 0
    },
    defaults: {
        PouchDB: require('pouchdb'),
        db: {
            instance: null,
            name: 'js-pdb-v1'
        }
    },
    selectors: {
        tables: {
            todo: {
                body: document.getElementById('todo-table-body')
            }
        },
        forms: {
            todo: {
                title: document.getElementById('todo-title'),
                completed: document.getElementById('todo-completed'),
                button: document.getElementById('todo-add-btn')
            }
        }
    },
    templates: {
        table: {
            todo: {
                tr: "\r\n<tr>" +
                    "\t<td>" +
                    "\t\t<label for='todo-item-{id}'><input type='checkbox' id='todo-item-{id}' onclick='popup._f.clickCheckbox(\'{id}\')'></label>" +
                    "\t</td>" +
                    "\t<td>" +
                    "\t\t<span>{title}</span>" +
                    "\t</td>" +
                    "\t<td></td>" +
                    "</tr>\r\n"
            }
        }
    }
};

/**
 * Init PouchDB connection
 *
 * @returns {PouchDB}
 */
popup._f.initDB = function () {
    if (!popup.defaults.db.instance) {
        popup.defaults.db.instance = new popup.defaults.PouchDB(popup.defaults.db.name);
    }

    return popup.defaults.db.instance
};


popup._f.todo = {
    all: function () {
        /** Clear table before filling the dataset **/
        popup.selectors.tables.todo.body.empty();

        popup.defaults.db.instance
            .allDocs({include_docs: true})
            .then(results => {
                popup.data.count = results.total_rows;
                results.rows.map(row => {
                    console.log(row.doc);
                });
            });
    },
    create: function (title = 'No Title', completed = false) {
        popup.defaults.db.instance
            .post({timestamp: +new Date, title, completed})
            .then(() => popup._f.todo.all());
    },
    update: function (document, opts = {}) {
        popup.defaults.db.instance
            .put({...document, ...opts});
    },
    delete: function (document) {
        popup.defaults.db.instance
            .delete(document);
    }
};

/** Events **/

popup._f.clearForm = function () {
    popup.selectors.forms.todo.title.value = '';
    popup.selectors.forms.todo.completed.value = '';
};

popup._f.addToDo = () => {
    popup._f.todo.create(
        popup.selectors.forms.todo.title.value,
        popup.selectors.forms.todo.completed.value
    )
};

popup._f.clickCheckbox = function (checkboxId) {
    console.log(checkboxId);
};

popup.selectors.forms.todo.button.click = () => {
  alert('Test A');
};