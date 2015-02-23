/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var StyleSheet = require('react-style');

var CircleShadow = require('./CircleShadow');
var Colors = require('../style/Colors');
var Icon = require('./Icon');

class IconButton extends React.Component {

  render() {
    var props = this.props;
    var styles = IconButtonStyles;
    return <div styles={styles.normalStyle} onClick={() => props.onClick()}>
      <CircleShadow active={true} styles={[styles.circleShadowStyle]}/>
      <Icon icon={props.icon}/>
    </div>;
  }

}

var IconButtonStyles = StyleSheet.create({

  normalStyle: {
    cursor: 'pointer',
    display: 'inline-block',
    height: 24,
    padding: 8,
    position: 'relative',
    width: 24,
    webkitTapHighlightColor: 'rgba(0,0,0,0)',
    outline: 'none'
  },

  circleShadowStyle: {
    backgroundColor: Colors.grey.P400,
    height: 24,
    left: 7,
    padding: 0,
    top: 8,
    transform: 'scale(2) translateZ(0)',
    width: 24
  }

});

module.exports = IconButton;
