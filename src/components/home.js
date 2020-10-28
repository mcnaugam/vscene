import { getMeetings } from "../actions/meetingActions";
import { getUsers } from "../actions/userActions";
import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      meetings: [],
      users: [],
      filter: "",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      filter: nextProps.search,
    };
  }

  componentDidMount() {
    getUsers().then((users) => {
      this.setState(
        {
          users: users,
        },
        () =>
          getMeetings().then((meetings) => {
            this.setState(
              {
                meetings: meetings,
              },
              () => this.forceUpdate()
            );
          })
      );
    });
  }

  handleChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  getOwnerName = (meeting) => {
    const meetingOwner = this.state.users.find(
      (user) => meeting.owner === user.id
    );
    return meetingOwner.first_name + " " + meetingOwner.last_name;
  };

  getDatePart = (date) => {
    return new Date(date).toString();
  };

  getTimePart = (date) => {};

  render() {
    const { meetings, filter } = this.state;

    <div className="row">
      <div className="col s2">CALL ID</div>
      <div className="col s2">OWNER</div>
      <div className="col s2">NAME</div>
      <div className="col s2">DATE</div>
      <div className="col s2">START</div>
    </div>;

    if (meetings) {
      const lowercasedFilter = filter.toLowerCase();
      const filteredMeetings = meetings.filter((meeting) => {
        return Object.keys(meeting).some((key) => {
          if (key === "name") {
            return meeting[key].toLowerCase().includes(lowercasedFilter);
          } else if (key === "owner") {
            return this.getOwnerName(meeting)
              .toLowerCase()
              .includes(lowercasedFilter);
          }
        });
      });

      var meetingItems = filteredMeetings.map((meeting) => (
        <div key={meeting.owner} className="row">
          <div className="col s2">{meeting.callid}</div>
          <div className="col s2">{this.getOwnerName(meeting)}</div>
          <div className="col s2">{meeting.name}</div>
          <div className="col s2">{this.getDatePart(meeting.start_time)}</div>
          <div className="col s2">{this.getTimePart(meeting.start_time)}</div>
        </div>
      ));
    }
    return (
      <React.Fragment>
        <h5>Scheduled Meetings ({meetings ? meetings.length : 0})</h5>
        <div>{meetingItems}</div>
      </React.Fragment>
    );
  }
}

export default Home;
