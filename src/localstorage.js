
    export function storageAvailable(type) {
        // initialize storage variabe
        let storage;
        try {
            // set storage equal to session storage or local storage
            storage = window[type];

            // create an item to test
            const x = '__storage_test__';
            // set storage at localstorage.x with value x
            storage.setItem(x, x);

            // remove item at key localstorage.x
            storage.removeItem(x);

            // if none of the above tests fail in our try block, return true from the function
            return true;
        }
        catch (e) {
            // else return error information
            return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                (storage && storage.length !== 0);
        }

        
    }

    
    
