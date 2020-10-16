let contact = 0;

function contactReducer(state = contact, action) {
    switch(action.type) {
        case 'GET_CONTACTS':
            contact
            break;
    }

    return contact;
}

export default contactReducer;