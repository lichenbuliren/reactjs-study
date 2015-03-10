var CommentBox = React.createElement({
    render: function(){
        return (
            React.createElement("div", {className: "commentBox"}, 
                React.createElement('h1')
            )
        );
    }
});

React.render(
    React.createElement(CommentBox, null),
    document.getElementById('content')
);