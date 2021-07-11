import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  desactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div className="inputter">
            <input
              autoFocus
              onBlur={() => {
                this.desactivateEditMode();
              }}
              type="text"
              value={this.state.status}
              onChange={this.onStatusChange}
            />
          </div>
        ) : (
          <div
            className="Statusser"
            onDoubleClick={() => {
              this.activateEditMode();
            }}
          >
            {this.props.status || "-------"}
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
