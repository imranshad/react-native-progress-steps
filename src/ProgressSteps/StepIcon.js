import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const cirSize=30

class StepIcon extends Component {
  render() {
    let styles;

    if (this.props.isActiveStep) {
      styles = {
        circleStyle: {
          width: cirSize,
          height: cirSize,
          borderRadius: cirSize/2,
          backgroundColor: this.props.activeStepIconColor,
          borderColor: this.props.activeStepIconBorderColor,
          borderWidth: 5,
          bottom: 2,
          justifyContent:"center",
        },
        circleText: {
          alignSelf: 'center',
          // top: 20 / 3,
          textAlign:"center"
        },
        labelText: {
          textAlign: 'center',
          flexWrap: 'wrap',
          width: 100,
          paddingTop: 4,
          fontFamily: this.props.labelFontFamily,
          color: this.props.activeLabelColor,
          fontSize: this.props.activeLabelFontSize || this.props.labelFontSize,
        },
        leftBar: {
          position: 'absolute',
          top: cirSize / 2.22,
          left: 0,
          right: cirSize + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.completedProgressBarColor,
          marginRight: cirSize / 2 + 2,
        },
        rightBar: {
          position: 'absolute',
          top: cirSize / 2.22,
          right: 0,
          left: cirSize + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.progressBarColor,
          marginLeft: cirSize / 2 + 2,
        },
        stepNum: {
          color: this.props.activeStepNumColor,
        },
      };
    } else if (this.props.isCompletedStep) {
      styles = {
        circleStyle: {
          width: cirSize-2,
          height: cirSize-2,
          borderRadius: (cirSize-2)/2,
          justifyContent: 'center',
          backgroundColor: this.props.completedStepIconColor,
        },
        circleText: {
          alignSelf: 'center',
          textAlign:"center"
          // top: 18 / 2,
        },
        labelText: {
          textAlign: 'center',
          flexWrap: 'wrap',
          width: 100,
          paddingTop: 4,
          fontFamily: this.props.labelFontFamily,
          color: this.props.completedLabelColor,
          marginTop: 4,
          fontSize: this.props.labelFontSize,
        },
        leftBar: {
          position: 'absolute',
          top: (cirSize-2) / 2,
          left: 0,
          right: (cirSize-2) + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.completedProgressBarColor,
          marginRight: (cirSize-2) / 2 + 4,
        },
        rightBar: {
          position: 'absolute',
          top: (cirSize-2) / 2,
          right: 0,
          left: (cirSize-2) + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.completedProgressBarColor,
          marginLeft: (cirSize-2) / 2 + 4,
        },
        stepNum: {
          color: this.props.completedStepNumColor,
        },
      };
    } else {
      styles = {
        circleStyle: {
          width: cirSize-2,
          height: cirSize-2,
          borderRadius: (cirSize-2/2),
          justifyContent: 'center',
          backgroundColor: this.props.disabledStepIconColor,
        },
        circleText: {
          alignSelf: 'center',
          textAlign:"center"
          // top: 18 / 2,
        },
        labelText: {
          textAlign: 'center',
          flexWrap: 'wrap',
          width: 100,
          paddingTop: 4,
          fontFamily: this.props.labelFontFamily,
          color: this.props.labelColor,
          marginTop: 4,
          fontSize: this.props.labelFontSize,
        },
        leftBar: {
          position: 'absolute',
          top: (cirSize-2) / 2,
          left: 0,
          right: (cirSize-2) + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.progressBarColor,
          marginRight: (cirSize-2) / 2 + 4,
        },
        rightBar: {
          position: 'absolute',
          top: (cirSize-2) / 2,
          right: 0,
          left: (cirSize-2) + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.progressBarColor,
          marginLeft: (cirSize-2) / 2 + 4,
        },
        stepNum: {
          color: this.props.disabledStepNumColor,
        },
      };
    }

    return (
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <View style={[styles.circleStyle]}>
          <Text style={styles.circleText}>
            {this.props.isCompletedStep ? (
              <Text style={{ color: this.props.completedCheckColor }}>&#10003;</Text>
            ) : (
              <Text style={styles.stepNum}>{this.props.stepNum}</Text>
            )}
          </Text>
        </View>
        <Text style={styles.labelText}>{this.props.label}</Text>
        {/* {!this.props.isFirstStep && <View style={[styles.leftBar,{left:0,right:0,zIndex:-100,elevation:-10}]} />}
        {!this.props.isLastStep && <View style={[styles.rightBar,{left:0,right:0,zIndex:-100,elevation:-10}]} />} */}
      </View>
    );
  }
}

StepIcon.propTypes = {
  stepCount: PropTypes.number.isRequired,
  stepNum: PropTypes.number.isRequired,
  isFirstStep: PropTypes.bool.isRequired,
  isLastStep: PropTypes.bool.isRequired,

  borderWidth: PropTypes.number,
  borderStyle: PropTypes.string,
  activeStepIconBorderColor: PropTypes.string,

  progressBarColor: PropTypes.string,
  completedProgressBarColor: PropTypes.string,

  activeStepIconColor: PropTypes.string,
  disabledStepIconColor: PropTypes.string,
  completedStepIconColor: PropTypes.string,

  labelFontFamily: PropTypes.string,
  labelColor: PropTypes.string,
  labelFontSize: PropTypes.number,
  activeLabelColor: PropTypes.string,
  activeLabelFontSize: PropTypes.number,
  completedLabelColor: PropTypes.string,

  activeStepNumColor: PropTypes.string,
  completedStepNumColor: PropTypes.string,
  disabledStepNumColor: PropTypes.string,

  completedCheckColor: PropTypes.string,
};

StepIcon.defaultProps = {
  borderWidth: 3,
  borderStyle: 'solid',
  activeStepIconBorderColor: '#4BB543',

  progressBarColor: '#ebebe4',
  completedProgressBarColor: '#4BB543',

  activeStepIconColor: 'transparent',
  completedStepIconColor: '#4BB543',
  disabledStepIconColor: '#ebebe4',

  labelColor: 'lightgray',
  labelFontSize: 14,
  activeLabelColor: '#4BB543',
  completedLabelColor: 'lightgray',

  activeStepNumColor: 'black',
  completedStepNumColor: 'black',
  disabledStepNumColor: 'white',

  completedCheckColor: 'white',
};

export default StepIcon;
