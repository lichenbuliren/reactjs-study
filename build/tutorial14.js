var CommentBox = React.createClass({displayName: "CommentBox",
    loadCommentsFromServer: function(){
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data){
                this.setState({data: data});
            }.bind(this),
            error: function(xhr,status,err){
                console.error(this.props.url,status,err.toString());
            }.bind(this)
        });       
    },
    getInitialState: function(){
        return {data:[]};
    },
    componentDidMount: function(){
         this.loadCommentsFromServer();
         setInterval(this.loadCommentsFromServer,this.props.pullInterval);
    },
    render: function(){
        return (
            React.createElement("div", {className: "commentBox"}, 
                React.createElement("h1", null, "Comments"), 
                React.createElement(CommentList, {data: this.state.data}), 
                React.createElement(CommentForm, null)
            )
        )
    }
});

var CommentList = React.createClass({displayName: "CommentList",
    render: function(){
        var commentNodes = this.props.data.map(function(comment){
            return (
                React.createElement(Comment, {author: comment.author}, comment.text)
            );
        });
        return (
            React.createElement("div", {className: "commentList"}, 
                commentNodes
            )
        )
    }
});

var CommentForm = React.createClass({displayName: "CommentForm",
    render: function(){
        return (
            React.createElement("form", {className: "commentForm"}, 
                React.createElement("input", {type: "text", placeholder: "Your name"}), 
                React.createElement("input", {type: "text", placeholder: "Say something"}), 
                React.createElement("input", {type: "submit", value: "Post"})
            )
        );
    }
});

React.render(
    React.createElement(CommentBox, {url: "comments.json", pullInterval: 2000}),
    document.getElementById('content')
);