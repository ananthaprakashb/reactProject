"use strict";

var React = require('react');

var About = React.createClass({
    render: function(){
        return (
            <div>
                <h1>About</h1>
                <p>
                    <ul>
                        <li>My Family</li>
                        <li>Work</li>
                        <li>Friends</li>
                        <li>My World</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;