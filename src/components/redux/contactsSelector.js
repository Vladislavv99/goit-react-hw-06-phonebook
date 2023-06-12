export const getContacts = store => {
  return store.contacts.filter(({ name }) =>
    name.toLowerCase().includes(store.filtered.toLowerCase())
  );
};

export const getFiltered = store => store.filtered;
