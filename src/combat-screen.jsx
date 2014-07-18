/** @jsx React.DOM */

var React = require("react");
var CombatExercise = require("./combat-exercise.jsx");

var CombatScreen = React.createClass({
    propTypes: {
        user: React.PropTypes.object,
        enemy: React.PropTypes.object,
    },

    getDefaultProps: function() {
        return {
        };
    },

    render: function() {
        return <div>
            <CombatExercise />
        </div>;
    }
});

module.exports = CombatScreen;