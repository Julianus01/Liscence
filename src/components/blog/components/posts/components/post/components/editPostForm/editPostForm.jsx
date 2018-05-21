import React, { Component } from 'react';
import './editPostForm.css';
import NO_IMAGE from '../../../../../../../../images/no_image.png';

class EditPostForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ...props
        }

    }

    render() {
        return (
            <div className="editPostForm-wrapper">

                <div className="editPostForm-header">
                    <h2 className='header'>Edit Post</h2>
                </div>

                <div className="editPostForm-body">
                    <div className="form-group">
                        <label>Title:</label>
                        <input
                            type="text"
                            className='form-control'
                            placeholder="Enter new title here"
                            onChange={this.handleTitleInput}
                            value={this.state.title} />
                    </div>

                    <div className="form-group">
                        <img src={this.state.imgSrc ? (this.state.imgSrc) : (NO_IMAGE)} alt="" />
                    </div>

                    <div className="form-group">
                        <label>Content:</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            value={this.state.text}
                            onChange={this.handleTextInput}>
                        </textarea>
                    </div>

                    <div className="form-group">
                        <button className='btn btn-success float-right'
                            onClick={this.updatePost}>Save</button>
                    </div>
                </div>

            </div>
        )
    }

    handleTitleInput = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleTextInput = event => {
        this.setState({
            text: event.target.value
        })
    }

    updatePost = () => {
        let post = {
            id: this.state.id,
            title: this.state.title,
            text: this.state.text,
            imgSrc: this.state.imgSrc
        }

        this.props.updatePost(post);

        this.setState({
            title: '',
            text: '',
            imgSrc: ''
        })
    }

}

export default EditPostForm;