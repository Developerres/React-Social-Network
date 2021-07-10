import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
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
  };
  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input
              autoFocus
              onBlur={() => {
                this.desactivateEditMode();
              }}
              type="text"
              value={this.props.status}
            />
          </div>
        ) : (
          <div
            onDoubleClick={() => {
              this.activateEditMode();
            }}
          >
            {this.props.status}
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
