import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from './post';

 class ResultsPosts extends Component {
     
    renderPosts() {
        const post = this.props.posts.map((post, index) => {
            return <Post type="result" key={index} {...post} />
        })
        return post
    }


    render() {
        return (
            <div className='="results-posts'>
                <div className='results-posts__wrapper'>
                    <ul className='results-posts__posts'>
                        {this.renderPosts()}
                    </ul>
                </div>


            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.resultsPosts
    }
}

export default connect(mapStateToProps)(ResultsPosts);