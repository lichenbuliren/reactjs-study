var CommentList = React.createClass({displayName: "CommentList",
    render: function(){
        var commentNodes = this.props.data.map(function(comment){
            return (
                React.createElement(Comment, {author: comment.author}, comment.text)
            )
        });
        return (
            React.createElement("div", {className: "commentList"}, 
                React.createElement(Comment, {author: "Pete Hunt"}, "This is one comment"), 
                React.createElement(Comment, {author: "Jordan Walke"}, "This is *author* comment")
            )
        )
    }
});