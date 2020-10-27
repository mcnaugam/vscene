import { getMeetings } from "../actions/meetingActions";
import { getUsers } from "../actions/userActions";
import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      meetings: [],
      users: [],
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
    const meetings = this.state.meetings;

    <div className="row">
      <div className="col s2">CALL ID</div>
      <div className="col s2">OWNER</div>
      <div className="col s2">NAME</div>
      <div className="col s2">DATE</div>
      <div className="col s2">START</div>
    </div>;

    if (meetings) {
      var meetingItems = meetings.map((meeting) => (
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
