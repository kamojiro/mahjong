import React from "react";

export default class PcersonalList extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("api/lead")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {
      return (
              <div>
              
              <ul>
              {this.state.data.map(contact => {
                  return (
                          <li key={contact.id}>
                          {contact.name} - {contact.email}
                      </li>
                  );
              })}
          </ul>
              </div>
    );
  }

}
