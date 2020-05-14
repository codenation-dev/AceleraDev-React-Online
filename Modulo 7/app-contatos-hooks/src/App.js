import React from "react";

import Contact from "./components/Contact";
import Contacts from "./components/Contacts";
import Filters from "./components/Filters";
import Topbar from "./components/Topbar";

import { convertToLowercase } from "./utils";
import { URL } from "./constants";

import "./App.scss";

function App() {
  const [contacts, setContacts] = React.useState([]);
  const [hasSearchFilter, setHasSearchFilter] = React.useState(false);
  const [searchFilter, setSearchFilter] = React.useState([]);
  const [sortBy, setSortBy] = React.useState("");
  const [sortedContacts, setSortedContacts] = React.useState([]);

  const handleSearchFilter = name => {
    if (name.length > 0) {
      const filteredContacts = contacts.filter(contact => {
        return convertToLowercase(contact.name).includes(
          convertToLowercase(name)
        );
      });

      setHasSearchFilter(true);
      setSearchFilter(filteredContacts);
    } else {
      setHasSearchFilter(false);
      setSearchFilter([]);
    }
  };
  const toggleSortByValue = value => {
    const compareValues = (key, order = "asc") => {
      return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
          return 0;
        }

        const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
        const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }
        return order === "desc" ? comparison * -1 : comparison;
      };
    };

    let sortValue;
    let sortedContacts;

    if (value === sortBy) {
      sortValue = "";
      sortedContacts = [...contacts];
    } else {
      sortValue = value;
      sortedContacts = contacts.sort(compareValues(value));
      console.log(sortedContacts);
    }

    setHasSearchFilter(false);
    setSearchFilter([]);
    setSortBy(sortValue);
    setSortedContacts(sortedContacts);
  };

  React.useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setContacts(data));
  }, []);

  let outputContacts;

  if (!hasSearchFilter) {
    if (contacts.length > 0 && sortedContacts.length > 0) {
      outputContacts = sortedContacts.map(contact => (
        <Contact key={contact.id} data={contact} />
      ));
    } else if (contacts.length > 0 && sortedContacts.length === 0) {
      outputContacts = contacts.map(contact => (
        <Contact key={contact.id} data={contact} />
      ));
    } else {
      outputContacts = <h2>Loading...</h2>;
    }
  } else {
    outputContacts = searchFilter.map(contact => (
      <Contact key={contact.id} data={contact} />
    ));
  }

  return (
    <div data-testid="app" className="app">
      <Topbar />

      <Filters
        onSearch={handleSearchFilter}
        toggleSort={toggleSortByValue}
        selectedFilter={sortBy}
      />

      <Contacts>{outputContacts}</Contacts>
    </div>
  );
}

export default App;
