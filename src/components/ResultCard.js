import React from 'react'

class ResultCard extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                spans: 0,
                index: null,
                image: null
            }

            this.imageRef = React.createRef();
        }

        componentDidMount() {
            this.imageRef.current.addEventListener('load', 
            this.setSpans);
        }

        setSpans=()=> {
            const height = this.imageRef.current.clientHeight;

            const spans = Math.ceil(height / 10 );

            this.setState({
                spans : spans
            })

        }

        onTitleClick = () => {
            //console.log('hello')
            this.props.onImgClick(this.props.imageId)
        }

        onButtonClick = (event) => {

            // this.setState({
            //     image: this.props.image
            // })
            // this.props.addToFavorites(this.state.image)
            this.props.addToFavorites(this.props.image)

        //     console.log('the button has been clicked')
        //     console.log(this.props)
        }


    render() {
        const active = this.props.isActive === 'Active' ? `active` : '';
        return(
           
            <div className="ui accordion" onClick={this.onTitleClick}>
                <div className={`${active} title`} style={{ gridRowEnd: `span ${this.state.spans}`}}>
                    <img 
                    ref={this.imageRef}
                    alt={this.props.image.description}
                    src={this.props.image.urls.regular}
                    />
                </div>
                    
                <div className={`${active} content`}>
                    <div className="ui list">
                        <div className="item"><b>Description:</b> {this.props.image.description}</div>
                        {/* <div className="item"><b>Url:</b> {this.props.image.urls.regular}</div> */}
                        <div className="item"><b>Photographer:</b> {this.props.image.user.name} </div>
                        <div className="item"><b>Instagram handle:</b> {this.props.image.user.instagram_username}</div>
                        <div className="item"><button onClick={this.onButtonClick}> Add to favorites?</button></div>
                    </div>
                    
                </div>

            </div>

        )
    }
    
}

export default ResultCard;