import React from "react";

import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class HomeOurTools extends React.Component {
    constructor() {
        super();
        this.state = {
            active_pdb: true,
            active_niche: false,
            active_la: false
        }
    }

    clearStates() {
        this.setState({
            active_pdb: false,
            active_niche: false,
            active_la: false
        });
    }

    render() {
        return(
            <div className="py-5">
                <Row className="text-center">
                    <Col sm={{span: 8, offset: 2}} lg={{span:4, offset: 4}} >
                        <h1>The tools we give you for <span className="font-italic"><b>free</b></span></h1>
                        <p className="text-muted">Capybara's toolkit is entirely free to use.</p>
                    </Col>
                </Row>
                <Row className="pt-4">
                    <Col sm={12} lg={{span: 8, offset: 2}}>
                        <Row>
                            <Col sm={12} md={4} className="my-2 py-3 home-product-container" onClick={() => {this.clearStates(); this.setState({active_pdb: true})}}>
                                <FontAwesomeIcon icon="database" color="#168E97" size="7x" className="home-product-icons "/>
                                <h4 className="text-center mt-2">product keyword db</h4>
                            </Col>
                            <Col sm={12} md={4} className="my-2 py-3 home-product-container" onClick={() => {this.clearStates(); this.setState({active_niche: true})}}>
                                <FontAwesomeIcon icon="map-signs" color="#8A5B35" size="7x" className="home-product-icons " />
                                <h4 className="text-center mt-2">niche explorer toolkit</h4>
                            </Col>
                            <Col sm={12} md={4} className="my-2 py-3 home-product-container" onClick={() => {this.clearStates(); this.setState({active_la: true})}}>
                                <FontAwesomeIcon icon="chart-line" color="#137F68" size="7x" className="home-product-icons" />
                                <h4 className="text-center mt-2">product listing analysis</h4>
                            </Col>
                        </Row>
                        <Row className="text-left mt-4">
                            <Col sm={{span: 10, offset: 1}} lg={{span: 8, offset: 2}} className={`home-product-description shadow ${this.state.active_pdb ? '' : 'd-none'}`}>
                                <p><b>Our <span style={{color: "#168E97"}}>product keyword database</span></b> is a collection of scraped 
                                products directly from Amazon. Use this toolkit to quickly analyze the potential of the keywords you may 
                                be interested in.</p>
                                <p>Use the <b>seasonality</b> toolkit to help you plan the search volume for your intended keyword.
                                Search volume data is provided via the Google Trends API. This data can help you approximate the search
                                populartiy for your intended keyword over the past 12 months.</p>
                                <p>The <b>related queries</b> toolkit helps you find other related keywords. By filtering the keywords 
                                using the Top or Rising selectors, you can view the keywords that may be closely related or popular relative
                                to your searched keyword.</p>
                                <p>Use our <b>database results</b> to explore products related to the keyword you searched. You can spy on your competitors,
                                analyze potential competitors, or find the next product to help grow your business. Our free database is populated with 
                                only a few thousand entries. If you don't see any related results, our database may be missing data.</p>
                            </Col>
                            <Col sm={{span: 10, offset: 1}} lg={{span: 8, offset: 2}} className={`home-product-description shadow ${this.state.active_niche ? '' : 'd-none'}`}>
                                <p><b>Our <span style={{color: "#8A5B35"}}>niche explorer toolkit</span></b> helps you explore potential niches
                                and categories. Instantly discover the products that dominate a given niche, and make sure that you can take over
                                that niche before you ever launch a product.</p>
                                <p>The <b>database results</b> returned from your given filters will help you discover and explore your niche. You can explore potential
                                competitors before ever having to compete with them. This can help you to make sure that your target niche 
                                is ready for a new product entry.</p>
                                <p>You can even use the toolkit to avoid potential pitfalls of launching into a new niche. Have a product idea? 
                                Check out our niche explorer to make sure that your product will launch successfully. You'll be able to easily take over
                                any niche when prepared properly.</p>
                            </Col>
                            <Col sm={{span: 10, offset: 1}} lg={{span: 8, offset: 2}} className={`home-product-description shadow ${this.state.active_la ? '' : 'd-none'}`}>
                                <p><b>Our <span style={{color: "#137F68"}}>product listing analysis</span></b> helps you to ensure that you are properly
                                optimizing every one of your listings. Instantly get the checks on your listing to make sure that you aren't missing out
                                on any potential improvements by using our listing analysis. </p>
                                <p>The <b>quick checks</b> shows you easy to implement wins for your listing optimization. Things such as title length,
                                product images, feature length, and description are all critical to your performance on Amazon. Quickly return the results
                                that'll help you implement easy wins to instantly improve your listing optimization.</p>
                                <p>Our <b>projected keyphrases</b> can help you understand how your listing appears to Amazon. The black box that is the Amazon
                                search engine can be difficult to figure out. Our projected keyphrases can help you predict and understand which keyphrases and keywords
                                in your listing will appear to Amazon. You can use this to either enter into new markets, or help your current listing perform in it's niche.</p>
                                <p>Use our <b>database results</b> to see how relatively similar products within your niche and keyword results perform. You can use this to understand
                                which competitors are ranking for similar keywords, and how those competitors are performing. </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default HomeOurTools;