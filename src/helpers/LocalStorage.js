export const getNominations = () => JSON.parse(localStorage.getItem('nominations'));

export const addNominations = (newNomination) => {
    const nominations = [];
    if (localStorage.getItem('nominations') == null) {
        nominations.push(newNomination);
        localStorage.setItem('nominations', JSON.stringify(nominations));
    }
    else {
        const nominations = getNominations();
        nominations.push(newNomination.toString());
        localStorage.setItem('nominations', JSON.stringify(nominations));
    }
};

export const deleteNomination = (nomination) => {
    if (localStorage.getItem('nominations') !== null) {
        const nominations = getNominations().filter(nom => nom !== nomination.toString());
        localStorage.setItem('nominations', JSON.stringify(nominations));
    }
};

