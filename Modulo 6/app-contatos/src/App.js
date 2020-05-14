import React from "react";

import Contact from "./components/Contact";
import Contacts from "./components/Contacts";
import Filters from "./components/Filters";
import Topbar from "./components/Topbar";

import { convertToLowercase } from "./utils";
import { URL } from "./constants";

import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      hasSearchFilter: false,
      searchFilter: [],
      sortBy: "",
      sortedContacts: [],
    };

    this.searchFilter = this.searchFilter.bind(this);
    this.toggleSortByValue = this.toggleSortByValue.bind(this);
  }

  searchFilter(name) {
    const { contacts } = this.state;

    if (name.length > 0) {
      const filteredContacts = contacts.filter((contact) => {
        return convertToLowercase(contact.name).includes(
          convertToLowercase(name)
        );
      });

      this.setState({
        ...this.state,
        hasSearchFilter: true,
        searchFilter: filteredContacts,
      });
    } else {
      this.setState({
        ...this.state,
        hasSearchFilter: false,
        searchFilter: [],
      });
    }
  }

  toggleSortByValue(value) {
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

    const { contacts, sortBy } = this.state;

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

    this.setState({
      ...this.state,
      hasSearchFilter: false,
      searchFilter: [],
      sortBy: sortValue,
      sortedContacts,
    });
  }

  componentDidMount() {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => this.setState({ contacts: data }));
  }

  render() {
    const {
      contacts,
      hasSearchFilter,
      searchFilter,
      sortBy,
      sortedContacts,
    } = this.state;

    let outputContacts;

    if (!hasSearchFilter) {
      if (contacts.length > 0 && sortedContacts.length > 0) {
        outputContacts = sortedContacts.map((contact) => (
          <Contact key={contact.id} data={contact} />
        ));
      } else if (contacts.length > 0 && sortedContacts.length === 0) {
        outputContacts = contacts.map((contact) => (
          <Contact key={contact.id} data={contact} />
        ));
      } else {
        outputContacts = <h2>Loading...</h2>;
      }
    } else {
      outputContacts = searchFilter.map((contact) => (
        <Contact key={contact.id} data={contact} />
      ));
    }

    return (
      <div data-testid="app" className="app">
        <Topbar />

        <Filters
          onSearch={this.searchFilter}
          toggleSort={this.toggleSortByValue}
          selectedFilter={sortBy}
        />

        <Contacts>{outputContacts}</Contacts>
      </div>
    );
  }
}

export default App;
