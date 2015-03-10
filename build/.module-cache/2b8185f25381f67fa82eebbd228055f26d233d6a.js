// Reactive state
var CommentBox = React.createClass({displayName: "CommentBox",
    getInitialState: function(){
        return {data: []};
    },
    render: function(){
        return (
            React.createElement("div", {className: "commentBox"}, 
                React.createElement("h1", null, "Comments")
            )
        )
    }
});